---
slug: gene-annotation
title: Gene annotation in Ensembl
description: An introduction to the annotation of genomes by the Ensembl project
---

# Gene annotation in Ensembl

Gene annotation is the plotting of genes onto genome assemblies, and indexing their genomic coordinates.

## Types of annotation

For any given genome, you can find the provider and method in the righthand panel on the individual genome's homepage. The three methods we use are:

1. Annotation by the Ensembl team using an automated pipeline plus, in a small subset of key species, additional manual annotation. This process is used for vertebrates and other selected eukaryotic organisms. In the case of human and mouse, we use manual annotation produced by the GENCODE project to create the comprehensive [GENCODE Gene Annotation Set](gencode-annotation.md). 

2. Importing from community resources. In this case the method will be listed as 'Import' and we link to the provider's website. Plants and non-vertebrate model organisms are annotated in this manner.

3. Generation using data from external sources such as ENA. This method is used primarily for bacteria and some other small genomes.

## What is a gene in Ensembl?

An Ensembl gene includes any spliced transcripts with overlapping coding sequence, with the exception of manually annotated readthrough genes, which are annotated as a separate locus. Transcripts that belong to the same gene ID may differ in transcription start and end sites, splice events and exons, and can give rise to very different proteins. Transcript clusters with no overlapping coding sequence are annotated as separate genes. Two transcripts may overlap in non-coding sequence (ie intronic sequence or UnTranslated Region (UTR), and be classified under two separate genes. After the Ensembl gene and transcript sequences are defined, the gene and transcript names are assigned.

The sequence of any gene or transcript shown in Ensembl is the sequence in the underlying genome assembly, where the sequence of any protein is the translated genomic sequence. This is to prevent any mismatch between the genes and the genome. For this reason, sequences of genes, transcripts and proteins in Ensembl may differ from other databases, who may use sequence from other individuals than were used to produce the genome. 
