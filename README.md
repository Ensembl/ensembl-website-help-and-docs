This is a quick-and-dirty prototype of a help and documentation system for Ensembl, in which the content is stored in plain-text files.

When evaluating it, please keep in mind that it is a prototype and that almost anything about it can be changed to make it more usable.

# How to author content
The prototype can handle two types of content: articles and videos. All content should be stored as markdown files in the `docs/article` or `docs/video` folder.

# How to integrate images into content
Save image files to the `images` folder and then link to them in the markdown file, starting the path from the root of the project.

Example: `![alt text](/images/path/to/file)` (I believe the alt text block can be empty: `![](/images/path/to/file)`).

_(See `docs/article/select-a-species.md` for the reference)_.

# How to integrate videos into content
- Add a markdown file in the `docs/video` folder.
- Format it similarly to other files in this folder.

**Important** Please note that the video appearing on Ensembl website will be embedded in an iframe. Youtube is very particular about its links — urls for videos embedded in iframes should end in `/embed/:id` rather than in `/watch?v=:id`. To get the correct url from youtube, click on `Share`, then `Embed`. What you want, is just the content of the `src` attribute of the code for the iframe.

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

## How to add new articles

Ah, here’s the rub: in order for the new help content to appear on the new Ensembl web site, you'll have to ask the web team to add an identifier, which would be the name of your new documentation file, to the specific element on the specific page that you are documenting. But that's unavoidable in the case of contextual help. It will be different for full documentation pages, which will be generated automatically without any involvement of the web team.

However, you can easily add a new article, push it to master, wait for the bot’s confirmation, and then verify that your content is accessible over the json api at `https://zeit-serverless-exercise.now.sh/api/article?file=<name_of_your_file>`.

# For the fun

The api can do search. To check whether the search is specific enough or whether it returns false positives, you can test it via the json api by visiting the url constructed according to the following pattern: `https://zeit-serverless-exercise.now.sh/api/search?query=<word_to_search>`, for example: https://zeit-serverless-exercise.now.sh/api/search?query=ensembl

# For the future

## How will this solution manage content when this gets into hundreds of elements?

Please take a look at [Microsoft's repository of Azure docs](https://github.com/MicrosoftDocs/azure-docs) for inspiration (specifically, in the `articles` folder and the `bread` folder). Notice how articles are grouped together by topic. Notice too that apart from the yaml frontmatter in markdown files themselves, each folder with articles contains a top-level `TOC.yml` and `index.yml` file which contain metadata linking the articles together. We could organize our code in a similar manner to ensure good scalability.

## How will this solution enable linking between content nodes

Each content node is a file. Links to other files will be added to article metadata, either in the frontmatter of markdown files themselves (see, for example, the `parent` or the `related-video` fields example markdown files in the `docs` folder), or in individual yaml files (see `TOC.yml` or `index.yml` files in the Microsoft Azure docs repo).
