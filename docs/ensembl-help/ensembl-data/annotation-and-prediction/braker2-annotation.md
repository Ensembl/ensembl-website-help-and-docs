---
slug: braker2-genome-annotation
title: BRAKER2 genome annotation
description: How genomes are annotated using the annotation pipeline BRAKER2 by Ensembl.
---
# Genome annotation using the annotation pipeline BRAKER2
How genomes are annotation by Ensembl using the BRAKER2 annotation pipeline.

## Genome preparation
The first phase of the Ensembl genome annotation pipeline involves loading an assembly into the Ensembl core database schema and then running a series of analyses on the loaded assembly to identify an initial set of genomic features.

## Repeat finding
After the genomic sequence has been loaded into a database, it is screened for sequence patterns, including repeats, using repeat-detection tool [(Red Girgis, H.Z., 2015)](https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-015-0654-5), dustmasker [(Morgulis, A., _et al._, 2006)](https://www.liebertpub.com/doi/10.1089/cmb.2006.13.1028), and tandem repeat finder, TRF [(Benson, G., 1999)](https://academic.oup.com/nar/article/27/2/573/1061099?login=true).

## Low complexity feature prediction
Transcription start sites are predicted using Eponine–scan[6], CpG islands longer than 400bp are predicted using CpG [(Larsen, F., _et al_, 1992)](https://www.sciencedirect.com/science/article/pii/088875439290024M?via%3Dihub), and tRNAs are predicted using tRNAscan-SE [Chan, P.P., _et al_, 2019](https://link.springer.com/protocol/10.1007/978-1-4939-9173-0_1). The results of Eponine-scan, CpG, and tRNAscan are for display purposes only; they are not used in the gene annotation process.

## Model generation through the Braker2 annotation pipeline
[BRAKER2](https://github.com/Gaius-Augustus/BRAKER) [(Bruna, T., _et al_ 2021)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7787252/) is one of the most popular tools for automatic eukaryotic genome annotation. This pipeline has been included in the Ensembl gene annotation process to generate supplementary gene annotation tracks for non-vertebrate species with an existing Ensembl annotation, or as a draft annotation for species without transcriptomic data, for more informaiton, see our [blog post](https://www.ensembl.info/2022/05/24/rapid-release-33-contains-species-annotated-via-braker2/).

BRAKER2 includes [GeneMark-ES](https://genemark.bme.gatech.edu/) [(Lomsadze, A., _et al_, 2005)](https://academic.oup.com/nar/article/33/20/6494/1082033?login=true), a self-training algorithm for ab initio gene prediction, and [Augustus](https://bioinf.uni-greifswald.de/augustus/) [(Stanke, M., _et al_, 2006)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1538822/), one of the most accurate gene prediction tools. The tool provides different options according to the available data. In the annotation process the pipeline is used in the default protein mode.

The set of proteins have been downloaded from [UniProt](https://www.uniprot.org/) [(The UniProt Consortium, 2017)](https://academic.oup.com/nar/article/45/D1/D158/2605721?login=true) and [OrthoDB](https://www.orthodb.org/) [(Kriventseva E.K., _et al_, 2019)](https://academic.oup.com/nar/article/47/D1/D807/5160989?login=true), using clade-specific filters.