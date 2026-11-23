---
title: VEP on the command line
description: Install and run the Ensembl Variant Effect Predictor locally to annotate variants with consequences, frequencies and custom data.
slug: vep-cli-getting-started
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

# VEP on the command line

Use the Ensembl Variant Effect Predictor (VEP) to analyse variation data on your own computer or compute cluster. The command line tool annotates variants with their effects on transcripts, proteins and regulatory regions, and can add known variant identifiers, allele frequencies and predictions from other resources.

These pages describe **VEP release 116 (June 2026)**. Keep the VEP software, cache and plugins on matching releases, and choose the cache and reference sequence for your input assembly. The [release history](/help/articles/vep-release-history) records changes in this and earlier versions.

## Quick start

You will need Git, Perl and the dependencies described in [Download and install](/help/articles/vep-download-and-install). Container instructions are available for [Docker](/help/articles/vep-download-and-install#docker) and [Singularity](/help/articles/vep-download-and-install#singularity), with a separate [Windows guide](/help/articles/vep-download-and-install#windows).

### 1. Download VEP

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-bash">git clone --branch release/116 https://github.com/Ensembl/ensembl-vep.git
cd ensembl-vep
</code></pre>

### 2. Install the software and a cache

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-bash">perl INSTALL.pl
</code></pre>

Follow the installer prompts to install the dependencies and the **homo_sapiens cache for GRCh38** used by the example below. For your own data, select the appropriate species and assembly. See [annotation sources](/help/articles/vep-annotation-sources) for cache contents, reference FASTA files and alternatives to caches.

### 3. Annotate the example variants

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-bash">./vep -i examples/homo_sapiens_GRCh38.vcf --cache
</code></pre>

By default, VEP writes annotations to `variant_effect_output.txt` and generates an HTML statistics report. See [data formats](/help/articles/vep-data-formats#output) to interpret the output or choose VCF, tab-delimited or JSON output.

## Work through an analysis

The [tutorial](/help/articles/vep-tutorial) walks through installation, annotation and filtering. For your own analysis, use [Running VEP](/help/articles/vep-running-vep) to choose options and configuration settings, then [filter the results](/help/articles/vep-filtering-results) to select annotations of interest.

You can add your own datasets with [custom annotations](/help/articles/vep-custom-annotations) and extend VEP with [plugins](/help/articles/vep-plugins). The [examples and use cases](/help/articles/vep-examples-and-use-cases) cover frequencies, conservation, structural variants and pangenome assemblies.

<span id="contents"></span>

## Find reference information

Use the menu to browse the full CLI documentation, including the option reference and plugin catalogue. Read [other information](/help/articles/vep-other-information) for performance, transcript selection, HGVS, RefSeq and variant normalisation, or consult the [frequently asked questions](/help/articles/vep-faq).

For browser-based analyses, see [How to use the Ensembl VEP web app](/help/articles/how-to-use-the-ensembl-variant-effect-predictor-vep).

## Cite VEP and get help

If you use VEP in your work, cite [McLaren et al. (2016), The Ensembl Variant Effect Predictor](https://doi.org/10.1186/s13059-016-0974-4).

Report software issues in the [ensembl-vep repository](https://github.com/Ensembl/ensembl-vep/issues) and plugin issues in the [VEP_plugins repository](https://github.com/Ensembl/VEP_plugins/issues).

This documentation is adapted from the [June 2026 Ensembl VEP command line documentation](https://jun2026.archive.ensembl.org/info/docs/tools/vep/script/index.html). Links to Ensembl material that has not been migrated lead to that archive.
