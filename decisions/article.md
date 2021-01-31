# Article

An Article is a plain-text file combining the text on a given topic with metadata about this text.


## Article metadata

The article metadata is written in the yaml format in the article frontmatter. Metadata includes the following fields:

| Field             | Optional | Semantics                         |
|-------------------|----------|-------------------------------------|
| id (slug?)        | yes      | Short unique identifier of the article (derived from file path if absent)
| title             | no       | Title of the article (as will be presented to search crawlers)
| description       | no       | Brief summary of the article (as will be presented to search crawlers)
| related_articles  | yes      | ???
| external_links    | yes      | ???

Notice that the `title` and the `description` fields are mandatory for every article. This is because these fields will get indexed by search engines and will appear in the list of search results. See [Google's SEO recommendations](https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets#create-good-meta-descriptions) (specifically, sections "Create descriptive page titles" and "Create good meta descriptions").

### External links

```yml
# part of the yaml frontmatter
external_links:
  - name: Hello Google
    href: "https://google.com"
  - name: Hi Github
    href: "https://github.com"
```


### Examples

#### A bare minimum 

```yml
---
title: Species selector
description: How to select a species and genome assembly of interest to visualise in the genome browser and entitiy viewer
---
```

#### A page that gets shown when user clicks on the contextual help button

```yml
---
id: species-selector
title: Species selector
description: How to select a species and genome assembly of interest to visualise in the genome browser and entitiy viewer
---
```

Note in the snippet above that it includes the `id` field. This is a short identifier of an article that makes it possible to request it directly, without exploring the menu on the Help&Docs section of the site. This mechanism will be used to associate certain articles with the contextual help button.




Questions
- do we need the `draft` field?
  - how should it be coordinated with the menu?
- do we need the `tags` field?
  - it doesn't seem to have any purpose
- do we start an article with heading 1? does it need to be the same as the `title` metadata field
- do we want the two mechanisms for encoding both the relative path and the root (starting from the docs directory) path?
- can we use the yaml frontmatter to encode references?

## Article body

The body of the article. To be written in markdown. Supports CommonMark.

### Supported formatting

#### Regular markdown formatting

- paragraph
- heading (h1 to h4)
- ordered lists
- unordered lists (with 2 levels of nesting)
- links
  - the ones that start with the pathname will be styled as internal links (example: `[Species selector](/species-selector)`)
  - the ones that contain a protocol and a host name will be styled as external links (example: `[HGNC](https://www.genenames.org/)`)
- inlined code and code blocks
- tables (although markdown is poorly suited for tables, and it is possible you might want to use html to write them, see the next section)
- images

#### Custom formatting via html

The markdown spec allows the author to inject raw html between the paragraphs of regular markdown, which makes the following examples possible:

```md
# Example

This is a paragraph of plain markdown.

<p class="special-color">Hey, look at this! This is html in a markdown file</p>
```

The CommonMark spec even allows continuing writing markdown inside of html tags, provided there remains an empty line between the html tag and the markdown content, thus making the following use cases possible:

```md
# Example

This is a paragraph of plain markdown.

<div class="documentation-box">

## This is heading 2

And this is another paragraph, which will be displayed inside a box element.

</div>
```

Such sprinklings of html inside markdown opens up the possibility of custom formatting, such as boxes, complex tables, etc. 


```
Text
Bullet-pointed lists
With indents – three levels
Numbered lists
Tables
With header
Without header
Headers
Four levels
External link
Internal link
Help app
About
Task-based
App view with example
Related contextual help
Code or command line
References
Boxes (eg http://www.ensembl.org/info/genome/variation/prediction/protein_function.html)

Images
Border
Image caption
Pointer with text
Circle/square around an item to highlight

Videos
Pointer with text
Circle/square around an item to highlight
```
