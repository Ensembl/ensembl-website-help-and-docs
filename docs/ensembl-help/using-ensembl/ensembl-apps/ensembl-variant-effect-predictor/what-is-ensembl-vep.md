---
slug: what-is-ensembl-vep
title: What is the Ensembl Variant Effect Predictor (Ensembl VEP)
description: What the Ensembl Variant Effect Predictor (Ensembl VEP) tells you about your variants
related_articles:
  - href: how-to-use-ensembl-vep.md
  - href: choosing-what-ensembl-vep-annotates.md
---
# What is the Ensembl Variant Effect Predictor (Ensembl VEP)

The Ensembl Variant Effect Predictor (Ensembl VEP) predicts the molecular consequence of your variants, ( SNVs, short variants and structural variants) on genes, transcripts, protein sequences and regulatory regions.

Simply input your variants in VCF format to find out the:

* __genes and transcripts__  the variants fall within
* __location__ of the variants relative to functional elements (e.g. upstream of a transcript, in coding sequence, in non-coding RNA, in regulatory regions)
* __predicted molecular consequence__ of your variants (e.g. stop gained, missense, stop lost, frameshift - for variants in protein coding sequence)

Every job returns this information. Alongside it you can ask Ensembl VEP for further annotation of your variants, choosing from:

* __standardised variant representations__ e.g. in HGVS and SPDI nomenclature
* __impact predictions__ e.g. from AlphaMissense, REVEL, ClinPred, EVE & popEVE, SpliceAI, CADD and GERP
* __allele frequencies__ e.g. from gnomAD and the NIH All of Us Research Program, for whole populations or for specific ancestry groups
* __gene and transcript context__, such as distance to the nearest transcription start site, functional information from GO and constraint metrics such as pLI and LOEUF
* __protein and functional data__ e.g. from ProtVar, MaveDB and IntAct 
* __phenotypes, diseases and traits__ associated with your variants and the genes they fall within, from sources including ClinVar, OMIM, the GWAS Catalog, G2P Geno2MP and Open Targets

You choose these when you set up an analysis job. Results are available for 7 days from submission, and a submission can be rerun for 28 days.