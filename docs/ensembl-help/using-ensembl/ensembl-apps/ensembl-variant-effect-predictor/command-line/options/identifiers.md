---
title: VEP identifiers
description: "Command line reference for VEP: identifiers."
slug: vep-cli-options-identifiers
related_articles:
  - href: ../getting-started.md
  - href: ../tutorial.md
  - href: ../download-and-install.md
  - href: ../running-vep.md
  - href: basic.md
  - href: cache.md
  - href: annotation.md
  - href: output-format.md
  - href: output.md
  - href: identifiers.md
  - href: existing-variants.md
  - href: filtering.md
  - href: database.md
  - href: ../data-formats.md
  - href: ../annotation-sources.md
  - href: ../filtering-results.md
  - href: ../custom-annotations.md
  - href: ../plugins.md
  - href: ../plugin-catalogue.md
  - href: ../examples-and-use-cases.md
  - href: ../other-information.md
  - href: ../faq.md
  - href: ../release-history.md
---

<span id="top"></span>

# VEP identifiers

## Option reference

- [Basic options](/help/articles/vep-options-basic)
- [Cache options](/help/articles/vep-options-cache)
- [Other annotation sources](/help/articles/vep-options-annotation)
- [Output format options](/help/articles/vep-options-output-format)
- [Output options](/help/articles/vep-options-output)
- **Identifiers (this section)**
- [Co-located variants](/help/articles/vep-options-existing-variants)
- [Filtering and QC options](/help/articles/vep-options-filtering)
- [Database options](/help/articles/vep-options-database)

[Running VEP and choosing options](/help/articles/vep-running-vep)

<span id="ident"></span>

## Identifiers

<span id="opt_hgvs"></span>

### `--hgvs`

