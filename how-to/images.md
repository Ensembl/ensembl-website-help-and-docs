# How to add images to documentation

For most pages, images should be stored in a subfolder alongside the Markdown file. The exception is generic images such as app icons and the Ensembl logo, which can be found in the top-level `img` folder.

For consistency, we use the name `media` for image folders. If one does not exist in the folder you want to put your Markdown file in, go ahead and create it.

Example: `![this is alt text that appears if image doesn't show up](media/my-image.jpg)`. (The alt text block can also be empty: `![](media/my-image.jpg)`).

**When adding images, please remember:**
- the image should not be huge
- the image should be compressed; pass the image through [https://tinypng.com](https://tinypng.com) to compress it
- a good rule of thumb is, if an image is over 100kB, it's probably too much

