# Menus and Tables of Content

A Table of Contents is a manifest that lists the pages of a given section of the Ensembl 2020 web site (such as Help&Documentation, or About Ensembl), and establishes the hierarchy of these pages.

A Table of Contents should be capable of describing the menu for the appropriate section of the site. The Table of Contents will be automatically transformed into a serialized representation of the menu at the build time of the help&docs api server. 


## Guiding principles

- Every page that has to be accessible via the site menu must be listed in the Table of Contents.
- Every page that has to be accessible via the site menu must have a stable url associated with it. The url can be generated automatically, but it should also be possible to assign a custom url to ths page.
  - When the url is generated automatically, is is built according the following rule:
    `/<namespace>/<type>/<menu_item_name>`. For example, an automatically generated url for a help article might be `/help/articles/in-app-search` or `/help/videos/how-to-find-and-add-species`; whereas an automatically generated url for an about article might be `/about/articles/the-ensembl-story`.
- The Table of Contents is described in `toc.yml` file(s).
- An item in a table of contents file can refer to:
  - a document file within any subfolder of the `docs` folder
  - a web page, either on ensembl.org or on any other web site
  - another table of contents file (typically, in a subdirectory relative to the current toc.yml file)


Note:
- A menu is not the same as a list of links to articles related to a given article. There is no provision in TOC.yml for establishing any kinds of relationships between articles other than their simple hierarchy.


