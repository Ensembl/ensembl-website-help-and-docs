/*
- get a mixed list of articles and videos
- iterate through the list and look at the type
  - if article, save article
  - if video, save video
- iterate through the list again and look at relations
  - generate full path from relation
  - generate slug from full path
  - search for article/video with the expected slug
  - establish a relation



Should there be a Page object as well?

Page has a url...


*/


import path from 'path';
import yaml from 'yaml';

import {
  fromDocumentsRoot,
  stripFileExtensions,
  buildPathToRelatedItem
} from '../filePathHelpers';

import { TextArticle, VideoArticle, RelatedArticle } from '../../models';

import { ParsedArticle } from '../../types/ParsedArticle';
import { ParsedVideo } from '../../types/ParsedVideo';

type ParsedFile = ParsedArticle | ParsedVideo;

const addArticles = async (items: ParsedFile[]) => {
  for (const item of items) {
    if (!item.path) {
      console.log('item without path', item);
    }
    await saveItem(item);
  }
  for (const item of items) {
    await addRelationships(item);
  }
};

const saveItem = (item: ParsedFile) => {
  if (item.type === 'article') {
    return saveArticle(item);
  } else if (item.type === 'video') {
    return saveVideo(item);
  }
};

const saveArticle = async (article: ParsedArticle) => {
  try {
    const relatedArticles = article.related_articles
      ?.map(({ href }) => ({ path: buildPathToRelatedFile(article.path, href) }));
    const articleData = {
      relatedArticles
    };
    const newArticle = TextArticle.create({
      title: article.title || 'empty title',
      description: article.description || 'empty description',
      slug: article.slug,
      url: article.url,
      filePath: fromDocumentsRoot(article.path),
      data: articleData,
      body: article.html
    });
    await TextArticle.save(newArticle);
  
    return newArticle;
  } catch (error) {
    console.log('failed to save article', article);
    // throw error;
  }
};

const saveVideo = async (video: ParsedVideo) => {
  try {
    const videoData = {
      youtube_id: video.youtube_id
    };
    const newVideo = VideoArticle.create({
      title: video.title || 'empty title',
      description: video.description || 'empty description',
      slug: video.slug,
      url: video.url,
      filePath: fromDocumentsRoot(video.path),
      data: videoData
    });
    await VideoArticle.save(newVideo);
  
    return newVideo;
  } catch (error) {
    console.log('failed to save video', video);
    // throw error;
  }
};


const addRelationships = async (item: ParsedFile) => {
  // TODO:
  // - videos can have related content too
  // - both videos and articles should be collated together
  let savedArticle;
  if (item.type === 'article') {
    savedArticle = await TextArticle.findOne({ where: { slug: item.slug } });
    if (savedArticle.data.relatedArticles) {
      for (const { path: pathToArticle } of savedArticle.data.relatedArticles) {
        const referencedArticle = await TextArticle.findOne({ where: { filePath: pathToArticle } })
        const relatedTextArticle = await TextArticle.findOne({ where: { filePath: pathToArticle } });
        if (!relatedTextArticle) {
          console.log('Incorrect path for related article provided:', pathToArticle);
          continue;
        }
        let relatedArticle = await RelatedArticle.findOne({ where: { slug: savedArticle.slug } })
        relatedArticle = RelatedArticle.create({
          title: savedArticle.title,
          type: savedArticle.type,
          slug: savedArticle.slug,
          url: savedArticle.url
        });
        await relatedArticle.save();
        savedArticle.relatedArticles = savedArticle.relatedArticles || [];
        savedArticle.relatedArticles.push(relatedArticle);
      }
      await savedArticle.save();
    }
  }
};

const buildPathToRelatedFile = (sourceFilePath: string, relatedFilePath: string) => {
  const { dir: sourceFileDirectory } = path.parse(sourceFilePath);
  return fromDocumentsRoot(path.join(sourceFileDirectory, relatedFilePath));
};


// const addArticles1 = async (articles: ParsedArticle[]) => {
//   // first, save all articles to db
//   const savedResults: Array<{ parsedArticle: ParsedArticle, articleInstance: Article }> = [];

//   for (const article of articles) {
//     const articleModelInstance = await createArticle(article);
//     savedResults.push({
//       parsedArticle: article,
//       articleInstance: articleModelInstance
//     });
//   }

//   // then iterate over the saved articles to establish relationships between them
//   for (let { parsedArticle, articleInstance } of savedResults) {
//     const { related_articles } = parsedArticle;
//     if (!related_articles) {
//       continue;
//     }

//     for (let relation of related_articles) {
//       let searchKey: string, searchValue: string;
//       if ('slug' in relation) {
//         searchKey = 'slug';
//         searchValue = relation.slug;
//       } else {
//         searchKey = 'path';
//         searchValue = stripFileExtensions(buildPathToRelatedItem({
//           sourceFilePath: parsedArticle.filePath,
//           relation
//         }));
//       }
//       const relatedArticle = await Article.findOne({ where: { [searchKey]: searchValue } });
//       articleInstance.addRelatedArticle(relatedArticle);
//     }
//   }
// };

const createArticle = async (article: ParsedArticle) => {
  // const newArticle = await Article.create({
  //   title: article.title || 'empty title',
  //   description: article.description || 'empty description',
  //   slug: article.slug,
  //   url: article.url,
  //   // body: article.html
  // });

  // if (article.related_videos) {
  //   const videoPaths = article.related_videos.map(relation => buildPathToRelatedItem({
  //     sourceFilePath: article.filePath,
  //     relation,
  //     returnAbsolutePath: true
  //   }));

  //   for (const videoPath of videoPaths) {
  //     const fromDocsPath = stripFileExtensions(fromDocumentsRoot(videoPath));
  //     const savedVideo = await Video.findOne({ where: { file_path: fromDocsPath } });
  //     if (savedVideo) {
  //       continue;
  //     }
  //     const fileContent = fs.readFileSync(videoPath, 'utf-8');
  //     const parsedVideo = yaml.parse(fileContent);

  //     const video = await Video.create({
  //       title: parsedVideo.title,
  //       description: parsedVideo.description,
  //       youtube_id: parsedVideo.youtube_id,
  //       file_path: fromDocsPath
  //     });

  //     await newArticle.addVideo(video);
  //   }
  // }

  // const collectionName = article.path.split('/').shift();
  // const collection = await getCollection(collectionName);
  // collection.addArticle(newArticle);

  // await Article.sync();

  // return newArticle;
};


// const getCollection = async (name: string) => {
//   const savedCollection = await Collection.findOne({ where: { name } });
//   if (savedCollection) {
//     return savedCollection;
//   } else {
//     const collection = await Collection.create({ name });
//     return collection;
//   }
// };

export default addArticles;
