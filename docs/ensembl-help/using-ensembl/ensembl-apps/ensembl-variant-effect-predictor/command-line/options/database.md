---
title: VEP database options
description: "Command line reference for VEP: database options."
slug: vep-cli-options-database
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

# VEP database options

## Option reference

- [Basic options](/help/articles/vep-options-basic)
- [Cache options](/help/articles/vep-options-cache)
- [Other annotation sources](/help/articles/vep-options-annotation)
- [Output format options](/help/articles/vep-options-output-format)
- [Output options](/help/articles/vep-options-output)
- [Identifiers](/help/articles/vep-options-identifiers)
- [Co-located variants](/help/articles/vep-options-existing-variants)
- [Filtering and QC options](/help/articles/vep-options-filtering)
- **Database options (this section)**

[Running VEP and choosing options](/help/articles/vep-running-vep)

<span id="dbopt"></span>

## Database options

<span id="opt_database"></span>

### `--database`

Enable Ensembl VEP to use local or remote databases.

**Incompatible with:**

[--af_1kg](/help/articles/vep-options-existing-variants#opt_af_1kg) [--af_exac](/help/articles/vep-options-existing-variants#opt_af_exac) [--af_gnomad](/help/articles/vep-options-existing-variants#opt_af_gnomade) [--af_gnomade](/help/articles/vep-options-existing-variants#opt_af_gnomade) [--af_gnomadg](/help/articles/vep-options-existing-variants#opt_af_gnomadg) [--cache](/help/articles/vep-options-cache#opt_cache) [--max_af](/help/articles/vep-options-existing-variants#opt_max_af) [--offline](/help/articles/vep-options-cache#opt_offline) [--pubmed](/help/articles/vep-options-existing-variants#opt_pubmed) [--var_synonyms](/help/articles/vep-options-existing-variants#opt_var_synonyms)

<span id="opt_host"></span>

### `--host [hostname]`

Manually define the database host to connect to. Users in the US may find connection and transfer speeds quicker using our East coast mirror, useastdb.ensembl.org. *Default = "ensembldb.ensembl.org"*

<span id="opt_user"></span>

### `--user [username]`

**Alternate:** `-u`

Manually define the database username. *Default = "anonymous"*

<span id="opt_password"></span>

### `--password [password]`

**Alternate:** `--pass`

Manually define the database password. *Not used by default*

<span id="opt_port"></span>

### `--port [number]`

Manually define the database port. *Default = 5306*

<span id="opt_genomes"></span>

### `--genomes`

Override the default connection settings with those for the Ensembl Genomes public MySQL server. Required when using any of the [Ensembl Genomes](https://www.ensemblgenomes.org/) species. *Not used by default*

<span id="opt_is_multispecies"></span>

### `--is_multispecies [0|1]`

Some of the [Ensembl Genomes](https://www.ensemblgenomes.org/) databases (mainly bacteria and protists) are composed of a collection of close species. It updates the database connection settings (i.e. the database name) if the value is set to 1. *Default: 0*

<span id="opt_lrg"></span>

### `--lrg`

Map input variants to LRG coordinates (or to chromosome coordinates if given in LRG coordinates), and provide consequences on both LRG and chromosomal transcripts. *Not used by default*

**Incompatible with:** [--offline](/help/articles/vep-options-cache#opt_offline)

<span id="opt_db_version"></span>

### `--db_version [number]`

Force Ensembl VEP to connect to a specific version of the Ensembl databases. Not recommended as there may be conflicts between software and database versions. *Not used by default*

<span id="opt_registry"></span>

### `--registry [filename]`

Defining a registry file overwrites other connection settings and uses those found in the specified registry file to connect. *Not used by default*

