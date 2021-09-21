---
slug: gene-annotation
title: Gene annotation in Ensembl
description: An introduction to the annotation of genomes by the Ensembl project
---

# Gene annotation in Ensembl

Gene annotation is the plotting of genes onto genome assemblies, and indexing their genomic coordinates.

## Types of annotation

For any given genome, you can find the provider and method in the righthand panel on the individual genome's homepage. The three methods we use are:

1. Annotation by the Ensembl team using an automated pipeline plus, in a small subset of key species, additional manual annotation. This process is used for vertebrates and other selected eukaryotic organisms. In the case of human and mouse, we use manual annotation produced by the [GENCODE project](https://www.gencodegenes.org) to create the comprehensive GENCODE Gene Annotation Set. 

2. Importing from community resources. In this case the method will be listed as 'Import' and we link to the provider's website. Plants and non-vertebrate model organisms are annotated in this manner.

3. Generation using data from external sources such as ENA. This method is used primarily for bacteria and some other small genomes.

## What is a gene in Ensembl?

An Ensembl gene includes any spliced transcripts with overlapping coding sequence, with the exception of manually annotated readthrough genes, which are annotated as a separate locus. Transcripts that belong to the same gene ID may differ in transcription start and end sites, splice events and exons, and can give rise to very different proteins. Transcript clusters with no overlapping coding sequence are annotated as separate genes. Two transcripts may overlap in non-coding sequence (ie intronic sequence or UnTranslated Region (UTR), and be classified under two separate genes. After the Ensembl gene and transcript sequences are defined, the gene and transcript names are assigned.

The sequence of any gene or transcript shown in Ensembl is the sequence in the underlying genome assembly, where the sequence of any protein is the translated genomic sequence. This is to prevent any mismatch between the genes and the genome. For this reason, sequences of genes, transcripts and proteins in Ensembl may differ from other databases, who may use sequence from other individuals than were used to produce the genome. 

## Which genes do we display?

We show two kinds of genes from our existing databases:

### Ensembl Canonical

For all species, we display the so-called **Ensembl Canonical** transcript.

The Ensembl Canonical transcript is a single, representative transcript identified at every locus. For accurate analysis, we recommend that more than one transcript at a locus may need to be considered; however, we designate a single Ensembl Canonical transcript per locus to provide consistency when only one transcript is required e.g. for initial display on the Ensembl (or other) website and for use in genome-wide calculations e.g. the Ensembl gene tree analysis.

For protein-coding genes, we aim to identify the transcript that, on balance, has the highest coverage of conserved exons, highest expression, longest coding sequence and is represented in other key resources, such as NCBI and UniProt. To identify this transcript, we consider, where available, evidence of functional potential (such as evolutionary conservation of a coding region, transcript expression levels), transcript length and evidence from other resources (such as concordance with the APPRIS1 ’principal isoform’ and with the UniProt/Swiss-Prot ‘canonical isoform’).

### MANE Select

For Human GRCh38 only, we include the set of consensus genes annotated by the MANE Project, which aims to produce a genome-wide transcript set that can be useful as a default set for display on genomics browsers and resources. For an Ensembl transcript to be designated as a MANE transcript it must perfectly align to GRCh38, have complete sequence identity with a corresponding RefSeq transcript and be high-confidence in terms of its overall support.

[More about MANE Select](mane.md)
