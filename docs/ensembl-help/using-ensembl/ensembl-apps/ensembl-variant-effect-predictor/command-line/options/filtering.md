---
title: VEP filtering and QC options
description: "Command line reference for VEP: filtering and qc options."
slug: vep-cli-options-filtering
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

# VEP filtering and QC options

## Option reference

- [Basic options](/help/articles/vep-options-basic)
- [Cache options](/help/articles/vep-options-cache)
- [Other annotation sources](/help/articles/vep-options-annotation)
- [Output format options](/help/articles/vep-options-output-format)
- [Output options](/help/articles/vep-options-output)
- [Identifiers](/help/articles/vep-options-identifiers)
- [Co-located variants](/help/articles/vep-options-existing-variants)
- **Filtering and QC options (this section)**
- [Database options](/help/articles/vep-options-database)

[Running VEP and choosing options](/help/articles/vep-running-vep)

<span id="filt"></span>

## Filtering and QC options

**NOTE:** The filtering options here filter your results **before** they are written to your output file. Using Ensembl VEP's [filtering script](/help/articles/vep-filtering-results), it is possible to filter your results **after** Ensembl VEP has run. This way you can retain all of the results and run multiple filter sets on the same results to find different data of interest.

<span id="opt_gencode_basic"></span>

### `--gencode_basic`

Limit your analysis to transcripts belonging to the GENCODE basic set. This set has fragmented or problematic transcripts removed. *Not used by default*

**Incompatible with:**

