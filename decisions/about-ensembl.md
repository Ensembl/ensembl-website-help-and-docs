# Requirements 

## URLs

We want them to be roughtly as follows:




2020.ensembl.org/about-ensembl  <---
2020.ensembl.org/help  <---



/about-ensembl
/about-ensembl/funding

/about-ensembl/annotation

/about-ensembl/legal-and-privacy
/about-ensembl/legal-and-privacy/browser-genome-release-agreement
/about-ensembl/legal-and-privacy/disclaimer
/about-ensembl/legal-and-privacy/image-reuse
/about-ensembl/legal-and-privacy/name-logo-policy
/about-ensembl/legal-and-privacy/privacy-and-cookies
/about-ensembl/legal-and-privacy/software-license



/about-ensembl/legal-and-privacy/browser-genome-release-agreement



Current directory structure (the-ensembl-project is superfluous):

```
about-ensembl
│
├── about-us
│   └── the-ensembl-project
│       ├── about.md
│       ├── funding.md
│       └── toc.yml
├── annotation
│   └── index.md
├── index.md
└── legal-and-privacy
    ├── browser-genome-release-agreement.md
    ├── disclaimer.md
    ├── image-reuse.md
    ├── name-logo-policy.md
    ├── privacy-and-cookies.md
    ├── software-license.md
    └── toc.yml
```

## Preferred file tree

```
about-ensembl
│
├── about-us   
│   ├── index.md
│   ├── funding.md
│   └── toc.yml
├── annotation
│   └── index.md
└── legal-and-privacy
    ├── browser-genome-release-agreement.md
    ├── disclaimer.md
    ├── image-reuse.md
    ├── name-logo-policy.md
    ├── privacy-and-cookies.md
    ├── software-license.md
    └── toc.yml
```

## Options

### Option 1. Just use the folder structure to represent the url

In this case, the directory structure should be something like this:

```
about-ensembl
├── annotation
│   ├── toc.yml
│   └── index.md
└── legal-and-privacy
│   ├── browser-genome-release-agreement.md
│   ├── disclaimer.md
│   ├── image-reuse.md
│   ├── name-logo-policy.md
│   ├── privacy-and-cookies.md
│   ├── software-license.md
│   └── toc.yml
├── index.md
├── funding.md
└── toc.yml
```






#### Drawbacks

1. Notice that legal-and-privacy does not have an index file. Without an index file, the /about-ensembl/legal-and-privacy url is impossible.

2. Notice how the funding.md is now at the top level? We may not like that we can't put files in their folders

3. Having three independent folders (see above) gives an impression of the same hierarchy of folders. The directory structure in Option 1 however puts the "annotation" and the "legal-and-privacy" folders as subordinate to about-ensembl






### Option 2. Permalinks in markdown files

Advantage: links can be arbitrary, do not depend on file location

Disadvantage: very hard to have order or get an overview of files


### Option 3. TOC files containing permalinks/urls

#### Current structure of a toc file:

example: a toc file in about-ensembl/legal-and-privacy

```yaml
- name: Privacy and Cookies
  href: privacy-and-cookies.md
- name: Disclaimer
  href: disclaimer.md
- name: Software License
  href: software-license.md
- name: Browser Genome Release Agreement
  href: browser-genome-release-agreement.md
- name: Name and Logo Policy
  href: name-logo-policy.md
- name: Image Reuse
  href: image-reuse.md
```

Notice that the href field links to the actual markdown files (necessary to associate files with links to them)

We could also add permalinks, so as to achieve something like this:

```yaml
- name: Privacy and Cookies
  href: privacy-and-cookies.md
  permalink: /about-ensembl/legal/privacy-and-cookies
- name: Disclaimer
  href: disclaimer.md
  permalink: /about-ensembl/legal/disclaimer
- name: Software License
  href: software-license.md
  permalink: /about-ensembl/legal/license
- name: Browser Genome Release Agreement
  href: browser-genome-release-agreement.md
  permalink: /about-ensembl/legal/browser-genome-release-agreement
- name: Name and Logo Policy
  href: name-logo-policy.md
  permalink: /about-ensembl/legal/name-logo-policy
- name: Image Reuse
  href: image-reuse.md
  permalink: /about-ensembl/legal/image-reuse
```

Or like this (directory path + file name without extension will make up th url):

```yaml
directory_path: /about-ensembl/legal
files: 
  - name: Privacy and Cookies
    href: privacy-and-cookies.md
  - name: Disclaimer
    href: disclaimer.md
  - name: Software License
    href: software-license.md
  - name: Browser Genome Release Agreement
    href: browser-genome-release-agreement.md
  - name: Name and Logo Policy
    href: name-logo-policy.md
  - name: Image Reuse
    href: image-reuse.md
```


