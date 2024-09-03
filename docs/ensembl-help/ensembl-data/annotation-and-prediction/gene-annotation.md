---
slug: gene-annotation
title: Gene annotation
description: A description of the gene annotation provided by Ensembl
---

# Genome annotation
Gene annotation is the process of identifying and describing the functions of genes and other features on a genome. 

The annotation process can include coordinate-based prediction of gene locations and structures, regulatory elements, and repeats. It also involves knowledge-based methods to assign gene functions, variant effects, and repeat types. Additionally, context-based methods may be used, which involve comparing different genomes to determine relationships like orthology and paralogy.

Functional gene annotation in Ensembl is produced using both automated and manual methods. 

## Automated annotation
The Ensembl automated annotation system generates evidence-based genome annotations by integrating multiple sources of evidence. Repeats and simple features are annotated and masked during this process. Genes are identified through three main approaches: first, by aligning publicly available transcriptomic data to the genome; second, by filling gaps in the annotation with protein-to-genome alignments of a curated set of verified and publicly available proteins; and finally, by mapping features from human or mouse annotations using pairwise alignment.

## Manual annotation
Manual annotation is performed on human, mouse, zebrafish, and rat genomes by the HAVANA group. This process complements the automatic annotation by providing new transcript models and additional support for existing ones. Manual annotation is more sensitive than automated methods, aiming to annotate all possible transcripts.

## Imported annotation
Additionally, for some species-of-interest, Ensembl imports annotations from different projects and consortia. Please see individual species' information pages to learn more about the species’ gene annotation method and origin of the data.