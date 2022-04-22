# Metadata

The metadata section, also known as the yaml frontmatter block,  contains information about the document itself, and about its relationships to other documents. The metadata section is demarcated, above and below, with three hyphens. 

Each Ensembl markdown document MUST have the following metadata fields:

- `title` — the title of the document
- `description` — a short description of the document

The `title` field and the `description` field will subsequently be indexed by Google, and will appear in Google search results like so:

![image](https://user-images.githubusercontent.com/6834224/94205723-ca9f5300-febb-11ea-8550-387993a6a8c9.png)

See [Google's SEO recommendations](https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets#create-good-meta-descriptions) (specifically, sections "Create descriptive page titles" and "Create good meta descriptions").

Additionally, the metadata section may include the following optional fields:

- `slug` — short identifier of the document; if used, must be unique across all documents
- `related_articles` — a list of paths to markdown files of related articles
- `related_videos` — a list of paths to yaml files with data about related videos hosted on Youtube

**Important note**: if you need to change a page's slug for some reason, **please inform the web team!** The `slug` is used by other Ensembl apps to identify contextual help for a particular page, for example on the genome browser page, the Help icon links to a help article giving an overview of how the genome browser is used. If you change the slug, this help popup will fail! 


### Paths to related files
Files can be linked to one another in the yaml frontmatter using the following two keywords:
- `relative_path`
- `docs_root_path`

The concepts represented by these keywords are similar to relative and absolute paths in the file system. `relative_path` means a path to the other file starting from the directory that your current article is in. `docs_root_path` means a path starting from the documents root, i.e. from the `docs` directory.

Example. For the following directory tree:

```
docs/
└── ensembl-help
    ├── getting-started
    │   ├── selecting-a-species.md
    |   ├── search.md
    │   └── videos
    |       └── select-a-species.yml
    └── using-ensembl
        └── using-the-genome-browser.md
```

Given that you are currently editing `selecting-a-species.md` file, you may refer from it to the `select-a-species.yml` video file as follows:

```yml
related_videos:
  - relative_path: videos/select-a-species.yml
```

or

```yml
related_videos:
  - docs_root_path: ensembl-help/getting-started/videos/select-a-species.yml
```

Similarly, you can refer from `selecting-a-species.md` file to the `using-the-genome-browser.md` file as follows:

```yml
related_articles:
  - relative_path: ../using-ensembl/using-the-genome-browser.md
```

or

```yml
related_articles:
  - docs_root_path: ensembl-help/using-ensembl/using-the-genome-browser.md
```

You will notice that relative paths may be more convenient to use if the target file is down the same branch of the directory tree as the current file; while docs root paths my be more convenient to use if the target files is on a different branch of the directory tree.