---
slug: genebuild-annotation
title: Genome annotation
description: How genome annotation is provided by Ensembl
---
# Genome annotation

## Genome preparation

The first phase of the Ensembl genome annotation pipeline involves loading an assembly into the Ensembl core database schema and then running a series of analyses on the loaded assembly to identify an initial set of genomic features.

### Repeat Elements

After the genomic sequence has been loaded into a database, it is screened for sequence patterns, including repeats, using (Red Girgis, H.Z., 2015), dustmasker (Morgulis, A., et al., 2006), and TRF (Benson, G., 1999).

Combined, these tools provide a quick and acqurate identification of repeat elements, low-complexity DNA structures, and tandem repeats, respecfully, as well as a soft-masked version of the genome that will be used for the remaining of the analyses

### Low complexity features, ab initio predictions 

On the soft-masked genome, Transcription Start Sites are predicted using Eponine–scan (Down, T.A., et al, 2002). Additionally, CpG islands (Larsen, F., et al, 1992) longer than 200 bases are predicted using the command line version of CpG Finder (Gardiner-Garden, M., et al, 1987).

These predictions and features are for display purposes only; they are not used in the gene annotation process.

## Protein-coding model generation

In order to predict the actual gene models and produce an annotation of the genome, several sources of biological information is used. This data is most commonly gathered on a species basis, or, in the absence of species level data, genus level.

On top of other annotated protein sets, this sources of data include transcriptomic and long read data.

We process each separatedly, and then merge all the results comparing them among them and to the genome.

### Protein-to-genome

We retrieve pretein sequences with Experimental evidence at protein or transcript level from UniProt (The UniProt Consortium, 2017). This database is produced for each annotation, adding protein information from the species itself, the clade it belongs to, and some other related highly curated species (often a model species such as human, or mouse). In addition to this, the OrthoDB (Kriventseva E.K., et al, 2019) proteins are added to provide a broad targeted coverage of the interest proteome.

With these in hand we perform a series of protein to genome alignments in an attempt to identify highly conserved structures.

We process this data using GenBlast (She, R., et al, 2011), a splice-aware aligner protein-to-genome. This analysis is run with a cut-off 50% of coverage and 30% identity, an e-value of e-1, and the exon-repair option turned on. Only the top 10 models that pass the cut-offs were kept.

### Transcriptomic

#### RNA-Seq

We retrieve RNA-Seq data available at ENA for the species of interest. On the absence of specific-level data, genus-level reads can be used. The reads are preprocessed with Trim Galore! for trimming.

This data is then aligned to the genome using STAR (Dobin, A., et al, 2013), and assembled into models using Scallop (Shao, M., et al, 2017). The BAMs (sorted and indexed) are provided as interactive tracks for the annotated genome, with expresion and models data available for review.

Protein coding potential of these predictions is then validated via DIAMOND (Buchfink, B., et al, 2021) alignment of the longest ORF agains a UniProt database containing Eukaryote proteins. When this is insuficient, RNASamba (Camargo, A.P., et al, 2020)and CPC2 (Kang, Y., et al, 2017)are used.

#### Long-read

Long-read data (e.g. IsoSeq or Nanopore) is retrieved in a similar fashion from ENA.

This data is mapped to the genome using Minimap2 (Li, H., 2018), with the recommended setting for each type of data. Additionally, low frequency intron/exon boundaries that are non-canonical are replaced with high frequency boundary coordinates within 50bp, and the low frequency potential gaps between adjoining exons are filled in based on high frequency observations of single exons with the same terminal boundary coordinates.

## sncRNA
Using a database containing known sncRNAs from RFAM archive (Kalvari, I., et al, 2018), we use CMsearch (part of the Infernal suite; Cui, X., et al, 2016) to search for homology models of the sequences provided in the database.

Additionally, tRNAscan-SE (Chan, P.P., et al, 2019) allows us to find tRNA genes, some of the largest and most complex non coding RNA sequences.

## Filtering and finalization of the models

Once all the data resulting from the different analyses and sources is processed, we need to remove redundancies, filter out low quality models, and prepare the final models for biological interpretation. We do this mostly through in-house software developed to work best with our core database schema.

### Prioritising models at each locus

Low quality models are removed, and data is collapsed and consolidated into a final set of gene models plus their associated non-redundant transcripts. When collapsing the data, priority is given to models derived from transcriptomic data; where RNA-seq data is fragmented or missing, homology data takes precedence.

### UTR addition

The set of coding models is extended into the untranslated regions (UTRs) using RNA-seq data (if available). The criterion for adding UTR from RNA-seq alignments to protein models lacking UTR (such as the protein-to-genome alignment models) is that the intron coordinates from the model missing UTR exactly match a subset of the coordinates from the UTR donor model.

### Functional annotation and identification

We also use a transformer model trained in our manually curated set of annotations to deduce the gene funcion from sequence, thus naming the genes to resemble the namings of its closer gene family. Although this should be assumed to be more a funtion indicative, rather than proper naming, as the subtler naming conventions might not be follow strictly.

Finally, a ensembl stable ID will be assign to each annotated feature. When updating an existing annotation, or replacing it with a new assembly version, an extra step will be taken to try and map the old stable IDs to the features, in an attempt to facilitate working with them.

## Appendix

The Ensembl gene set is generated automatically, meaning that gene models are annotated using the Ensembl gene annotation pipelines. The main focus of the pipelines is to generate a conservative set of protein-coding gene models.
