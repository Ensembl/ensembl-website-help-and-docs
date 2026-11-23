---
title: VEP output options
description: "Command line reference for VEP: output options."
slug: vep-cli-options-output
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

# VEP output options

## Option reference

- [Basic options](/help/articles/vep-basic-options)
- [Cache options](/help/articles/vep-cache-options)
- [Other annotation sources](/help/articles/vep-other-annotation-sources)
- [Output format options](/help/articles/vep-output-format-options)
- **Output options (this section)**
- [Identifiers](/help/articles/vep-identifiers)
- [Co-located variants](/help/articles/vep-co-located-variants)
- [Filtering and QC options](/help/articles/vep-filtering-and-qc-options)
- [Database options](/help/articles/vep-database-options)

[Running VEP and choosing options](/help/articles/running-vep)

<span id="output"></span>

## Output options

<span id="opt_variant_class"></span>

### `--variant_class`

Output the Sequence Ontology [variant class](https://jun2026.archive.ensembl.org/info/genome/variation/prediction/classification.html#classes). *Not used by default*

**Output fields:** VARIANT_CLASS

<span id="opt_sift"></span>

### `--sift [p|s|b]`

Species limited [SIFT](http://sift.bii.a-star.edu.sg/) predicts whether an amino acid substitution affects protein function based on sequence homology and the physical properties of amino acids. Ensembl VEP can output the **p**rediction term, **s**core or **b**oth. *Not used by default*

**Output fields:** SIFT

**Incompatible with:**

[--most_severe](/help/articles/vep-filtering-and-qc-options#opt_most_severe) [--summary](/help/articles/vep-filtering-and-qc-options#opt_summary)

<span id="opt_polyphen"></span>

### `--polyphen [p|s|b]`

Human only [PolyPhen](http://genetics.bwh.harvard.edu/pph2/) is a tool which predicts possible impact of an amino acid substitution on the structure and function of a human protein using straightforward physical and comparative considerations. Ensembl VEP can output the **p**rediction term, **s**core or **b**oth. Ensembl VEP uses the humVar score by default - use [--humdiv](/help/articles/vep-output-options#opt_humdiv) to retrieve the humDiv score. *Not used by default*

**Output fields:** PolyPhen

**Incompatible with:**

[--most_severe](/help/articles/vep-filtering-and-qc-options#opt_most_severe) [--summary](/help/articles/vep-filtering-and-qc-options#opt_summary)

<span id="opt_humdiv"></span>

### `--humdiv`

Human only Retrieve the [humDiv PolyPhen prediction](http://genetics.bwh.harvard.edu/wiki/!pph2/overview#prediction) instead of the default humVar. *Not used by default*

**Output fields:** PolyPhen

<span id="opt_nearest"></span>

### `--nearest [transcript|gene|symbol]`

Retrieve the transcript or gene with the nearest protein-coding transcription start site (TSS) to each input variant. Use "transcript" to retrieve the transcript stable ID, "gene" to retrieve the gene stable ID, or "symbol" to retrieve the gene symbol. Note that the nearest TSS may not belong to a transcript that overlaps the input variant, and more than one may be reported in the case where two are equidistant from the input coordinates.

Currently only available when using a [cache](/help/articles/vep-annotation-sources#cache) annotation source, and [requires the Set::IntervalTree perl module](/help/articles/download-and-install-vep#additional).

*Not used by default*

**Output fields:** NEAREST

<span id="opt_distance"></span>

### `--distance [bp_distance(,downstream_distance)]`

Modify the distance up and/or downstream between a variant and a transcript for which Ensembl VEP will assign the upstream_gene_variant or downstream_gene_variant consequences. Giving one distance will modify both up- and downstream distances; prodiving two separated by commas will set the up- (5') and down- (3') stream distances respectively. *Default: 5000*

<span id="opt_overlaps"></span>

### `--overlaps`

Report the proportion and length of a transcript overlapped by a structural variant in VCF format.

<span id="opt_gene_phenotype"></span>

### `--gene_phenotype`

Indicates if the overlapped gene is associated with a phenotype, disease or trait. See [list of phenotype sources](https://jun2026.archive.ensembl.org/info/genome/variation/phenotype/sources_phenotype_documentation.html). *Not used by default*

**Output fields:** GENE_PHENO

<span id="opt_regulatory"></span>

### `--regulatory`

Look for overlaps with regulatory regions. Ensembl VEP can also report if a variant falls in a high information position within a transcription factor binding site. Output lines have a Feature type of RegulatoryFeature or MotifFeature. *Not used by default*

**Output fields:** MOTIF_NAME, MOTIF_POS, HIGH_INF_POS, MOTIF_SCORE_CHANGE

<span id="opt_cell_type"></span>

### `--cell_type`

Report only regulatory regions that are found in the given cell type(s). Can be a single cell type or a comma-separated list. The functional type in each cell type is reported under CELL_TYPE in the output. To retrieve a list of cell types, use [--cell_type list](/help/articles/vep-output-options#opt_cell_type). *Not used by default*

**Output fields:** CELL_TYPE

<span id="opt_regulatory_gff"></span>

### `--regulatory_gff [file=filename,...]`

Use regulatory annotation from Ensembl regulatory GFF3 files, instead of data from a cache or database. Will override [--regulatory](/help/articles/vep-output-options#opt_regulatory) if used together. Files available from [Ensembl FTP](https://ftp.ensembl.org/pub/current/regulation/) under species/annotation. The argument is comma-separated list of key=value pairs, in the same style as [--custom](/help/articles/vep-other-annotation-sources#opt_custom) providing one or more of: **file** (the regulatory-feature GFF3), **motifs** (a transcription factor binding motif GFF3) and **emars** (an epigenetically modified accessible region GFF3). Features from **file** and **emars** have a Feature type of RegulatoryFeature and the consequence regulatory_region_variant (with short variants, for example), with the feature's type — for example promoter, enhancer, CTCF_binding_site or open_chromatin_region — reported under BIOTYPE. Features from **motifs** have a Feature type of MotifFeature and the consequence TF_binding_site_variant. HIGH_INF_POS and MOTIF_SCORE_CHANGE require the position weight matrix, which the GFF does not carry, and are omitted. [--cell_type](/help/articles/vep-output-options#opt_cell_type) is ignored, with a warning, as a GFF carries no epigenome activity data. See [regulatory annotation from GFF files](/help/articles/vep-annotation-sources#reg_gff). *Not used by default*

**Output fields:** BIOTYPE, MOTIF_NAME, MOTIF_POS, TRANSCRIPTION_FACTORS

<span id="opt_extended_promoters"></span>

### `--extended_promoters`

Use the extended boundaries of promoter features when annotating with [--regulatory_gff](/help/articles/vep-output-options#opt_regulatory_gff). Ensembl regulatory GFF files record both a core promoter region and a wider region, given in the extended_start and extended_end attributes; by default the core coordinates are used, matching the VEP cache. The extended region is never smaller than the core region, so this option only ever adds annotation. Affects promoter features only. *Not used by default*

<span id="opt_individual"></span>

### `--individual [all|ind list]`

Consider only alternate alleles present in the genotypes of the specified individual(s). May be a single individual, a comma-separated list or "all" to assess all individuals separately. Individual variant combinations homozygous for the given reference allele will not be reported. Each individual and variant combination is given on a separate line of output. Only works with VCF files containing individual genotype data; individual IDs are taken from column headers. *Not used by default*

**Output fields:** IND, ZYG

**Incompatible with:**

[--minimal](/help/articles/vep-output-format-options#opt_minimal) [--individual_zyg](/help/articles/vep-output-options#opt_individual_zyg)

<span id="opt_individual_zyg"></span>

### `--individual_zyg [all|ind list]`

Consider alternate and reference alleles present in the genotypes of the specified individual(s). May be a single individual, a comma-separated list or "all" to assess all individuals separately. Returns a list of individuals and their zygosity. Only works with VCF files containing individual genotype data; individual IDs are taken from column headers. *Not used by default*

**Output fields:** ZYG

**Incompatible with:** [--individual](/help/articles/vep-output-options#opt_individual)

<span id="opt_phased"></span>

### `--phased`

Force VCF genotypes to be interpreted as phased. For use with plugins that depend on phased data. *Not used by default*

<span id="opt_allele_number"></span>

### `--allele_number`

Identify allele number from VCF input, where 1 = first ALT allele, 2 = second ALT allele etc. Useful when using [--minimal](/help/articles/vep-output-format-options#opt_minimal) *Not used by default*

**Output fields:** ALLELE_NUM

<span id="opt_show_ref_allele"></span>

### `--show_ref_allele`

Adds the reference allele in the output (after minimisation). Mainly useful for the Ensembl VEP "default" and tab-delimited output formats. *Not used by default*

**Output fields:** REF_ALLELE

<span id="opt_uploaded_allele"></span>

### `--uploaded_allele`

Adds the uploaded allele string in the output (before minimisation).

**Output fields:** UPLOADED_ALLELE

<span id="opt_total_length"></span>

### `--total_length`

Give cDNA, CDS and protein positions as Position/Length. *Not used by default*

<span id="opt_numbers"></span>

### `--numbers`

Adds affected exon and intron numbering to to output. Format is Number/Total. *Not used by default*

**Output fields:** EXON, INTRON

**Incompatible with:**

[--most_severe](/help/articles/vep-filtering-and-qc-options#opt_most_severe) [--summary](/help/articles/vep-filtering-and-qc-options#opt_summary)

<span id="opt_mirna"></span>

### `--mirna`

Reports where the variant lies in the miRNA secondary structure (only for Ensembl/GENCODE transcripts). *Not used by default*

<span id="opt_no_escape"></span>

### `--no_escape`

Don't URI escape HGVSp field. *Default = escape*

<span id="opt_keep_csq"></span>

### `--keep_csq`

Don't overwrite existing CSQ entry in [VCF INFO field](/help/articles/vep-data-formats#vcfout). A new consequence will be added, not merged with the original. *Overwrites by default*

<span id="opt_vcf_info_field"></span>

### `--vcf_info_field [CSQ|ANN|(other)]`

Change the name of the INFO key that Ensembl VEP write the consequences to in its [VCF output](/help/articles/vep-data-formats#vcfout). Use "ANN" for compatibility with other tools such as [snpEff](http://snpeff.sourceforge.net/). *Default: CSQ*

<span id="opt_terms"></span>

### `--terms [SO|display|NCBI]`

**Alternate:** `-t`

The type of consequence terms to output. The Ensembl terms are described [here](https://jun2026.archive.ensembl.org/info/genome/variation/prediction/predicted_data.html#consequences). The [Sequence Ontology](http://www.sequenceontology.org/) is a joint effort by genome annotation centres to standardise descriptions of biological sequences. *Default = "SO"*

<span id="opt_no_headers"></span>

### `--no_headers`

Don't write header lines in output files. *Default = add headers*

<span id="opt_shift_3prime"></span>

### `--shift_3prime [0|1]`

Right aligns all variants relative to their associated transcripts prior to consequence calculation. An example using this option can be found [here](/help/articles/vep-other-information#shifting). *Default = 0*

**Incompatible with:** [--shift_hgvs](/help/articles/vep-identifiers#opt_shift_hgvs)

<span id="opt_shift_genomic"></span>

### `--shift_genomic [0|1]`

Right aligns all variants, including intergenic variants, before consequence calculation and updates the *Location* field. An example using this option can be found [here](/help/articles/vep-other-information#shifting). *Default = 0*

**Incompatible with:** [--shift_hgvs](/help/articles/vep-identifiers#opt_shift_hgvs)

<span id="opt_shift_length"></span>

### `--shift_length`

Reports the distance each variant has been shifted when used in conjuction with [--shift_3prime](/help/articles/vep-output-options#opt_shift_3prime)

