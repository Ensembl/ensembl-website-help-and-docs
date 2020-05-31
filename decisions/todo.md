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



# Dependencies
- Menu structure will likely reflect the file hierarchy. So having the 
