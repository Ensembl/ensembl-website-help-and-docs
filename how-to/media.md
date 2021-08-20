# Images and other media

## How to add images to documentation

For most pages, images should be stored in a subfolder alongside the Markdown file. The exception is generic images such as app icons and the Ensembl logo, which can be found in the top-level `img` folder.

For consistency, we use the name `media` for image folders. If one does not exist in the folder you want to put your Markdown file in, go ahead and create it.

Example: `![this is alt text that appears if image doesn't show up](media/my-image.jpg)`. (The alt text block can also be empty: `![](media/my-image.jpg)`).

**When adding images, please remember:**
- the image should not be huge
- the image should be compressed; pass the image through [https://tinypng.com](https://tinypng.com) to compress it
- a good rule of thumb is, if an image is over 100kB, it's probably too much

## How to add videos to documentation

### Option 1: Add a link to the file with video data
- Add a yaml file in a folder that makes the most sense (e.g. `media` folder or `videos` folder in the same folder as your article)
- Make sure the video yaml file has the following fields:
  - `title` — title of the video
  - `description` — description of the video
  - `youtube_id` — video id copied from a youtube url (**note:** only the id, not the full url)
- Add the `related_videos` field to the frontmatter of your documentation file. The `related_videos` field should contain a yaml list with a path to your video. For instructions on how to write such a path, see [this section](#paths-to-related-files).

Using this option will allow us to extract the video and to display it side by side with the body of the article, in a way shown in [this design](https://xd.adobe.com/view/d64fc883-dc95-4d08-63a3-483f9c772ec1-a07e/screen/690c281b-e3ad-4c8f-9566-2b6745ea0fee?fullscreen).

### Option 2: Embedding the video within an article
You can add a video inside the body of your article by copying its embed code from youtube and adding it in the body of your article, like so:

```
Here is my first paragraph, right before the video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/C2g37X_uMok" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Here is my second paragraph, right after the video.
```

