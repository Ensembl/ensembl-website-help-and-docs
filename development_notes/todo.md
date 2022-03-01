
references
  - get from api
  - and to have option for references that don't have a pubmed id


Decided during meeting on Feb 8 (Andrea, Anne, Andrey)
- video pages are pages on their own right
- there will be only 1 video per page
- breadcrumbs are useless without pages that correspond to the parents
- possibly avoid having meaningless directories in the url? This would mean:
  - urls for files need to be defined manually
  - something in the toc.yml should tell the parent-level item that it shouldn't add its directory name to the url
- discuss setting up dedicated email server
- we are unclear about references, but feel they should be requested from NCBI/EuropePMC
- need to investigate linking between footnotes and where they appear in the text

```yml
- name: Title of a menu item
  href: child-folder/toc.yml
  type: video
  url: `/help/title-of-a-menu-item-video`
  topicHref: my-index-page.yml
```


Decisions from meeting on 2021-02-16
- urls: (mostly) automatic, which means that there will be folder segments in the pathname
- related articles: set them individually per page (because they will likely be different for different pages)
- add navigation to contextual help (since the list of related articles can be different for different article, and we cannot rely on the links of related articles to always stay the same)



# Check later

Ensembl Help
1) Getting Started
  - is not expanded in the mega menu
  - see more link (not reflected in the menu)
  - more help: related articles are interspersed with related videos
  - more help: the "About Ensembl" is separated from the related articles
      does this suggest we need some kind of "additional links" section?

2) Looking at Genes and Transcripts (get to it from mega menu)
  - aside
    - videos with articles
    - a link separated from the related links

3) Data releases
  - aside
      groups of links
  - image/visualization (will there be interactive visualizations? if yes, how can we enable them? iframes?)


About Ensembl
1) No mega menu

2) Would we represent the menu hierarchy like so:

```
About the Ensembl project
|
├── Assemblies and sequence
├── Legal and privacy
|     |
|     ├─- Browser Genome release agreement
|     ├─- Software license
|
├── Contact us
```

But this doesn't correspond to the right-hand of the About the Ensembl project page

```
├── About the Ensembl project
|     |
|     ├─- The Ensembl story
|     ├─- Funding
|     ├─- Citing Ensembl
|
├── Assemblies and sequence
├── Legal and privacy
|     |
|     ├─- Browser Genome release agreement
|     ├─- Software license
|
├── Contact us
```

What element is there on "where to find us"?
