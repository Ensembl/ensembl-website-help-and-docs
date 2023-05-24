# How to create content for the Help and About apps

To make this documentation easier to use, it has been divided into several pages

- An overview of the Help and About apps (this page)

- [A guide to Markdown](markdown.md)

    - [How to add metadata to an article with YAML](metadata.md)

- [How to create and add images](images.md)

- [How to create and add videos](videos.md)

- [How to add navigation](toc.md) with toc.yml files

- [How to work with GitHub and preview your pages](github.md)

## An overview of the Help and About apps

This repository serves content for two separate apps on the new Ensembl website: Ensembl Help, and About Ensembl. Both of these apps import Markdown files to create HTML pages in the Ensembl client interface - they use the same React code, and therefore the content is structured in a very similar way.

However the pages are not served as-is from the directories in this repository; instead, a build process compiles the Markdown into HTML, adds links to related content and creates menus for navigation. When it does this, it checks that the pages being linked to actually exist, and if there are any problems the build is aborted and the live site is not updated. This reduces the risk of errors on the public website. [Find out more about this process](github.md)...

## Design principles

### Index pages

One of the decisions we made when working out the structure of these apps is that we would not have index pages (equivalent to index.html on the current site), as these so often end up as a boring list of links to the pages in that folder. Instead we use Table-of-Contents files that allow us to include these lists of links in the navigation, without the user having to go to a separate page just to find the next link in the hierarchy. See the [toc.yml documentation](toc.md) for more information on how to use these files.

### Page layout

For readability, the body of the page has a fixed width that is narrow enough for the reader's eye to scan quickly and easily. There may thus be a lot of white space between the body text and the righthand menu of related articles.

However this rule does not apply to all images, some of which may be wider than the text if that makes them more readable, e.g. a large screenshot.

We are in the process of finalising the types of images we use and how they should be sized - please check the [images guide](images.md) for the latest information.

## How to add content

Before you create content, **please ensure you are familiar with the SOP** described in the [Github and integration guide](github.md) - it will save you a lot of time and the web team a lot of pain :)

In particular, **please make sure that you add the page content and the corresponding entry in toc.yml in the same PR**, otherwise the deployment pipeline may fail and/or you will not be able to view the page because there is no menu entry for it.

### Naming conventions

Article titles should be in sentence case, e.g. "Find out about a gene" not "Find Out About a Gene". However proper nouns (e.g. Ensembl), acronyms (e.g. ncRNA), and so on should follow their normal capitalisation. See the appropriate [Design Decision Record](https://www.ebi.ac.uk/seqdb/confluence/display/ENSWEB/DDRs+-+Design+decision+records#DDRsDesigndecisionrecords-Global) on Confluence for full details.

Folder and file names should be all lowercase, separated by hyphens (NOT underscores). Text files should of course use the extension .md so that they can be identified as Markdown.

e.g. how-to-use-the-browser.md NOT How_to_use_the_Browser.md

### Formatting

Documentation for the Ensembl web site is stored in plain-text files in the following file formats:

- markdown (.md) — for freestyle prose
- yaml (.yml) — for structured data

More information about the specific formatting used by Ensembl can be found in the [Markdown](markdown.md), [YAML metadata](metadata.md), [image](images.md) and [video](videos.md) guides.

### Where to save your files

**Rule 1:** All documentation files go in the `docs` folder of this repository.

**Rule 2:** Within the `docs` folder, the first directory level is for the different apps: 
- `ensembl-help`
- `about-ensembl`

**Rule 3:** Inside each "app" folder, create directories so as to follow the proposed hierarchy of sections ("levels") for the project. See Andrea's [2020 UX Content Stucture spreadsheet](https://docs.google.com/spreadsheets/d/11zshLpCUKAwd8P0Lmv3zzxJ_28f9oLg_atlLIetvq6E/edit#gid=0) and [interactive prototype](https://xd.adobe.com/view/d64fc883-dc95-4d08-63a3-483f9c772ec1-a07e/screen/37ccfc31-d3c9-423a-9493-9d7daf3db117?fullscreen) for reference.


## Prior art
The structure of this documentation project is inspired by [Microsoft's repository for Azure docs](https://github.com/MicrosoftDocs/azure-docs), which provides a living example that storing documentation in markdown and yaml files, together with the folder hierarchy that mirrors the hierarchy of the documentation site, is powerful enough to serve even large-scale documentation projects.

