---
title: VEP co-located variants
description: "Command line reference for VEP: co-located variants."
slug: vep-cli-options-existing-variants
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

# VEP co-located variants

## Option reference

- [Basic options](/help/articles/vep-basic-options)
- [Cache options](/help/articles/vep-cache-options)
- [Other annotation sources](/help/articles/vep-other-annotation-sources)
- [Output format options](/help/articles/vep-output-format-options)
- [Output options](/help/articles/vep-output-options)
- [Identifiers](/help/articles/vep-identifiers)
- **Co-located variants (this section)**
- [Filtering and QC options](/help/articles/vep-filtering-and-qc-options)
- [Database options](/help/articles/vep-database-options)

[Running VEP and choosing options](/help/articles/running-vep)

<span id="existing"></span>

## Co-located variants

<span id="opt_check_existing"></span>

### `--check_existing`

Checks for the existence of known variants that are co-located with your input. By default the alleles are compared and variants on an allele-specific basis - to compare only coordinates, use [--no_check_alleles](/help/articles/vep-co-located-variants#opt_no_check_alleles). Some databases may contain variants with unknown (null) alleles and these are included by default; to exclude them use [--exclude_null_alleles](/help/articles/vep-co-located-variants#opt_exclude_null_alleles). See [this page](/help/articles/vep-other-information#colocated) for more details. *Not used by default*

**Output fields:** Existing_variation, CLIN_SIG, SOMATIC, PHENO

<span id="opt_check_svs"></span>

### `--check_svs`

Checks for the existence of structural variants that overlap your input. Currently requires database access. *Not used by default*

**Output fields:** SV

**Incompatible with:** [--offline](/help/articles/vep-cache-options#opt_offline)

<span id="opt_clin_sig_allele"></span>

### `--clin_sig_allele [1|0]`

Return allele specific clinical significance. Setting this option to 0 will provide all known clinical significance values at the given locus. *Default: 1 (Provide allele-specific annotations)*

**Output fields:** CLIN_SIG

<span id="opt_clinvar_somatic"></span>

### `--clinvar_somatic_classification`

Return the somatic classification of a variant as reported by ClinVar. *Not used by default*

**Output fields:** SOMATIC_CLASSIFICATION

<span id="opt_exclude_null_alleles"></span>

### `--exclude_null_alleles`

Do not include variants with unknown alleles when checking for co-located variants. Our human database contains variants from HGMD and COSMIC for which the alleles are not publically available; by default these are included when using [--check_existing](/help/articles/vep-co-located-variants#opt_check_existing), use this flag to exclude them. *Not used by default*

<span id="opt_no_check_alleles"></span>

### `--no_check_alleles`

When checking for existing variants, by default Ensembl VEP only reports a co-located variant if none of the input alleles are novel. For example, if your input variant has alleles A/G, and an existing co-located variant has alleles A/C, the co-located variant will not be reported. Strand is also taken into account - in the same example, if the input variant has alleles T/G but on the negative strand, then the co-located variant **will** be reported since its alleles match the reverse complement of input variant. Use this flag to disable this behaviour and compare using coordinates alone. *Not used by default*

<span id="opt_af"></span>

### `--af`

Add the global allele frequency (AF) from 1000 Genomes Phase 3 data for any known co-located variant to the output. For this and all --af\_\* flags, the frequency reported is for the **input allele** only, not necessarily the non-reference or derived allele. *Not used by default*

**Output fields:** AF

<span id="opt_max_af"></span>

### `--max_af`

Report the highest allele frequency observed in any population from 1000 genomes, ESP or gnomAD. *Not used by default*

**Output fields:** MAX_AF, MAX_AF_POPS

**Incompatible with:** [--database](/help/articles/vep-database-options#opt_database)

<span id="opt_af_1kg"></span>

### `--af_1kg`

Add allele frequency from continental populations (AFR,AMR,EAS,EUR,SAS) of [1000 Genomes Phase 3](http://www.1000genomes.org/) to the output. Must be used with [--cache](/help/articles/vep-cache-options#opt_cache). *Not used by default*

**Output fields:** AFR_AF, AMR_AF, EAS_AF, EUR_AF, SAS_AF

**Incompatible with:** [--database](/help/articles/vep-database-options#opt_database)

<span id="opt_af_esp"></span>

### `--af_esp`

Include allele frequency from [NHLBI-ESP](http://evs.gs.washington.edu/EVS/) populations. Must be used with [--cache](/help/articles/vep-cache-options#opt_cache). *Please note this option is deprecated and will produce an error from Ensembl VEP version 107 onwards.*

**Output fields:** AA_AF, EA_AF

**Incompatible with:** [--database](/help/articles/vep-database-options#opt_database)

<span id="opt_af_gnomade"></span>

### `--af_gnomade`

**Alternate:** `--af_gnomad`

Include allele frequency from [Genome Aggregation Database (gnomAD)](http://gnomad.broadinstitute.org/) exome populations. Note only data from the gnomAD exomes are included; to retrieve data from the additional genomes data set, see [this guide](/help/articles/vep-examples-and-use-cases#gnomad). Must be used with [--cache](/help/articles/vep-cache-options#opt_cache) *Not used by default*

**Output fields:** gnomADe_AF, gnomADe_AFR_AF, gnomADe_AMR_AF, gnomADe_ASJ_AF, gnomADe_EAS_AF, gnomADe_FIN_AF, gnomADe_NFE_AF, gnomADe_OTH_AF, gnomADe_SAS_AF

**Incompatible with:**

[--database](/help/articles/vep-database-options#opt_database) [--af_gnomad](/help/articles/vep-co-located-variants#opt_af_gnomade)

<span id="opt_af_gnomadg"></span>

### `--af_gnomadg`

Include allele frequency from [Genome Aggregation Database (gnomAD)](http://gnomad.broadinstitute.org/) genome populations. Note only data from the gnomAD genomes are included; to retrieve data from the additional genomes data set, see [this guide](/help/articles/vep-examples-and-use-cases#gnomad). Must be used with [--cache](/help/articles/vep-cache-options#opt_cache) *Not used by default*

**Output fields:** gnomADg_AF, gnomADg_AFR_AF, gnomADg_AMI_AF, gnomADg_AMR_AF, gnomADg_ASJ_AF, gnomADg_EAS_AF, gnomADg_FIN_AF, gnomADg_MID_AF, gnomADg_NFE_AF, gnomADg_OTH_AF, gnomADg_SAS_AF

**Incompatible with:** [--database](/help/articles/vep-database-options#opt_database)

<span id="opt_af_exac"></span>

### `--af_exac`

Include allele frequency from [ExAC project](http://exac.broadinstitute.org/) populations. Must be used with [--cache](/help/articles/vep-cache-options#opt_cache). *Deprecated.*

**Output fields:** ExAC_AF, ExAC_Adj_AF, ExAC_AFR_AF, ExAC_AMR_AF, ExAC_EAS_AF, ExAC_FIN_AF, ExAC_NFE_AF, ExAC_OTH_AF, ExAC_SAS_AF

**Incompatible with:** [--database](/help/articles/vep-database-options#opt_database)

<span id="opt_pubmed"></span>

### `--pubmed`

Report Pubmed IDs for publications that cite existing variant. Must be used with [--cache](/help/articles/vep-cache-options#opt_cache). *Not used by default*

**Output fields:** PUBMED

**Incompatible with:** [--database](/help/articles/vep-database-options#opt_database)

<span id="opt_var_synonyms"></span>

### `--var_synonyms`

Report known synonyms for co-located variants. Must be used with [--cache](/help/articles/vep-cache-options#opt_cache). *Not used by default*

**Output fields:** VAR_SYNONYMS

**Incompatible with:** [--database](/help/articles/vep-database-options#opt_database)

<span id="opt_failed"></span>

### `--failed [0|1]`

When checking for co-located variants, by default Ensembl VEP will exclude variants that have been flagged as failed. Set this flag to include such variants. *Default: 0 (exclude)*

