Here is the documentation for the documentation :)

# How to add content
Documentation for the Ensembl web site is stored in plain-text files in the following file formats:

- markdown (.md) — for freestyle prose
- yaml (.yml) — for structured data

## Where to save documentation files

**Rule 1:** All documentation files go in the `docs` folder of this repository.

**Rule 2:** Within the `docs` folder, the first directory level is for different documentation projects. There are currently plans for two such projects:
- `ensembl-help`
- `about-ensembl`

**Rule 3:** Inside the project folder, create directories so as to follow the proposed hierarchy of sections ("levels") for the project. See Andrea's [2020 UX Content Stucture spreadsheet](https://docs.google.com/spreadsheets/d/11zshLpCUKAwd8P0Lmv3zzxJ_28f9oLg_atlLIetvq6E/edit#gid=0) and [interactive prototype](https://xd.adobe.com/view/d64fc883-dc95-4d08-63a3-483f9c772ec1-a07e/screen/37ccfc31-d3c9-423a-9493-9d7daf3db117?fullscreen) for reference.

## Anatomy of a markdown file

A markdown file should begin with a metadata section, which is written in the yaml format (the so-called yaml frontmatter block). This metadata section contains information about the document itself, and about its relationships to other documents. Each markdown document MUST have the following metadata fields:

- `title` — the title of the document
- `description` — a short description of the document

The `title` field and the `description` field will subsequently be indexed by Google, and will appear in Google search results like so:

![image](https://user-images.githubusercontent.com/6834224/94205723-ca9f5300-febb-11ea-8550-387993a6a8c9.png)

Additionally, the metadata section may include the following optional fields:

- `slug` — short identifier of the document; if used, must be unique across all documents
- `related_articles` — a list of paths to markdown files of related articles
- `related_videos` — a list of paths to yaml files with data about related videos hosted on Youtube
- `status` — either `draft` or `published` (this field currently has no effect on the way the document is treated)

The metadata section is demarcated, above and below, with three hyphens. Below the metadata section, is the body of the document.

## How to add images to documentation

It is usually convenient to create a folder called `media` in the same directory as the article you are currently writing. Save an image into that folder, then add a link to that image in your article:

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
- Add the `related_videos` field to the frontmatter of your documentation file. The `related_videos` field should contain a yaml list with a path to your video.

Using this option will allow us to extract the video and to display it side by side with the body of the article, in a way shown in [this design](https://xd.adobe.com/view/d64fc883-dc95-4d08-63a3-483f9c772ec1-a07e/screen/690c281b-e3ad-4c8f-9566-2b6745ea0fee?fullscreen).

### Option 2: Embedding the video within an article
You can add a video inside the body of your article by copying its embed code from youtube and adding it in the body of your article, like so:

```
Here is my first paragraph, right before the video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/C2g37X_uMok" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Here is my second paragraph, right after the video.
```

# Prior art
The structure of this documentation project is inspired by [Microsoft's repository for Azure docs](https://github.com/MicrosoftDocs/azure-docs), which provides a living example that storing documentation in markdown and yaml files, together with the folder hierarchy that mirrors the hierarchy of the documentation site, is powerful enough to serve even large-scale documentation projects.
