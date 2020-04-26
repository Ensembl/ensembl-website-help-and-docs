# Introduction

This is a quick-and-dirty prototype of a help and documentation system for Ensembl, in which the content is stored in plain-text files.

When evaluating it, please keep in mind that it is a very early prototype and that almost anything about it can be changed to make it more usable.

_**Note:** This repository currently contains both the documentation files and the code that transforms them into the format usable by Ensembl client. If this prototype is accepted as the preferred way of maintaining documentation, we will likely split the repository into two, one containing only documentation files, and the other containing the code that consumes and transforms them._

# How to author content
The prototype can handle two types of content: articles and videos. All content should be stored as markdown files in the `docs/article` or `docs/video` folder.

# How to integrate images into content
Save image files to the `images` folder, and then add links to them in the body of appropriate markdown files, starting the path from the root of the project.

Example: `![alt text](/images/path/to/file)` (I believe the alt text block can be empty: `![](/images/path/to/file)`).

_(See `docs/article/select-a-species.md` for the reference)_.

# How to integrate videos into content

## Option 1: Add a markdown file with video data
- Add a markdown file in the `docs/video` folder.
- Format it similarly to other files in this folder.
- Add the `related-video` metadata field in the frontmatter of appropriate markdown files (see `docs/article/select-a-species.md` as example).

**Important** Please note that the video appearing on Ensembl website will be embedded in an iframe. Youtube is very particular about its links — urls for videos embedded in iframes should end in `/embed/:id` rather than in `/watch?v=:id`. To get the correct url from youtube, click on `Share`, then `Embed`. What you want, is just the content of the `src` attribute of the code for the iframe.

**Note:** We are currently supporting only one video per article using this approach. This is a limitation that we will be able to overcome if needed.

## Option 2: Simply add iframe html code in the markdown file
This is an example of using an escape hatch when authoring markdown files. If you do not need to associate any metadata with a video, but simply want to add it inside your article, you can do so by adding raw `iframe` html element inside the body of your article. For example:

```
Here is my first paragraph, right before the video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/C2g37X_uMok" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Here is my second paragraph, right after the video.
```

For more details about this approach, see the **Escape hatch** section below.

# Escape hatch: writing HTML inside markdown
Markdown is a great writing tool, but it may be somewhat missing in the formatting department. If you really need to add some extra html markup or CSS styling to specific parts of your articles, you can do so by switching to raw html.

Here is an example of mixing Markdown with HTML in Markdown files:

```
<style>
.scary > blockquote {
  background-color: rgba(237, 51, 21, 0.2);
  border-left-color: #ed3315;
}
</style>

<div class="scary">

>Caution:
>
>This page describes **experimental features that are [not yet available](/docs/concurrent-mode-adoption.html) in a stable release**. Don't rely on experimental builds of React in production apps. These features may change significantly and without a warning before they become a part of React.
>
>This documentation is aimed at early adopters and people who are curious. **If you're new to React, don't worry about these features** -- you don't need to learn them right now.

</div>

<iframe width="560" height="315" src="https://www.youtube.com/embed/C2g37X_uMok" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This page provides a theoretical overview of Concurrent Mode.
```

Notice how:
- the Caution block is written in Markdown and formatted as a blockquote (using the leading angle bracket)
- it is placed inside a `div` that has a CSS class (notice an empty line between the `div` and the Caution block — this is required if you want to continue writing Markdown inside html)
- there is a `style` block defining CSS rules for the used class
- there is an iframe code linking to a youtube video

# How to publish content
Push committed changes to this repository. A build script will run automatically, and a bot will post a comment to your commit, notifying you whether your changes have been deployed successfully. In case of a successful deployment, it will also provide links to where the code has been deployed.

**Note** the links will be to the api serving you content in the json format. You can use them to make sure the changes are there (see below); but you will probably be more interested in seeing the change on Ensembl website.

# How to verify the result of your changes

## On a feature branch of the new Ensembl website

_Prerequisite: you must be on the EBI VPN_

- make changes in the file `docs/article/select-a-species.md`, push the changes to the master branch of this repo, and wait until the bot posts a comment that the build has been successful (takes about a minute)
- visit http://hx-rke-wp-webadmin-14-worker-1.caas.ebi.ac.uk:30178/app/species-selector
- click on the help and docs icon in the top right corner of the screen
- confirm that your changes are visible in the popup

## Inspecting json response from the api

At the moment, you can only see changes in the popup on the species selector page; that's not much fun. But you can examine json response from the api to confirm that your changes are there. In order to do that:

- make changes to any of the article files, push your changes to the master branch of this repo, and wait until the bot notifies you of successful build
- visit the page built according to the following pattern: `https://zeit-serverless-exercise.now.sh/api/article?file=<name_of_your_file>` (example: https://zeit-serverless-exercise.now.sh/api/article?file=ensembl-select)
- verify that you see the changes

# How to add new articles

Ah, here’s the rub: in order for the new help content to appear on the new Ensembl web site, you'll have to ask the web team to add an identifier, which would be the name of your new documentation file, to the specific element on the specific page that you are documenting. But that's unavoidable in the case of contextual help. It will be different for full documentation pages, which will be generated automatically without any involvement of the web team.

However, you can easily add a new article, push it to master, wait for the bot’s confirmation, and then verify that your content is accessible over the json api at `https://zeit-serverless-exercise.now.sh/api/article?file=<name_of_your_file>`.

# Just for fun

The api can do search. To check whether the search is specific enough or whether it returns false positives, you can test it via the json api by visiting the url constructed according to the following pattern: `https://zeit-serverless-exercise.now.sh/api/search?query=<word_to_search>`, for example: https://zeit-serverless-exercise.now.sh/api/search?query=ensembl

# Future development

## How will this solution manage content when this gets into hundreds of elements?

Please take a look at [Microsoft's repository for Azure docs](https://github.com/MicrosoftDocs/azure-docs) for inspiration. Specifically, explore their `articles` and `bread` folders. Notice how articles are grouped together by topic. Notice too that apart from the yaml frontmatter in markdown files themselves, each folder with related articles contains a top-level `TOC.yml` and `index.yml` file, which contain metadata linking the articles together. We could organize our code in a similar manner to ensure good scalability.

## How will this solution enable linking between content nodes

Each content node is a file. Links to other files will be added to article metadata, either in the frontmatter of markdown files themselves (see, for example, the `parent` or the `related-video` fields example markdown files in the `docs` folder), or in individual yaml files (see `TOC.yml` or `index.yml` files in the Microsoft Azure docs repo).
