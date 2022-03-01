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


## The structure of a toc.yml file

A toc.yml file is formatted as a list of table of content items (see below):

### Example:

1. A list of items

```yml
- name: "How-to1"
  href: howto1.md
- name: "How-to2"
  href: howto2.md
```

## Table of contents items

An item of a table of contents can have the following fields:

| Field      | Optional | Semantics                         |
|------------|----------|-------------------------------------|
| name       | no       | Name of a page as it appears in the menu
| href       | no       | Path to the page file or to a toc file. Alternatively, full url of an existing online page
| type       | yes      | Explicitly stated type of the item. Practically, only needed if the type of the item is `video`
| url        | yes      | Custom url that you want to assign to this page
| topicHref  | yes      | see Sequence


## Use cases

### I just want to link to a markdown file

Given that the documentation file is in the same directory as the toc.yml file:

```yml
- name: My documentation page
  href: my-documentation-file.md
```

### I want to create a submenu 

#### Example 1: submenu does not have its own page

User's interactions with the menu item (e.g. clicking or mousing over) will only expand the submenu. There is no page to open in response to interacting with this menu item.

```yml
- name: A title for a menu item that will show a submenu
  href: child-folder/toc.yml
```

#### Example 2: submenu has its own page

Clicking on the menu item will open a dedicated page associated with this submenu. User will likely also see a control for just showing the submenu without being taken to the index page for this submenu.

```yml
- name: Title of a menu item
  href: child-folder/toc.yml
  topicHref: my-index-page.yml
```

#### Example 3: submenu has a custom url namespace

Normally, submenus will generate their url namespaces automatically, by combining the namespace of the parent (sub)menu with the name of the directory in which the toc.yml of the submenu is located. Thus, in examples 1 and 2, if the namespace of the parent menu is `/about`, then the namespace generated for the submenu will be `/about/child-folder`. This can be overridden using the `url` field of the TOC item. The snippet below, for the same parent menu namespace, will result in the `/about/customized-directory-name`.

```yml
- name: Title of a menu item
  href: child-folder/toc.yml
  url: customized-directory-name
```


## Prior art
The conventions for annotating the `toc.yml` files are modified from the specifications of the [DocFX documentation generator by Microsoft](https://dotnet.github.io/docfx/tutorial/intro_toc.html) (see the [TOC section](https://dotnet.github.io/docfx/tutorial/intro_toc.html) of its documentation).
