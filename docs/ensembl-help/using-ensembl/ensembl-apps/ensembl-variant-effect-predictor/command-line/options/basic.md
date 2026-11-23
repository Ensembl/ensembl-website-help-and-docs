---
title: VEP basic options
description: "Command line reference for VEP: basic options."
slug: vep-cli-options-basic
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

# VEP basic options

## Option reference

- **Basic options (this section)**
- [Cache options](/help/articles/vep-cache-options)
- [Other annotation sources](/help/articles/vep-other-annotation-sources)
- [Output format options](/help/articles/vep-output-format-options)
- [Output options](/help/articles/vep-output-options)
- [Identifiers](/help/articles/vep-identifiers)
- [Co-located variants](/help/articles/vep-co-located-variants)
- [Filtering and QC options](/help/articles/vep-filtering-and-qc-options)
- [Database options](/help/articles/vep-database-options)

[Running VEP and choosing options](/help/articles/running-vep)

<span id="basic"></span>

## Basic options

<span id="opt_help"></span>

### `--help`

Display help message and quit

<span id="opt_quiet"></span>

### `--quiet`

**Alternate:** `-q`

Suppress warning messages.*Not used by default*

**Incompatible with:** [--verbose](/help/articles/vep-basic-options#opt_verbose)

<span id="opt_verbose"></span>

### `--verbose`

**Alternate:** `-v`

Print out a bit more information while running. *Not used by default*

**Incompatible with:** [--quiet](/help/articles/vep-basic-options#opt_quiet)

<span id="opt_config"></span>

### `--config [filename]`

Load configuration options from a config file. The config file should consist of whitespace-separated pairs of option names and settings e.g.:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">output_file   my_output.txt
species       mus_musculus
format        vcf
host          useastdb.ensembl.org
</code></pre>

A config file can also be implicitly read; save the file as **$HOME/.vep/vep.ini** (or equivalent directory if using [--dir](/help/articles/vep-cache-options#opt_dir)). Any options in this file will be overridden by those specified in a config file using [--config](/help/articles/vep-basic-options#opt_config), and in turn by any options specified on the command line. You can create a quick version file of this by setting the flags as normal and running Ensembl VEP in verbose (**-v**) mode. This will output lines that can be copied to a config file that can be loaded in on the next run using [--config](/help/articles/vep-basic-options#opt_config). *Not used by default*

<span id="opt_everything"></span>

### `--everything`

**Alternate:** `-e`

Shortcut flag to switch on all of the following:

[--sift b](/help/articles/vep-output-options#opt_sift), [--polyphen b](/help/articles/vep-output-options#opt_polyphen), [--ccds](/help/articles/vep-identifiers#opt_ccds), [--hgvs](/help/articles/vep-identifiers#opt_hgvs), [--symbol](/help/articles/vep-identifiers#opt_symbol), [--numbers](/help/articles/vep-output-options#opt_numbers), [--domains](/help/articles/vep-identifiers#opt_domains), [--regulatory](/help/articles/vep-output-options#opt_regulatory), [--canonical](/help/articles/vep-identifiers#opt_canonical), [--protein](/help/articles/vep-identifiers#opt_protein), [--biotype](/help/articles/vep-identifiers#opt_biotype), [--af](/help/articles/vep-co-located-variants#opt_af), [--af_1kg](/help/articles/vep-co-located-variants#opt_af_1kg), [--af_gnomade](/help/articles/vep-co-located-variants#opt_af_gnomade), [--af_gnomadg](/help/articles/vep-co-located-variants#opt_af_gnomadg), [--max_af](/help/articles/vep-co-located-variants#opt_max_af), [--pubmed](/help/articles/vep-co-located-variants#opt_pubmed), [--uniprot](/help/articles/vep-identifiers#opt_uniprot), [--mane](/help/articles/vep-identifiers#opt_mane), [--tsl](/help/articles/vep-identifiers#opt_tsl), [--appris](/help/articles/vep-identifiers#opt_appris), [--variant_class](/help/articles/vep-output-options#opt_variant_class), [--gene_phenotype](/help/articles/vep-output-options#opt_gene_phenotype), [--mirna](/help/articles/vep-output-options#opt_mirna)

<span id="opt_species"></span>

### `--species [species]`

Species for your data. This can be the latin name e.g. "homo_sapiens" or any Ensembl alias e.g. "mouse". Specifying the latin name can speed up initial database connection as the registry does not have to load all available database aliases on the server. *Default = "homo_sapiens"*

<span id="opt_assembly"></span>

### `--assembly [name]`

**Alternate:** `-a`

Select the assembly version to use if more than one available. If using the cache, you must have the appropriate assembly's cache file installed. If not specified and you have only 1 assembly version installed, this will be chosen by default. *Default = use found assembly version*

<span id="opt_input_file"></span>

### `--input_file [filename]`

**Alternate:** `-i`

Input file name. If not specified, Ensembl VEP will attempt to read from STDIN. Can use compressed file (gzipped).

<span id="opt_input_data"></span>

### `--input_data [string]`

**Alternate:** `--id`

Raw input data as a string. May be used, for example, to input a single rsID or HGVS notation quickly to Ensembl VEP:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">--input_data rs699
</code></pre>

<span id="opt_format"></span>

### `--format [format]`

[Input file format](/help/articles/vep-data-formats#input) - one of "ensembl", "vcf", "hgvs", "id", "region", "spdi". By default, Ensembl VEP auto-detects the input file format. Using this option you can specify the input file is Ensembl, VCF, IDs, HGVS, SPDI or region format. Can use compressed version (gzipped) of any file format listed above. *Auto-detects format by default*

<span id="opt_output_file"></span>

### `--output_file [filename]`

**Alternate:** `-o`

Output file name. Results can write to STDOUT by specifying 'STDOUT' as the output file name - this will force quiet mode. *Default = "variant_effect_output.txt"*

<span id="opt_force_overwrite"></span>

### `--force_overwrite`

**Alternate:** `--force`

By default, Ensembl VEP will fail with an error if the output file already exists. You can force the overwrite of the existing file by using this flag. *Not used by default*

<span id="opt_no_stats"></span>

### `--no_stats`

Don't generate a stats file. Provides marginal gains in run time.

<span id="opt_stats_file"></span>

### `--stats_file [filename]`

**Alternate:** `--sf`

[Summary stats file](/help/articles/vep-data-formats#stats) name. This file contains a summary of the Ensembl VEP run. If stats are returned in an HTML file (default), the filename should end in `.html` or `.htm`. *Default = "variant_effect_output.txt_summary.html"*

<span id="opt_stats_html"></span>

### `--stats_html`

Generate a [HTML stats file](/help/articles/vep-data-formats#stats) (default).

<span id="opt_stats_text"></span>

### `--stats_text`

Generate a plain text stats file. Can be combined with [`--stats_html`](/help/articles/vep-basic-options#opt_stats_html) to generate both plain text and HTML stats files.

<span id="opt_warning_file"></span>

### `--warning_file [filename]`

File name to write warnings and errors to. *Default = STDERR (standard error)*

<span id="opt_skipped_variants_file"></span>

### `--skipped_variants_file [filename]`

File name to write skipped variants to. *Default = STDERR (standard error)*

<span id="opt_max_sv_size"></span>

### `--max_sv_size`

Limit the maximum Structural Variant size Ensembl VEP will process to reduce potential memory usage. Set to -1 to disable this filter. **Warning:** disabling this filter can result in a large memory usage and slow runtime. *Default = 10000000*

<span id="opt_no_check_variants_order"></span>

### `--no_check_variants_order`

Permit the use of unsorted input files. However running Ensembl VEP on unsorted input files slows down the tool and requires more memory.

<span id="opt_fork"></span>

### `--fork [num_forks]`

Enable [forking](/help/articles/vep-other-information#faster), using the specified number of forks. Forking can dramatically improve runtime. *Not used by default*

<span id="opt_safe"></span>

### `--safe`

By default, an Ensembl VEP run is successful even when a plugin reports issues. Use this flag to ensure Ensembl VEP fails if a plugin raises warnings or generates compilation errors. This is particularly useful to ensure plugins run successfully when using Ensembl VEP in pipelines. *Not used by default*

