---
slug: human-genome-automated-annotation
title: Human genome automated annotation
description: How human genomes annotation is automated by Ensembl with a new mapping pipeline .
---

# Human genomes automated annotation

An overview of the Ensembl automated annotation pipeline for human genomes.

Ensembl annotation of human genome assemblies have been produced via a new mapping pipeline.

A subset of the [GENCODE 38](https://www.gencodegenes.org/human/release_38.html) genes and transcripts have been annotated on each of the haploid assemblies. The subset excludes readthrough genes and genes on patches or haplotypes.

For each gene, anchor sequences built from the surrounding region were used to locate the most likely corresponding region(s) in the target genome. A pairwise alignment of the reference and target regions was then carried out and used to map the exon coordinates and other features of the gene.

In addition to the primary mapping, potential recent duplications and collapsed paralogues were identified by aligning canonical transcripts across the entire genome and searching for new mappings that did not overlap existing annotations.

For more details on the annotation process, please refer to the Methods section in the publication [Ensembl Mapping Pipeline for Assembly Annotation](https://www.nature.com/articles/s41586-023-05896-x) ([Liao, W.W., _et al_ 2023](https://www.nature.com/articles/s41586-023-05896-x)).