---
title: Running VEP
description: Run VEP with command line options, configuration files and
  environment variables.
slug: vep-cli-running-vep
related_articles:
  - href: getting-started.md
  - href: tutorial.md
  - href: download-and-install.md
  - href: running-vep.md
  - href: options/basic.md
  - href: options/cache.md
  - href: options/annotation.md
  - href: options/output-format.md
  - href: options/output.md
  - href: options/identifiers.md
  - href: options/existing-variants.md
  - href: options/filtering.md
  - href: options/database.md
  - href: data-formats.md
  - href: annotation-sources.md
  - href: filtering-results.md
  - href: custom-annotations.md
  - href: plugins.md
  - href: plugin-catalogue.md
  - href: examples-and-use-cases.md
  - href: other-information.md
  - href: faq.md
  - href: release-history.md
---

<span id="top"></span>

# Running VEP

## Option reference

- [Basic options](/help/articles/vep-basic-options)
- [Cache options](/help/articles/vep-cache-options)
- [Other annotation sources](/help/articles/vep-other-annotation-sources)
- [Output format options](/help/articles/vep-output-format-options)
- [Output options](/help/articles/vep-output-options)
- [Identifiers](/help/articles/vep-identifiers)
- [Co-located variants](/help/articles/vep-co-located-variants)
- [Filtering and QC options](/help/articles/vep-filtering-and-qc-options)
- [Database options](/help/articles/vep-database-options)

## Using the command line

Ensembl VEP is run on the command line as follows (assuming you are in the ensembl-vep directory):

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep [options]
</code></pre>

where \[options\] represent a set of flags and options. A basic set of flags can be listed using [--help](/help/articles/vep-basic-options#opt_help):

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep --help
</code></pre>

Ensembl VEP can be run in the following modes:

- For optimum performance, download a cache file for your species of interest, using either the [installer](/help/articles/download-and-install-vep#installer) or by following the [VEP Cache documentation](/help/articles/vep-annotation-sources#pre), and run Ensembl VEP with either the [--cache](/help/articles/vep-cache-options#opt_cache) or [--offline](/help/articles/vep-cache-options#opt_offline) option.

- By connecting to the public Ensembl database servers in place of a cache. This can be adequate when annotating small files, but the database servers can become busy and slow. To enable this option, use [--database](/help/articles/vep-database-options#opt_database).

- To run Ensembl VEP using your own species and assembly, please use a [--fasta](/help/articles/vep-cache-options#opt_fasta) file and [--gff](/help/articles/vep-other-annotation-sources#opt_gff) or [--gtf](/help/articles/vep-other-annotation-sources#opt_gtf) annotation.

To run Ensembl VEP with default options, use the following command:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep --cache -i input.txt -o output.txt
</code></pre>

where `input.txt` contains data in one of the compatible [input formats](/help/articles/vep-data-formats#input) and `output.txt` is the [output file](/help/articles/vep-data-formats#output) to be created.

Options can be passed as the full string (e.g. [--format](/help/articles/vep-basic-options#opt_format)), or as the shortest unique string among the options (e.g. [--form](/help/articles/vep-basic-options#opt_format) for [--format](/help/articles/vep-basic-options#opt_format), since there is another option [--force_overwrite](/help/articles/vep-basic-options#opt_force_overwrite)).

You may use one or two hypen ("-") characters before each option name; **--cache** or **-cache**.

Ensembl VEP options can also be read from:

- **Configuration files** using [--config](/help/articles/vep-basic-options#opt_config). Options set in configuration files are overriden if specified on the command line.
- **Environment variables** that start with prefix `VEP_`. For instance, you can set the cache flag with `export VEP_CACHE=1` and the input flag with `export VEP_INPUT="/path/to/input.txt"` before running `./vep`. Options set in environment variables are overriden if specified in configuration files or on the command line.

<span id="nv_species"></span>

### Running Ensembl VEP on non-vertebrate species

To use Ensembl VEP on non-vertebrate species, you need to use extra options:

- **Database** access: add the option [--genomes](/help/articles/vep-database-options#opt_genomes) to point to the correct database server.

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i input.txt -o output.txt --species triticum_aestivum --database --genomes
  </code></pre>

  Some of the non-vetebrate species databases (mainly bacteria and protists) are composed of a collection of species. For these databases the flag "[--is_multispecies](/help/articles/vep-database-options#opt_is_multispecies) 1" is required.

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i input.txt -o output.txt --species protists_euglenozoa1 --database --genomes --is_multispecies 1
  </code></pre>

- **Cache** access: use the option "[--cache_version](/help/articles/vep-cache-options#opt_cache_version) *eg_version*" where *eg_version* is the [Ensembl genomes](http://ensemblgenomes.org/) version number, which differs from the Ensembl vertebrates/VEP version numbers (116).

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i input.txt -o output.txt --species triticum_aestivum --cache --cache_version 42
  </code></pre>

  More information about the Ensembl VEP cache is available [here](/help/articles/vep-annotation-sources#cache).
