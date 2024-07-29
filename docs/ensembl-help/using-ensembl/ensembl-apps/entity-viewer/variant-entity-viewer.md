---
slug: variant-entity-viewer
title: How to view variants in the Entity viewer?
description: How to view variants, their transcripts and allele frequencies in the Entity viewer
related_articles:
  - href: transcripts.md
  - href: gene-function.md
  - href: overview.md
  - href: external-references.md
---

# How to view variants in the Entity viewer?

The Entity viewer reveals detailed information about a variant, such as its transcript consequences, allele frequencies and phenotypes.

The view of variants in the Entity viewer consists of a navigation bar, the main display, the right-hand panel and an action bar.

<figure>
  <img src="media/variant-ev.png" />
  <figcaption>
    A view of the variant rs699 in the Entity viewer.
  </figcaption>
</figure>

## How do I find key information about a variant? 

Key information about a variant is summarised on the navigation bar and in the right-hand panel.

### Variant summary on the navigation bar 

The key information listed on the navigation bar, for each variant, is the  
* variant id eg rs1663519126
* variant type eg insertion
* most severe consequences of the variant eg non_coding_transcript_exon_variant
* reference allele eg G
* variant allele eg GC
* genomic coordinates of the variant eg 1:230,709,875.

### Variant information on the right-hand panel 

The key information listed on the right-hand panel for each variant, includes all the information displayed in the navigation bar (see above),
along with additional information about the variant’s:

* data source eg dbSNP
* release number (of data source)
* link to the Sequence ontology (SO) terms for variant types
* biotype of the variant eg protein altering variant
* all variant alleles 
* change tolerance scores for  (CADD and GERP) 
* strand (forward or reverse) on which the variant is found
* Variant call format (VCF).

## How do I find detailed information about a variant? 

Detailed data about a variant is (are?) presented in the nine panels in the main body of the Entity viewer.

Currently only three panels contain data 

* Variant ID 
* Transcript consequences
* Allele frequency.

### What's in the variant ID panel?

The variant ID tab displays a zoomed in view of the reference sequence showing the location of the reference allele on the forward strand and the alternative allele(s) directly below. 

#### Variant types

The variant allele(s) are shown directly below the reference allele for all variant types.

Different types of variants have specific visual representations in the entity viewer.

All altered, deleted, substituted, indels and inserted bases are coloured to represent the specific group of short variants to which they belong (see short variant groups in the right-hand panel of the Genome browser.)

* SNV: the altered base is shown directly below the reference allele.
* Deletions: deleted base(s) are shown directly the below the bases that are deleted from the reference sequence, which are highlighted in blue.
* Insertions: inserted base(s) are shown directly the below the inserted base(s) in the reference sequence and coloured to represent the specific group of short variants to which the allele belongs.
* Indels: inserted, deleted, or inserted and deleted nucleotides base(s) are shown directly the below the inserted, deleted, or inserted and deleted nucleotides in the reference sequence and coloured to represent the specific group of short variants to which the allele belongs.
* Substitutions: substituted bases are shown directly the below the below the bases that they substitute in the reference sequence. The reference sequence bases that are substituted are highlighted in blue.

### What's in the transcript consequences panel?

The transcript consequence panel shows all the Ensembl transcripts that overlap a variant and the effects that each allele of the variant may have on their transcripts ie the transcript consequences.

<figure>
  <img src="media/transcript-consequences.png" />
  <figcaption>
    A view of the transcript-consequences panel in the Entity viewer.
  </figcaption>
</figure>

The main view of transcript consequence panel shows the: 
* variant ID eg rs699
* variant type eg SNV
* transcript strand allele eg C
* reference strand allele eg G
* gene containing the variant eg AGT
* gene id eg ENSG 00000135744.9
* number of transcripts eg 12 

This information is followed by a list of the Ensembl transcripts overlapping the variant, displaying each transcript’s:
* transcription consequence eg missense_variant
* transcript biotype eg protein-coding
* transcript ID eg ENST00000366667

#### Detailed transcript information

Further details of the first transcript on the list (generally the MANE or canonical transcript) are shown by default.

Details are shown in visualisations of the transcript show details of 

* the affected amino acids in the protein sequence produced from the transcript
* the position of the mutation in the CDS produced from the transcript
* the position of the alternative allele in the genomic sequence of the transcript
* the location of the transcript and mutation within the gene.


By selecting the transcript id ie ENST the same details can be revealed for each transcript.


### What’s in the allele frequency panel?

The allele frequency panel provides allele frequency data from the 1000 Genomes Project (phase 3) and the genome Aggregation Database (gnomAD) for genomes (gnomAD genomes v3.1.2) and exomes (gnomAD exomes r2.1.1).

The allele frequencies for global and sub-populations are displayed both numerically and visually.

The visual representation is a pie chart in which the altered allele frequency in each population is shown in dark grey and the reference allele frequency in a light grey. 

<figure>
  <img src="media/allele-frequency.png" />
  <figcaption>
    A view of the allele frequency panel in the Entity viewer.
  </figcaption>
</figure>