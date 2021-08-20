# Adding navigation with a Table of Contents

One of the ways for users to find articles is using the so-called "mega-menu", a hierarchical dropdown menu system that mimics the document hierarchy of the site. In many content management systems, this type of menu is created entirely automatically, based on the folder structure, but that makes it difficult to order the articles in a way that makes them easy for the user to navigate - which is especially important for help.

We therefore decided that the order of articles and folders within the menu would be defined using table-of-contents files in the YAML format. This is a little more high-maintenance, but makes our site more usable.

As a result, when you create a new article, you also need to add it to the `toc.yml` file that should exist in the same folder as the document itself - and if you create a new folder for documents (NOT images), you should create a `toc.yml` file as well.

## An example TOC file

```yml
- name: Using apps
  href: using-apps.md
- name: Choose a species to work with
  href: species.md
- name: Find out about a gene
  href: gene-info.md
- name: Browse a genomic region
  href: genomic-region.md
- name: Get protein information
  href: protein-info.md
- name: Get sequences
  href: sequences.md
```

This order of articles steps the user through the basics - an overview of apps, choosing a species, finding a gene, etc. Just add a new block with the page title and file name at the point you want it to appear in the menu.
