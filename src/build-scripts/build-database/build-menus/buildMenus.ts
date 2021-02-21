import fs from 'fs';
import path from 'path';
import yaml from 'yaml';
import slugify from '@sindresorhus/slugify';

const fsPromises = fs.promises;

/*

- should accept the name of the app (root) with the menus

- parseTOC function?
  - directory_pathname (optional)
    - if so, then items should be in the items field

  - readHref
    - file
    - toc.yml
    - url


*/

// type MenuMetadataFile = {
//   type: 'file';
//   name: string;
//   path: string;
//   url: string;
//   fileType: string; // 'markdown' | 'yaml'
// };

// type MenuMetadataLink = {
//   name: string;
//   url: string;
// };

// type MenuMetadataDirectory = {
//   name: string;
//   path: string;
//   children: MenuMetadataFile[];
// };

type TOC = TOCMetadata & { items: TOCItem[] };

type TOCMetadata = {
  fullPath: string;
  directoryPath: string;
  url: string; // can be set explicitly or derived from path
};

type TOCItemType = 'article' | 'video'; // a TOC item can be either a text article or a video

type TOCItem = {
  name: string;
  type: TOCItemType;
  href?: string; // path to file or a url
  url?: string; // url to use if different from the file path
  items?: TOCItem[];
};

type CreateMenuParams = {
  tocPath: string; // path to top-level toc.yml file
  url: string; // pathname of the menu's namespace, e.g. "/about", etc.
};


type ParsedMenuItem = {
  name: string;
  type: TOCItemType;
  path?: string;
  url?: string;
  items?: ParsedMenuItem[];
};

export const createMenu = async (params: CreateMenuParams) => {
  const { tocPath, url } = params;
  const toc = await readTOC(tocPath, url); // FIXME: error handling?
  const parsedToc = parseTOC(toc);
  return parsedToc;
};

const readTOC = async (filePath: string, url: string): Promise<TOC> => {
  const fileContent = await fsPromises.readFile(filePath, 'utf-8');
  const directoryPath = path.dirname(filePath);
  const toc = yaml.parse(fileContent) as TOC | TOCItem[];
  if (Array.isArray(toc)) {
    return {
      fullPath: filePath,
      directoryPath,
      url,
      items: toc
    }
  } else {
    return {
      ...toc,
      fullPath: filePath,
      directoryPath
    };
  }
};

const parseTOC = async (toc: TOC): Promise<ParsedMenuItem[]> /* parsedMenuTree - Node or Nodes */ => {
  const parsedMenuItems = [] as ParsedMenuItem[];

  for (const tocItem of toc.items) {
    const parsedMenuItem = await parseTOCItem(tocItem, toc);
    parsedMenuItems.push(parsedMenuItem);
  }

  return parsedMenuItems;
};

const parseTOCItem = async (tocItem: TOCItem, toc: TOC): Promise<ParsedMenuItem> => {
  const menuItem: ParsedMenuItem = {
    name: tocItem.name,
    type: tocItem.type || 'article'
  };
  const tocItemPath = tocItem.href;

  if (tocItemPath && /https?:\/\//.test(tocItemPath)) {
    menuItem.url = tocItem.href;
  } else if (tocItemPath && await isTOCFile(path.join(toc.directoryPath, tocItemPath))) {
    // TODO: does this menu parent have a page associated with it?
    const newTocUrl = buildDirectoryUrlFromFileSystem(tocItemPath, toc.url);
    const newToc = await readTOC(path.join(toc.directoryPath, tocItemPath), newTocUrl);
    const parsedNewToc = await parseTOC(newToc);
    menuItem.items = parsedNewToc;
  } else if (tocItemPath && await isContentFile(path.join(toc.directoryPath, tocItemPath))) {
    menuItem.path = buildFullPathToFile(tocItemPath, toc);
    menuItem.url = tocItem.url || buildPageUrlFromFileSystem(tocItemPath, toc.url);
  }

  return menuItem;
};


/*
cases to support?

1)
- href: file.md

2) ???
- href: ../file.md

3) ???
- href: folder/file.md

*/
const buildUrl = (toc: TOC, filePath: string) => {
  const { url: tocDirectoryUrl } = toc;
  const filePathSegments = filePath.split('/');
  const fileNameWithExtension = filePathSegments.pop();
  const fileName = path.basename(fileNameWithExtension, path.extname(fileNameWithExtension));
  const slugifiedFileName = slugify(fileName);
  filePathSegments.push(slugifiedFileName);
  return `${tocDirectoryUrl}/${filePathSegments.join('/')}`;

  // path.basename('howto/index.md', path.extname('howto/index.md'))
  /*
    currentTOCPath
  */
};

const isTOCFile = async (filePath: string) => {
  try {
    // check that the file actually exists
    await fsPromises.access(filePath, fs.constants.F_OK);
    const fileName = path.basename(filePath);
    return fileName.toLocaleLowerCase() === 'toc.yml';
  } catch {
    return false;
  }
};

const isContentFile = async (filePath: string) => {
  const contentFileExtensions = ['.md', '.yml'];
  try {
    // check that the file actually exists
    await fsPromises.access(filePath, fs.constants.F_OK);
    const fileExtension = path.extname(filePath);
    return contentFileExtensions.includes(fileExtension);
  } catch {
    return false;
  }
};

const buildFullPathToFile = (filePath: string, toc: TOC) => {
  return path.join(toc.directoryPath, filePath);
};

const buildDirectoryUrlFromFileSystem = (pathToNewToc: string, urlOfParentToc: string) => {
  const newTocDirectory = path.dirname(pathToNewToc);
  return path.join(urlOfParentToc, newTocDirectory);
};

const buildPageUrlFromFileSystem = (pathToFile: string, parentDirectoryUrl: string) => {
  const fileExtension = path.extname(pathToFile);
  const fileDirectory = path.dirname(pathToFile);
  const fileName = slugify(path.basename(pathToFile, fileExtension));
  return path.join(parentDirectoryUrl, fileDirectory, fileName);
};