Add [HGVS](https://varnomen.hgvs.org) nomenclature based on Ensembl stable identifiers to the output. Both coding and protein sequence names are added where appropriate. To generate HGVS identifiers when using [--cache](/help/articles/vep-options-cache#opt_cache) or [--offline](/help/articles/vep-options-cache#opt_offline) you must use a FASTA file and [--fasta](/help/articles/vep-options-cache#opt_fasta). HGVS notations given on Ensembl identifiers are [versioned](https://jun2026.archive.ensembl.org/info/genome/stable_ids/index.html). *Not used by default*

**Output fields:** HGVSc, HGVSp, HGVS_OFFSET

<span id="opt_hgvsg"></span>

### `--hgvsg`

Add genomic [HGVS](https://varnomen.hgvs.org) nomenclature based on the input chromosome name. To generate HGVS identifiers when using [--cache](/help/articles/vep-options-cache#opt_cache) or [--offline](/help/articles/vep-options-cache#opt_offline) you must use a FASTA file and [--fasta](/help/articles/vep-options-cache#opt_fasta). *Not used by default*

**Output fields:** HGVSg

<span id="opt_hgvsg_use_accession"></span>

### `--hgvsg_use_accession`

Force [--hgvsg](/help/articles/vep-options-identifiers#opt_hgvsg) to return RefSeq reference sequence. For example, reports NC_000002.11 for human chromosome 2 (build GRCh38).

**Output fields:** HGVSg

<span id="opt_hgvsp_use_prediction"></span>

### `--hgvsp_use_prediction`

Force [--hgvs](/help/articles/vep-options-identifiers#opt_hgvs) to return the HGVSp notation in predicted format. For example, ENSP00000233741.4:p.Thr367AsnfsTer13 will be returned as ENSP00000233741.4:p.(Thr367AsnfsTer13).

**Output fields:** HGVSp

<span id="opt_ambiguous_hgvs"></span>

### `--ambiguous_hgvs [0|1]`

Allow input HGVSp to resolve to all genomic locations. Otherwise, most likely transcript will be selected. *Default: 0 (most likely transcript selected)*

<span id="opt_spdi"></span>

### `--spdi`

Add genomic [SPDI](https://www.ncbi.nlm.nih.gov/variation/notation/) notation. To generate SPDI when using [--cache](/help/articles/vep-options-cache#opt_cache) or [--offline](/help/articles/vep-options-cache#opt_offline) you must use a FASTA file and [--fasta](/help/articles/vep-options-cache#opt_fasta). *Not used by default*

**Output fields:** SPDI

<span id="opt_ga4gh_vrs"></span>

### `--ga4gh_vrs`

Add [GA4GH Variation Representation Specification (VRS)](https://vrs.ga4gh.org/) notation. To generate GA4GH VRS when using [--cache](/help/articles/vep-options-cache#opt_cache) or [--offline](/help/articles/vep-options-cache#opt_offline) you must use a FASTA file and [--fasta](/help/articles/vep-options-cache#opt_fasta). *Not used by default*

**Output fields:** GA4GH_VRS

**Incompatible with:** [--vcf](/help/articles/vep-options-output-format#opt_vcf)

<span id="opt_shift_hgvs"></span>

### `--shift_hgvs [0|1]`

Enable or disable 3' shifting of HGVS notations. HGVS nomenclature requires an ambiguous sequence change to be described at the most 3' possible location. When enabled, this causes "shifting" to the most 3' possible coordinates (relative to the transcript sequence and strand) before the HGVS notations are calculated; the flag HGVS_OFFSET is set to the number of bases by which the variant has shifted, relative to the input genomic coordinates. If HGVS_OFFSET is equals to 0, no value will be added to HGVS_OFFSET column. To disable the changing of location at transcript level set --shift_hgvs to 0. *Default: 1 (shift)*

**Incompatible with:**

[--shift_3prime](/help/articles/vep-options-output#opt_shift_3prime) [--shift_genomic](/help/articles/vep-options-output#opt_shift_genomic)

<span id="opt_transcript_version"></span>

### `--transcript_version`

Add version numbers to Ensembl transcript identifiers

<span id="opt_gene_version"></span>

### `--gene_version`

Add version numbers to Ensembl gene identifiers

<span id="opt_protein"></span>

### `--protein`

Add the Ensembl protein identifier to the output where appropriate. *Not used by default*

**Output fields:** ENSP

**Incompatible with:**

[--most_severe](/help/articles/vep-options-filtering#opt_most_severe) [--summary](/help/articles/vep-options-filtering#opt_summary)

<span id="opt_symbol"></span>

### `--symbol`

Adds the gene symbol (e.g. HGNC) (where available) to the output. Some gene symbol, e.g. HGNC, are only available in merged and Ensembl caches and therefore should **not** be used with the [--refseq](/help/articles/vep-options-cache#opt_refseq) cache option. *Not used by default*

**Output fields:** SYMBOL, SYMBOL_SOURCE, HGNC_ID

**Incompatible with:**

[--most_severe](/help/articles/vep-options-filtering#opt_most_severe) [--summary](/help/articles/vep-options-filtering#opt_summary)

<span id="opt_ccds"></span>

### `--ccds`

Adds the CCDS transcript identifer (where available) to the output. *Not used by default*

**Output fields:** CCDS

**Incompatible with:**

[--most_severe](/help/articles/vep-options-filtering#opt_most_severe) [--summary](/help/articles/vep-options-filtering#opt_summary)

<span id="opt_uniprot"></span>

### `--uniprot`

Adds best match accessions for translated protein products from three [UniProt](http://www.ebi.ac.uk/uniprot)-related databases (SWISSPROT, TREMBL and UniParc) to the output. *Not used by default*

**Output fields:** SWISSPROT, TREMBL, UNIPARC, UNIPROT_ISOFORM

**Incompatible with:**

[--most_severe](/help/articles/vep-options-filtering#opt_most_severe) [--summary](/help/articles/vep-options-filtering#opt_summary)

<span id="opt_tsl"></span>

### `--tsl`

Adds the [transcript support level](https://jun2026.archive.ensembl.org/glossary/ENSGLOSSARY_0000005) for this transcript to the output. *Not used by default*

### Note

Only available for human on the GRCh38 assembly

**Output fields:** TSL

**Incompatible with:**

[--most_severe](/help/articles/vep-options-filtering#opt_most_severe) [--summary](/help/articles/vep-options-filtering#opt_summary)

<span id="opt_appris"></span>

### `--appris`

Adds the [APPRIS](https://jun2026.archive.ensembl.org/glossary/ENSGLOSSARY_0000012) isoform annotation for this transcript to the output. *Not used by default*

### Note

Only available for human on the GRCh38 assembly

**Output fields:** APPRIS

**Incompatible with:**

[--most_severe](/help/articles/vep-options-filtering#opt_most_severe) [--summary](/help/articles/vep-options-filtering#opt_summary)

<span id="opt_canonical"></span>

### `--canonical`

Adds a flag indicating if the transcript is the canonical transcript for the gene. *Not used by default*

**Output fields:** CANONICAL

**Incompatible with:**

[--most_severe](/help/articles/vep-options-filtering#opt_most_severe) [--summary](/help/articles/vep-options-filtering#opt_summary)

<span id="opt_mane"></span>

### `--mane`

Adds a flag indicating if the transcript is the [MANE Select](https://jun2026.archive.ensembl.org/info/genome/genebuild/mane.html) or [MANE Plus Clinical](https://jun2026.archive.ensembl.org/info/genome/genebuild/mane.html) transcript for the gene. If [--cache](/help/articles/vep-options-cache#opt_cache) or [--database](/help/articles/vep-options-database#opt_database) annotation source is used, the alternative transcript stable ID is also added. *Not used by default*

### Note

Only available for human on the GRCh38 assembly

**Output fields:** MANE, MANE_SELECT, MANE_PLUS_CLINICAL

**Incompatible with:**

[--most_severe](/help/articles/vep-options-filtering#opt_most_severe) [--summary](/help/articles/vep-options-filtering#opt_summary)

<span id="opt_mane_select"></span>

### `--mane_select`

Adds a flag indicating if the transcript is the [MANE Select](https://jun2026.archive.ensembl.org/info/genome/genebuild/mane.html) transcript for the gene. If [--cache](/help/articles/vep-options-cache#opt_cache) or [--database](/help/articles/vep-options-database#opt_database) annotation source is used, the alternative transcript stable ID is also added. *Not used by default*

### Note

Only available for human on the GRCh38 assembly

**Output fields:** MANE, MANE_SELECT

**Incompatible with:**

[--most_severe](/help/articles/vep-options-filtering#opt_most_severe) [--summary](/help/articles/vep-options-filtering#opt_summary)

<span id="opt_biotype"></span>

### `--biotype`

Adds the biotype of the transcript or regulatory feature. *Not used by default*

**Output fields:** BIOTYPE

**Incompatible with:**

[--most_severe](/help/articles/vep-options-filtering#opt_most_severe) [--summary](/help/articles/vep-options-filtering#opt_summary)

<span id="opt_domains"></span>

### `--domains`

Adds names of overlapping protein domains to output. *Not used by default*

**Output fields:** DOMAINS

**Incompatible with:**

[--most_severe](/help/articles/vep-options-filtering#opt_most_severe) [--summary](/help/articles/vep-options-filtering#opt_summary)

<span id="opt_xref_refseq"></span>

### `--xref_refseq`

Output aligned RefSeq mRNA identifier for transcript. *Not used by default*

### Note

The RefSeq and Ensembl transcripts aligned in this way MAY NOT, AND FREQUENTLY WILL NOT, match exactly in sequence, exon structure and protein product

**Output fields:** RefSeq

**Incompatible with:**

[--most_severe](/help/articles/vep-options-filtering#opt_most_severe) [--summary](/help/articles/vep-options-filtering#opt_summary)

<span id="opt_synonyms"></span>

### `--synonyms [file]`

Load a file of chromosome synonyms. File should be tab-delimited with the primary identifier in column 1 and the synonym in column 2. Synonyms allow different chromosome identifiers to be used in the input file and any annotation source (cache, database, GFF, custom file, FASTA file). *Not used by default*

