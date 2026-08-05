---
slug: ensembl-links-and-urls
title: Ensembl links and URLs
description: How links on this site are structured and what information is contained in a URL
---

# Ensembl links and URLS

## Ensembl URL format
Ensembl uses an app-based URL structure. A URL can include the app name, a UUID for the genome dataset, a feature identifier, and an optional view parameter. A simplified pattern is:
```
https://ensembl.org/<app>/<uuid>/<feature>?view=<view>
```

Examples:
```
https://ensembl.org/feature-explorer/59871324-7803-4234-856e-2a2bd96d7b3c/gene:ENSG00000141499?view=transcripts
```

In the above URL, Feature explorer is the app, the UUID identifies the genome dataset, gene:ENSG00000141499 identifies the feature, and view=transcripts selects the view within the app.

```
https://.ensembl.org/genome/GCA_000001405.29
```
In the above URL, Genome selector is the app, and the genome is identified by the assembly accession ID. Accession IDs are used for genomes which are in an Integrated release.

## UUIDs
A universally unique identifier (UUID), is a long identifier designed to be globally unique, which makes it useful for referring to a single object unambiguously across systems and over time. UUIDs provide a reliable way to link to the exact thing you want, even when names, labels or other context may change.

In Ensembl, UUIDs are used to point to a specific genome and geneset combination. They are useful for partial releases and for genomes that may have more than one geneset, because the Ensembl UUID identifies the exact dataset you want even when display labels are not specific enough.

An example UUID is:
59871324-7803-4234-856e-2a2bd96d7b3c

## How Ensembl UUIDs are used
Assembly accessions such as GCA_000001405.29 identify the underlying submitted assembly, while stable IDs identify individual annotated features such as genes and transcripts. Ensembl UUIDs identify the genome dataset, which makes them useful for linking to the correct genome context.

This is most helpful when a genome is part of a partial release, when more than one geneset exists for the same assembly, or when a link needs to keep resolving to the same Ensembl genome dataset over time.


## Genomes, genome browser and features
In Ensembl, a genome is represented by a specific assembly together with a specific annotation context. The Genome browser and Feature explorer apps use the Ensembl UUID to establish that genome context before showing a gene, transcript or other annotated feature.

Features such as genes and transcripts are still identified by their own identifiers, including stable IDs. The Ensembl UUID does not replace those identifiers; instead, it identifies which Ensembl genome dataset the feature is being viewed in.

## Genome identifiers
Ensembl uses different identifier types for different purposes. Together, they define the assembly, the feature, and the Ensembl genome dataset.

<table>
  <thead>
    <tr>
      <th>Identifier type</th>
      <th>Example</th>
      <th>Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Assembly accession</td>
      <td><code>GCA_000001405.29</code></td>
      <td>Identifies the submitted genome assembly.</td>
    </tr>
    <tr>
      <td>Stable ID</td>
      <td><code>ENSG00000141499</code></td>
      <td>Identifies a specific Ensembl feature such as a gene or transcript.</td>
    </tr>
    <tr>
      <td>Ensembl UUID</td>
      <td><code>59871324-7803-4234-856e-2a2bd96d7b3c</code></td>
      <td>Identifies a specific genome dataset in the Ensembl Data Platform.</td>
    </tr>
  </tbody>
</table>


## Current limitations
There is currently no general portal for searching Ensembl UUIDs directly on the website. For now, Ensembl UUIDs are mainly encountered in Ensembl links, metadata and related outputs.