[--gencode_primary](/help/articles/vep-options-filtering#opt_gencode_primary) [--refseq](/help/articles/vep-options-cache#opt_refseq)

<span id="opt_gencode_primary"></span>

### `--gencode_primary`

Limit your analysis to transcripts belonging to the GENCODE primary set. This set covers all human exons in a minimal set of transcripts. *Not used by default*

### Note

Only available for human on the GRCh38 assembly

**Incompatible with:**

[--gencode_basic](/help/articles/vep-options-filtering#opt_gencode_basic) [--refseq](/help/articles/vep-options-cache#opt_refseq)

<span id="opt_exclude_predicted"></span>

### `--exclude_predicted`

When using the RefSeq or merged cache, exclude predicted transcripts (i.e. those with identifiers beginning with "XM\_" or "XR\_").

### Note

We do not support predicted RefSeq transcripts for GRCh37.

<span id="opt_transcript_filter"></span>

### `--transcript_filter`

**ADVANCED** Filter transcripts according to any arbitrary set of rules. Uses similar notation to [filter_vep](/help/articles/vep-filtering-results).

You may filter on any key defined in the root of the transcript object; most commonly this will be "stable_id":

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">--transcript_filter &quot;stable_id match N[MR]_&quot;
</code></pre>

or, a list of stable ids in file acting as a allowlist or a blocklist:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">--transcript_filter &quot;not stable_id in blocklist.txt&quot;
</code></pre>

<span id="opt_check_ref"></span>

### `--check_ref`

Force Ensembl VEP to check the supplied reference allele against the sequence stored in the Ensembl Core database or supplied [FASTA file](/help/articles/vep-options-cache#opt_fasta). Lines that do not match are skipped. Checking is done on the minimised sequence. Example chr13 32900399 . AGT A . the As are removed and the reference sequence is checked from 32900400 to see if it matches GT*Not used by default*

**Incompatible with:** [--lookup_ref](/help/articles/vep-options-filtering#opt_lookup_ref)

<span id="opt_lookup_ref"></span>

### `--lookup_ref`

Force overwrite the supplied reference allele with the sequence stored in the Ensembl Core database or supplied [FASTA file](/help/articles/vep-options-cache#opt_fasta). *Not used by default*

**Incompatible with:** [--check_ref](/help/articles/vep-options-filtering#opt_check_ref)

<span id="dont_skip"></span>

### `--dont_skip`

Don't skip input variants that fail validation, e.g. those that fall on unrecognised sequences. Combining [--check_ref](/help/articles/vep-options-filtering#opt_check_ref) with [--dont_skip](/help/articles/vep-options-filtering#dont_skip) will add a CHECK_REF output field when the given reference does not match the underlying reference sequence.

**Output fields:** CHECK_REF

<span id="opt_allow_non_variant"></span>

### `--allow_non_variant`

When using VCF format as input and output, by default Ensembl VEP will skip non-variant lines of input (where the ALT allele is null). Enabling this option the lines will be printed in the VCF output with no consequence data added.

<span id="opt_chr"></span>

### `--chr [list]`

Select a subset of chromosomes to analyse from your file. Any data not on this chromosome in the input will be skipped. The list can be comma separated, with "-" characters representing an interval. For example, to include chromosomes 1, 2, 3, 10 and X you could use [--chr 1-3,10,X](/help/articles/vep-options-filtering#opt_chr) *Not used by default*

<span id="opt_coding_only"></span>

### `--coding_only`

Only return consequences that fall in the coding regions of transcripts. *Not used by default*

**Incompatible with:**

[--most_severe](/help/articles/vep-options-filtering#opt_most_severe) [--summary](/help/articles/vep-options-filtering#opt_summary)

<span id="opt_no_intergenic"></span>

### `--no_intergenic`

Do not include intergenic consequences in the output. *Not used by default*

**Incompatible with:**

[--most_severe](/help/articles/vep-options-filtering#opt_most_severe) [--summary](/help/articles/vep-options-filtering#opt_summary)

<span id="opt_pick"></span>

### `--pick`

Pick one line or block of consequence data per variant, including transcript-specific columns. Consequences are chosen according to the criteria described [here](/help/articles/vep-other-information#pick), and the order the criteria are applied may be customised with [--pick_order](/help/articles/vep-options-filtering#opt_pick_order). This is the best method to use if you are interested only in one consequence per variant. *Not used by default*

**Incompatible with:**

[--most_severe](/help/articles/vep-options-filtering#opt_most_severe) [--summary](/help/articles/vep-options-filtering#opt_summary)

<span id="opt_pick_allele"></span>

### `--pick_allele`

Like [--pick](/help/articles/vep-options-filtering#opt_pick), but chooses one line or block of consequence data per variant allele. Will only differ in behaviour from **--pick** when the input variant has multiple alternate alleles. *Not used by default*

**Incompatible with:**

[--most_severe](/help/articles/vep-options-filtering#opt_most_severe) [--summary](/help/articles/vep-options-filtering#opt_summary)

<span id="opt_per_gene"></span>

### `--per_gene`

Output only the most severe consequence per gene. The transcript selected is arbitrary if more than one has the same predicted consequence. Uses the same ranking system as [--pick](/help/articles/vep-options-filtering#opt_pick) therefore, the highest ranking transcript is selected before the most severe consequence. *Not used by default*

<span id="opt_pick_allele_gene"></span>

### `--pick_allele_gene`

Like [--pick_allele](/help/articles/vep-options-filtering#opt_pick_allele), but chooses one line or block of consequence data per variant allele **and** gene combination. *Not used by default*

<span id="opt_flag_pick"></span>

### `--flag_pick`

As per [--pick](/help/articles/vep-options-filtering#opt_pick), but adds the PICK flag to the chosen block of consequence data and retains others. *Not used by default*

**Output fields:** PICK

**Incompatible with:**

[--most_severe](/help/articles/vep-options-filtering#opt_most_severe) [--summary](/help/articles/vep-options-filtering#opt_summary)

<span id="opt_flag_pick_allele"></span>

### `--flag_pick_allele`

As per [--pick_allele](/help/articles/vep-options-filtering#opt_pick_allele), but adds the PICK flag to the chosen block of consequence data and retains others. *Not used by default*

**Output fields:** PICK

**Incompatible with:**

[--most_severe](/help/articles/vep-options-filtering#opt_most_severe) [--summary](/help/articles/vep-options-filtering#opt_summary)

<span id="opt_flag_pick_allele_gene"></span>

### `--flag_pick_allele_gene`

As per [--pick_allele_gene](/help/articles/vep-options-filtering#opt_pick_allele_gene), but adds the PICK flag to the chosen block of consequence data and retains others. *Not used by default*

**Output fields:** PICK

<span id="opt_pick_order"></span>

### `--pick_order [c1,c2,...,cN]`

Customise the order of criteria (and the list of criteria) applied when choosing a block of annotation data with one of the following options: [--pick](/help/articles/vep-options-filtering#opt_pick), [--pick_allele](/help/articles/vep-options-filtering#opt_pick_allele), [--per_gene](/help/articles/vep-options-filtering#opt_per_gene), [--pick_allele_gene](/help/articles/vep-options-filtering#opt_pick_allele_gene), [--flag_pick](/help/articles/vep-options-filtering#opt_flag_pick), [--flag_pick_allele](/help/articles/vep-options-filtering#opt_flag_pick_allele), [--flag_pick_allele_gene](/help/articles/vep-options-filtering#opt_flag_pick_allele_gene). See [this page](/help/articles/vep-other-information#pick_options) for the default order. Valid criteria are: *mane_select, mane_plus_clinical, canonical, appris, tsl, biotype, ccds, rank, length, ensembl, refseq*. e.g.:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">--pick --pick_order tsl,appris,rank
</code></pre>

<span id="opt_most_severe"></span>

### `--most_severe`

Output only the most severe consequence per variant. Transcript-specific columns will be left blank. Consequence ranks are given in [this table](https://jun2026.archive.ensembl.org/info/genome/variation/prediction/predicted_data.html#consequences). To include regulatory consequences, use the **--regulatory** option in combination with this flag. *Not used by default*

**Incompatible with:**

[--appris](/help/articles/vep-options-identifiers#opt_appris) [--biotype](/help/articles/vep-options-identifiers#opt_biotype) [--canonical](/help/articles/vep-options-identifiers#opt_canonical) [--ccds](/help/articles/vep-options-identifiers#opt_ccds) [--coding_only](/help/articles/vep-options-filtering#opt_coding_only) [--domains](/help/articles/vep-options-identifiers#opt_domains) [--flag_pick](/help/articles/vep-options-filtering#opt_flag_pick) [--flag_pick_allele](/help/articles/vep-options-filtering#opt_flag_pick_allele) [--no_intergenic](/help/articles/vep-options-filtering#opt_no_intergenic) [--numbers](/help/articles/vep-options-output#opt_numbers) [--pick](/help/articles/vep-options-filtering#opt_pick) [--pick_allele](/help/articles/vep-options-filtering#opt_pick_allele) [--polyphen](/help/articles/vep-options-output#opt_polyphen) [--protein](/help/articles/vep-options-identifiers#opt_protein) [--sift](/help/articles/vep-options-output#opt_sift) [--summary](/help/articles/vep-options-filtering#opt_summary) [--symbol](/help/articles/vep-options-identifiers#opt_symbol) [--tsl](/help/articles/vep-options-identifiers#opt_tsl) [--uniprot](/help/articles/vep-options-identifiers#opt_uniprot) [--xref_refseq](/help/articles/vep-options-identifiers#opt_xref_refseq) [--mane](/help/articles/vep-options-identifiers#opt_mane) [--mane_select](/help/articles/vep-options-identifiers#opt_mane_select) [--vcf](/help/articles/vep-options-output-format#opt_vcf)

<span id="opt_summary"></span>

### `--summary`

Output only a comma-separated list of all observed consequences per variant. Transcript-specific columns will be left blank. *Not used by default*

**Incompatible with:**

[--appris](/help/articles/vep-options-identifiers#opt_appris) [--biotype](/help/articles/vep-options-identifiers#opt_biotype) [--canonical](/help/articles/vep-options-identifiers#opt_canonical) [--ccds](/help/articles/vep-options-identifiers#opt_ccds) [--coding_only](/help/articles/vep-options-filtering#opt_coding_only) [--domains](/help/articles/vep-options-identifiers#opt_domains) [--flag_pick](/help/articles/vep-options-filtering#opt_flag_pick) [--flag_pick_allele](/help/articles/vep-options-filtering#opt_flag_pick_allele) [--most_severe](/help/articles/vep-options-filtering#opt_most_severe) [--no_intergenic](/help/articles/vep-options-filtering#opt_no_intergenic) [--numbers](/help/articles/vep-options-output#opt_numbers) [--pick](/help/articles/vep-options-filtering#opt_pick) [--pick_allele](/help/articles/vep-options-filtering#opt_pick_allele) [--polyphen](/help/articles/vep-options-output#opt_polyphen) [--protein](/help/articles/vep-options-identifiers#opt_protein) [--sift](/help/articles/vep-options-output#opt_sift) [--symbol](/help/articles/vep-options-identifiers#opt_symbol) [--tsl](/help/articles/vep-options-identifiers#opt_tsl) [--uniprot](/help/articles/vep-options-identifiers#opt_uniprot) [--xref_refseq](/help/articles/vep-options-identifiers#opt_xref_refseq) [--mane](/help/articles/vep-options-identifiers#opt_mane) [--mane_select](/help/articles/vep-options-identifiers#opt_mane_select) [--vcf](/help/articles/vep-options-output-format#opt_vcf)

<span id="opt_flag_gencode_primary"></span>

### `--flag_gencode_primary`

Flags transcripts as GENCODE primary using a boolean value. *Not used by default*

### Note

Only available for human on the GRCh38 assembly

**Output fields:** GENCODE_PRIMARY

<span id="opt_filter_common"></span>

### `--filter_common`

Shortcut flag for the filters below - this will exclude variants that have a co-located existing variant with global AF \> 0.01 (1%). May be modified using any of the following freq\_\* filters. *Not used by default*

**Output fields:** FREQS

<span id="opt_check_frequency"></span>

### `--check_frequency`

Turns on frequency filtering. Use this to include or exclude variants based on the frequency of co-located existing variants in the Ensembl Variation database. You must also specify all of the --freq\_\* flags below. Frequencies used in filtering are added to the output under the FREQS key in the Extra field. *Not used by default*

**Output fields:** FREQS

<span id="opt_freq_pop"></span>

### `--freq_pop [pop]`

Name of the population to use in frequency filter. This must be one of the following:

<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>1KG_ALL</td>
<td>1000 genomes combined population (global)</td>
</tr>
<tr>
<td>1KG_AFR</td>
<td>1000 genomes combined African population</td>
</tr>
<tr>
<td>1KG_AMR</td>
<td>1000 genomes combined American population</td>
</tr>
<tr>
<td>1KG_EAS</td>
<td>1000 genomes combined East Asian population</td>
</tr>
<tr>
<td>1KG_EUR</td>
<td>1000 genomes combined European population</td>
</tr>
<tr>
<td>1KG_SAS</td>
<td>1000 genomes combined South Asian population</td>
</tr>
<tr>
<td>gnomADe</td>
<td>gnomAD exomes combined population</td>
</tr>
<tr>
<td>gnomADe_AFR</td>
<td>gnomAD exomes African/African American population</td>
</tr>
<tr>
<td>gnomADe_AMR</td>
<td>gnomAD exomes Latino population</td>
</tr>
<tr>
<td>gnomADe_ASJ</td>
<td>gnomAD exomes Ashkenazi Jewish population</td>
</tr>
<tr>
<td>gnomADe_EAS</td>
<td>gnomAD exomes East Asian population</td>
</tr>
<tr>
<td>gnomADe_FIN</td>
<td>gnomAD exomes Finnish population</td>
</tr>
<tr>
<td>gnomADe_NFE</td>
<td>gnomAD exomes non-Finnish European population</td>
</tr>
<tr>
<td>gnomADe_OTH</td>
<td>gnomAD exomes other population</td>
</tr>
<tr>
<td>gnomADe_SAS</td>
<td>gnomAD exomes South Asian population</td>
</tr>
<tr>
<td>gnomADg</td>
<td>gnomAD genomes combined population</td>
</tr>
<tr>
<td>gnomADg_AFR</td>
<td>gnomAD genomes African/African American population</td>
</tr>
<tr>
<td>gnomADg_AMR</td>
<td>gnomAD genomes Latino population</td>
</tr>
<tr>
<td>gnomADg_AMI</td>
<td>gnomAD genomes Amish population</td>
</tr>
<tr>
<td>gnomADg_ASJ</td>
<td>gnomAD genomes Ashkenazi Jewish population</td>
</tr>
<tr>
<td>gnomADg_EAS</td>
<td>gnomAD genomes East Asian population</td>
</tr>
<tr>
<td>gnomADg_FIN</td>
<td>gnomAD genomes Finnish population</td>
</tr>
<tr>
<td>gnomADg_MID</td>
<td>gnomAD genomes Mid-eastern population</td>
</tr>
<tr>
<td>gnomADg_NFE</td>
<td>gnomAD genomes non-Finnish European population</td>
</tr>
<tr>
<td>gnomADg_OTH</td>
<td>gnomAD genomes other population</td>
</tr>
<tr>
<td>gnomADg_SAS</td>
<td>gnomAD genomes South Asian population</td>
</tr>
</tbody>
</table>

<span id="opt_freq_freq"></span>

### `--freq_freq [freq]`

Allele frequency to use for filtering. Must be a float value between 0 and 1

<span id="opt_freq_gt_lt"></span>

### `--freq_gt_lt [gt|lt]`

Specify whether the frequency of the co-located variant must be greater than (**gt**) or less than (**lt**) the value specified with [--freq_freq](/help/articles/vep-options-filtering#opt_freq_freq)

<span id="opt_freq_filter"></span>

### `--freq_filter [exclude|include]`

Specify whether to **exclude** or **include** only variants that pass the frequency filter

