# A guide to writing Ensembl documentation

An Ensembl markdown file must consist of a [metadata section](metadata.md) (written in YAML) followed by the body of the document written in the Markdown markup language. 

- [Metadata](metadata.md)
- Document body (see below)

## Supported formatting

We support CommonMark, an extension of the original Markdown specifications.

### Standard Markdown formatting

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

### Custom formatting via HTML

The Markdown spec allows the author to inject raw HTML between the paragraphs of regular Markdown, which makes the following examples possible:

```md
# Example

This is a paragraph of plain markdown.

<p class="special-color">Hey, look at this! This is HTML in a Markdown file!</p>
```

The CommonMark spec even allows continuing writing Markdown inside of HTML tags, provided there remains an empty line between the HTML tag and the Markdown content, thus making the following use cases possible:

```md
# Example

This is a paragraph of plain markdown.

<div class="documentation-box">

## This is heading 2

And this is another paragraph, which will be displayed inside a box element.

</div>
```

Such sprinklings of HTML inside Markdown opens up the possibility of custom formatting, such as boxes, complex tables, etc. 







