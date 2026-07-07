---
slug: using-apps
title: Using the Ensembl apps
description: Here is how to use the apps in Ensembl
related_articles:
  - href: ../using-ensembl/ensembl-apps/feature-explorer/feature-explorer.md
  - href: ../using-ensembl/ensembl-apps/genome-browser/browser.md
---
# Using the Ensembl apps

Each Ensembl app allows you to complete a specific set of genomic tasks and analyses. 

Individual apps are represented by unique icons. To open an app select its icon from the App bar at the top of page.

The apps currently available to you are:

<div>
  <style>
    @scope {
      :scope {
        display: grid;
        grid-template-columns: auto minmax(auto, 60ch);
        column-gap: 1rem;
        row-gap: 0.6rem;
        justify-content: start;
      }

      .labelled-app-icon {
        align-self: start;
        display: grid;
        align-items: center;
        grid-template-columns: auto minmax(auto, 15ch);
        column-gap: 0.6rem;
      }

      .image-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        background-color: #6f8190;
      }

      .image-container img {
        margin: 0;
      }

      img {
        filter: invert(1);
        height: 100%;
        width: 100%;
      }

      .genome-selector {
        height: 70%;
        aspect-ratio: 1;
      }

      .genome-browser {
        height: 59.375%;
        aspect-ratio: 1;
      }

      .help {
        height: 70%;
        aspect-ratio: 1;
      }
    }
  </style>
  <div class="labelled-app-icon">
    <div class="image-container">
      <img class="genome-selector" src="../../img/icon-genome-selector.svg" alt="">
    </div>
    <div>Species selector</div>
  </div>
  <div>
    Use the Species selector to choose a species genome of interest.
    You must select a species genome to use the Ensembl other apps ie Genome browser and Feature explorer.
  </div>

  <div class="labelled-app-icon">
    <div class="image-container">
      <img class="genome-browser " src="../../img/icon-genome-browser.svg" alt="">
    </div>
    <div>Genome browser</div>
  </div>
  <div>
    Use the Genome browser to explore a genomic region, to view a gene and its transcripts in the context of the genome.
  </div>

  <div class="labelled-app-icon">
    <div class="image-container">
      <img src="../../img/icon-feature-explorer.svg" alt="">
    </div>
    <div>Feature explorer</div>
  </div>
  <div>
    Use the Feature explorer to look at gene details, including transcript structures, protein domains, links out to other databases and sequences.
  </div>

  <div class="labelled-app-icon">
    <div class="image-container">
      <img class="help" src="../../img/icon-help.svg" alt="">
    </div>
    <div>Help</div>
  </div>
  <div>
    Explore our Help & documentation to learn more about how to use our data and tools.
  </div>
</div>

