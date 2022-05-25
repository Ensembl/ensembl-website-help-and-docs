# Adding navigation with a Table of Contents

One of the ways to create navigation for text-based web content is using menus that have been created entirely automatically based on the folder structure. However that makes it difficult to order the articles in a way that makes them easy for the user to navigate - which is especially important for help.

We therefore decided that the order of articles and folders within the menu will be defined using table-of-contents YAML files. This is a little more high-maintenance, but makes our site more usable.

As a result, when you create a new article, you also need to add it to the `toc.yml` file that should exist in the same folder as the document itself - and if you create a new folder for Markdown documents (NOT for images or videos), you should create a `toc.yml` file in it as well.

## How to write ToC entries

Types of menu entries:

- an article
- a video
- a link to an external resource
- a subdirectory in a mega-menu


## Link to article

The simplest scenario is a list of links to each of the documents in a directory

```yml
- name: Using apps
  href: using-apps.md
- name: Choosing a species to work with
  href: species.md
```

Optionally you may specify a custom URL for an entry, though this is generally only used for "special" pages such as the landing page for the About app.

```yml
- name: About us
  href: about-us.md
  url: /about
```

## Link to video

These are configured much the same way as articles, but specify a document type of "video". N.B. this is only needed for standalone videos (which we don't have at the time of writing), not ones embedded in a help page.

```yml
- name: 2023 Webinar Series
  href: video/webinar-2023.md
  type: video
```

These may have an optional custom URL, same as a text article.


## Link to external resource

In a very few instances we may want to link out to another site, e.g.

```yml
- name: Training
  href: https://training.ensembl.org
```

Hopefully this is fairly self-explanatory!

## Mega-menu subdirectory

The "links" in a mega-menu are not always pages you can actually visit - some are simply interface elements which open submenus. For this type of "link", just list the ToC file.

```yml
- name: Using Ensembl 
  href: using-ensembl/toc.yml
```






