# How to add images to documentation

- [How to create images for Ensembl](#how-to-create-images-for-ensembl)
- [How to add images to documentation](#how-to-add-images-to-documentation)


## How to create images for Ensembl

**When adding images, please remember:**
- the image should not be huge
- the image should be compressed; pass the image through [https://tinypng.com](https://tinypng.com) to compress it
- a good rule of thumb is, if an image is over 100kB, it's probably too much


### Screenshots

#### Whole page

To take images of a whole page, scale your browser to 1200 px wide (you may need to turn on developer tools to see the size of the page) on your laptop retina display screen and take a screenshot (due to the retina display, this image will actually be 2400px).

Open in [GIMP](https://www.gimp.org/).

![](media/openingimp.png)

Drop the arrow.png image into the screenshot wherever you want to add a label – flip/rotate to the orientation you need it at.

![](media/addarrow.png)

Add text labels in Caveat bold 80px #D90000 (rgb 217,0,0).

![](media/addlabel.png)

The tools for Gimp are at the top left, you will mainly need to Move and text tools.

![](media/tools.png)

Gimp works with layers, which are listed on the right.

![](media/layers.png)

Save the Gimp file to the [Outreach shared drive image folder](https://drive.google.com/drive/folders/1-6m7xzXevV45AiQjeZLLuOQRlAzFgJrF?usp=sharing) so that it can be edited in future. Export the image as png.

![](media/export.png)

Drop the file into [Tinypng](https://tinypng.com/) to compress. A good rule of thumb is, if an image is over 100kB, it's probably too much

Download the image again and add to Git.

![](media/tinypng.png)

#### Zoomed-in sections

Any image that is less than 980 px wide will not be scaled to fit into the pages. To make the text appear that the same size as in the full page images, use size 33 font for labels. For anything in between 980 and 2400 wide, the ratio of font size to image width should be 1/30.


## How to add images to documentation

Images should be stored in a subfolder alongside the Markdown file. For consistency, we use the name `media` for image folders. If one does not exist in the folder you want to put your Markdown file in, go ahead and create it.

### Linking an image to the document

There are two ways for adding an image to a Markdown document.

The first option is to use a special Markdown syntax for images: exclamation mark followed by a pair of square brackets with optional alt text (short image desctiption) inside, followed by a pair of parentheses with a link to the image. This is convenient, but does not allow fine-grained control of the image.

Examples:
- with the alt text: `![Brief description of the image](media/my-image.jpg)`
- without the alt text: `![](media/my-image.jpg)`

Note that although the alt text for an image is optional, the best practice is always to include it. For detailed information about the purpose of image alt text, see [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt).

The second option is to write the HTML image tag directly, which enables more precise control over the image. The main reason for picking this option would be to specify the image width, thus making sure that a high-density image has a desired size when displayed on the screen.

Examples:
- an html image tag with both the width and alt text set up: `<img src="media/my-image.jpg" width="320" alt="Brief description of the image">`
- an html image tag with only the width specified: `<img src="media/my-image.jpg" width="320">`
- an html image tag with only the image source (but in this case, you might as well just use the Markdown shorthand above): `<img src="media/my-image.jpg" width="320">`

Note that the `width` attribute of an image tag is a number without units (i.e. `width="320"`, not `width="320px"`). Note also that, as with the Markdown syntax above, providing an alt text for an image is always a good practice. For more information about the HTML `img` tag, see [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img).