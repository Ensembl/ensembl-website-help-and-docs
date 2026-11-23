---
title: VEP other annotation sources
description: "Command line reference for VEP: other annotation sources."
slug: vep-cli-options-annotation
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

# VEP other annotation sources

## Option reference

- [Basic options](/help/articles/vep-basic-options)
- [Cache options](/help/articles/vep-cache-options)
- **Other annotation sources (this section)**
- [Output format options](/help/articles/vep-output-format-options)
- [Output options](/help/articles/vep-output-options)
- [Identifiers](/help/articles/vep-identifiers)
- [Co-located variants](/help/articles/vep-co-located-variants)
- [Filtering and QC options](/help/articles/vep-filtering-and-qc-options)
- [Database options](/help/articles/vep-database-options)

[Running VEP and choosing options](/help/articles/running-vep)

<span id="other"></span>

## Other annotation sources

<span id="opt_plugin"></span>

### `--plugin [plugin name]`

Use named plugin. Plugin modules should be installed in the Plugins subdirectory of the Ensembl VEP cache directory (defaults to $HOME/.vep/). Multiple plugins can be used by supplying the [--plugin](/help/articles/vep-other-annotation-sources#opt_plugin) flag multiple times. See [plugin documentation](/help/articles/vep-plugins). *Not used by default*

**Output fields:** Plugin-dependent

<span id="opt_custom"></span>

### `--custom file=[filename]`

Add custom annotation to the output. Files must be tabix indexed or in the bigWig format. Multiple files can be specified by supplying the [--custom](/help/articles/vep-other-annotation-sources#opt_custom) flag multiple times. [See here](/help/articles/vep-custom-annotations) for full details. *Not used by default*

**Output fields:** SOURCE, Custom file dependent

<span id="opt_gff"></span>

### `--gff [filename]`

Use [GFF transcript annotations](/help/articles/vep-annotation-sources#gff) in \[filename\] as an annotation source. Requires a [FASTA file](/help/articles/vep-cache-options#opt_fasta) of genomic sequence. *Not used by default*

**Output fields:** SOURCE

<span id="opt_gtf"></span>

### `--gtf [filename]`

Use [GTF transcript annotations](/help/articles/vep-annotation-sources#gff) in \[filename\] as an annotation source. Requires a [FASTA file](/help/articles/vep-cache-options#opt_fasta) of genomic sequence. *Not used by default*

**Output fields:** SOURCE

<span id="opt_bam"></span>

### `--bam [filename]`

**ADVANCED** Use BAM file of sequence alignments to correct transcript models not derived from reference genome sequence. Used to correct [RefSeq transcript models](/help/articles/vep-other-information#refseq_bam). Not required when using with the refseq or merged caches as they are already corrected, if used with those caches, errors may occur. Enables [--use_transcript_ref](/help/articles/vep-other-annotation-sources#opt_use_transcript_ref); add [--use_given_ref](/help/articles/vep-other-annotation-sources#opt_use_given_ref) to override this behaviour. *Not used by default*

**Output fields:** BAM_EDIT

<span id="opt_use_transcript_ref"></span>

### `--use_transcript_ref`

By default Ensembl VEP uses the reference allele provided in the input file to calculate consequences for the provided alternate allele(s). Use this flag to force Ensembl VEP to replace the provided reference allele with sequence derived from the overlapped transcript. This is especially relevant when using the RefSeq cache, see [documentation](/help/articles/vep-other-information#refseq_bam) for more details. The [GIVEN_REF and USED_REF fields](/help/articles/vep-data-formats#output) are set in the output to indicate any change. *Not used by default*

**Output fields:** GIVEN_REF, USED_REF

<span id="opt_use_given_ref"></span>

### `--use_given_ref`

Using [--bam](/help/articles/vep-other-annotation-sources#opt_bam) or a [BAM-edited RefSeq cache](/help/articles/vep-other-information#refseq_bam) by default enables [--use_transcript_ref](/help/articles/vep-other-annotation-sources#opt_use_transcript_ref); add this flag to override this behaviour and use the provided reference allele from the input. *Not used by default*

<span id="opt_custom_multi_allelic"></span>

### `--custom_multi_allelic`

By default, comma separated lists found within the INFO field of custom annotation VCFs are assumed to be allele specific. For example, a variant with allele_string A/G/C with associated custom annotation 'single,double,triple' will associate triple with C, double with G and single with A. This flag instructs Ensembl VEP to return all annotations for all alleles. *Not used by default*

