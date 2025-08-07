---
slug: helixer-genome-annotation
title: Helixer genome annotation
description: How genomes are annotated using the annotation pipeline Helixer by Ensembl.
---
# Genome annotation using the annotation pipeline Helixer
An overview of the integration of the Helixer annotation pipeline within Ensembl.

## Genome preparation
The first phase of the Ensembl genome annotation pipeline involves loading an assembly into the Ensembl core database schema and then running a series of analyses on the loaded assembly to identify an initial set of genomic features.

## Repeat finding
After the genomic sequence has been loaded into a database, it is screened for sequence patterns, including repeats, using repeat-detection tool ([Red Girgis, H.Z., 2015](https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-015-0654-5)), dustmasker ([Morgulis, A., *et al.*, 2006](https://www.liebertpub.com/doi/10.1089/cmb.2006.13.1028)), and tandem repeat finder, TRF ([Benson, G., 1999](https://academic.oup.com/nar/article/27/2/573/1061099?login=true)).

## Low complexity feature prediction
Transcription start sites are predicted using Eponine–scan ([Down, T.A., *et al*, 2002](https://genome.cshlp.org/content/12/3/458)), CpG islands ([Larsen, F., *et al*, 1992](https://www.sciencedirect.com/science/article/abs/pii/088875439290024M?via%3Dihub)) longer than 400bp are predicted using [CpG Finder (command line version)](https://genome-source.gi.ucsc.edu/gitlist/kent.git/tree/master/src/utils/cpgIslandExt/) and tRNAs are predicted using tRNAscan-SE ([Chan, P.P., *et al*, 2019](https://link.springer.com/protocol/10.1007/978-1-4939-9173-0_1)). The results of Eponine-scan, CpG, and tRNAscan are for display purposes only; they are not used in the gene annotation process.

## Model generation through the Braker2 annotation pipeline
Helixer ([Stiehler, F., *et al*, 2020](https://academic.oup.com/bioinformatics/article/36/22-23/5291/6039118) ) is a deep learning–based tool for structural gene annotation. It enables users to set up and train models for *ab initio* gene prediction to identify which base pairs in a genome correspond to gene features such as UTRs, coding sequences (CDS), and introns.

In Ensembl, the Helixer pipeline is used to produce draft gene annotations for fungal and plant genomes that lack transcriptomic data.
