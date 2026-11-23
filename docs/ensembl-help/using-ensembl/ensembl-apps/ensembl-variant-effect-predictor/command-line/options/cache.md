---
title: VEP cache options
description: "Command line reference for VEP: cache options."
slug: vep-cli-options-cache
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

# VEP cache options

## Option reference

- [Basic options](/help/articles/vep-basic-options)
- **Cache options (this section)**
- [Other annotation sources](/help/articles/vep-other-annotation-sources)
- [Output format options](/help/articles/vep-output-format-options)
- [Output options](/help/articles/vep-output-options)
- [Identifiers](/help/articles/vep-identifiers)
- [Co-located variants](/help/articles/vep-co-located-variants)
- [Filtering and QC options](/help/articles/vep-filtering-and-qc-options)
- [Database options](/help/articles/vep-database-options)

[Running VEP and choosing options](/help/articles/running-vep)

<span id="cacheopt"></span>

## Cache options

<span id="opt_cache"></span>

### `--cache`

Enables use of the [cache](/help/articles/vep-annotation-sources#cache). Add [--refseq](/help/articles/vep-cache-options#opt_refseq) or [--merged](/help/articles/vep-cache-options#opt_merged) to use the refseq or merged cache, (if installed).

**Incompatible with:** [--database](/help/articles/vep-database-options#opt_database)

<span id="opt_dir"></span>

### `--dir [directory]`

Specify the base cache/plugin directory to use. *Default = "$HOME/.vep/"*

<span id="opt_dir_cache"></span>

### `--dir_cache [directory]`

Specify the cache directory to use. *Default = "$HOME/.vep/"*

<span id="opt_dir_plugins"></span>

### `--dir_plugins [directory]`

Specify the plugin directory to use. *Default = "$HOME/.vep/"*

<span id="opt_offline"></span>

### `--offline`

Enable [offline mode](/help/articles/vep-annotation-sources#offline). No database connections will be made, and a cache file or [GFF](/help/articles/vep-other-annotation-sources#opt_gff)/[GTF](/help/articles/vep-other-annotation-sources#opt_gtf) file is required for annotation. Add [--refseq](/help/articles/vep-cache-options#opt_refseq) to use the refseq cache (if installed). *Not used by default*

**Incompatible with:**

[--database](/help/articles/vep-database-options#opt_database) [--check_svs](/help/articles/vep-co-located-variants#opt_check_svs) [--lrg](/help/articles/vep-database-options#opt_lrg)

<span id="opt_fasta"></span>

### `--fasta [file|dir]`

**Alternate:** `--fa`

Specify a FASTA file or a directory containing FASTA files to use to look up reference sequence. The first time you run Ensembl VEP with this parameter an index will be built which can take a few minutes. This is required if fetching HGVS annotations ([--hgvs](/help/articles/vep-identifiers#opt_hgvs)) or checking reference sequences ([--check_ref](/help/articles/vep-filtering-and-qc-options#opt_check_ref)) in offline mode ([--offline](/help/articles/vep-cache-options#opt_offline)), and optional with some performance increase in cache mode ([--cache](/help/articles/vep-cache-options#opt_cache)). See [documentation](/help/articles/vep-annotation-sources#fasta) for more details. *Not used by default*

<span id="opt_refseq"></span>

### `--refseq`

Specify this option if you have installed the RefSeq cache in order for Ensembl VEP to pick up the alternate cache directory. This cache contains transcript objects corresponding to RefSeq transcripts. Consequence output will be given relative to these transcripts in place of the default Ensembl transcripts (see [documentation](/help/articles/vep-other-information#refseq))

**Output fields:** REFSEQ_MATCH, BAM_EDIT

**Incompatible with:**

[--gencode_basic](/help/articles/vep-filtering-and-qc-options#opt_gencode_basic) [--gencode_primary](/help/articles/vep-filtering-and-qc-options#opt_gencode_primary) [--merged](/help/articles/vep-cache-options#opt_merged)

<span id="opt_merged"></span>

### `--merged`

Use the merged Ensembl and RefSeq cache. Consequences are flagged with the SOURCE of each transcript used.

**Output fields:** REFSEQ_MATCH, BAM_EDIT, SOURCE

**Incompatible with:** [--refseq](/help/articles/vep-cache-options#opt_refseq)

<span id="opt_cache_version"></span>

### `--cache_version`

Use a different cache version than the assumed default (the Ensembl VEP version). This should be used with Ensembl Genomes caches since their version numbers do not match Ensembl versions. For example, the VEP/Ensembl version may be 88 and the Ensembl Genomes version 35. *Not used by default*

<span id="opt_show_cache_info"></span>

### `--show_cache_info`

Show source version information for selected cache and quit

<span id="opt_buffer_size"></span>

### `--buffer_size [number]`

Sets the internal buffer size, corresponding to the number of variants that are read in to memory simultaneously. Set this lower to use less memory at the expense of longer run time, and higher to use more memory with a faster run time. *Default = 5000*

