---
slug: prokka-genome-annotation
title: PROKKA genome annotation 
description: How genomes are annotated using the annotation pipeline Prokka by Ensembl.
---
# Genome annotation using the annotation pipeline Prokka
An overview of the integration of the Prokka annotation pipeline within Ensembl.


## How the annotation is generated

[Prokka](https://github.com/tseemann/prokka) is an automated genome annotation pipeline used to generate gene annotations for prokaryotic genomes (bacteria and archaea). It performs rapid identification of genomic features and assigns functional information to predicted genes.

In Ensembl Bacteria, Prokka annotations are generated centrally and integrated into the Ensembl genome browser as a complete gene set.

### Gene prediction

Prokka predicts genomic features using a combination of established tools:

- Protein-coding genes are predicted using ab initio gene finders (e.g. Prodigal)
- tRNA genes are identified using tRNAscan-SE
- rRNA genes are detected using specialised rRNA prediction tools

These tools are combined into a single automated workflow to produce a set of gene models for each genome.


### Functional annotation

Predicted genes are assigned functional information based on sequence similarity to known proteins:

- Gene names and product descriptions are transferred from curated databases
- Functional annotation is primarily homology-based
- Genes without significant matches are labelled as hypothetical proteins


### Non-coding RNA annotation

Non-coding RNA (ncRNA) annotation is supplemented outside of the core Prokka pipeline:

- cmscan (from the Infernal suite) is used to identify structured RNAs
- Searches are performed against covariance model databases such as Rfam
- This improves detection of small and regulatory RNAs


## Ensembl-specific modifications

The annotations displayed in Ensembl Bacteria are based on standard Prokka output with the following modifications:

- **Locus tags**  
  Default Prokka locus tags are replaced with Ensembl-compatible stable identifiers to ensure consistency across releases

- **Standardisation**  
  Annotation files are converted into Ensembl-compatible formats and database schemas

- **Integration**  
  Features are loaded into the Ensembl database and made available through the browser, APIs and downloads

Aside from locus tag replacement and formatting, Prokka is run using its standard configuration.
