---
title: VEP output format options
description: "Command line reference for VEP: output format options."
slug: vep-cli-options-output-format
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

# VEP output format options

## Option reference

- [Basic options](/help/articles/vep-options-basic)
- [Cache options](/help/articles/vep-options-cache)
- [Other annotation sources](/help/articles/vep-options-annotation)
- **Output format options (this section)**
- [Output options](/help/articles/vep-options-output)
- [Identifiers](/help/articles/vep-options-identifiers)
- [Co-located variants](/help/articles/vep-options-existing-variants)
- [Filtering and QC options](/help/articles/vep-options-filtering)
- [Database options](/help/articles/vep-options-database)

[Running VEP and choosing options](/help/articles/vep-running-vep)

<span id="format"></span>

## Output format options

<span id="opt_vcf"></span>

### `--vcf`

Writes output in [VCF format](/help/articles/vep-data-formats#vcfout). Consequences are added in the INFO field of the VCF file, using the key "CSQ". Data fields are encoded separated by "|"; the order of fields is written in the VCF header. Output fields in the "CSQ" INFO field can be selected by using [--fields](/help/articles/vep-options-output-format#opt_fields).

If the input format was VCF, the file will remain unchanged save for the addition of the CSQ field (unless using any filtering). Custom data added with [--custom](/help/articles/vep-options-annotation#opt_custom) are added as separate fields, using the key specified for each data file. Commas in fields are replaced with ampersands (&) to preserve VCF format.

*Not used by default*

**Incompatible with:**

[--json](/help/articles/vep-options-output-format#opt_json) [--tab](/help/articles/vep-options-output-format#opt_tab) [--summary](/help/articles/vep-options-filtering#opt_summary) [--most_severe](/help/articles/vep-options-filtering#opt_most_severe) [--ga4gh_vrs](/help/articles/vep-options-identifiers#opt_ga4gh_vrs)

<span id="opt_tab"></span>

### `--tab`

Writes output in [tab-delimited format](/help/articles/vep-data-formats#tab). *Not used by default*

**Incompatible with:**

[--json](/help/articles/vep-options-output-format#opt_json) [--vcf](/help/articles/vep-options-output-format#opt_vcf)

<span id="opt_json"></span>

### `--json`

Writes output in [JSON format](/help/articles/vep-data-formats#json). *Not used by default*

**Incompatible with:**

[--tab](/help/articles/vep-options-output-format#opt_tab) [--vcf](/help/articles/vep-options-output-format#opt_vcf)

<span id="opt_compress_output"></span>

### `--compress_output [gzip|bgzip]`

Writes output compressed using either gzip or bgzip. *Not used by default*

<span id="opt_fields"></span>

### `--fields [list]`

Configure the output format using a comma separated list of fields. Can only be used with [tab](/help/articles/vep-data-formats#tab) ([--tab](/help/articles/vep-options-output-format#opt_tab)) or [VCF format](/help/articles/vep-data-formats#vcfout) ([--vcf](/help/articles/vep-options-output-format#opt_vcf)) output. For the tab format output, the selected fields may be those present in the default [output columns](/help/articles/vep-data-formats#output), or any of those that appear in the Extra column (including those added by plugins or custom annotations) if the appropriate output is available (e.g. use [--show_ref_allele](/help/articles/vep-options-output#opt_show_ref_allele) to access 'REF_ALLELE'). Output remains tab-delimited. For the VCF format output, the selected fields are those present within the "CSQ" INFO field.

Example of command for the tab output:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">--tab --fields &quot;Uploaded_variation,Location,Allele,Gene&quot;
</code></pre>

Example of command for the VCF format output:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">--vcf --fields &quot;Allele,Consequence,Feature_type,Feature&quot;
</code></pre>

*Not used by default*

<span id="opt_minimal"></span>

### `--minimal`

Convert alleles to their most minimal representation before consequence calculation i.e. sequence that is identical between each pair of reference and alternate alleles is trimmed off from both ends, with coordinates adjusted accordingly. Note this may lead to discrepancies between input coordinates and coordinates reported by Ensembl VEP relative to transcript sequences; to avoid issues, use [--allele_number](/help/articles/vep-options-output#opt_allele_number) and/or ensure that your input variants have unique identifiers. The MINIMISED flag is set in the Ensembl VEP output where relevant. For an insertion/deletion, the allele is minimised by default. To access the input allele before minimisation, use [--uploaded_allele](/help/articles/vep-options-output#opt_uploaded_allele). *Not used by default*

**Output fields:** MINIMISED

**Incompatible with:** [--individual](/help/articles/vep-options-output#opt_individual)
