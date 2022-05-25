# Using GitHub and previewing your pages

## Creating branches

We encourage content providers to use a feature branch to commit their changes, so that they can be reviewed by a web team member before merging into master. Otherwise you could break the entire app on the live site!

### Previewing your work

If you want to see your new content as it will actually appear on the web, you will need to use a review deployment on our Kubernetes cluster. At the moment these review sites have to be set up manually, so please ask the webteam if you need to take advantage of this service. 

Once your review deployment is set up, all you need to do is push any changes to GitHub and they will be automatically picked up by our CI/CD pipeline and appear on the review site. You can check on the status of updates via GitLab, as described below. This is not essential, but if your local changes fail to appear on the review site after pushing, the GitLab interface can help you to pinpoint the problem.  

## GitHub and GitLab

While the Ensembl repositories are hosted on the public GitHub website, there is also a git-based site internal to the EBI, at https://gitlab.ebi.ac.uk. If you are an EBI employee, you can log into this site using your usual credentials.

We leverage the power of GitLab as follows (this is highly simplified!):

1. GitLab constantly monitors `github.com/Ensembl/ensembl-website-help-and-docs` for commits to master and any review branches that have been configured. When one is detected, it is copied from GitHub to GitLab.
1. Once the commit is downloaded, it triggers the build process, compiling the pages into HTML and adding navigation
  - If the build fails, the new build is thrown away and GitLab waits for the next update
  - If it succeeds, the new build is made available to the web frontend

At the moment, the only way to check the build status is by manually checking the [pipelines page on GitLab](https://gitlab.ebi.ac.uk/ensembl-web/ensembl-help-and-docs/-/pipelines).

Click on a red "failed" button to go to that specific run:

![GitLab screenshot showing list of builds](media/builds.png)

then click on the "build" button to see full details:

![GitLab screenshot showing failed build](media/failed.png)

There will be a long, scary-looking report - ignore everything except the first line of red text, which will tell you exactly which file broke the build, and why.

![GitLab screenshot showing error report](media/errors.png)

Here you can see that the error was in `funding.md`, and that it was a broken link to the `about.md` page.

**Future work** - GitLab can inform GitHub of the status of the latest build, so that GitHub displays either a red cross or a green tick. Once we have implemented this integration, you will be able to check the build status directly from this GitHub repo, and clicking on the status icon will take you straight to GitLab.


