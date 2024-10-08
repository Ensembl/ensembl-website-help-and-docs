---
slug: vertebrate-genome-annotation
title: Vertebrate genome annotation
description: How vertebrate genomes are annotated by Ensembl
---
# Ensembl vertebrate genome annotation
An overview of the Ensembl vertebrate automated annotation system.

## Genome preparation
The genome preparation phase of the Ensembl gene annotation system involves loading an assembly into an Ensembl core database schema and then running a series of analyses on the loaded assembly to identify an initial set of genomic features.

The most important aspect of this phase is identifying repeat features as soft masking of the genome is used extensively later in the annotation process.

### Repeat finding
After the genomic sequence is loaded into a database, it is screened for sequence patterns, including repeats, using RepeatMasker  ([Smit, AFA, Hubley, R & Green, P., 2013-2015](http://www.repeatmasker.org)), (version 4.0.5 with parameters -nolow -engine "RMBlast"), dustmasker ([Morgulis, A., _et al._, 2006](https://www.liebertpub.com/doi/10.1089/cmb.2006.13.1028)), and tandem repeat finder, TRF ([Benson, G., 1999](https://academic.oup.com/nar/article/27/2/573/1061099?login=true)).

In addition to the Repbase ([Bao, W., _et al_, 2015](https://mobilednajournal.biomedcentral.com/articles/10.1186/s13100-015-0041-9)) library, where available, a custom repeat library is used with RepeatMasker. Custom libraries are created using RepeatModeler2 ([Flynn, J.M., 2020](https://www.pnas.org/doi/10.1073/pnas.1921046117)) and can be downloaded via the [Ensembl FTP](https://ftp.ebi.ac.uk/pub/databases/ensembl/repeats/unfiltered_repeatmodeler/species/).

### Low complexity feature prediction
Transcription start sites are predicted using Eponine–scan ([Down, T.A. and Hubbard, T.J., 2002](https://pubmed.ncbi.nlm.nih.gov/11875034/)), CpG islands ([Larsen, F., _et al_, 1992](https://www.sciencedirect.com/science/article/pii/088875439290024M?via%3Dihub)) longer than 400bp are predicted using CpG Finder ([command line version](https://genome-source.gi.ucsc.edu/gitlist/kent.git/tree/master/src/utils/cpgIslandExt/)) and tRNAs are predicted using tRNAscan-SE ([Chan, P.P., _et al_, 2019](https://link.springer.com/protocol/10.1007/978-1-4939-9173-0_1)). The results of Eponine-scan, CpG, and tRNAscan are for display purposes only; they are not used in the gene annotation process.

## Generating automatic, evidence-based protein-coding gene models
Genome annotation is generated primarily through alignment of publicly available transcriptomic data to the genome. Gaps in the annotation are filled via protein-to-genome alignments of a select set of proteins. The data and techniques employed to generate gene models are outlined here.

### Model generation through alignment of transcriptomic data to the genome
#### Aligning RNA-Seq data
Where available, RNA-seq data are downloaded from European Nucleotide Archive, [ENA](https://www.ebi.ac.uk/ena/browser/home) and utilised for annotation. The obtained reads are aligned to the genome using  RNA-seq aligner, STAR ([Dobin, A., _et al_, 2013](https://academic.oup.com/bioinformatics/article/29/1/15/272537?login=true)) and models assembled using the transcript assembler, Scallop ([Shao, M., _et al_, 2017](https://doi.org/10.1038/nbt)).

#### Aligning long-read transcriptomic data
Where available, long-read transcriptomic data (PacBio IsoSeq or Oxford Nanopore) are downloaded from [ENA](https://www.ebi.ac.uk/ena/browser/home) and used in the annotation process. The long-read data are mapped to the genome using Minimap2 ([Li H., 2018](https://academic.oup.com/bioinformatics/article/34/18/3094/4994778?login=true)) with the recommended settings for Iso-Seq and Nanopore data.

#### Validating protein-coding models
Protein-coding models are validated by aligning the longest ORF against a database of eukaryotic UniProt proteins using the protein aligner, DIAMOND ([Buchfink, B., _et al_, 2021](https://www.nature.com/articles/s41592-021-01101-x)). If the alignments are insufficient, additional validation is performed using RNASamba ([Camargo, A.P., _et al_, 2020](https://academic.oup.com/nargab/article/2/1/lqz024/5701461?login=true)) and CPC2 ([Kang, Y., _et al_, 2017](https://academic.oup.com/nar/article/45/W1/W12/3831091?login=true)).

###  Model generation through protein-to-genome alignments
Protein sequences are downloaded from public databases and aligned to the genome in a splice-aware manner using GenBlast ([She, R., _et al_, 2011](https://academic.oup.com/bioinformatics/article/27/15/2141/403866)). The proteins aligned to the genome are selected subsets of UniProt ([The UniProt Consortium, 2017](https://doi.org/10.1093/nar/gkw1099)) and OrthoDB ([Kriventseva E.K., _et al_, 2019](https://doi.org/10.1093/nar/gky1053)) proteins, chosen to provide broad and targeted coverage of the species' proteome of interest.

For GenBlast, a cut-off of 50% coverage and 30% identity, with an e-value threshold of e-1, is applied, and the exon repair option is enabled. The top 10 transcript models generated by GenBlast for each protein meeting these cut-offs are retained.

### Model generation through mapping of reference annotations to the genome
A whole genome alignment against either the human or Mouse GENCODE reference assembly is generated using LastZ ([Harris, R.S., 2007](https://www.bx.psu.edu/~rsharris/rsharris_phd_thesis_2007.pdf)). Syntenic regions are identified from this alignment and protein-coding annotations from the most recently released gene set are mapped to the genome through localised alignments using CESAR 2.0 ([Sharma, V.P., _et al_, 2017](https://academic.oup.com/bioinformatics/article/33/24/3985/4095639?login=true)).

### Identifying Immunoglobulin and T-cell Receptor genes
Translations of different IG gene segments from closely related species are downloaded from the [IMGT database](https://www.imgt.org/) ([Lefranc, M.P., 2015](https://academic.oup.com/nar/article/43/D1/D413/2436677?login=true)) and aligned to the genome using GenBlast. For GenBlast, a cut-off of 80% coverage, 70% identity, and an e-value threshold of e-1 is applied, with the exon repair option enabled. The top 10 transcript models generated by GenBlast for each protein meeting these cut-offs are retained.

## Filtering and finalising protein-coding gene models
### Prioritising models at each locus
Low quality models are removed, and data is collapsed and consolidated into a final set of gene models plus their associated non-redundant transcripts. When collapsing the data, priority is given to models derived from transcriptomic data; where RNA-seq data is fragmented or missing, homology data takes precedence.

### Addition of UTR to coding models
The set of coding models is extended into the untranslated regions (UTRs) using RNA-seq data (if available). The criterion for adding UTR from RNA-seq alignments to protein models lacking UTR (such as the protein-to-genome alignment models) is that the intron coordinates from the model missing UTR exactly match a subset of the coordinates from the UTR donor model.

## Creating the final gene set
### Identifying small non-coding RNAs
Small structured non-coding genes from [RFAM](https://rfam.org/) ([Nawrocki, E.P., _et al._, 2015](https://pubmed.ncbi.nlm.nih.gov/25392425/)) and [miRBase](https://www.mirbase.org/) ([Griffiths-Jones, S., _et al._, 2006](https://pubmed.ncbi.nlm.nih.gov/16381832/)) are analysed using [NCBI-BLAST](https://blast.ncbi.nlm.nih.gov/Blast.cgi) ([Altschul, S.F., _et al._,1990](https://pubmed.ncbi.nlm.nih.gov/2231712/)) and models are generated using the Infernal software suite ([Nawrocki, E.P. and S.R. Eddy, 2013](https://academic.oup.com/bioinformatics/article/29/22/2933/316439?login=true)).

### Identifying pseudogenes
Models with hits to known proteins that also display abnormalities such as absence of a start codon, non-canonical splicing, unusually small intron structures (< 75bp) or excessive repeat coverage, are reclassified as pseudogenes. Single-exon models with a corresponding multi-exon copy elsewhere in the genome are classified as processed (retrotransposed) pseudogenes.

### Identifying long non-coding RNAs
If a model fails to meet the criteria of any of the previously described categories, does not overlap a protein-coding gene, and has been constructed from transcriptomic data then it is considered as a potential lncRNA. Potential lncRNAs are additionally filtered to remove single-exon loci due to the unreliability of such models.

## Appendix
The Ensembl gene set is generated automatically, meaning that gene models are annotated using the Ensembl gene annotation pipelines. The main focus of the pipelines is to generate a conservative set of protein-coding gene models.

Every gene model produced by the Ensembl gene annotation pipeline is supported by biological sequence evidence (see the “External references” tab in the right hand panel of the Entity Viewer), _ab initio models_ are not included in our gene set.