## Problems w/design

- Legal (see breadcrumbs)


Notes:
- breadcrumbs


about the ensembl project

legal
- Privacy and Cookies
- Disclaimer
- Software License
- Browser Genome Release Agreement
- Name and Logo Policy
- Image Reuse


annotation




# Final format
The format is heavily inspired by the conventions used by Microsoft’s DocFX documentation system.


## toc.yml

1. The toc.yml file contains a list of links in the desired order. Without a hard-coded TOC, the order of the links could only be inferred from the alphabetical order of the file names, which won't work for our purposes.

2. The basic Table of Contents data model is a potentially nested list of items

Example from a real TOC file from a Microsoft repository:

```yaml
- name: Extensibility
  items:
  - name: How to build your own type of documentation with custom plug-in
    href: howto_build_your_own_type_of_documentation_with_custom_plug-in.md
    items:
    - name: "Advanced: Support Hyperlink"
      href: advanced_support_hyperlink.md
  - name: How to add a customized post processor
    href: howto_add_a_customized_post_processor.md
  - name: Validate your markdown files
    href: validate_your_markdown_files.md
  - name: Intro markdown lite
    href: intro_markdown_lite.md
  - name: How to customize DocFX Flavored Markdown
    href: howto_customize_docfx_flavored_markdown.md
```


```yaml
- name: Getting Started
  href: 'getting-started.yml'
- name: Getting Started
  items:
  - name: Funding
    href: howto_build_your_own_type_of_documentation_with_custom_plug-in.md
  - name: Citing Ensembl
    href: howto_add_a_customized_post_processor.md
  - name: Contact
    href: /help/contact
```


```yaml
- name: Legal
  href: 'legal.md'
  items:
  - name: Funding
    href: howto_build_your_own_type_of_documentation_with_custom_plug-in.md
  - name: Citing Ensembl
    href: howto_add_a_customized_post_processor.md
  - name: Contact
    href: /help/contact
```


related-1.yml - not to replicate related lists
should you be able to combine 
```yaml
- name: Funding
  href: howto_build_your_own_type_of_documentation_with_custom_plug-in.md
- name: Citing Ensembl
  href: howto_add_a_customized_post_processor.md
- name: Contact
  href: /help/contact
```


`/help/using-ensembl/viewing-ensembl/entity-viewer/using-ev`   <---  redirect
`/help/using-ensembl/viewing-ensembl/entity-viewer`
`/help`
404 




In the example above, notice that:
- A parent item (e.g. "Extensibility") may not have a corresponding html/markdown page, but only have nested items. This is a menu element that opens a submenu when the user clicks on it.
- On the other hand, a parent item may have a corresponding html/markdown page – for example, the "How to build your own type of documentation with custom plug-in" item in the example above has both its own page, and children. The behaviour of this item depends on the implementation, but it will likely mean that the user will both be able to see a web page when they click on the link, and also see a UI element that reveals the list of child items.

3. An item in the table of contents can refer to another toc.yml file, in which case the linked table of contents gets merged into the parent table of contents as nested children of this item.

Example from Microsoft's docs:

```yml
# toc.yml in parent directory:

- name: How-to tutorials
  href: howto/toc.yml
  topicHref: howto/overview.md # escape hatch: allows a toc item to both have an associated markdown page and to link to a different toc.yml

# toc.yml in the howto directory:

- name: "How-to1"
  href: howto1.md
- name: "How-to2"
  href: howto2.md

# result of the merge (at build time)

- name: How-to tutorials
  href: howto/overview.md
  items:
    - name: "How-to1"
      href: howto/howto1.md
    - name: "How-to2"
      href: howto/howto2.md
```

4. An item in the table of contents can be a link to a page outside of the given menu tree (e.g. about-ensembl and help will share the same contact us page, for which there will be no corresponding markdown file).

## What the help&docs api should be able to do:
- Get the top-level nested menu
- Get the TOC just for a given section (to show associated articles)



### Questions

Should the TOC data model allow an object so that it can have some additional properties? For example:

```yaml
directory_path: /about/legal # or should it be called pathname?
items:
  - name: Privacy and Cookies
    href: privacy-and-cookies.md
  - name: Disclaimer
    href: disclaimer.md
  - name: Software License
    href: software-license.md
  - name: Browser Genome Release Agreement
    href: browser-genome-release-agreement.md
  - name: Name and Logo Policy
    href: name-logo-policy.md
  - name: Image Reuse
    href: image-reuse.md
```
