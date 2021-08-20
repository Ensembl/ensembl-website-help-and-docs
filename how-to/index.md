# How to create documents for the Help and About apps

To make this documentation easier to use, it has been divided into several pages

- An overview of the Help and About apps (this page)

- [A guide to Markdown](markdown.md), with Ensembl-specific formatting

- [How to add images](media.md)  and other media to the repository

- [How to work with GitHub](github.md)  and the Ensembl continuous integration system

## An overview of the Help and About apps

This repository serves content for two separate apps on the new Ensembl website: Ensembl Help, and About Ensembl. Both of these apps import Markdown files to create HTML pages in the Ensembl client interface - they use the same React code, and therefore the content is structured in a very similar way.

However the pages are not served as-is from the directories in this repository; instead, a build process compiles the Markdown into HTML, adds links to related content and creates menus for navigation. When it does this, it checks that the pages being linked to actually exist, and if there are any problems the build is aborted and the live site is not updated. This reduces the risk of errors on the public website. [Find out more about this process](github.md)...

## How to add content

Before you create content, please ensure you are familiar with the SOP described in the [Github and integratiion guide](github.md) - it will save you a lot of time and the web team a lot of pain :)

### Naming conventions

Folder and file names should be all lowercase, separated by hyphens (NOT underscores). Text files should of course use the extension .md so that they can be identified as Markdown.

e.g. how-to-use-the-browser.md NOT How_to_use_the_Browser.md

### Formatting

Documentation for the Ensembl web site is stored in plain-text files in the following file formats:

- markdown (.md) — for freestyle prose
- yaml (.yml) — for structured data

More information about the specific formatting used by Ensembl can be found in the [Markdown guide](markdown.md) and [Image guide](media.md).

### Where to save your files

**Rule 1:** All documentation files go in the `docs` folder of this repository.

**Rule 2:** Within the `docs` folder, the first directory level is for the different apps: 
- `ensembl-help`
- `about-ensembl`

**Rule 3:** Inside each "app" folder, create directories so as to follow the proposed hierarchy of sections ("levels") for the project. See Andrea's [2020 UX Content Stucture spreadsheet](https://docs.google.com/spreadsheets/d/11zshLpCUKAwd8P0Lmv3zzxJ_28f9oLg_atlLIetvq6E/edit#gid=0) and [interactive prototype](https://xd.adobe.com/view/d64fc883-dc95-4d08-63a3-483f9c772ec1-a07e/screen/37ccfc31-d3c9-423a-9493-9d7daf3db117?fullscreen) for reference.


## Prior art
The structure of this documentation project is inspired by [Microsoft's repository for Azure docs](https://github.com/MicrosoftDocs/azure-docs), which provides a living example that storing documentation in markdown and yaml files, together with the folder hierarchy that mirrors the hierarchy of the documentation site, is powerful enough to serve even large-scale documentation projects.

