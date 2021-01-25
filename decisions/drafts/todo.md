# TODO
- Fetch all articles for a collection (paginated?)
- Link related articles
- Figure out what to do with index pages

## Basic server-side maintenance
- Add healthcheck endpoint
- Add proper logging




# Backend
- Enable api to report menu structure
  - Q: how many apps (i.e. what data) is the app going to support?
    - contextual help
    - Help&Docs app
    - About Ensembl app?
    - Ensembl static data (species pages)?
- Enable entrypoint through the api to build pages
  - should the entrypoint be just the menu, and then individual pages are requested through subsequent requests, or should all pages be returned en masse (alternatively, as a paginated list)?
- Rebuild data generation (recurse through the folder structure)
  - decide what to use for page identifier
  - make sure images are copied to relevant folder and can be served correctly
- Decide how to handle section pages (example: getting started page, using Ensembl page, Known bugs page, Contact page). Should we support html pages as well

# Client
- be able to show pages
- be able to navigate between pages
- notice that text and video sections in contextual menu may change independently when you click on a related article/video link
  - Q: Are contextual menu and page in help&docs app same pages or different?


# Consequences
## Content ids
- using file paths for ids
  - Advantages
    - ensures uniqueness
    - nicely reflect the url
    - do not require any involvement from content creators
  - Disadvantages
    - things may break if files are moved or renamed
    - a bit cumbersome in api requests (need to uri-escape slashes)
- using slugs (or other kind of id)
  - Advantages
    - resilience to changes in file system
  - Disadvantages
    - requires manual input from content creators
    - need extra validation code to guarantee uniqueness

It is potentially possible to have both (with slug/id being a potentially optional field)

## Related articles
If relations are established through the same tag/category, then the order of the articles will be determined automatically (we could sort alphabetically, of course). I suspect that content creators will want full control over the order of related articles, in which case relations should be written out manually.
