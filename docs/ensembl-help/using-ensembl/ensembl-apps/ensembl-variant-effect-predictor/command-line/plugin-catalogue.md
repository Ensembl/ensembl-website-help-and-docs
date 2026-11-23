---
title: VEP plugin catalogue
description: VEP release 116 plugins, with descriptions, dependencies, usage
  examples and citations.
slug: vep-cli-plugin-catalogue
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

# VEP plugin catalogue

<span id="plugins_existing"></span>

## Existing plugins

We have written plugins to implement new functionalities that we do not (yet) include in the variation API, and these are stored in a public github repository:

<https://github.com/Ensembl/VEP_plugins>

The following catalogue describes the plugins listed for release 116. Plugin data may have separate download, licence and citation requirements.

## Find a plugin

[AlphaMissense](/help/articles/vep-plugin-catalogue#AlphaMissense) · [AncestralAllele](/help/articles/vep-plugin-catalogue#AncestralAllele) · [AVADA](/help/articles/vep-plugin-catalogue#AVADA) · [AVI](/help/articles/vep-plugin-catalogue#AVI) · [BayesDel](/help/articles/vep-plugin-catalogue#BayesDel) · [Blosum62](/help/articles/vep-plugin-catalogue#Blosum62) · [CADD](/help/articles/vep-plugin-catalogue#CADD) · [CAPICE](/help/articles/vep-plugin-catalogue#CAPICE) · [Carol](/help/articles/vep-plugin-catalogue#Carol) · [ClinPred](/help/articles/vep-plugin-catalogue#ClinPred) · [Condel](/help/articles/vep-plugin-catalogue#Condel) · [Conservation](/help/articles/vep-plugin-catalogue#Conservation) · [dbNSFP](/help/articles/vep-plugin-catalogue#dbNSFP) · [dbscSNV](/help/articles/vep-plugin-catalogue#dbscSNV) · [DeNovo](/help/articles/vep-plugin-catalogue#DeNovo) · [DosageSensitivity](/help/articles/vep-plugin-catalogue#DosageSensitivity) · [Downstream](/help/articles/vep-plugin-catalogue#Downstream) · [Draw](/help/articles/vep-plugin-catalogue#Draw) · [Enformer](/help/articles/vep-plugin-catalogue#Enformer) · [EVE](/help/articles/vep-plugin-catalogue#EVE) · [FATHMM](/help/articles/vep-plugin-catalogue#FATHMM) · [FATHMM_MKL](/help/articles/vep-plugin-catalogue#FATHMM_MKL) · [FlagLRG](/help/articles/vep-plugin-catalogue#FlagLRG) · [FunMotifs](/help/articles/vep-plugin-catalogue#FunMotifs) · [G2P](/help/articles/vep-plugin-catalogue#G2P) · [GeneBe](/help/articles/vep-plugin-catalogue#GeneBe) · [GeneSplicer](/help/articles/vep-plugin-catalogue#GeneSplicer) · [Geno2MP](/help/articles/vep-plugin-catalogue#Geno2MP) · [gnomADc](/help/articles/vep-plugin-catalogue#gnomADc) · [gnomADMt](/help/articles/vep-plugin-catalogue#gnomADMt) · [GO](/help/articles/vep-plugin-catalogue#GO) · [GWAS](/help/articles/vep-plugin-catalogue#GWAS) · [HGVSIntronOffset](/help/articles/vep-plugin-catalogue#HGVSIntronOffset) · [IntAct](/help/articles/vep-plugin-catalogue#IntAct) · [LD](/help/articles/vep-plugin-catalogue#LD) · [LocalID](/help/articles/vep-plugin-catalogue#LocalID) · [LOEUF](/help/articles/vep-plugin-catalogue#LOEUF) · [LoFtool](/help/articles/vep-plugin-catalogue#LoFtool) · [LOVD](/help/articles/vep-plugin-catalogue#LOVD) · [Mastermind](/help/articles/vep-plugin-catalogue#Mastermind) · [MaveDB](/help/articles/vep-plugin-catalogue#MaveDB) · [MaxEntScan](/help/articles/vep-plugin-catalogue#MaxEntScan) · [MechPredict](/help/articles/vep-plugin-catalogue#MechPredict) · [MPC](/help/articles/vep-plugin-catalogue#MPC) · [MTR](/help/articles/vep-plugin-catalogue#MTR) · [mutfunc](/help/articles/vep-plugin-catalogue#mutfunc) · [NearestExonJB](/help/articles/vep-plugin-catalogue#NearestExonJB) · [NearestGene](/help/articles/vep-plugin-catalogue#NearestGene) · [NMD](/help/articles/vep-plugin-catalogue#NMD) · [OpenTargets](/help/articles/vep-plugin-catalogue#OpenTargets) · [Paralogues](/help/articles/vep-plugin-catalogue#Paralogues) · [PhenotypeOrthologous](/help/articles/vep-plugin-catalogue#PhenotypeOrthologous) · [Phenotypes](/help/articles/vep-plugin-catalogue#Phenotypes) · [pLI](/help/articles/vep-plugin-catalogue#pLI) · [PolyPhen_SIFT](/help/articles/vep-plugin-catalogue#PolyPhen_SIFT) · [PON_P2](/help/articles/vep-plugin-catalogue#PON_P2) · [PrimateAI](/help/articles/vep-plugin-catalogue#PrimateAI) · [PromoterAI](/help/articles/vep-plugin-catalogue#PromoterAI) · [ProteinSeqs](/help/articles/vep-plugin-catalogue#ProteinSeqs) · [ProtVar](/help/articles/vep-plugin-catalogue#ProtVar) · [ReferenceQuality](/help/articles/vep-plugin-catalogue#ReferenceQuality) · [REVEL](/help/articles/vep-plugin-catalogue#REVEL) · [RiboseqORFs](/help/articles/vep-plugin-catalogue#RiboseqORFs) · [SameCodon](/help/articles/vep-plugin-catalogue#SameCodon) · [satMutMPRA](/help/articles/vep-plugin-catalogue#satMutMPRA) · [SingleLetterAA](/help/articles/vep-plugin-catalogue#SingleLetterAA) · [SpliceAI](/help/articles/vep-plugin-catalogue#SpliceAI) · [SpliceRegion](/help/articles/vep-plugin-catalogue#SpliceRegion) · [SpliceVault](/help/articles/vep-plugin-catalogue#SpliceVault) · [SubsetVCF](/help/articles/vep-plugin-catalogue#SubsetVCF) · [TranscriptAnnotator](/help/articles/vep-plugin-catalogue#TranscriptAnnotator) · [TSSDistance](/help/articles/vep-plugin-catalogue#TSSDistance) · [UTRAnnotator](/help/articles/vep-plugin-catalogue#UTRAnnotator) · [VARITY](/help/articles/vep-plugin-catalogue#VARITY)

<span id="AlphaMissense"></span>

### [AlphaMissense](https://github.com/Ensembl/VEP_plugins/blob/release/116/AlphaMissense.pm)

This plugin for the Ensembl Variant Effect Predictor (VEP) annotates missense variants with the pre-computed AlphaMissense pathogenicity scores. AlphaMissense is a deep learning model developed by Google DeepMind that predicts the pathogenicity of single nucleotide missense variants.

<span id="div_alphamissense"></span>

This plugin will add two annotations per missense variant:

- `am_pathogenicity`, a continuous score between 0 and 1 which can be interpreted as the predicted probability of the variant being pathogenic.
- `am_class` is the classification of the variant into one of three discrete categories: `likely_pathogenic`, `likely_benign`, or `ambiguous`. These are derived using the following thresholds of am_pathogenicity: `likely_benign` if `am_pathogenicity` \< 0.34; `likely_pathogenic` if `am_pathogenicity` \> 0.564; `ambiguous` otherwise.

These thresholds were chosen to achieve 90% precision for both pathogenic and benign ClinVar variants. Note that AlphaMissense was not trained on ClinVar variants. Variants labeled as `ambiguous` should be treated as `unknown` or `uncertain` according to AlphaMissense.

This plugin is available for both GRCh37 (hg19) and GRCh38 (hg38) genome builds.

The prediction scores of AlphaMissense can be downloaded from <https://console.cloud.google.com/storage/browser/dm_alphamissense> (AlphaMissense Database Copyright (2023) DeepMind Technologies Limited). Data contained within the AlphaMissense Database is licensed under the Creative Commons Attribution 4.0 International License (CC-BY) (the “License”). You may obtain a copy of the License at: <https://creativecommons.org/licenses/by/4.0/legalcode>. Use of the AlphaMissense Database is subject to Google Cloud Platform Terms of Service

Please cite the AlphaMissense publication alongside Ensembl VEP if you use this resource: <https://doi.org/10.1126/science.adg7492>

Disclaimer: The AlphaMissense Database and other information provided on or linked to this site is for theoretical modelling only, caution should be exercised in use. It is provided "as-is" without any warranty of any kind, whether express or implied. For clarity, no warranty is given that use of the information shall not infringe the rights of any third party (and this disclaimer takes precedence over any contrary provisions in the Google Cloud Platform Terms of Service). The information provided is not intended to be a substitute for professional medical advice, diagnosis, or treatment, and does not constitute medical or other professional advice.

Before running the plugin for the first time, you need to create a tabix index (requires tabix to be installed).

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">tabix -s 1 -b 2 -e 2 -f -S 1 AlphaMissense_hg38.tsv.gz
</code></pre>

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">tabix -s 1 -b 2 -e 2 -f -S 1 AlphaMissense_hg19.tsv.gz
</code></pre>

Options are passed to the plugin as key=value pairs:

**`file`**

(mandatory) Tabix-indexed AlphaMissense data

**`cols`**

(optional) Colon-separated columns to print from AlphaMissense data; if set to `all`, all columns are printed (default: `Missense_pathogenicity:Missense_class`)

**`transcript_match`**

Only print data if transcript identifiers match those from AlphaMissense data (default: 0)

AlphaMissense predictions are matched to input data by genomic location and protein change by default.

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv AlphaMissense.pm ~/.vep/Plugins

# print AlphaMissense scores and predictions (default)
./vep -i variations.vcf --plugin AlphaMissense,file=/full/path/to/file.tsv.gz

# print all AlphaMissense information
./vep -i variations.vcf --plugin AlphaMissense,file=/full/path/to/file.tsv.gz,cols=all

# only report results for the transcripts in the AlphaMissense prediction
./vep -i variations.vcf --plugin AlphaMissense,file=/full/path/to/file.tsv.gz,transcript_match=1
</code></pre>

**Category:** Pathogenicity predictions

**External libraries:** -

**Developer:** Ensembl

<span id="AncestralAllele"></span>

### [AncestralAllele](https://github.com/Ensembl/VEP_plugins/blob/release/116/AncestralAllele.pm)

An Ensembl VEP plugin that retrieves ancestral allele sequences from a FASTA file.

<span id="div_ancestralallele"></span>

Ensembl produces FASTA file dumps of the ancestral sequences of key species.

- Data files for GRCh37: <https://ftp.ensembl.org/pub/release-75/fasta/ancestral_alleles/>
- Data files for GRCh38: <https://ftp.ensembl.org/pub/current_fasta/ancestral_alleles/>

For optimal retrieval speed, you should pre-process the FASTA files into a single bgzipped file that can be accessed via `Bio::DB::HTS::Faidx` (installed by INSTALL.pl - see Ensembl/ensembl-vep repository):

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">wget https://ftp.ensembl.org/pub/current_fasta/ancestral_alleles/homo_sapiens_ancestor_GRCh38.tar.gz
tar xfz homo_sapiens_ancestor_GRCh38.tar.gz
cat homo_sapiens_ancestor_GRCh38/*.fa | bgzip -c &gt; homo_sapiens_ancestor_GRCh38.fa.gz
rm -rf homo_sapiens_ancestor_GRCh38/ homo_sapiens_ancestor_GRCh38.tar.gz
./vep -i variations.vcf --plugin AncestralAllele,homo_sapiens_ancestor_GRCh38.fa.gz
</code></pre>

The plugin is also compatible with `Bio::DB::Fasta` and an uncompressed FASTA file.

Note the first time you run the plugin with a newly generated FASTA file it will spend some time indexing the file. DO NOT INTERRUPT THIS PROCESS, particularly if you do not have `Bio::DB::HTS` installed.

Special cases:

- `-` represents an insertion
- `?` indicates the chromosome could not be looked up in the FASTA

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv AncestralAllele.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin AncestralAllele,homo_sapiens_ancestor_GRCh38.fa.gz
</code></pre>

**Category:** Conservation

**External libraries:** -

**Developer:** Ensembl

<span id="AVADA"></span>

### [AVADA](https://github.com/Ensembl/VEP_plugins/blob/release/116/AVADA.pm)

Automatic VAriant evidence DAtabase is a novel machine learning tool that uses natural language processing to automatically identify pathogenic genetic variant evidence in full-text primary literature about monogenic disease and convert it to genomic coordinates.

<span id="div_avada"></span>

Please cite the AVADA publication alongside Ensembl VEP if you use this resource: <https://pubmed.ncbi.nlm.nih.gov/31467448/>

NB: The plugin currently does not annotate for downstream_gene_variant and upstream_gene_variant.

Pre-requisites

1.  AVADA data is available for GRCh37 and can be downloaded from: <http://bejerano.stanford.edu/AVADA/avada_v1.00_2016.vcf.gz>

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">wget http://bejerano.stanford.edu/AVADA/avada_v1.00_2016.vcf.gz
</code></pre>

1.  The file needs to be tabix indexed. You can do this by following commands:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">gzip -d avada_v1.00_2016.vcf.gz
bgzip avada_v1.00_2016.vcf 
tabix avada_v1.00_2016.vcf.gz
</code></pre>

1.  As you have already noticed, tabix utility must be installed in your path to use this plugin.

The plugin can then be run to retrieve AVADA annotations. By default, the variants are matched with the HGNC gene symbol

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i variations.vcf --plugin AVADA,file=path/to/file
</code></pre>

The output always includes one of the following columns depending on the option passed:

- `AVADA_PMID`: PubMed ID evidence for the variant as reported by AVADA
- `AVADA_PMID_WITH_VARIANT`: PubMed ID evidence for the variant as reported by AVADA along with the original variant string
- `AVADA_PMID_WITH_FEATURE`: PubMed ID evidence for the variant as reported by AVADA along with feature id
- `AVADA_PMID_WITH_FEATURE_AND_VARIANT`: PubMed ID evidence for the variant as reported by AVADA along with feature id and original variant string

The plugin can optionally be run by specifying the feature to match with.

In order to match by HGNC gene symbol:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i variations.vcf --plugin AVADA,file=path/to/file,feature_match_by=gene_symbol
</code></pre>

In order to match by Ensembl gene identifier :

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i variations.vcf --plugin AVADA,file=path/to/file,feature_match_by=ensembl_gene_id
</code></pre>

In order to match by RefSeq identifier :

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i variations.vcf --plugin AVADA,file=path/to/file,feature_match_by=refseq_id
</code></pre>

The plugin can also be run to report the original variant string reported in the publication.

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i variations.vcf --plugin AVADA,file=path/to/file,original_variant_string=1
</code></pre>

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i variations.vcf --plugin AVADA,file=path/to/file
./vep -i variations.vcf --plugin AVADA,file=path/to/file,feature_match_by=&lt;gene_symbol|ensembl_gene_id|refseq_id&gt;
</code></pre>

**Category:** Phenotype data and citations

**External libraries:** [List::MoreUtils](https://metacpan.org/pod/List::MoreUtils) qw(uniq)

**Developer:** Ensembl

<span id="AVI"></span>

### [AVI](https://github.com/Ensembl/VEP_plugins/blob/release/116/AVI.pm)

An Ensembl VEP plugin that retrieves AlphaGenome Variant Impact (AVI) scores for single nucleotide variants from a tabix-indexed, bgzip-compressed TSV file.

<span id="div_avi"></span>

AVI scores were developed by Google DeepMind and are available for commercial and non-commercial use. They are available from : <https://deepmind.google.com/science/alphagenome/downloads>.

Details on the features contributing to AVI scores can be accessed via Google DeepMind's AlphaGenome Atlas, which is available for non-commercial use. An example variant URL is: [https://deepmind.google.com/science/alphagenome/atlas?q=chr11:5225450:A\>T&m=variant](https://deepmind.google.com/science/alphagenome/atlas?q=chr11:5225450:A&gtT&m=variant)

The PHRED score is reported by default as AVI_PHRED. The optional raw=1 parameter additionally reports the RAW score as AVI_RAW.

Score summaries:

AVI_RAW (approximately -1.3 to +4.0). Variants with higher scores are more likely to have a deleterious impact.

AVI_PHRED (0 to approximately 80) PHRED-scaled quantile. A phred of 20 means the variant is among the top 1% most deleterious substitutions genome-wide. Variants with higher scores are more likely to have a deleterious impact.

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv AVI.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin AVI,file=/FULL_PATH/avi_scores.tsv.gz
./vep -i variations.vcf --plugin AVI,file=/FULL_PATH/avi_scores.tsv.gz,raw=1
</code></pre>

**Category:** Pathogenicity predictions

**External libraries:** -

**Developer:** Ensembl

<span id="BayesDel"></span>

### [BayesDel](https://github.com/Ensembl/VEP_plugins/blob/release/116/BayesDel.pm)

This is a plugin for the Ensembl Variant Effect Predictor (VEP) that adds the BayesDel scores to Ensembl VEP output.

<span id="div_bayesdel"></span>

BayesDel is a deleteriousness meta-score combining multiple deleteriousness predictors to create an overall score. It works for coding and non-coding variants, single nucleotide variants and small insertion/deletions. The range of the score is from -1.29334 to 0.75731. The higher the score, the more likely the variant is pathogenic. For more information please visit: <https://fenglab.chpc.utah.edu/BayesDel/BayesDel.html>

Please cite the BayesDel publication alongside Ensembl VEP if you use this resource: <https://onlinelibrary.wiley.com/doi/full/10.1002/humu.23158>

BayesDel pre-computed scores can be downloaded from <https://drive.google.com/drive/folders/1K4LI6ZSsUGBhHoChUtegC8bgCt7hbQlA> Note: These files only contain pre-computed BayesDel scores for missense variants for assembly GRCh37.

For GRCh37:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">tar zxvf BayesDel_170824_addAF.tgz
rm *.gz.tbi
gunzip *.gz
for f in BayesDel_170824_addAF_chr*; do grep -v &quot;^#&quot; $f &gt;&gt; BayesDel_170824_addAF.txt; done
cat BayesDel_170824_addAF.txt | sort -k1,1 -k2,2n &gt; BayesDel_170824_addAF_sorted.txt
grep &quot;^#&quot; BayesDel_170824_addAF_chr1 &gt; BayesDel_170824_addAF_all_scores.txt
cat BayesDel_170824_addAF_sorted.txt &gt;&gt; BayesDel_170824_addAF_all_scores.txt
bgzip BayesDel_170824_addAF_all_scores.txt
tabix -s 1 -b 2 -e 2 BayesDel_170824_addAF_all_scores.txt.gz
</code></pre>

For GRCh38: Remap GRCh37 file

The tabix utility must be installed in your path to use this plugin.

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv BayesDel.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin BayesDel,file=/path/to/BayesDel/BayesDel_170824_addAF_all_scores.txt.gz
</code></pre>

**Category:** Pathogenicity predictions

**External libraries:** -

**Developer:** Ensembl

<span id="Blosum62"></span>

### [Blosum62](https://github.com/Ensembl/VEP_plugins/blob/release/116/Blosum62.pm)

This is a plugin for the Ensembl Variant Effect Predictor (VEP) that looks up the BLOSUM 62 substitution matrix score for the reference and alternative amino acids predicted for a missense mutation. It adds one new entry to the output, BLOSUM62, which is the associated score.

<span id="div_blosum62"></span>

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv Blosum62.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin Blosum62
</code></pre>

**Category:** Conservation

**External libraries:** -

**Developer:** Ensembl

<span id="CADD"></span>

### [CADD](https://github.com/Ensembl/VEP_plugins/blob/release/116/CADD.pm)<span class="small">Combined Annotation Dependent Depletion</span>

An Ensembl VEP plugin that retrieves CADD scores for variants from one or more tabix-indexed CADD data files.

<span id="div_cadd"></span>

Please cite the CADD publication alongside Ensembl VEP if you use this resource: <https://www.ncbi.nlm.nih.gov/pubmed/24487276>

The tabix utility must be installed in your path to use this plugin.

The CADD SNV and indels data files (and respective Tabix index files) can be downloaded from - <http://cadd.gs.washington.edu/download>

The CADD SV data files (and respective Tabix index files) can be downloaded from - <https://kircherlab.bihealth.org/download/CADD-SV/v1.1/>

By default the plugin is designed to not annotate SV variant if a SNV and/or indels CADD annotation file is provided. Because it can results in too many lines matched from the annotation files and increase run time exponentially. You can override this behavior by providing force_annotate=1 which will force the plugin to annotate with the expense of increasing runtime.

The plugin works with all versions of available CADD files. The plugin only reports scores and does not consider any additional annotations from a CADD file. It is therefore sufficient to use CADD files without the additional annotations.

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv CADD.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin CADD,snv=/FULL_PATH_TO_CADD_FILE/whole_genome_SNVs.tsv.gz,indels=/FULL_PATH_TO_CADD_FILE/InDels.tsv.gz
./vep -i structural_variations.vcf --plugin CADD,sv=/FULL_PATH_TO_CADD_FILE/1000G_phase3_SVs.tsv.gz
./vep -i structural_variations.vcf --plugin CADD,snv=/FULL_PATH_TO_CADD_FILE/whole_genome_SNVs.tsv.gz,indels=/FULL_PATH_TO_CADD_FILE/InDels.tsv.gz,force_annotate=1
</code></pre>

**Category:** Pathogenicity predictions

**External libraries:** -

**Developer:** Ensembl

<span id="CAPICE"></span>

### [CAPICE](https://github.com/Ensembl/VEP_plugins/blob/release/116/CAPICE.pm)

An Ensembl VEP plugin that retrieves CAPICE scores for variants from one or more tabix-indexed CAPICE data files, in order to predict their pathogenicity.

<span id="div_capice"></span>

Please cite the CAPICE publication alongside Ensembl VEP if you use this resource: <https://pubmed.ncbi.nlm.nih.gov/32831124/>

The tabix utility must be installed in your path to use this plugin. The CAPICE SNVs, InDels and respective index (TBI) files for GRCh37 can be downloaded from <https://zenodo.org/record/3928295>

To filter results, please use filter_vep with the output file or standard output. Documentation on filter_vep is available at: [https://www.ensembl.org/info/docs/tools/vep/script/vep_filter.html](/help/articles/vep-filtering-results)

For recommendations on threshold selection, please read the CAPICE publication.

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv CAPICE.pm ~/.vep/Plugins
# Download CAPICE SNVs, InDels and index (TBI) files to the same path
# - capice_v1.0_build37_indels.tsv.gz
# - capice_v1.0_build37_indels.tsv.gz.tbi
# - capice_v1.0_build37_snvs.tsv.gz
# - capice_v1.0_build37_snvs.tsv.gz.tbi
./vep -i variations.vcf --plugin CAPICE,snv=/FULL_PATH_TO_CAPICE_FILE/capice_v1.0_build37_snvs.tsv.gz,indels=/FULL_PATH_TO_CAPICE_FILE/capice_v1.0_build37_indels.tsv.gz
./filter_vep -i variant_effect_output.txt --filter &quot;CAPICE_SCORE &gt;= 0.02&quot;
</code></pre>

**Category:** Pathogenicity predictions

**External libraries:** -

**Developer:** Ensembl

<span id="Carol"></span>

### [Carol](https://github.com/Ensembl/VEP_plugins/blob/release/116/Carol.pm)

An Ensembl VEP plugin that calculates the Combined Annotation scoRing toOL (CAROL) score (1) for a missense mutation based on the pre-calculated SIFT (2) and PolyPhen-2 (3) scores from the Ensembl API (4).

<span id="div_carol"></span>

It adds one new entry to the output, CAROL, which is the calculated CAROL score. Note that this module is a perl reimplementation of the original R script, available at: <https://sanger.ac.uk/tool/carol/>

I believe that both versions implement the same algorithm, but if there are any discrepancies the R version should be treated as the reference implementation. Bug reports are welcome.

References:

1.  Lopes MC, Joyce C, Ritchie GRS, John SL, Cunningham F, Asimit J, Zeggini E. A combined functional annotation score for non-synonymous variants Human Heredity 73(1):47-51 (2012) [doi:10.1159/000334984](https://doi.org/10.1159/000334984)
2.  Kumar P, Henikoff S, Ng PC. Predicting the effects of coding non-synonymous variants on protein function using the SIFT algorithm Nature Protocols 4(8):1073-1081 (2009) [doi:10.1038/nprot.2009.86](https://doi.org/10.1038/nprot.2009.86)
3.  Adzhubei IA, Schmidt S, Peshkin L, Ramensky VE, Gerasimova A, Bork P, Kondrashov AS, Sunyaev SR. A method and server for predicting damaging missense mutations Nature Methods 7(4):248-249 (2010) [doi:10.1038/nmeth0410-248](https://doi.org/10.1038/nmeth0410-248)
4.  Flicek P, et al. Ensembl 2012 Nucleic Acids Research 40(D1):D84-D90 (2011) doi: 10.1093/nar/gkr991

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv Carol.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin Carol
</code></pre>

**Category:** Pathogenicity predictions

**External libraries:** [Math::CDF](https://metacpan.org/pod/Math::CDF) qw(pnorm qnorm)

**Developer:** Ensembl

<span id="ClinPred"></span>

### [ClinPred](https://github.com/Ensembl/VEP_plugins/blob/release/116/ClinPred.pm)

This is a plugin for the Ensembl Variant Effect Predictor (VEP) that adds pre-calculated scores from ClinPred. ClinPred is a prediction tool to identify disease-relevant nonsynonymous variants.

<span id="div_clinpred"></span>

Please cite the ClinPred publication alongside Ensembl VEP if you use this resource: <https://www.sciencedirect.com/science/article/pii/S0002929718302714>

ClinPred scores can be downloaded from <https://sites.google.com/site/clinpred/download>

The following steps are neccessary to tabix the ClinPred.txt.gz file before running the plugin:

For GRCh37:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">gzip -d ClinPred.txt.gz # to unzip the text file 
cat ClinPred.txt | tr &quot; &quot; &quot;\t&quot; &gt; ClinPred_tabbed.tsv # change to tab-delimited file 
sed -i '1s/.*/#&amp;/' ClinPred_tabbed.tsv  # comment the first line
sed -i 1s/Chr/chr/ ClinPred_tabbed.tsv # convert Chr to chr
bgzip ClinPred_tabbed.tsv
tabix -f -s 1 -b 2 -e 2 ClinPred_tabbed.tsv.gz
</code></pre>

For GRCh38:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">gzip -d ClinPred_hg38.txt.gz # unzip the text file 
awk '($2 == &quot;Start&quot; || $2 ~ /^[0-9]+$/){print $0}' ClinPred_hg38.txt &gt; &quot;ClinPred_hg38_tabbed.tsv&quot; # remove problematic lines
sed -i '1s/.*/#&amp;/' ClinPred_hg38_tabbed.tsv # comment the first line
sed -i 1s/Chr/chr/ ClinPred_hg38_tabbed.tsv # convert Chr to chr
</code></pre>

{ head -n 1 ClinPred_hg38_tabbed.tsv; tail -n +2 ClinPred_hg38_tabbed.tsv | sort -k1,1V -k2,2V; } \> ClinPred_hg38_sorted_tabbed.tsv \# sort file by chromosome and position

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">bgzip ClinPred_hg38_sorted_tabbed.tsv
tabix -f -s 1 -b 2 -e 2 ClinPred_hg38_sorted_tabbed.tsv.gz
</code></pre>

The tabix utility must be installed in your path to use this plugin. Check <https://github.com/samtools/htslib.git> for instructions.

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv ClinPred.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin ClinPred,file=ClinPred_tabbed.tsv.gz
</code></pre>

**Category:** Pathogenicity predictions

**External libraries:** -

**Developer:** Ensembl

<span id="Condel"></span>

### [Condel](https://github.com/Ensembl/VEP_plugins/blob/release/116/Condel.pm)

An Ensembl VEP plugin that calculates the Consensus Deleteriousness (Condel) score (1) for a missense mutation based on the pre-calculated SIFT (2) and PolyPhen-2 (3) scores from the Ensembl API (4).

<span id="div_condel"></span>

It adds one new entry to the output, Condel, which is the calculated Condel score. This version of Condel was developed by the Biomedical Genomics Group of the Universitat Pompeu Fabra, at the Barcelona Biomedical Research Park and available at <https://bg.upf.edu/condel>. The code in this plugin is based on a script provided by this group and slightly reformatted to fit into the Ensembl API.

The plugin takes 3 command line arguments by this order:

1.  Path to a Condel configuration directory which contains cutoffs and the distribution files, etc.
2.  Output: output the Condel score (`s`), prediction (`p`) or both (`b`); both (`b`) is the default.
3.  Version of Condel to use: either 1 (original version) or 2 (newer version); `2` is the default and is recommended to avoid false positive predictions from Condel in some circumstances.

An example Condel configuration file and a set of distribution files can be found in the `config/Condel` directory in this repository. You should edit the `config/Condel/config/condel_SP.conf` file and set the `condel.dir` parameter to the full path to the location of the `config/Condel` directory on your system.

References:

1.  Gonzalez-Perez A, Lopez-Bigas N. Improving the assessment of the outcome of non-synonymous SNVs with a Consensus deleteriousness score (Condel) Am J Hum Genet 88(4):440-449 (2011) [doi:10.1016/j.ajhg.2011.03.004](https://doi.org/10.1016/j.ajhg.2011.03.004)
2.  Kumar P, Henikoff S, Ng PC. Predicting the effects of coding non-synonymous variants on protein function using the SIFT algorithm Nature Protocols 4(8):1073-1081 (2009) [doi:10.1038/nprot.2009.86](https://doi.org/10.1038/nprot.2009.86)
3.  Adzhubei IA, Schmidt S, Peshkin L, Ramensky VE, Gerasimova A, Bork P, Kondrashov AS, Sunyaev SR. A method and server for predicting damaging missense mutations Nature Methods 7(4):248-249 (2010) [doi:10.1038/nmeth0410-248](https://doi.org/10.1038/nmeth0410-248)
4.  Flicek P, et al. Ensembl 2012 Nucleic Acids Research (2011) [doi:10.1093/nar/gkr991](https://doi.org/10.1093/nar/gkr991)

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv Condel.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin Condel,/path/to/config/Condel/config,b
</code></pre>

**Category:** Pathogenicity predictions

**External libraries:** -

**Developer:** Ensembl

<span id="Conservation"></span>

### [Conservation](https://github.com/Ensembl/VEP_plugins/blob/release/116/Conservation.pm)

This is a plugin for the Ensembl Variant Effect Predictor (VEP) that retrieves a conservation score from the Ensembl Compara databases for variant positions. You can specify the method link type and species sets as command line options, the default is to fetch GERP scores from the EPO 35 way mammalian alignment (please refer to the Compara documentation for more details of available analyses).

<span id="div_conservation"></span>

If a variant affects multiple nucleotides the average score for the position will be returned, and for insertions the average score of the 2 flanking bases will be returned. If the MAX parameter is used, the maximum score of any of the affected bases will be reported instead.

The plugin uses the ensembl-compara API module (optional, see [http://www.ensembl.org/info/docs/api/index.html](https://jun2026.archive.ensembl.org/info/docs/api/index.html)) or obtains data directly from BigWig files (optional, see <https://ftp.ensembl.org/pub/current_compara/conservation_scores/>)

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv Conservation.pm ~/.vep/Plugins

./vep -i variations.vcf --plugin Conservation,mammals
./vep -i variations.vcf --plugin Conservation,/path/to/bigwigfile.bw
./vep -i variations.vcf --plugin Conservation,/path/to/bigwigfile.bw,MAX
./vep -i variations.vcf --plugin Conservation,database,GERP_CONSERVATION_SCORE,mammals
./vep -i variations.vcf --plugin Conservation,database,GERP_CONSERVATION_SCORE,mammals,MAX
</code></pre>

**Category:** Conservation

**External libraries:** [Net::FTP](https://metacpan.org/pod/Net::FTP)

**Developer:** Ensembl

<span id="dbNSFP"></span>

### [dbNSFP](https://github.com/Ensembl/VEP_plugins/blob/release/116/dbNSFP.pm)

An Ensembl VEP plugin that retrieves data for missense variants from a tabix-indexed dbNSFP file.

<span id="div_dbnsfp"></span>

Please cite the dbNSFP publications alongside the VEP if you use this resource: A guide for version specific citations is available on their website here: <https://www.dbnsfp.org/publications>

You must have the `Bio::DB::HTS` module or the tabix utility must be installed in your path to use this plugin.

From v5.0 onwards, dbNSFP are kindly hosting Ensembl VEP ready files, which are available for download from <https://www.dbnsfp.org/download>

The information below pertains to releases prior to v5.0 - ONLY REQUIRED FOR LEGACY DATA / VERSIONS ---------------------------------------------------------------------------------------------------

About dbNSFP data files:

- Downoad dbNSFP files from <https://sites.google.com/site/jpopgen/dbNSFP>.
- There are two distinct branches of the files provided for academic and commercial usage. Please use the appropriate files for your use case.
- The file must be processed depending on dbNSFP release version and assembly (see commands below). We recommend using `-T` option with the sort command to specify a temporary directory with sufficient space.
- The resulting file must be indexed with tabix before use by this plugin (see commands below).

For release 4.9c:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">version=4.9c
wget https://dbnsfp.s3.amazonaws.com/dbNSFP${version}.zip
unzip dbNSFP${version}.zip
zcat dbNSFP${version}_variant.chr1.gz | head -n1 &gt; h
</code></pre>

\# GRCh38/hg38 data

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">zgrep -h -v ^#chr dbNSFP${version}_variant.chr* | sort -k1,1 -k2,2n - | cat h - | bgzip -c &gt; dbNSFP${version}_grch38.gz
tabix -s 1 -b 2 -e 2 dbNSFP${version}_grch38.gz
</code></pre>

\# GRCh37/hg19 data

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">zgrep -h -v ^#chr dbNSFP${version}_variant.chr* | awk '$8 != &quot;.&quot; ' | sort -k8,8 -k9,9n - | cat h - | bgzip -c &gt; dbNSFP${version}_grch37.gz
tabix -s 8 -b 9 -e 9 dbNSFP${version}_grch37.gz
</code></pre>

When running the plugin you must list at least one column to retrieve from the dbNSFP file, specified as parameters to the plugin, such as:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">--plugin dbNSFP,/path/to/dbNSFP.gz,LRT_score,GERP++_RS
</code></pre>

You may include all columns with `ALL`; this fetches a large amount of data per variant:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">--plugin dbNSFP,/path/to/dbNSFP.gz,ALL
</code></pre>

Tabix also allows the data file to be hosted on a remote server. This plugin is fully compatible with such a setup - simply use the URL of the remote file:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">--plugin dbNSFP,http://my.files.com/dbNSFP.gz,col1,col2
</code></pre>

The plugin replaces occurrences of `;` with `,` and `|` with `&`. However, some data field columns, e.g. `Interpro_domain`, use the replacement characters. We added a file with replacement logic for customising the required replacement of `;` and `|` in dbNSFP data columns. In addition to the default replacements (`;` to `,` and `|` to `&`) users can add customised replacements. Users can either modify the file `dbNSFP_replacement_logic` in the VEP_plugins directory or provide their own file as second argument when calling the plugin:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">--plugin dbNSFP,/path/to/dbNSFP.gz,/path/to/dbNSFP_replacement_logic,LRT_score,GERP++_RS
</code></pre>

Note that transcript sequences referred to in dbNSFP may be out of sync with those in the latest release of Ensembl; this may lead to discrepancies with scores retrieved from other sources.

If the dbNSFP README file is found in the same directory as the data file, column descriptions will be read from this and incorporated into the output file header.

The plugin matches rows in the tabix-indexed dbNSFP file on:

- genomic position
- alt allele
- `aaref` - reference amino acid
- `aaalt` - alternative amino acid

To match only on the genomic position and the alt allele use `pep_match=0`:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">--plugin dbNSFP,/path/to/dbNSFP.gz,pep_match=0,col1,col2
</code></pre>

Some fields contain multiple values, one per Ensembl transcript ID. By default all values are returned, separated by `;` in the default VEP output format. To return values only for the matched Ensembl transcript ID use `transcript_match=1`. This behaviour only affects transcript-specific fields; non-transcript-specific fields are unaffected.

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">--plugin dbNSFP,/path/to/dbNSFP.gz,transcript_match=1,col1,col2
</code></pre>

NB 1: Using this flag may cause no value to return if the version of the Ensembl transcript set differs between Ensembl VEP and dbNSFP.

NB 2: MutationTaster entries are keyed on a different set of transcript IDs. Using the `transcript_match` flag with any MutationTaster field selected will have no effect i.e. all entries are returned. Information on corresponding transcript(s) for MutationTaster fields can be found using <http://www.mutationtaster.org/ChrPos.html>

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv dbNSFP.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin dbNSFP,/path/to/dbNSFP.gz,col1,col2
./vep -i variations.vcf --plugin dbNSFP,'consequence=ALL',/path/to/dbNSFP.gz,col1,col2
./vep -i variations.vcf --plugin dbNSFP,'consequence=3_prime_UTR_variant&amp;intron_variant',/path/to/dbNSFP.gz,col1,col2
</code></pre>

**Category:** Pathogenicity predictions

**External libraries:** [File::Basename](https://metacpan.org/pod/File::Basename) qw(basename)

**Developer:** Ensembl

<span id="dbscSNV"></span>

### [dbscSNV](https://github.com/Ensembl/VEP_plugins/blob/release/116/dbscSNV.pm)

An Ensembl VEP plugin that retrieves data for splicing variants from a tabix-indexed dbscSNV file.

<span id="div_dbscsnv"></span>

Please cite the dbscSNV publication alongside Ensembl VEP if you use this resource: <http://nar.oxfordjournals.org/content/42/22/13534>

The Bio::DB::HTS perl library or tabix utility must be installed in your path to use this plugin. The dbscSNV data file can be downloaded from <https://sites.google.com/site/jpopgen/dbNSFP>.

The file must be processed and indexed by tabix before use by this plugin. dbscSNV1.1 has coordinates for both GRCh38 and GRCh37; the file must be processed differently according to the assembly you use.

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">wget ftp://dbnsfp:dbnsfp@dbnsfp.softgenetics.com/dbscSNV1.1.zip
unzip dbscSNV1.1.zip
head -n1 dbscSNV1.1.chr1 &gt; h
</code></pre>

\# GRCh38

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">cat dbscSNV1.1.chr* | grep -v ^chr | sort -k5,5 -k6,6n | cat h - | awk '$5 != &quot;.&quot;' | bgzip -c &gt; dbscSNV1.1_GRCh38.txt.gz
tabix -s 5 -b 6 -e 6 -c c dbscSNV1.1_GRCh38.txt.gz
</code></pre>

\# GRCh37

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">cat dbscSNV1.1.chr* | grep -v ^chr | cat h - | bgzip -c &gt; dbscSNV1.1_GRCh37.txt.gz
tabix -s 1 -b 2 -e 2 -c c dbscSNV1.1_GRCh37.txt.gz
</code></pre>

Note that in the last command we tell tabix that the header line starts with "c"; this may change to the default of "#" in future versions of dbscSNV.

Tabix also allows the data file to be hosted on a remote server. This plugin is fully compatible with such a setup - simply use the URL of the remote file:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">--plugin dbscSNV,http://my.files.com/dbscSNV.txt.gz
</code></pre>

Note that transcript sequences referred to in dbscSNV may be out of sync with those in the latest release of Ensembl; this may lead to discrepancies with scores retrieved from other sources.

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv dbscSNV.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin dbscSNV,/path/to/dbscSNV1.1_GRCh38.txt.gz
</code></pre>

**Category:** Splicing predictions

**External libraries:** -

**Developer:** Ensembl

<span id="DeNovo"></span>

### [DeNovo](https://github.com/Ensembl/VEP_plugins/blob/release/116/DeNovo.pm)

An Ensembl VEP plugin that identifies de novo variants in a VCF file. The plugin is not compatible with JSON output format.

<span id="div_denovo"></span>

Options are passed to the plugin as key=value pairs:

**`ped`**

Path to PED file (mandatory) The file is tab or white-space delimited with five mandatory columns:

- family ID
- individual ID
- paternal ID
- maternal ID
- sex
- phenotype (optional)

**`report_dir`**

Write files in report_dir (optional)

**`full_report`**

Set to 1 to report all types of variants (optional) By default, the plugin only reports de novo variants.

The plugin can then be run:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i variations.vcf --plugin DeNovo,ped=samples.ped
./vep -i variations.vcf --plugin DeNovo,ped=samples.ped,report_dir=path/to/dir
./vep -i variations.vcf --plugin DeNovo,ped=samples.ped,report_dir=path/to/dir,full_report=1
</code></pre>

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv DeNovo.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin DeNovo,ped=samples.ped
./vep -i variations.vcf --plugin DeNovo,ped=samples.ped,full_report=1
</code></pre>

**Category:** Variant data

**External libraries:**

- [Cwd](https://metacpan.org/pod/Cwd)
- [List::MoreUtils](https://metacpan.org/pod/List::MoreUtils) qw(uniq)

**Developer:** Ensembl

<span id="DosageSensitivity"></span>

### [DosageSensitivity](https://github.com/Ensembl/VEP_plugins/blob/release/116/DosageSensitivity.pm)

An Ensembl VEP plugin that retrieves haploinsufficiency and triplosensitivity probability scores for affected genes from a dosage sensitivity catalogue published in paper - <https://www.sciencedirect.com/science/article/pii/S0092867422007887>

<span id="div_dosagesensitivity"></span>

Please cite the above publication alongside Ensembl VEP if you use this resource.

This plugin returns two scores:

- pHaplo score gives the probability of a gene being haploinsufficient (deletion intolerant)
- pTriplo score gives the probability of a gene being triploinsensitive (duplication intolerant)

Pre-requisites: You need the compressed tsv file containing the dosage sensitivity score. The file Collins_rCNV_2022.dosage_sensitivity_scores.tsv.gz can be downloaded from here - <https://zenodo.org/record/6347673/files/Collins_rCNV_2022.dosage_sensitivity_scores.tsv.gz>

Options are passed to the plugin as key=value pairs:

**`file`**

(mandatory) compressed tsv file containing dosage sensitivity scores

**`cover`**

set value to 1 (0 by default) to report scores only if the variant covers the affected feature completely (e.g. - a CNV that duplicates the gene). The feature is a gene if using --database otherwise it is a transcript.

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv DosageSensitivity.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin DosageSensitivity,file=/FULL_PATH_TO/Collins_rCNV_2022.dosage_sensitivity_scores.tsv.gz
./vep -i variations.vcf --plugin DosageSensitivity,file=/FULL_PATH_TO/Collins_rCNV_2022.dosage_sensitivity_scores.tsv.gz,cover=1
</code></pre>

**Category:** Gene tolerance to change

**External libraries:** -

**Developer:** Ensembl

<span id="Downstream"></span>

### [Downstream](https://github.com/Ensembl/VEP_plugins/blob/release/116/Downstream.pm)

This is a plugin for the Ensembl Variant Effect Predictor (VEP) that predicts the downstream effects of a frameshift variant on the protein sequence of a transcript. It provides the predicted downstream protein sequence (including any amino acids overlapped by the variant itself), and the change in length relative to the reference protein.

<span id="div_downstream"></span>

Note that changes in splicing are not predicted - only the existing translateable (i.e. spliced) sequence is used as a source of translation. Any variants with a splice site consequence type are ignored.

In run in offline mode, using the flag --offline, a FASTA file is required. See: [https://www.ensembl.org/info/docs/tools/vep/script/vep_cache.html#fasta](/help/articles/vep-annotation-sources#fasta) Sequence may be incomplete without a FASTA file or database connection.

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv Downstream.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin Downstream
</code></pre>

**Category:** Nearby features

**External libraries:** -

**Developer:** Ensembl

<span id="Draw"></span>

### [Draw](https://github.com/Ensembl/VEP_plugins/blob/release/116/Draw.pm)

An Ensembl VEP plugin that draws pictures of the transcript model showing the variant location.

<span id="div_draw"></span>

Takes five optional paramters:

1.  File name stem for images
2.  Image width in pixels (default: 1000px)
3.  Image height in pixels (default: 100px)
4.  Transcript ID - only draw images for this transcript
5.  Variant ID - only draw images for this variant

e.g.

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i variations.vcf --plugin Draw,myimg,2000,100
</code></pre>

Images are written to `[file_stem]_[transcript_id]_[variant_id].png`

Requires GD library installed to run.

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv Draw.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin Draw
</code></pre>

**Category:** Visualisation

**External libraries:**

- [GD::Polygon](https://metacpan.org/pod/GD::Polygon)
- [GD](https://metacpan.org/pod/GD)

**Developer:** Ensembl

<span id="Enformer"></span>

### [Enformer](https://github.com/Ensembl/VEP_plugins/blob/release/116/Enformer.pm)

This is a plugin for the Ensembl Variant Effect Predictor (VEP) that adds pre-calculated Enformer predictions of variant impact on chromatin and gene expression.

<span id="div_enformer"></span>

The predictions have been aggregated across all 896 spatial bins to generate 5313 features corresponding to track prediction changes in differnet assays and cell types.

This plugin is available for GRCh37 and GRCh38

Please cite the Enformer publication alongside Ensembl VEP if you use this resource: <https://www.nature.com/articles/s41592-021-01252-x>

GRCh38 scores were lifted over using CrossMap from the Enformer scores available here - <https://console.cloud.google.com/storage/browser/dm-enformer/variant-scores/1000-genomes/enformer>

Enformer scores can be downloaded from <https://ftp.ensembl.org/pub/current_variation/Enformer> for GRCh37 and GRCh38.

The plugin can then be run as default to retrieve SAD (SNP Activity Difference (SAD) and SAR (Same as SAD, by computing np.log2(1 + model(alternate_sequence)) - np.log2(1 + model(reference_sequence)) scores from Enforme :

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i variations.vcf --assembly GRCh38 --plugin Enformer,file=/path/to/Enformer/data.vcf.gz
</code></pre>

or run with option to only retrieve the SAD (SNP Activity Difference (SAD) scores - main variant effect score computed as model(alternate_sequence) - model(reference_sequence) score

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i variations.vcf --assembly GRCh38 --plugin Enformer,file=/path/to/Enformer/data.vcf.gz,SAD=1
</code></pre>

or run with option to only retrieve the SAR (Same as SAD, by computing np.log2(1 + model(alternate_sequence)) - np.log2(1 + model(reference_sequence)) score

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i variations.vcf --assembly GRCh38 --plugin Enformer,file=/path/to/Enformer/data.vcf.gz,SAR=1
</code></pre>

or run with option to also retrieve the principal component scores which are a reduced representation of a much bigger vector of the SAD and SAR after using principal component analysis (PCA)

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i variations.vcf --assembly GRCh38 --plugin Enformer,file=/path/to/Enformer/data.vcf.gz,PC=1
</code></pre>

The tabix utility must be installed in your path to use this plugin. Check <https://github.com/samtools/htslib.git> for instructions.

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv Enformer.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin Enformer,file=Enformer_grch38.vcf.gz
</code></pre>

**Category:** Regulatory impact

**External libraries:** -

**Developer:** Ensembl

<span id="EVE"></span>

### [EVE](https://github.com/Ensembl/VEP_plugins/blob/release/116/EVE.pm)

This is a plugin for the Ensembl Variant Effect Predictor (VEP) that adds information from EVE (evolutionary model of variant effect).

<span id="div_eve"></span>

This plugin only report EVE scores for input variants and does not merge input lines to report on adjacent variants. It is only available for GRCh38.

Please cite EVE publication alongside Ensembl VEP if you use this resource: <https://www.nature.com/articles/s41586-021-04043-8>

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">########################################################################
# Get and prepare EVE data: script to merge all VCFs from EVE dataset. #
########################################################################
# EVE input file can be downloaded from https://evemodel.org/api/proteins/bulk/download/ 
# Input: VCF files by protein (vcf_files_missense_mutations inside zip folder)
# Output: Compressed Merged VCF file (vcf.gz) + index file (.tbi)
DATA_FOLDER=/&lt;PATH-TO&gt;/vcf_files_missense_mutations # Fill this line
OUTPUT_FOLDER=/&lt;PATH-TO&gt;/eve_plugin # Fill this line
OUTPUT_NAME=eve_merged.vcf # Default output name
# Get header from first VCF
cat `ls ${DATA_FOLDER}/*vcf | head -n1` &gt; header
# Get variants from all VCFs and add to a single-file
ls ${DATA_FOLDER}/*vcf | while read VCF; do grep -v '^#' ${VCF} &gt;&gt; variants; done
# Merge Header + Variants in a single file
cat header variants | \
awk '$1 ~ /^#/ {print $0;next} {print $0 | &quot;sort -k1,1V -k2,2n&quot;}' &gt; ${OUTPUT_FOLDER}/${OUTPUT_NAME};
# Remove temporary files
rm header variants
# Compress and index
bgzip ${OUTPUT_FOLDER}/${OUTPUT_NAME};
# If not installed, use: sudo apt install tabix
tabix ${OUTPUT_FOLDER}/${OUTPUT_NAME}.gz;
########################################################################
# Get and prepare popEVE data                                          #
########################################################################
# popEVE input file can be downloaded from https://data.evemodel.org/popeve/v1.1/downloads/grch38_popEVE_ukbb_20250715.vcf.gz
# Input: popEVE scores aligned to GRCh38, one file 
# Output: Compressed VCF file (vcf.gz) + index file (.tbi)
wget https://data.evemodel.org/popeve/v1.1/downloads/grch38_popEVE_ukbb_20250715.vcf.gz
tabix grch38_popEVE_ukbb_20250715.vcf.gz

Usage examples: cp EVE.pm ${HOME}/.vep/Plugins
./vep -i variations.vcf --plugin EVE,file=/path/to/eve/data.vcf.gz # By default, Class75 is used.
./vep -i variations.vcf --plugin EVE,file=/path/to/eve/data.vcf.gz,class_number=60
./vep -i variations.vcf --plugin EVE,file=/path/to/eve/data.vcf.gz,popeve_file=/path/to/popeve/data.vcf.gz
./vep -i variations.vcf --plugin EVE,popeve_file=/path/to/popeve/data.vcf.gz
./vep -i variations.vcf --plugin EVE,file=/path/to/eve/data.vcf.gz,class_number=60,popeve_file=/path/to/popeve/data.vcf.gz
</code></pre>

**Category:** Pathogenicity predictions

**External libraries:** -

**Developer:** Ensembl

<span id="FATHMM"></span>

### [FATHMM](https://github.com/Ensembl/VEP_plugins/blob/release/116/FATHMM.pm)

An Ensembl VEP plugin that gets FATHMM scores and predictions for missense variants.

<span id="div_fathmm"></span>

You will need the fathmm.py script and its dependencies (Python, Python MySQLdb). You should create a "config.ini" file in the same directory as the fathmm.py script with the database connection options. More information about how to set up FATHMM can be found on the FATHMM website at <https://github.com/HAShihab/fathmm>

A typical installation could consist of:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">wget https://raw.github.com/HAShihab/fathmm/master/cgi-bin/fathmm.py
wget http://fathmm.biocompute.org.uk/database/fathmm.v2.3.SQL.gz
gunzip fathmm.v2.3.SQL.gz
mysql -h[host] -P[port] -u[user] -p[pass] -e&quot;CREATE DATABASE fathmm&quot;
mysql -h[host] -P[port] -u[user] -p[pass] -Dfathmm &lt; fathmm.v2.3.SQL
echo -e &quot;[DATABASE]\nHOST = [host]\nPORT = [port]\nUSER = [user]\nPASSWD = [pass]\nDB = fathmm\n&quot; &gt; config.ini
</code></pre>

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv FATHMM.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin FATHMM,&quot;python2 /path/to/fathmm/fathmm.py&quot;
</code></pre>

**Category:** Pathogenicity predictions

**External libraries:** -

**Developer:** Ensembl

<span id="FATHMM_MKL"></span>

### [FATHMM_MKL](https://github.com/Ensembl/VEP_plugins/blob/release/116/FATHMM_MKL.pm)

An Ensembl VEP plugin that retrieves FATHMM-MKL scores for variants from a tabix-indexed FATHMM-MKL data file.

<span id="div_fathmm_mkl"></span>

See <https://github.com/HAShihab/fathmm-MKL> for details.

NB: The currently available data file is for GRCh37 only.

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv FATHMM_MKL.pm ~/.vep/Plugins
./vep -i input.vcf --plugin FATHMM_MKL,fathmm-MKL_Current.tab.gz
</code></pre>

**Category:** Pathogenicity predictions

**External libraries:** -

**Developer:** Ensembl

<span id="FlagLRG"></span>

### [FlagLRG](https://github.com/Ensembl/VEP_plugins/blob/release/116/FlagLRG.pm)

An Ensembl VEP plugin that retrieves the LRG ID matching either the RefSeq or Ensembl transcript IDs.

<span id="div_flaglrg"></span>

You can obtain the `list_LRGs_transcripts_xrefs.txt` using:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">wget https://ftp.ebi.ac.uk/pub/databases/lrgex/list_LRGs_transcripts_xrefs.txt
</code></pre>

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv FlagLRG.pm ~/.vep/Plugins
./vep -i variants.vcf --plugin FlagLRG,/path/to/list_LRGs_transcripts_xrefs.txt
</code></pre>

**Category:** External ID

**External libraries:** [Text::CSV](https://metacpan.org/pod/Text::CSV)

**Developer:** Stephen Kazakoff

<span id="FunMotifs"></span>

### [FunMotifs](https://github.com/Ensembl/VEP_plugins/blob/release/116/FunMotifs.pm)

This is a plugin for the Ensembl Variant Effect Predictor (VEP) that adds tissue-specific transcription factor motifs from FunMotifs to the output.

<span id="div_funmotifs"></span>

Please cite the FunMotifs publication alongside Ensembl VEP if you use this resource. The preprint can be found at: <https://www.biorxiv.org/content/10.1101/683722v1>

FunMotifs files can be downloaded from: <http://bioinf.icm.uu.se:3838/funmotifs/> At the time of writing, all BED files found through this link support GRCh37, however other assemblies are supported by the plugin if an appropriate BED file is supplied.

The tabix utility must be installed in your path to use this plugin.

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv FunMotifs.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin FunMotifs,/path/to/funmotifs/all_tissues.bed.gz,uterus
./vep -i variations.vcf --plugin FunMotifs,/path/to/funmotifs/blood.funmotifs_sorted.bed.gz,fscore,dnase_seq

Parameters Required:

[0] : FunMotifs BED file
[1]+ : List of columns to include within the output (e.g. fscore, skin, contactingdomain)
</code></pre>

**Category:** Motif

**External libraries:** -

**Developer:** Ensembl

<span id="G2P"></span>

### [G2P](https://github.com/Ensembl/VEP_plugins/blob/release/116/G2P.pm)<span class="small">gene2phenotype</span>

An Ensembl VEP plugin that uses G2P ([www.ebi.ac.uk/gene2phenotype](https://www.ebi.ac.uk/gene2phenotype)) allelic requirements to assess variants in genes for potential phenotype involvement.

<span id="div_g2p"></span>

The plugin has multiple configuration options, though minimally requires only the CSV file of G2P data. This Plugin is available for GRCh38 and GRCh37.

For further information see: Thormann A, Halachev M, McLaren W, et al. Flexible and scalable diagnostic filtering of genomic variants using G2P with Ensembl VEP. Nature Communications. 2019 May;10(1):2373. [doi:10.1038/s41467-019-10016-3](https://doi.org/10.1038/s41467-019-10016-3). PMID: 31147538; PMCID: PMC6542828.

To improve performance, we recommend running VEP with multiple forks using the --fork \<n\> option where \<n\> is the number of parallel processes. For the G2P plugin we recommend using 4 forks (--fork 4).

G2P data file: To run the plugin it is necessary to provide an uncompressed data file downloaded from G2P, PanelApp or GenCC. G2P files can be downloaded from:

- Website <https://www.ebi.ac.uk/gene2phenotype/download>
- API [https://www.ebi.ac.uk/gene2phenotype/api/panel/\<name\>/download](https://www.ebi.ac.uk/gene2phenotype/api/panel/&ltname%3E/download%C2%A0) ; Accepted panel names are: Cancer, Cardiac, DD, Ear, Eye, Skeletal, Skin (or `All` to download all panels in the same file)

Options are passed to the plugin as key=value pairs, (defaults in parentheses):

**`file`**

Path to the input data file. Supported formats are csv (G2P, GenCC) and tsv (PanelApp). The file needs to be uncompressed.

**`variant_include_list`**

A list of variants to include even if variants do not pass allele frequency filtering. The include list needs to be a sorted, bgzipped and tabixed VCF file.

**`af_monoallelic`**

maximum allele frequency for inclusion for monoallelic genes (0.0001)

**`af_biallelic`**

maximum allele frequency for inclusion for biallelic genes (0.005)

**`confidence_levels`**

Confidence levels include: definitive, strong, moderate, limited Former confidence terms are still supported: confirmed, probable, possible, both RD and IF. Separate multiple values with `&`. <https://www.ebi.ac.uk/gene2phenotype/terminology> Default levels are definitive, strong and moderate (and former terms: confirmed, probable).

**`all_confidence_levels`**

Set to 1 to include all confidence levels. Setting the value to 1 will overwrite any confidence levels provided with the confidence_levels option. Not recommended for diagnostic reporting.

**`af_from_vcf`**

set value to 1 to include allele frequencies from VCF file. Specifiy the list of reference populations to include with `--af_from_vcf_keys`

**`af_from_vcf_keys`**

VCF collections used for annotating variant alleles with observed allele frequencies. Allele frequencies are retrieved from VCF files. If af_from_vcf is set to 1 but no VCF collections are specified with `--af_from_vcf_keys` all available VCF collections are included. Available VCF collections: `topmed`, `uk10k`, `gnomADe`, `gnomADe_r2.1.1`, `gnomADg`, `gnomADg_v3.1.2`, `gnomADe_v4.1`, `gnomADg_v4.1`. Separate multiple values with `&`. VCF collections contain the following populations:

- `topmed` - TOPMed (available for GRCh37 and GRCh38).
- `uk10k` - ALSPAC, TWINSUK (available for GRCh37 and GRCh38).
- `gnomADe` & `gnomADe_r2.1.1` & `gnomADe_v4.1` - gnomADe:AFR, gnomADe:ALL, gnomADe:AMR, gnomADe:ASJ, gnomADe:EAS, gnomADe:FIN, gnomADe:NFE, gnomADe:OTH, gnomADe:SAS (for GRCh37 and GRCh38 respectively).
- `gnomADg` & `gnomADg_v3.1.2` & `gnomADg_v4.1` - gnomADg:AFR, gnomADg:ALL, gnomADg:AMR, gnomADg:ASJ, gnomADg:EAS, gnomADg:FIN, gnomADg:NFE, gnomADg:OTH (for GRCh37 and GRCh38 respectively). Need to use `af_from_vcf` parameter to use this option.

**`only_vcf_freq`**

set to 1 to only use frequency from vcf files, can only be set if af_from_vcf is set. N/B - frequency information may be lost if this option is used

**`types`**

Ensembl VEP SO consequence terms to include. Separate multiple values with `&`. This option replaces the default list. By default, the plugin uses: splice_donor_variant, splice_acceptor_variant, stop_gained, splice_donor_region_variant, splice_donor_5th_base_variant, splice_region_variant, splice_polypyrimidine_tract_variant, frameshift_variant, stop_lost, initiator_codon_variant, inframe_insertion, inframe_deletion,missense_variant, coding_sequence_variant, start_lost,transcript_ablation, transcript_amplification, protein_altering_variant

**`add_types`**

Ensembl VEP SO consequence terms to append to the default types list. Separate multiple values with `&`. This option cannot be used together with `types`.

**`log_dir`**

write stats to log files in log_dir

**`txt_report`**

write all G2P complete genes and attributes to txt file

**`html_report`**

write all G2P complete genes and attributes to html file

**`filter_by_gene_symbol`**

set to 1 if filtering by gene symbol. Do not set if filtering by HGNC_id. This option is set to 1 automatically when using PanelApp files.

**`gencc_submitter`**

Required when using a GenCC input file. Filters the GenCC file to rows whose submitted_as_submitter_name matches this value. Matching is case-insensitive. Empty submitter names are not supported.

**`filter_consequence_match`**

to only report variants where the VEP predicted consequence matches the G2P variant consequence term (GenCC term). Accepted values are:

- broad: includes `almost always`, `probable` and `possible` matches
- strict: includes `almost always` and `probable` matches This option is only supported with G2P input files. More details in <https://europepmc.org/article/MED/37982373> See here for the list of supported variant consequences in G2P: <https://www.ebi.ac.uk/gene2phenotype/about/terminology#variant-consequence-section>

**`flag_consequence_match`**

flag if the VEP predicted consequence matches the G2P variant consequence term (GenCC term). Accepted values are:

- broad: includes 'almost always', `probable` and `possible` matches
- strict: includes 'almost always' and `probable` matches This option is only supported with G2P input files. More details in <https://europepmc.org/article/MED/37982373>

**`only_mane`**

set to 1 to ignore transcripts that are not MANE N/B - Information may be lost if this option is used.

**`include_disease`**

set to 1 to report the disease name from the input file in the VEP output. The disease name is not included in the G2P report files.

For more information - <https://www.ebi.ac.uk/gene2phenotype/variant-filtering>

Example:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">--plugin G2P,file=G2P.csv,af_monoallelic=0.05,types=stop_gained&amp;frameshift_variant
--plugin G2P,file=G2P.csv,af_monoallelic=0.05,af_from_vcf=1
--plugin G2P,file=G2P.csv,af_from_vcf=1,af_from_vcf_keys=topmed&amp;gnomADe_r2.1.1
--plugin G2P,file=G2P.csv,af_from_vcf=1,af_from_vcf_keys=topmed&amp;gnomADe_r2.1.1,confidence_levels='confirmed&amp;probable&amp;both RD and IF' 
--plugin G2P,file=G2P.csv,filter_consequence_match=strict
--plugin G2P,file=G2P.csv
</code></pre>

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv G2P.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin G2P,file=/path/to/G2P.csv
</code></pre>

**Category:** Phenotype data and citations

**External libraries:**

- [Text::CSV](https://metacpan.org/pod/Text::CSV)
- [Scalar::Util](https://metacpan.org/pod/Scalar::Util) qw(looks_like_number)
- [FileHandle](https://metacpan.org/pod/FileHandle)
- [List::Util](https://metacpan.org/pod/List::Util) qw(any)
- [Cwd](https://metacpan.org/pod/Cwd)

**Developer:** Ensembl

<span id="GeneBe"></span>

### [GeneBe](https://github.com/Ensembl/VEP_plugins/blob/release/116/GeneBe.pm)

A user-contributed Ensembl VEP plugin that retrieves automatic ACMG variant classification data from <https://genebe.net/>

<span id="div_genebe"></span>

Please cite the GeneBe publication alongside Ensembl VEP if you use this resource: <https://onlinelibrary.wiley.com/doi/10.1111/cge.14516> .

Please be advised that the GeneBe API is freely accessible for academic purposes only, with a limited number of queries per day, albeit at a high threshold. Kindly utilize this resource judiciously to ensure its availability for others. For further information, please visit <https://genebe.net/about/api>.

In order to extend your daily limits please make an account on <https://genebe.net/> and use your username and API-key as follows:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i variations.vcf --plugin GeneBe,user=example@email.com,password=your_api_key
</code></pre>

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv GeneBe.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin GeneBe
</code></pre>

**Category:** Variant data

**External libraries:** [JSON](https://metacpan.org/pod/JSON)

**Developer:**

- Ensembl
- Piotr Stawinski

<span id="GeneSplicer"></span>

### [GeneSplicer](https://github.com/Ensembl/VEP_plugins/blob/release/116/GeneSplicer.pm)

This is a plugin for the Ensembl Variant Effect Predictor (VEP) that runs GeneSplicer (<https://ccb.jhu.edu/software/genesplicer/>) to get splice site predictions.

<span id="div_genesplicer"></span>

It evaluates a tract of sequence either side of and including the variant, both in reference and alternate states. The amount of sequence included either side defaults to 100bp, but can be modified by passing e.g. "context=50" as a parameter to the plugin.

You will need to download the GeneSplicer binary and data from <ftp://ftp.ccb.jhu.edu/pub/software/genesplicer/GeneSplicer.tar.gz>. Extract the folder using:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">tar -xzf GeneSplicer.tar.gz
</code></pre>

GeneSplicer comes with precompiled binaries for multiple systems. If the provided binaries do not run, compile `genesplicer` from source:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">cd $GS/sources
# if macOS, run this step
[[ $(uname -s) == &quot;Darwin&quot; ]] &amp;&amp; perl -pi -e &quot;s/^main  /int main  /&quot; genesplicer.cpp
make
cd -
./vep [options] --plugin GeneSplicer,$GS/sources/genesplicer,$GS/human
</code></pre>

Predicted splicing regions that overlap the variant are reported in the output with a `/`-separated string (e.g., `loss/acceptor/727006-727007/High/16.231924`) consisting of the following data by this order:

1.  state (no_change, diff, gain, loss)
2.  type (donor, acceptor)
3.  coordinates (start-end)
4.  confidence (Low, Medium, High)
5.  score

If multiple sites are predicted, their reports are separated by ",".

For diff, the confidence and score for both the reference and alternate sequences is reported as REF-ALT, such as `diff/donor/621915-621914/Medium-Medium/7.020731-6.988368`.

Several key=value parameters can be modified in the the plugin string:

**`training`**

(mandatory) directory to species-specific training data, such as `GeneSplicer/human`

**`binary`**

path to `genesplicer` binary (default: `genesplicer`)

**`context`**

change the amount of sequence added either side of the variant (default: 100bp)

**`tmpdir`**

change the temporary directory used (default: `/tmp`)

**`cache_size`**

change how many sequences' scores are cached in memory (default: 50)

Example:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">--plugin GeneSplicer,binary=$GS/bin/linux/genesplicer,training=$GS/human,context=200,tmpdir=/mytmp
</code></pre>

When using Ensembl VEP Docker/Singularity, the `binary` argument can be ommitted, as the `genesplicer` command is exported in the $PATH variable and is thus automatically detected by the plugin:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">--plugin GeneSplicer,training=$GS/human,context=200,tmpdir=/mytmp
</code></pre>

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv GeneSplicer.pm ~/.vep/Plugins
./vep -i variants.vcf --plugin GeneSplicer,binary=$GS/bin/linux/genesplicer,training=$GS/human
./vep -i variants.vcf --plugin GeneSplicer,binary=$GS/bin/linux/genesplicer,training=$GS/human,context=200,tmpdir=/mytmp

# VEP Docker/Singularity: if 'genesplicer' is a command available in $PATH,
# there is no need to specify the location of the binary
./vep -i variants.vcf --plugin GeneSplicer,training=$GS/human
</code></pre>

**Category:** Splicing predictions

**External libraries:** [Digest::MD5](https://metacpan.org/pod/Digest::MD5) qw(md5_hex)

**Developer:** Ensembl

<span id="Geno2MP"></span>

### [Geno2MP](https://github.com/Ensembl/VEP_plugins/blob/release/116/Geno2MP.pm)

An Ensembl VEP plugin that adds information from Geno2MP, a web-accessible database of rare variant genotypes linked to phenotypic information.

<span id="div_geno2mp"></span>

Parameters can be set using a key=value system:

**`file`**

VCF file containing Geno2MP data

**`cols`**

colon-delimited list of Geno2MP columns to return from INFO fields (by default it only returns the column HPO_CT)

**`url`**

build and return URL to Geno2MP variant page (boolean; 0 by default); the variant location in Geno2MP website is based on GRCh37 coordinates

Please cite Geno2MP alongside Ensembl VEP if you use this resource: Geno2MP, NHGRI/NHLBI University of Washington-Center for Mendelian Genomics (UW-CMG), Seattle, WA (URL: <http://geno2mp.gs.washington.edu> \[date (month, yr) accessed\]).

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">cp Geno2MP.pm ${HOME}/.vep/Plugins
./vep -i variations.vcf --plugin Geno2MP,file=/path/to/Geno2MP/data.vcf.gz

# Return more columns from Geno2MP VCF file
./vep -i variations.vcf --plugin Geno2MP,file=/path/to/Geno2MP/data.vcf.gz,cols=HPO_CT:FXN:nhomalt_male_aff:nhomalt_male_unaff

# Build and return Geno2MP URL based on GRCh37 variant location
./vep -i variations.vcf --plugin Geno2MP,file=/path/to/Geno2MP/data.vcf.gz,url=1
</code></pre>

**Category:** Phenotype data and citations

**External libraries:** -

**Developer:** Ensembl

<span id="gnomADc"></span>

### [gnomADc](https://github.com/Ensembl/VEP_plugins/blob/release/116/gnomADc.pm)

An Ensembl VEP plugin that retrieves gnomAD annotation from either the genome or exome coverage files, available here: <https://gnomad.broadinstitute.org/downloads>

<span id="div_gnomadc"></span>

To download the gnomad coverage file in TSV format: for Assembly GRCh37: gnomad genomes:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">wget https://storage.googleapis.com/gcp-public-data--gnomad/release/2.1/coverage/genomes/gnomad.genomes.coverage.summary.tsv.bgz --no-check-certificate
</code></pre>

gnomad exomes:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">wget https://storage.googleapis.com/gcp-public-data--gnomad/release/2.1/coverage/exomes/gnomad.exomes.coverage.summary.tsv.bgz --no-check-certificate
</code></pre>

for Assembly GRCh38: gnomad genomes:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">wget https://storage.googleapis.com/gcp-public-data--gnomad/release/3.0.1/coverage/genomes/gnomad.genomes.r3.0.1.coverage.summary.tsv.bgz --no-check-certificate
</code></pre>

Necessary before using the plugin for Assembly GRCh37: The following steps are necessary to tabix the gnomad genomes coverage file :

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">gunzip -c gnomad.genomes.coverage.summary.tsv.bgz | sed '1s/.*/#&amp;/' &gt; gnomad.genomes.tabbed.tsv
bgzip gnomad.genomes.tabbed.tsv
tabix -s 1 -b 2 -e 2 gnomad.genomes.tabbed.tsv.gz
</code></pre>

The following steps are neccessary to tabix the gnomad exomes coverage file :

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">gunzip -c gnomad.exomes.coverage.summary.tsv.bgz | sed '1s/.*/#&amp;/' &gt; gnomad.exomes.tabbed.tsv
bgzip gnomad.exomes.tabbed.tsv
tabix -s 1 -b 2 -e 2 gnomad.exomes.tabbed.tsv.gz
</code></pre>

for Assembly GRCh38: The following steps are necessary to tabix the gnomad genomes coverage file :

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">gunzip -c gnomad.genomes.r3.0.1.coverage.summary.tsv.bgz | sed '1s/.*/#&amp;/' &gt; gnomad.genomesv3.tabbed.tsv
sed &quot;1s/locus/chr\tpos/; s/:/\t/g&quot; gnomad.genomesv3.tabbed.tsv &gt; gnomad.ch.genomesv3.tabbed.tsv
bgzip gnomad.ch.genomesv3.tabbed.tsv
tabix -s 1 -b 2 -e 2 gnomad.ch.genomesv3.tabbed.tsv
</code></pre>

This plugin also tries to be backwards compatible with older versions of the coverage summary files, including releases 2.0.1 and 2.0.2. These releases provide one coverage file per chromosome and these can be used "as-is" without requiring any preprocessing.

If you use this plugin, please see the terms and data information: <https://gnomad.broadinstitute.org/terms>

You must have the Bio::DB::HTS module or the tabix utility must be installed in your path to use this plugin.

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv gnomADc.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin gnomADc,/path/to/gnomad.tsv.gz 
</code></pre>

**Category:** Frequency data

**External libraries:**

- [File::Basename](https://metacpan.org/pod/File::Basename)
- [File::Spec](https://metacpan.org/pod/File::Spec)

**Developer:** Stephen Kazakoff

<span id="gnomADMt"></span>

### [gnomADMt](https://github.com/Ensembl/VEP_plugins/blob/release/116/gnomADMt.pm)

An Ensembl VEP plugin that retrieves allele frequencies for mitochondrial variants from the gnomAD genomes mitochondrial annotations files, available here: <https://gnomad.broadinstitute.org/downloads#v3-mitochondrial-dna>

<span id="div_gnomadmt"></span>

Options are passed to the plugin as key=value pairs:

**`file`**

(mandatory) Tabix-indexed VCF file from gnomAD

**`fields`**

(optional) Colon-separated list of information from mitochondrial variants to output (default: `hap_AC_hom:hap_AC_het:hap_AF_hom:hap_AF_het:hap_AN`); keyword `all` can be used to print all fields; Available fields are the names of INFO fields.

**`hap_filter`**

(optional) Colon-separated list of haplogroups to limit returned haplogroup field data to. The order of the list is preserved in the output. Example: `HV:A:B`. By default, data for all haplogroups is returned for all haplogroup fields (/hap\_.+/).

**`pop_filter`**

(optional) Colon-separated list of populations to limit returned population field data to. The order of the list is preserved in the output. Example: `eas:fin:afr`. By default, data for all populations is returned for all population fields (/pop\_.+/).

To download the gnomad Mitochondrial allele annotations file in VCF format (GRCh38 based) and the corresponding index file:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">wget https://storage.googleapis.com/gcp-public-data--gnomad/release/3.1/vcf/genomes/gnomad.genomes.v3.1.sites.chrM.vcf.bgz --no-check-certificate
wget https://storage.googleapis.com/gcp-public-data--gnomad/release/3.1/vcf/genomes/gnomad.genomes.v3.1.sites.chrM.vcf.bgz.tbi --no-check-certificate
</code></pre>

If you use this plugin, please see the terms and data information: <https://gnomad.broadinstitute.org/terms>

You must have the Bio::DB::HTS module or the tabix utility must be installed in your path to use this plugin.

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv gnomADMt.pm ~/.vep/Plugins

# Default usage
./vep -i variations.vcf --plugin gnomADMt,file=/path/to/gnomad.genomes.v3.1.sites.chrM.vcf.bgz
# Only return (haplotype-)grouped data for the specified haplogroups
./vep -i variations.vcf --plugin gnomADMt,file=/path/to/gnomad.genomes.v3.1.sites.chrM.vcf.bgz,hap_filter=HV:A:B
# Only return population-grouped data for the specified populations
./vep -i variations.vcf --plugin gnomADMt,file=/path/to/gnomad.genomes.v3.1.sites.chrM.vcf.bgz,fields=pop_AC_hom:pop_AC_het:pop_AF_hom:pop_AF_het:pop_AN,pop_filter=eas:fin:afr
</code></pre>

**Category:** Frequency data

**External libraries:** [List::Util](https://metacpan.org/pod/List::Util) qw(max)

**Developer:** Ensembl

<span id="GO"></span>

### [GO](https://github.com/Ensembl/VEP_plugins/blob/release/116/GO.pm)<span class="small">Gene Ontology</span>

An Ensembl VEP plugin that retrieves Gene Ontology (GO) terms associated with transcripts (e.g. GRCh38) or their translations (e.g. GRCh37) using custom GFF annotation containing GO terms.

<span id="div_go"></span>

The custom GFF files are automatically created if the input file do not exist by querying the Ensembl core database, according to database version, species and assembly used in Ensembl VEP. Note that automatic retrieval fails if using the --offline option.

The GFF files containing the GO terms are saved to and loaded from the working directory by default. To change this, provide a directory path as an argument:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">--plugin GO,dir=${HOME}/go_terms
</code></pre>

If your GFF file has a custom name, please provide the filename directly:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">--plugin GO,file=${HOME}/custom_go_terms.gff.gz
</code></pre>

The GO terms can also be fetched by gene match (either gene Ensembl ID or gene symbol) instead:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">--plugin GO,match=gene
--plugin GO,match=gene_symbol
</code></pre>

To create/use a custom GFF file, these programs must be installed in your path:

- The GNU zgrep and GNU sort commands to create the GFF file.
- The tabix and bgzip utilities to create and read the GFF file: check <https://github.com/samtools/htslib.git> for installation instructions.

Alternatively, for compatibility purposes, the plugin allows to use a remote connection to the Ensembl API by using "remote" as a parameter. This method retrieves GO terms one by one at both the transcript and translation level. This is not compatible with any other parameters:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">--plugin GO,remote
</code></pre>

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv GO.pm ~/.vep/Plugins

# automatically fetch GFF files with GO terms and annotate input with GO terms
# not compatible with --offline option
./vep -i variations.vcf --plugin GO

# set directory used to write and read GFF files with GO terms
./vep -i variations.vcf --plugin GO,dir=${HOME}/go_terms

# annotate input with GO terms from custom GFF file
./vep -i variations.vcf --plugin GO,file=${HOME}/custom_go_terms.gff.gz

# annotate input based on gene identifiers instead of transcripts/translations
./vep -i variations.vcf --plugin GO,match=gene

# use remote connection (available for compatibility purposes)
./vep -i variations.vcf --plugin GO,remote
</code></pre>

**Category:** Phenotype data and citations

**External libraries:** -

**Developer:** Ensembl

<span id="GWAS"></span>

### [GWAS](https://github.com/Ensembl/VEP_plugins/blob/release/116/GWAS.pm)

An Ensembl VEP plugin that retrieves relevant NHGRI-EBI GWAS Catalog data given the file.

<span id="div_gwas"></span>

This plugin supports both the curated data that is found in the download section of the NHGRI-EBI GWAS Catalog website and the summary statistics file. By default the plugin assumes the file provided is the curated file but you can pass "type=sstate" to say you want to annotate with a summary statistics file.

Please cite the following publication alongside Ensembl VEP if you use this resource: <https://pubmed.ncbi.nlm.nih.gov/30445434/>

Pre-requisites:

For curated NHGRI-EBI GWAS Catalog file - GWAS files can be downloaded from - <https://www.ebi.ac.uk/gwas/api/search/downloads/alternative>

For summary statistics file - The plugin can process the harmonised version of the summary statistics file. Which can be downloaded from the FTP site - <http://ftp.ebi.ac.uk/pub/databases/gwas/summary_statistics>

They are under directory with related to their specific GCST id. For example - <http://ftp.ebi.ac.uk/pub/databases/gwas/summary_statistics/GCST000001-GCST001000/GCST000028/harmonised/17463246-GCST000028-EFO_0001360.h.tsv.gz>

Please keep the filename format as it is because filename is parsed to get information.

When run for the first time for either type of file, the plugin will create a processed file that have genomic locations and indexed and put it under the --dir location determined by Ensembl VEP. If db=1 option is used, depending on the file size it might take hour(s) to create the processed file. Subsequent runs will be faster as the plugin will be using the already generated processed file. This option is not used by default and the variant information is generally taken directly from the file provided.

Options are passed to the plugin as key=value pairs:

**`file`**

(mandatory) Path to GWAS curated or summary statistics file

**`type`**

type of the file. Valid values are "curated" and "sstate" (summary statistics). Default is "curated".

**`verbose`**

display info level messages. Valid values are 0 or 1. Default is 0.

**`db`**

get variant information from Ensembl database during creation of processed file. Valid values are 0 or 1. Default is 0 (variant information is retrieved from curated file)

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv GWAS.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin GWAS,file=/FULL_PATH_TO/gwas_catalog_v1.0.2-associations_e107_r2022-09-14.tsv
./vep -i variations.vcf --plugin GWAS,type=sstate,file=/FULL_PATH_TO/17463246-GCST000028-EFO_0001360.h.tsv.gz
</code></pre>

**Category:** Phenotype data and citations

**External libraries:**

- [File::Basename](https://metacpan.org/pod/File::Basename)
- [Storable](https://metacpan.org/pod/Storable) qw(dclone)

**Developer:** Ensembl

<span id="HGVSIntronOffset"></span>

### [HGVSIntronOffset](https://github.com/Ensembl/VEP_plugins/blob/release/116/HGVSIntronOffset.pm)

An Ensembl VEP plugin for the Ensembl Variant Effect Predictor (VEP) that returns HGVS intron start and end offsets. To be used with --hgvs option.

<span id="div_hgvsintronoffset"></span>

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv HGVSIntronOffset.pm ~/.vep/Plugins
./vep -i variants.vcf --hgvs --plugin HGVSIntronOffset
</code></pre>

**Category:** HGVS

**External libraries:** -

**Developer:** Stephen Kazakoff

<span id="IntAct"></span>

### [IntAct](https://github.com/Ensembl/VEP_plugins/blob/release/116/IntAct.pm)

An Ensembl VEP plugin that retrieves molecular interaction data for variants as reprted by IntAct database.

<span id="div_intact"></span>

Please cite the IntAct publication alongside Ensembl VEP if you use this resource: <https://pubmed.ncbi.nlm.nih.gov/24234451/>

Pre-requisites:

1.  IntAct files can be downloaded from - <https://ftp.ebi.ac.uk/pub/databases/intact/current/various>
2.  The genomic location mapped file needs to be tabix indexed. You can do this by following commands -

a\) filter, sort and then zip

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">grep -v -e '^$' -e '^[#\-]' mutation_gc_map.txt | sed '1s/.*/#&amp;/' | awk -F &quot;\t&quot; 'BEGIN { OFS=&quot;\t&quot;} {if ($2 &gt; $3) {a=$2; $2=$3; $3=a}; print $0 }' | sort -k1,1 -k2,2n -k3,3n | bgzip &gt; mutation_gc_map.txt.gz
</code></pre>

b\) create tabix indexed file -

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">tabix -s 1 -b 2 -e 3 -f mutation_gc_map.txt.gz
</code></pre>

1.  As you have already noticed, tabix utility must be installed in your path to use this plugin.

Options are passed to the plugin as key=value pairs:

**`mapping_file`**

(mandatory) Path to tabix-indexed genomic location mapped file

**`mutation_file`**

(mandatory) Path to IntAct data file

By default the output will always contain feature_type and interaction_ac from the IntAct data file. You can also add more fields using the following key=value options -

**`feature_ac`**

Set value to 1 to include Feature AC in the output

**`feature_short_label`**

Set value to 1 to include Feature short label in the output

**`feature_annotation`**

Set value to 1 to include Feature annotation in the output

**`ap_ac`**

Set value to 1 to include Affected protein AC in the output

**`interaction_participants`**

Set value to 1 to include Interaction participants in the output

**`pmid`**

Set value to 1 to include PubMedID in the output

There are also two other key=value options for customizing the output -

**`all`**

Set value to 1 to include all the fields

**`minimal`**

Set value to 1 to overwrite default behavior and include only interaction_ac in the output by default

See what these options mean - <https://www.ebi.ac.uk/intact/download/datasets#mutations>

Note that, interaction accession can be used to link to full details on the interaction website. For example, where the output reports an interaction_ac of EBI-12501485, the URL would be :

<https://www.ebi.ac.uk/intact/details/interaction/EBI-12501485>

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv IntAct.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin IntAct,mutation_file=/FULL_PATH_TO_IntAct_FILE/mutations.tsv,mapping_file=/FULL_PATH_TO_IntAct_FILE/mutation_gc_map.txt.gz
./vep -i variations.vcf --plugin IntAct,mutation_file=/FULL_PATH_TO_IntAct_FILE/mutations.tsv,mapping_file=/FULL_PATH_TO_IntAct_FILE/mutation_gc_map.txt.gz,minimal=1
</code></pre>

**Category:** Functional effect

**External libraries:** -

**Developer:** Ensembl

<span id="LD"></span>

### [LD](https://github.com/Ensembl/VEP_plugins/blob/release/116/LD.pm)<span class="small">Linkage Disequilibrium</span>

An Ensembl VEP plugin that finds variants in linkage disequilibrium with any overlapping existing variants from the Ensembl variation databases.

<span id="div_ld"></span>

You can configure the population used to calculate the r2 value, and the r2 cutoff used by passing arguments to the plugin via the command line (separated by commas). This plugin adds a single new entry to the Extra column with a comma-separated list of linked variant IDs and the associated r2 values: LinkedVariants=rs123:0.879,rs234:0.943

If no arguments are supplied, the default population used is the CEU sample from the 1000 Genomes Project phase 3, and the default r2 cutoff used is 0.8.

WARNING: Calculating LD is a relatively slow procedure, so this will increase runtime considerably when running on large numbers of variants. Consider running vep followed by filter_vep to get a smaller input set:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i input.vcf -cache -vcf -o input_vep.vcf
./filter_vep -i input_vep.vcf -filter &quot;Consequence is missense_variant&quot; &gt; input_vep_filtered.vcf
./vep -i input_vep_filtered.vcf -cache -plugin LD
</code></pre>

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv LD.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin LD,1000GENOMES:phase_3:CEU,0.8
./vep -i variations.vcf --plugin LD,'populations=1000GENOMES:phase_3:CEU&amp;1000GENOMES:phase_3:PUR&amp;1000GENOMES:phase_3:STU',0.8
</code></pre>

**Category:** Variant data

**External libraries:** -

**Developer:** Ensembl

<span id="LocalID"></span>

### [LocalID](https://github.com/Ensembl/VEP_plugins/blob/release/116/LocalID.pm)

The LocalID plugin allows you to use variant IDs as input without making a database connection.

<span id="div_localid"></span>

Requires sqlite3.

A local sqlite3 database is used to look up variant IDs; this is generated either from Ensembl's public database (very slow, but includes synonyms), or from Ensembl VEP cache file (faster, excludes synonyms).

NB: this plugin is NOT compatible with the ensembl-tools variant_effect_predictor.pl version of Ensembl VEP.

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv LocalID.pm ~/.vep/Plugins

## first run create database

# EITHER create from Ensembl variation database
# VERY slow but includes variant synonyms, if not required see next command
./vep -i variant_ids.txt --plugin LocalID,create_db=1 -safe

# OR create from cache directory
# faster but does not include synonyms
# parameter passed to from_cache may be full path to cache e.g. $HOME/.vep/homo_sapiens/88_GRCh38
# cache may be tabix converted or in default state (http://www.ensembl.org/info/docs/tools/vep/script/vep_cache.html#convert)
./vep -i variant_ids.txt --plugin LocalID,create_db=1,from_cache=1 -safe

# subsequent runs
./vep -i variant_ids.txt --plugin LocalID

# db file can be specified with db=[file]
# default file name is $HOME/.vep/[species]_[version]_[assembly].variant_ids.sqlite3
./vep -i variant_ids.txt --plugin LocalID,db=my_db_file.txt
</code></pre>

**Category:** Look up

**External libraries:** -

**Developer:** Ensembl

<span id="LOEUF"></span>

### [LOEUF](https://github.com/Ensembl/VEP_plugins/blob/release/116/LOEUF.pm)

This is a plugin for the Ensembl Variant Effect Predictor (VEP) that adds the LOEUF scores to VEP output. LOEUF stands for the "loss-of-function observed/expected upper bound fraction."

<span id="div_loeuf"></span>

The score can be added matching by either transcript or gene. When matched by gene: If multiple transcripts are available for a gene, the most severe score is reported.

NB: The plugin currently does not add the score for downstream_gene_variant and upstream_gene_variant

Please cite the LOEUF publication alongside the VEP if you use this resource: <https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7334197/>

LOEUF scores can be downloaded from GRCh37: <https://gnomad.broadinstitute.org/downloads#v2-constraint> (pLoF Metrics by Gene TSV) GRCh38: <https://gnomad.broadinstitute.org/downloads#v4-constraint> (Constraint metrics TSV)

For GRCh37: These files can be tabix-processed by:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">zcat gnomad.v2.1.1.lof_metrics.by_gene.txt.bgz | (head -n 1 &amp;&amp; tail -n +2  | sort -t$'\t' -k 76,76 -k 77,77n ) &gt; loeuf_temp.tsv
sed '1s/.*/#&amp;/' loeuf_temp.tsv &gt; loeuf_dataset.tsv
bgzip loeuf_dataset.tsv
tabix -f -s 76 -b 77 -e 78 loeuf_dataset.tsv.gz
</code></pre>

For GRCh38: The GRCh38 file does not have gene co-ordinates information. First you need to add the gene co-ordiates information. You can use the Ensembl Perl API to create a script and perform that - [https://www.ensembl.org/info/docs/api/core/index.html](https://jun2026.archive.ensembl.org/info/docs/api/core/index.html). After adding the start and end position of the genes at the last 2 columns you can process the file as follows:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">cat gnomad.v4.1.1.constraint_metrics.tsv | (sed -u 1q; sort -k 114,114 -k 115,115n) | sed '1s/.*/#&amp;/' | bgzip -c &gt; loeuf_dataset_grch38.tsv.gz
 tabix -f -s 114 -b 115 -e 116 loeuf_dataset_grch38.tsv.gz 
</code></pre>

The processed file can be downloaded from: <https://ftp.ensembl.org/pub/current/variation/LOEUF/loeuf_dataset_grch38.tsv.gz> The tabix utility must be installed in your path to use this plugin.

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv LOEUF.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin LOEUF,file=/path/to/loeuf/data.tsv.gz,match_by=gene
./vep -i variations.vcf --plugin LOEUF,file=/path/to/loeuf/data.tsv.gz,match_by=transcript
</code></pre>

**Category:** Gene tolerance to change

**External libraries:** [Scalar::Util](https://metacpan.org/pod/Scalar::Util) qw(looks_like_number)

**Developer:** Ensembl

<span id="LoFtool"></span>

### [LoFtool](https://github.com/Ensembl/VEP_plugins/blob/release/116/LoFtool.pm)<span class="small">Loss-of-function</span>

Add LoFtool scores to Ensembl VEP output.

<span id="div_loftool"></span>

LoFtool provides a rank of genic intolerance and consequent susceptibility to disease based on the ratio of Loss-of-function (LoF) to synonymous mutations for each gene in 60,706 individuals from ExAC, adjusting for the gene de novo mutation rate and evolutionary protein conservation. The lower the LoFtool gene score percentile the most intolerant is the gene to functional variation. For more details please see (Fadista J et al. 2017), PMID:27563026. The authors would like to thank the Exome Aggregation Consortium and the groups that provided exome variant data for comparison. A full list of contributing groups can be found at <http://exac.broadinstitute.org/about>.

The LoFtool_scores.txt file is found alongside the plugin in the VEP_plugins GitHub repo.

To use another scores file, add it as a parameter i.e.

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i variants.vcf --plugin LoFtool,scores_file.txt
</code></pre>

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv LoFtool.pm ~/.vep/Plugins
mv LoFtool_scores.txt ~/.vep/Plugins
./vep -i variants.vcf --plugin LoFtool
</code></pre>

**Category:** Pathogenicity predictions

**External libraries:** [DBI](https://metacpan.org/pod/DBI)

**Developer:** Ensembl

<span id="LOVD"></span>

### [LOVD](https://github.com/Ensembl/VEP_plugins/blob/release/116/LOVD.pm)<span class="small">Leiden Open Variation Database</span>

An Ensembl VEP plugin that retrieves LOVD variation data from <http://www.lovd.nl/>.

<span id="div_lovd"></span>

Please be aware that LOVD is a public resource of curated variants, therefore please respect this resource and avoid intensive querying of their databases using this plugin, as it will impact the availability of this resource for others.

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv LOVD.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin LOVD
</code></pre>

**Category:** Variant data

**External libraries:** [LWP::UserAgent](https://metacpan.org/pod/LWP::UserAgent)

**Developer:** Ensembl

<span id="Mastermind"></span>

### [Mastermind](https://github.com/Ensembl/VEP_plugins/blob/release/116/Mastermind.pm)

This is a plugin for the Ensembl Variant Effect Predictor (VEP) that uses the Mastermind Genomic Search Engine (<https://www.genomenon.com/mastermind>) to report variants that have clinical evidence cited in the medical literature. It is available for both GRCh37 and GRCh38.

<span id="div_mastermind"></span>

Please cite the Mastermind publication alongside Ensembl VEP if you use this resource: <https://www.frontiersin.org/article/10.3389/fgene.2020.577152>

Running options: The plugin has multiple parameters, the first one is expected to be the file name path which can be followed by 3 optional flags. Default: the plugin matches the citation data with the specific mutation. Using first flag `1`: returns the citations for all mutations/transcripts. Using the second flag `1`: only returns the Mastermind variant identifier(s). Using the third flag `1`: also returns the Mastermind URL.

Output: The output includes three unique counts 'MMCNT1, MMCNT2, MMCNT3' and one identifier `MMID3` to be used to build an URL which shows all articles from MMCNT3.

- `MMCNT1` is the count of Mastermind articles with cDNA matches for a specific variant;
- `MMCNT2` is the count of Mastermind articles with variants either explicitly matching at the cDNA level or given only at protein level;
- `MMCNT3` is the count of Mastermind articles including other DNA-level variants resulting in the same amino acid change;
- `MMID3` is the Mastermind variant identifier(s), as gene:key. Link to the Genomenon Mastermind Genomic Search Engine;

To build the URL, substitute the `gene:key` in the following link with the value from MMID3: <https://mastermind.genomenon.com/detail?mutation=gene:key>

If the third flag is used then the built URL is returned and it's identified by `URL`.

More information can be found at: <https://www.genomenon.com/cvr/>

The following steps are necessary before running this plugin:

Download and Registry (free): <https://www.genomenon.com/cvr/>

GRCh37 VCF:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">unzip mastermind_cited_variants_reference-XXXX.XX.XX-grch37-vcf.zip
bgzip mastermind_cited_variants_reference-XXXX.XX.XX-GRCh37-vcf
tabix -p vcf mastermind_cited_variants_reference-XXXX.XX.XX.GRCh37-vcf.gz
</code></pre>

GRCh38 VCF:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">unzip mastermind_cited_variants_reference-XXXX.XX.XX-grch38-vcf.zip
bgzip mastermind_cited_variants_reference-XXXX.XX.XX-GRCh38-vcf
tabix -p vcf mastermind_cited_variants_reference-XXXX.XX.XX.GRCh38-vcf.gz
</code></pre>

The plugin can then be run as default:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i variations.vcf --plugin Mastermind,file=/path/to/mastermind_cited_variants_reference-XXXX.XX.XX.GRChXX-vcf.gz
</code></pre>

or with an option to not filter by mutations (first flag):

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i variations.vcf --plugin Mastermind,file=/path/to/mastermind_cited_variants_reference-XXXX.XX.XX.GRChXX-vcf.gz,mutations=1
</code></pre>

or with an option to only return `MMID3` e.g. the Mastermind variant identifier as gene:key (second flag):

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i variations.vcf --plugin Mastermind,file=/path/to/mastermind_cited_variants_reference-XXXX.XX.XX.GRChXX-vcf.gz,mutations=0,var_iden=1
</code></pre>

or with an option to also return the Mastermind URL (third flag):

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i variations.vcf --plugin Mastermind,file=/path/to/mastermind_cited_variants_reference-XXXX.XX.XX.GRChXX-vcf.gz,mutations=0,var_iden=0,url=1
</code></pre>

Note: when running in offline mode Mastermind requires a fasta file (--fasta)

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv Mastermind.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin Mastermind,file=/path/to/data.vcf.gz
./vep -i variations.vcf --plugin Mastermind,file=/path/to/data.vcf.gz,mutations=1
./vep -i variations.vcf --plugin Mastermind,file=/path/to/data.vcf.gz,mutations=0,var_iden=1
./vep -i variations.vcf --plugin Mastermind,file=/path/to/data.vcf.gz,mutations=0,var_iden=0,url=1
</code></pre>

**Category:** Phenotype data and citations

**External libraries:** -

**Developer:** Ensembl

<span id="MaveDB"></span>

### [MaveDB](https://github.com/Ensembl/VEP_plugins/blob/release/116/MaveDB.pm)

An Ensembl VEP plugin that retrieves data from MaveDB (<https://www.mavedb.org>), a database that contains multiplex assays of variant effect, including deep mutational scans and massively parallel report assays.

<span id="div_mavedb"></span>

To run the MaveDB plugin, please download the following files containing MaveDB data for GRCh38 (we do not currently host data for other assemblies):

- <https://ftp.ensembl.org/pub/current_variation/MaveDB/MaveDB_variants.tsv.gz>
- <https://ftp.ensembl.org/pub/current_variation/MaveDB/MaveDB_variants.tsv.gz.tbi>

Options are passed to the plugin as key=value pairs:

**`file`**

(mandatory) Tabix-indexed MaveDB file

**`cols`**

Colon-separated columns to print from MaveDB files; if set to `all`, all columns are printed (default: `urn:score:nt:pro:doi`)

**`single_aminoacid_changes`**

Return matches for single aminoacid changes only; if disabled, return all matches associated with a genetic variant (default: 1)

**`transcript_match`**

Return results only if (Ensembl or RefSeq) transcript identifiers match (default: 1)

Please cite the MaveDB publication alongside Ensembl VEP if you use this resource: <https://doi.org/10.1186/s13059-019-1845-6>

The tabix utility must be installed in your path to use this plugin.

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv MaveDB.pm ~/.vep/Plugins

# print only scores for single aminoacid changes from MaveDB data (default)
./vep -i variations.vcf --plugin MaveDB,file=/full/path/to/data.csv.gz

# print all scores associated with the genetic variant
./vep -i variations.vcf --plugin MaveDB,file=/full/path/to/data.csv.gz,single_aminoacid_changes=0

# print all columns from MaveDB data
./vep -i variations.vcf --plugin MaveDB,file=/full/path/to/data.csv.gz,cols=all
</code></pre>

**Category:** Functional effect

**External libraries:**

- [File::Basename](https://metacpan.org/pod/File::Basename)
- [Bio::SeqUtils](https://metacpan.org/pod/Bio::SeqUtils)

**Developer:** Ensembl

<span id="MaxEntScan"></span>

### [MaxEntScan](https://github.com/Ensembl/VEP_plugins/blob/release/116/MaxEntScan.pm)

This is a plugin for the Ensembl Variant Effect Predictor (VEP) that runs MaxEntScan (<http://hollywood.mit.edu/burgelab/maxent/Xmaxentscan_scoreseq.html>) to get splice site predictions.

<span id="div_maxentscan"></span>

The plugin copies most of the code verbatim from the score5.pl and score3.pl scripts provided in the MaxEntScan download. To run the plugin you must get and unpack the archive from <http://hollywood.mit.edu/burgelab/maxent/download/>; the path to this unpacked directory is then the param you pass to the --plugin flag.

The plugin executes the logic from one of the scripts depending on which splice region the variant overlaps:

- score5.pl : last 3 bases of exon --\> first 6 bases of intron
- score3.pl : last 20 bases of intron --\> first 3 bases of exon

The plugin reports the reference, alternate and difference (REF - ALT) maximum entropy scores.

If `SWA` is specified as a command-line argument, a sliding window algorithm is applied to subsequences containing the reference and alternate alleles to identify k-mers with the highest donor and acceptor splice site scores. To assess the impact of variants, reference comparison scores are also provided. For SNVs, the comparison scores are derived from sequence in the same frame as the highest scoring k-mers containing the alternate allele. For all other variants, the comparison scores are derived from the highest scoring k-mers containing the reference allele. The difference between the reference comparison and alternate scores (SWA_REF_COMP - SWA_ALT) are also provided.

If `NCSS` is specified as a command-line argument, scores for the nearest upstream and downstream canonical splice sites are also included.

By default, only scores are reported. Add `verbose` to the list of command- line arguments to include the sequence output associated with those scores.

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv MaxEntScan.pm ~/.vep/Plugins
./vep -i variants.vcf --plugin MaxEntScan,/path/to/maxentscan/fordownload
./vep -i variants.vcf --plugin MaxEntScan,/path/to/maxentscan/fordownload,SWA,NCSS
</code></pre>

**Category:** Splicing predictions

**External libraries:** [Digest::MD5](https://metacpan.org/pod/Digest::MD5) qw(md5_hex)

**Developer:** Ensembl

<span id="MechPredict"></span>

### [MechPredict](https://github.com/Ensembl/VEP_plugins/blob/release/116/MechPredict.pm)

This is a plugin for the Ensembl Variant Effect Predictor (VEP) that annotates missense variants with predicted dominant-negative (DN), gain-of-function (GOF), or loss-of-function (LOF) mechanisms derived from a Support Vector Classification (SVC) model (Badonyi et al., 2024). These probabilities do not predict a gene is involved in disease, they predict the most likely molecular mechanism by which deleterious variants in a given gene could cause disease, if it was a dominant disease gene.

<span id="div_mechpredict"></span>

Note:

- The plugin requires MechPredict_input.tsv, a pre-processed prediction dataset in TSV format.
- The wrangled file should contain gene-level probabilities for the three mechanism categories.
- The plugin adds the following fields to the VEP output:
- `MechPredict_pDN`: Probability of a \*\*dominant-negative (DN) mechanism\*\*
- `MechPredict_pGOF`: Probability of a \*\*gain-of-function (GOF) mechanism\*\*
- `MechPredict_pLOF`: Probability of a \*\*loss-of-function (LOF) mechanism\*\*
- `MechPredict_prediction`: Statement of the most likely mechanism based on empirically-derived cutoffs from Badonyi et al., 2024.

Usage:

1.  Download the Badonyi et al., 2024 raw data, available at the links below:
    - GOF: <https://osf.io/h45ns>
    - DN: <https://osf.io/xfy38>
    - LOF <https://osf.io/dj4qg>

2\. The plugin input data can then be prepared from the raw data using: \`bash cut --complement -f4 pdn_svm_poly_2023-07-25.tsv | awk '{print $1 " " $2 "\t" $0}' | sort \>pdn_mod.tsv && cut --complement -f4 pgof_svm_poly_2023-07-25.tsv | awk '{print $1 " " $2 "\t" $0}' | sort \>pgof_mod.tsv && cut --complement -f4 plof_svm_poly_2023-07-28.tsv | awk '{print $1 " " $2 "\t" $0}' | sort \>plof_mod.tsv && join -t $'\t' -1 1 -2 1 pdn_mod.tsv pgof_mod.tsv | join -t $'\t' -1 1 -2 1 - plof_mod.tsv | cut --complement -f1,5,6,8,9 | sed '1i gene uniprot_id pDN pGOF pLOF' \>MechPredict_input.tsv &&

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">rm pdn_mod.tsv pgof_mod.tsv plof_mod.tsv
VEP can be run with the MechPredict plugin as follows:  `bash
./vep -i variations.vcf --plugin MechPredict,file=/path/to/mechpredict_data.tsv
</code></pre>

Citation: Badonyi M, Marsh JA (2024) Proteome-scale prediction of molecular mechanisms underlying dominant genetic diseases. PLoS ONE 19(8): e0307312. <https://doi.org/10.1371/journal.pone.0307312>

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv MechPredict.pm ~/.vep/Plugins  
./vep -i input.vcf --plugin MechPredict,file=mechpredict_data.tsv  
</code></pre>

**Category:** Gene tolerance to change

**External libraries:** [Data::Dumper](https://metacpan.org/pod/Data::Dumper)

**Developer:** Ensembl

<span id="MPC"></span>

### [MPC](https://github.com/Ensembl/VEP_plugins/blob/release/116/MPC.pm)<span class="small">missense deleteriousness metric</span>

An Ensembl VEP plugin that retrieves MPC scores for variants from a tabix-indexed MPC data file.

<span id="div_mpc"></span>

MPC is a missense deleteriousness metric based on the analysis of genic regions depleted of missense mutations in the Exome Agggregation Consortium (ExAC) data.

The MPC score is the product of work by Kaitlin Samocha (ks20@sanger.ac.uk). Publication currently in pre-print: Samocha et al bioRxiv 2017 (TBD)

The MPC score file is available to download from:

<ftp://ftp.broadinstitute.org/pub/ExAC_release/release1/regional_missense_constraint/>

The data are currently mapped to GRCh37 only. Not all transcripts are included; see README in the above directory for exclusion criteria.

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv MPC.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin MPC,fordist_constraint_official_mpc_values.txt.gz
</code></pre>

**Category:** Pathogenicity predictions

**External libraries:** -

**Developer:** Ensembl

<span id="MTR"></span>

### [MTR](https://github.com/Ensembl/VEP_plugins/blob/release/116/MTR.pm)<span class="small">Missense Tolerance Ratio</span>

An Ensembl VEP plugin that retrieves Missense Tolerance Ratio (MTR) scores for variants from a tabix-indexed flat file.

<span id="div_mtr"></span>

MTR scores quantify the amount of purifying selection acting specifically on missense variants in a given window of protein-coding sequence. It is estimated across a sliding window of 31 codons and uses observed standing variation data from the WES component of the Exome Aggregation Consortium Database (ExAC), version 2.0 (<http://gnomad.broadinstitute.org>).

Please cite the MTR publication alongside Ensembl VEP if you use this resource: <http://genome.cshlp.org/content/27/10/1715>

The Bio::DB::HTS perl library or tabix utility must be installed in your path to use this plugin. MTR flat files can be downloaded from <http://biosig.unimelb.edu.au/mtr-viewer/downloads> The following steps are necessary before running the plugin

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">gzip -d mtrflatfile_2.0.txt.gz # to unzip the text file 
cat mtrflatfile_2.0.txt | tr &quot; &quot; &quot;\t&quot; &gt; mtrflatfile_2.00.tsv # to change the file to a tabbed delimited file 
sed '1s/.*/#&amp;/'  mtrflatfile_2.00.tsv &gt; mtrflatfile_2.0.tsv # to add # to the first line of the file 
bgzip mtrflatfile_2.0.tsv
tabix -f -s 1 -b 2 -e 2 mtrflatfile_2.0.tsv.gz
</code></pre>

NB: Data are available for GRCh37 only

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv MTR.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin MTR,mtrflatfile_2.0.tsv.gz
</code></pre>

**Category:** Pathogenicity predictions

**External libraries:** -

**Developer:**

- Slave Petrovski
- Michael Silk

<span id="mutfunc"></span>

### [mutfunc](https://github.com/Ensembl/VEP_plugins/blob/release/116/mutfunc.pm)

An Ensembl VEP plugin that retrieves data from mutfunc db predicting destabilization of protein structure, interaction interface, and motif.

<span id="div_mutfunc"></span>

Please cite the mutfunc publication alongside Ensembl VEP if you use this resource: <http://msb.embopress.org/content/14/12/e8430>

Pre-requisites:

1.  The data file. mutfunc SQLite db can be downloaded from - <https://ftp.ensembl.org/pub/current_variation/mutfunc/mutfunc_data.db>
2.  If you are using --offline please provide a FASTA file as this plugin requires the translation sequence to function.

Options are passed to the plugin as key=value pairs:

**`db`**

(mandatory) Path to SQLite database containing data for other analysis.

**`motif`**

Select this option to have mutfunc motif analysis in the output

**`int`**

Select this option to have mutfunc protein interection analysis in the output

**`mod`**

Select this option to have mutfunc protein structure analysis in the output

**`exp`**

Select this option to have mutfunc protein structure (experimental) analysis in the output

**`extended`**

By default mutfunc outputs the most significant field for any analysis. Select this option to get more verbose output.

By default all of the four type of analysis (motif, int, mod, and exp) data are available in the output. But if you want to have some selected analysis and not all of them just select the relevant options.

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv mutfunc.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin mutfunc,motif=1,extended=1,db=/FULL_PATH_TO/mutfunc_data.db
./vep -i variations.vcf --plugin mutfunc,db=/FULL_PATH_TO/mutfunc_data.db
</code></pre>

**Category:** Protein annotation

**External libraries:**

- [Digest::MD5](https://metacpan.org/pod/Digest::MD5) qw(md5_hex)
- [DBI](https://metacpan.org/pod/DBI)
- [List::MoreUtils](https://metacpan.org/pod/List::MoreUtils) qw(first_index)
- [Compress::Zlib](https://metacpan.org/pod/Compress::Zlib)

**Developer:** Ensembl

<span id="NearestExonJB"></span>

### [NearestExonJB](https://github.com/Ensembl/VEP_plugins/blob/release/116/NearestExonJB.pm)

This is a plugin for the Ensembl Variant Effect Predictor (VEP) that finds the nearest exon junction boundary to a coding sequence variant. More than one boundary may be reported if the boundaries are equidistant or if using option --intronic.

<span id="div_nearestexonjb"></span>

The plugin will report the Ensembl identifier of the exon, the distance to the exon boundary, the boundary type (start or end of exon) and the total length in nucleotides of the exon.

Various key=value parameters can be altered by passing them to the plugin command:

**`max_range`**

maximum search range in bp (default: 10000)

**`intronic`**

set to 1 to check nearest exons for intronic variants (default: 0) returns the nearest exon upstream and downstream without considering the max_range.

Parameters are passed e.g.:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">--plugin NearestExonJB,max_range=50000
--plugin NearestExonJB,max_range=50000,intronic=1
--plugin NearestExonJB,intronic=1
</code></pre>

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv NearestExonJB.pm ~/.vep/Plugins
./vep -i variations.vcf --cache --plugin NearestExonJB
</code></pre>

**Category:** Nearby features

**External libraries:** -

**Developer:** Ensembl

<span id="NearestGene"></span>

### [NearestGene](https://github.com/Ensembl/VEP_plugins/blob/release/116/NearestGene.pm)

This is a plugin for the Ensembl Variant Effect Predictor (VEP) that finds the nearest gene(s) to a non-genic variant. More than one gene may be reported if the genes overlap the variant or if genes are equidistant or if option `both_directions` is used.

<span id="div_nearestgene"></span>

Various key=value parameters can be altered by passing them to the plugin command:

**`limit`**

limit the number of genes returned (default: 1)

**`range`**

initial search range in bp (default: 1000)

**`max_range`**

maximum search range in bp (default: 50000)

**`both_directions`**

return the nearest genes upstream and downstream of the variant this option overwrites the limit to 1 note that the max_range affects the search range in both directions

Parameters are passed e.g.:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">--plugin NearestGene,limit=3,max_range=50000
--plugin NearestGene,max_range=50000,both_directions=1
</code></pre>

This plugin requires a database connection. It cannot be run in offline mode i.e. using the --offline flag.

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv NearestGene.pm ~/.vep/Plugins
./vep -i variations.vcf --cache --plugin NearestGene
</code></pre>

**Category:** Nearby features

**External libraries:** -

**Developer:** Ensembl

<span id="NMD"></span>

### [NMD](https://github.com/Ensembl/VEP_plugins/blob/release/116/NMD.pm)

This is a plugin for the Ensembl Variant Effect Predictor (VEP) that predicts if a variant allows the transcript escape nonsense-mediated mRNA decay based on certain rules.

<span id="div_nmd"></span>

The rules are :

1.  The variant location falls in the last exon of the transcript.

    <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">                                        vvvv
          ES...EE..I.ES...EE.I.ES....EE.I.ES....EE 
    </code></pre>

    (ES= exon_start,EE = exon_end, I = intron, v = variant location)

2.  The variant location falls 50 bases upstream of the penultimate (second to the last ) exon.

    <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">                               vvv
          ES...EE..I.ES...EE.I.ES....EE.I.ES....EE 
    </code></pre>

    (ES= exon_start,EE = exon_end, I = intron, v = variant location)

3.  The variant falls in the first 100 coding bases in the transcript.

    <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">         vvv
          ..ES...EE..I.ES...EE.I.ES....EE.I.ES....EE 
    </code></pre>

    (ES= exon_start,EE = exon_end, I = intron, v = variant location)

4.  If the variant is in an intronless transcript, meaning only one exon exist in the transcript.

The additional term NMD-escaping variant (nonsense-mediated mRNA decay escaping variants) will be added if the variant matches any of the rules.

REFERENCES :

- Identifying Genes Whose Mutant Transcripts Cause Dominant Disease Traits by Potential Gain-of-Function Alleles (Coban-Akdemir, 2018)
- The rules and impact of nonsense-mediated mRNA decay in human cancers (Lindeboom, 2016)

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv NMD.pm  ~/.vep/Plugins
./vep -i variations.vcf --plugin NMD
</code></pre>

**Category:** Transcript annotation

**External libraries:** -

**Developer:** Ensembl

<span id="OpenTargets"></span>

### [OpenTargets](https://github.com/Ensembl/VEP_plugins/blob/release/116/OpenTargets.pm)

An Ensembl VEP plugin that integrates data from Open Targets Platform (<https://platform.opentargets.org>), a target identification tool that includes comprehensive variant annotation and the results of state-of-the-art large-scale statistical analyses, including fine-mapping, colocalisation, and locus-to-gene assignment across all complex and molecular traits.

<span id="div_opentargets"></span>

Data from Open Targets Platform includes two types of associations: GWAS based and QTL base. For GWAS studies, the data contains a locus-to-gene (L2G) scores to predict causal genes at GWAS loci.

The tabix utility must be installed in your path to use this plugin. The Open Targets Genetics file and respective index (TBI) file can be downloaded from: <https://ftp.ebi.ac.uk/pub/databases/opentargets/platform/latest/etc/export/vep_data/>

Before using the plugin, split the Open Targets file in two:

1.  a file containing all GWAS associations (and corresponding tabix index file) (zcat open_targets_vep.tsv.bgz | head -n 1 | sed 's/.\*/#&/'; zcat open_targets_vep.tsv.bgz | awk -F $'\t' '$7 == "gwas"' ) | cut -d $'\t' -f 1-16,17-19 | bgzip -c \> open_targets_vep_gwas.tsv.bgz

    <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">tabix -s 1 -b 2 -e 2 open_targets_vep_gwas.tsv.bgz
    </code></pre>

    2\) a file containing all QTL associations (and corresponding tabix index file) (zcat open_targets_vep.tsv.bgz | head -n 1 | sed 's/.\*/#&/'; zcat open_targets_vep.tsv.bgz | awk -F $'\t' '$7 ~ /qtl$/' ) | cut -d $'\t' -f 1-16,20,21 | bgzip -c \> open_targets_vep_qtl.tsv.bgz

    <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">tabix -s 1 -b 2 -e 2 open_targets_vep_qtl.tsv.bgz
    </code></pre>

    To use the original file (with all associations), comment out the header line and regenerate the tabix-index to include the header.

    <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">zcat open_targets_vep.tsv.bgz | sed '1 s/.*/#&amp;/' | bgzip -c &gt; open_targets_vep.tsv.bgz.tmp; mv open_targets_vep.tsv.bgz.tmp open_targets_vep.tsv.bgz
    tabix -s 1 -b 2 -e 2 open_targets_vep.tsv.bgz
    </code></pre>

    Options are passed to the plugin as key=value pairs:

    **`file`**

    <div>

    (mandatory) Tabix-indexed file from Open Targets platform. File should contain GWAS- or QTL-annotations, or both.

    </div>

    **`lead_variants_only`**

    <div>

    (optional) boolean to filter out non-lead variant associations, 1 (filtered) or 0 (unfiltered). (default: 1)

    </div>

    **`study_types`**

    <div>

    (optional) Study types to filter for. Can be `all` to include all, `QTL` to include all /.\*qtl/ types, or a colon-separated list of study types found in the file. (default: all)

    </div>

    **`cols`**

    <div>

    (optional) Colon-separated list of columns to return from the plugin file. (default: "gwasLocusToGeneScore:gwasGeneId:gwasDiseases" on GWAS annotations and "qtlGeneId:qtlBiosampleName" for QTL annotations); use `all` to print all data

    </div>

    Please cite the Open Targets Platform publication alongside Ensembl VEP if you use this resource: <https://doi.org/10.1093/nar/gkae1128>

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv OpenTargets.pm ~/.vep/Plugins

# print Open Targets Platform associations (both GWAS and QTL) and their respective identifiers (default)
./vep -i variations.vcf --plugin OpenTargets,file=path/to/data.tsv.bz

# print all information for Open Targets Platform associations found
./vep -i variations.vcf --plugin OpenTargets,file=path/to/data.tsv.bz,cols=all

# Only return Open Targets Platform associations found in the GWAS catalog
./vep -i variations.vcf --plugin OpenTargets,study_types=gwas,file=path/to/data.tsv.bz
</code></pre>

**Category:** Variant data

**External libraries:**

- [File::Basename](https://metacpan.org/pod/File::Basename)
- [Bio::SeqUtils](https://metacpan.org/pod/Bio::SeqUtils)

**Developer:** Ensembl

<span id="Paralogues"></span>

### [Paralogues](https://github.com/Ensembl/VEP_plugins/blob/release/116/Paralogues.pm)

An Ensembl VEP plugin that fetches variants overlapping the genomic coordinates of amino acids aligned between paralogue proteins. This is useful to predict the pathogenicity of variants in paralogue positions.

<span id="div_paralogues"></span>

This plugin can determine paralogue regions for a variant based on:

1.  Pre-computed matches between genomic regions and paralogue variants. For this approach, either download the file calculated using ClinVar variants and respective TBI from <https://ftp.ensembl.org/pub/current_variation/Paralogues> or create such matches file yourself. Details on how to create such `matches` file can be found below.
2.  Ensembl paralogue annotation. These versatile annotations can look up paralogue regions for all variants from any species with Ensembl paralogues, but take longer to process.

After retrieving the paralogue regions, this plugin fetches variants overlapping those regions from one of the following sources (by this order):

1.  Custom VCF via the `vcf` parameter
2.  Ensembl VEP cache (in cache/offline mode)
3.  Ensembl API (in database mode)

To create a `matches` file based on a custom set of variants, run using \`--plugin Paralogues,regions=1,min_perc_cov=0,min_perc_pos=0,clnsig=ignore\` and the `--vcf` option. Afterwards, process the output of the command: \`perl -e "use Paralogues; Paralogues::prepare_matches_file(`variant_effect_output.txt`)"\`

Options are passed to the plugin as key=value pairs:

**`matches`**

Tabix-indexed TSV file with pre-computed matches between genomic regions and paralogue variants (fastest method); this option is incompatible with the `paralogues` and `vcf` options

**`dir`**

Directory with paralogue annotation (the annotation is created in this folder if the paralogue annotation files do not exist)

**`paralogues`**

Tabix-indexed TSV file with paralogue annotation (if the file does not exist, the annotation is automatically created); if set to `remote`, the annotation is fetched but not stored

**`vcf`**

Tabix-indexed VCF file to fetch variant information (if not used, variants are fetched from Ensembl VEP cache in cache/offline mode or Ensembl API in database mode)

**`fields`**

Colon-separated list of information from paralogue variants to output (default: `identifier:alleles:clinical_significance`); keyword `all` can be used to print all fields; available fields include `identifier`, `chromosome`, `start`, `alleles`, `perc_cov`, `perc_pos`, and `clinical_significance` (if `clnsig_col` is defined for custom VCF); additional fields are available depending on variant source:

- Ensembl VEP cache: `end` and `strand`
- Ensembl API: `end`, `strand`, `source`, `consequence` and `gene_symbol`
- Custom VCF: `quality`, `filter` and name of INFO fields
- Matches file: check column names in file header

**`clnsig`**

Clinical significance term to filter variants (default: `pathogenic`); use `ignore` to fetch all paralogue variants, regardless of clinical significance

**`clnsig_match`**

Type of match when filtering variants based on option `clnsig`: `partial` (default), `exact` or `regex`

**`clnsig_col`**

Column name containing clinical significance in custom VCF (required with `vcf` option and if `clnsig` is not `ignore`)

**`min_perc_cov`**

Minimum alignment percentage of the peptide associated with the input variant (default: 0)

**`min_perc_pos`**

Minimum percentage of positivity (similarity) between both homologues (default: 50)

**`regions`**

Boolean value to return regions used to look up paralogue

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">variants (default: 1)
</code></pre>

The tabix utility must be installed in your path to read the paralogue annotation, the custom VCF file and the matches file.

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv Paralogues.pm ~/.vep/Plugins

# Find paralogue regions of all input variants using Ensembl paralogue annotation
# (automatically created if not in current directory) and fetch variants within
# those regions from Ensembl VEP cache and whose clinical significance partially
# matches 'pathogenic'
./vep -i variations.vcf --cache --plugin Paralogues

# Find paralogue regions of input variants using Ensembl paralogue annotation
# (automatically created if not in current directory) and fetch variants within
# those regions from a custom VCF file (regardless of their clinical significance)
./vep -i variations.vcf --cache --plugin Paralogues,vcf=/path/to/file.vcf,clnsig=ignore

# Same using a custom VCF file but filtering for 'pathogenic' variants
./vep -i variations.vcf --cache --plugin Paralogues,vcf=/path/to/file.vcf,clnsig_col=CLNSIG

# Same but output different fields
./vep -i variations.vcf --cache --plugin Paralogues,vcf=/path/to/file.vcf.gz,clnsig_col=CLNSIG,fields=identifier:alleles:CLNSIG:CLNVI:GENEINFO

# Use a file with regions matched to paralogue variants -- fastest method;
# download 'matches' files from https://ftp.ensembl.org/pub/current_variation/Paralogues
./vep -i variations.vcf --cache --plugin Paralogues,matches=Paralogues.pm_homo_sapiens_113_GRCh38_clinvar_20240107.tsv.gz,clnsig=ignore

# Same using a 'matches' file but filtering for 'pathogenic' variants (default)
./vep -i variations.vcf --cache --plugin Paralogues,matches=Paralogues.pm_homo_sapiens_113_GRCh38_clinvar_20240107.tsv.gz

# Fetch all Ensembl variants in paralogue proteins using only the Ensembl API
# (requires database access)
./vep -i variations.vcf --database --plugin Paralogues,mode=remote,clnsig=ignore
</code></pre>

**Category:** Variant data

**External libraries:**

- [Bio::SimpleAlign](https://metacpan.org/pod/Bio::SimpleAlign)
- [File::Basename](https://metacpan.org/pod/File::Basename)
- [Compress::Zlib](https://metacpan.org/pod/Compress::Zlib)
- [List::Util](https://metacpan.org/pod/List::Util) qw(any)
- [File::Spec](https://metacpan.org/pod/File::Spec)

**Developer:** Ensembl

<span id="PhenotypeOrthologous"></span>

### [PhenotypeOrthologous](https://github.com/Ensembl/VEP_plugins/blob/release/116/PhenotypeOrthologous.pm)

An Ensembl VEP plugin that retrieves phenotype information associated with orthologous genes from model organisms.

<span id="div_phenotypeorthologous"></span>

The plugin annotates human variants and reports orthologous information from rat and mouse. The plugin is only available for GRCh38.

The PhenotypeOrthologous file can be downloaded from <https://ftp.ensembl.org/pub/current_variation/PhenotypeOrthologous>

The plugin can be run:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i variations.vcf --plugin PhenotypeOrthologous,file=PhenotypesOrthologous_homo_sapiens_112_GRCh38.gff3.gz
</code></pre>

The file option is mandatory to run this plugin

To return only results for rat :

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i variations.vcf --plugin PhenotypeOrthologous,file=PhenotypesOrthologous_homo_sapiens_112_GRCh38.gff3.gz,model=rat
</code></pre>

To return only results for mouse:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i variations.vcf --plugin PhenotypeOrthologous,file=PhenotypesOrthologous_homo_sapiens_112_GRCh38.gff3.gz,model=mouse
</code></pre>

The tabix utility must be installed in your path to use this plugin. Check <https://github.com/samtools/htslib.git> for instructions.

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv PhenotypeOrthologous.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin PhenotypeOrthologous,file=PhenotypesOrthologous_homo_sapiens_112_GRCh38.gff3.gz
</code></pre>

**Category:** Phenotype data and citations

**External libraries:** -

**Developer:** Ensembl

<span id="Phenotypes"></span>

### [Phenotypes](https://github.com/Ensembl/VEP_plugins/blob/release/116/Phenotypes.pm)

An Ensembl VEP plugin that retrieves overlapping phenotype information.

<span id="div_phenotypes"></span>

On the first run for each new version/species/assembly will download a GFF-format dump to ~/.vep/Plugins/

Ensembl provides phenotype annotations mapped to a number of genomic feature types, including genes, variants and QTLs.

This plugin is best used with JSON output format; the output will be more verbose and include all available phenotype annotation data and metadata.

For other output formats, only a concatenated list of phenotype description strings is returned.

Several paramters can be set using a key=value system:

**`dir`**

Path to directory where to look for phenotypes annotation. If the required file does not exist, the file is downloaded and saved in the provided directory (download requires using database or cache mode).

**`file`**

File path to phenotypes annotation. If the file does not exist, the file is downloaded and saved with this name (download requires using database or cache mode).

exclude_sources: &-separated list of phenotype sources to exclude. By default, HGMD-PUBLIC and COSMIC annotations are excluded. See [http://www.ensembl.org/info/genome/variation/phenotype/sources_phenotype_documentation.html](https://jun2026.archive.ensembl.org/info/genome/variation/phenotype/sources_phenotype_documentation.html)

include_sources: &-separated list of phenotype sources to include. If defined, exclude_sources is ignored.

exclude_types : &-separated list of feature types to exclude: Gene, Variation, QTL, StructuralVariation, SupportingStructuralVariation, RegulatoryFeature. By default, StructuralVariation and SupportingStructuralVariation annotations are always excluded (due to size issues) and Variation is excluded when annotating structural variants; to get these annotations in all cases, use include_types=StructuralVariation&SupportingStructuralVariation&Variation

include_types : &-separated list of feature types to include. If defined, exclude_types is ignored.

expand_right : Cache size in bp. By default, annotations 100000bp (100kb) downstream of the initial lookup are cached.

phenotype_feature : Boolean to report the gene/variation associated with the phenotype (such as overlapping gene or structural

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">variation) and annotation source (default: 0)
</code></pre>

cols : &-separated list of column and/or attribute names to output from the gff file. The output fields will be ordered in the same way given in cols argument. (default: `phenotype` or `source,phenotype,id` if you set phenotype_feature=1)

id_match : Return results only if the identifiers matches with the

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">variant or the gene depending on the type (default: 0)
</code></pre>

Example:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">--plugin Phenotypes,file=${HOME}/phenotypes.gff.gz,include_types=Gene
--plugin Phenotypes,dir=${HOME},include_types=Gene
</code></pre>

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv Phenotypes.pm ~/.vep/Plugins

# Automatically download phenotype annotation files if needed and annotate
# variants with phenotypes
./vep -i variations.vcf --plugin Phenotypes

# Fetch only gene-associated phenotypes
./vep -i variations.vcf --plugin Phenotypes,include_types=Gene

# Set directory with phenotypes annotations (phenotype annotation file is
# automatically downloaded if not available in this directory)
./vep -i variations.vcf --plugin Phenotypes,dir=${HOME},include_types=Gene

# Specify a file with phenotypes annotation (file is automatically
# downloaded and saved with this name if it does not exist)
./vep -i variations.vcf --plugin Phenotypes,file=${HOME}/phenotypes.gff.gz,include_types=Gene
</code></pre>

**Category:** Phenotype data and citations

**External libraries:** -

**Developer:** Ensembl

<span id="pLI"></span>

### [pLI](https://github.com/Ensembl/VEP_plugins/blob/release/116/pLI.pm)

An Ensembl VEP plugin that adds the probabililty of a gene being loss-of-function intolerant (pLI) to the output.

<span id="div_pli"></span>

Lek et al. (2016) estimated pLI using the expectation-maximization (EM) algorithm and data from 60,706 individuals from ExAC (<http://exac.broadinstitute.org>). The closer pLI is to 1, the more likely the gene is loss-of-function (LoF) intolerant.

Note: the pLI was calculated using a representative transcript and is reported by gene in the plugin.

The data for the plugin is provided by Kaitlin Samocha and Daniel MacArthur. See <https://www.ncbi.nlm.nih.gov/pubmed/27535533> for a description of the dataset and analysis.

The pLI_values.txt file is found alongside the plugin in the VEP_plugins GitHub repository. The file contains the fields gene and pLI extracted from the file at

<ftp://ftp.broadinstitute.org/pub/ExAC_release/release0.3/functional_gene_constraint/fordist_cleaned_exac_r03_march16_z_pli_rec_null_data.txt>

From this file, extract gene or transcipt pLI scores: To extract gene scores :

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">awk '{print $2, $20 }'  fordist_cleaned_exac_r03_march16_z_pli_rec_null_data.txt &gt; plI_gene.txt
</code></pre>

NB: The gene scores file can also be found in the VEP_plugins directory.

To extract transcript scores:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">awk '{print $1, $20 }'  fordist_cleaned_exac_r03_march16_z_pli_rec_null_data.txt &gt; plI_transcript.txt
</code></pre>

NB: Using this file, No transcript score will be returned.

To use another values file, add it as a parameter i.e.

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i variants.vcf --plugin pLI,values_file.txt
./vep -i variants.vcf --plugin pLI,values_file.txt,transcript # to check for the transcript score.
</code></pre>

gnomAD v4 release expanded the scale of pLI score calculation. The file can be downloaded from - <https://gnomad.broadinstitute.org/downloads#v4-constraint> (Constraint metrics TSV) To use the data you can follow the same procedure as above but needs to change the column number to accordingly.

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv pLI.pm ~/.vep/Plugins
mv pLI_values.txt ~/.vep/Plugins
./vep -i variants.vcf --plugin pLI
</code></pre>

**Category:** Gene tolerance to change

**External libraries:**

- [List::MoreUtils](https://metacpan.org/pod/List::MoreUtils) qw/zip/
- [DBI](https://metacpan.org/pod/DBI)

**Developer:** Ensembl

<span id="PolyPhen_SIFT"></span>

### [PolyPhen_SIFT](https://github.com/Ensembl/VEP_plugins/blob/release/116/PolyPhen_SIFT.pm)

An Ensembl VEP plugin that retrieves PolyPhen and SIFT predictions from a locally constructed SQLite database. It can be used when your main source of transcript annotation (e.g. a GFF file or GFF-based cache) does not contain these predictions.

<span id="div_polyphen_sift"></span>

You must create a SQLite database of the predictions or point to the SQLite database file already created. Compatible SQLite databases based on pangenome data are available at <http://ftp.ensembl.org/pub/current_variation/pangenomes>

You may point to the file by adding parameter `db=[file]`. If the file is not in `HOME/.vep`, you can also use parameter `dir=[dir]` to indicate its path.

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">--plugin PolyPhen_SIFT,db=[file]
--plugin PolyPhen_SIFT,db=[file],dir=[dir]
</code></pre>

To create a SQLite database using PolyPhen/SIFT data from the Ensembl database, you must have an active database connection (i.e. not using `--offline`) and add parameter `create_db=1`. This will create a SQLite file named `[species].PolyPhen_SIFT.db`, placed in the directory specified by the `dir` parameter:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">--plugin PolyPhen_SIFT,create_db=1
--plugin PolyPhen_SIFT,create_db=1,dir=/some/specific/directory
</code></pre>

\*\*\* NB: this will take some hours! \*\*\*

When creating a PolyPhen_SIFT by simply using `create_db=1`, you do not need to specify any parameters to load the appropriate file based on the species:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">--plugin PolyPhen_SIFT
</code></pre>

By default, this plugin gives SIFT score and prediction, Polyphen humvar and humdiv score and prediction. You can manipulate what you want using the following options -

sift \[p|s|b|o\] provides SIFT prediction term, score, or both if the value is respectively `p`, `s`, or `b`. If the value is `o` then do not provide SIFT prediction or score. Default value is `b`. polyphen \[p|s|b|o\] provides PolyPhen humvar prediction term, score, or both if the

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">value is respectively p, s, or b. If the value is o then do not
</code></pre>

provide PolyPhen humvar prediction or score. Default value is `b`. humdiv \[p|s|b|o\] provides PolyPhen humdiv prediction term, score, or both if the

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">value is respectively p, s, or b. If the value is o then do not
</code></pre>

provide PolyPhen humdiv prediction or score. Default value is `b`.

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv PolyPhen_SIFT.pm ~/.vep/Plugins

# Read default PolyPhen/SIFT SQLite file in $HOME/.vep
./vep -i variations.vcf -cache --plugin PolyPhen_SIFT

# Read database with custom name and/or located in a custom directory
./vep -i variations.vcf -cache --plugin PolyPhen_SIFT,db=custom.db
./vep -i variations.vcf -cache --plugin PolyPhen_SIFT,dir=/some/custom/dir
./vep -i variations.vcf -cache --plugin PolyPhen_SIFT,db=custom.db,dir=/some/custom/dir

# Create PolyPhen/SIFT SQLite file based on Ensembl database
./vep -i variations.vcf -cache --plugin PolyPhen_SIFT,create_db=1

# Only get SIFT prediction and score
./vep -i variations.vcf -cache --plugin PolyPhen_SIFT,db=custom.db,polyphen=o,humdiv=o
</code></pre>

**Category:** Pathogenicity predictions

**External libraries:**

- [Digest::MD5](https://metacpan.org/pod/Digest::MD5) qw(md5_hex)
- [DBI](https://metacpan.org/pod/DBI)

**Developer:** Ensembl

<span id="PON_P2"></span>

### [PON_P2](https://github.com/Ensembl/VEP_plugins/blob/release/116/PON_P2.pm)

This plugin for Ensembl Variant Effect Predictor (VEP) computes the predictions of PON-P2 for amino acid substitutions in human proteins.

<span id="div_pon_p2"></span>

PON-P2 is developed and maintained by Protein Structure and Bioinformatics Group at Lund University and is available at <http://structure.bmc.lu.se/PON-P2/>.

If you use this data, please cite the following publication Niroula, A., Vihinen, M. Harmful somatic amino acid substitutions affect key pathways in cancers. BMC Med Genomics 8, 53 (2015). <https://doi.org/10.1186/s12920-015-0125-x>

There are two ways to run the plugin:

1.  To compute the predictions from the PON-P2 API, use python script `ponp2.py` (\*) and select the reference genome (acceptable values are: hg37 and hg38):

    <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">--plugin PON_P2,pyscript=/path/to/python/script/ponp2.py,hg=hg37
    </code></pre>

    (\*) To run this mode, you will require a python script and its dependencies (Python, python suds). The python file can be downloaded from <http://structure.bmc.lu.se/PON-P2/vep.html/> and the complete path to this file must be supplied while using this plugin.

2.  To fetch the predictions from a file containing pre-calculated predictions for somatic variations please use the following key=value option (only available for GRCh37):

    **`file`**

    <div>

    COSMIC text file with pre-calculated predictions downloaded from <http://structure.bmc.lu.se/PON-P2/cancer30.html/>

    </div>

    The following steps are necessary before using the file:

    <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">(head -n 1 COSMIC.txt &amp;&amp; tail -n +2 COSMIC.txt | sort -t $'\t' -k1,1 -k2,2n) &gt; cosmic_sorted.txt
    sed -i 's/Chromosome/#Chromosome/' cosmic_sorted.txt
    bgzip cosmic_sorted.txt
    tabix -s 1 -b 2 -e 2 cosmic_sorted.txt.gz
    </code></pre>

    <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">--plugin PON_P2,file=path/to/cosmic_sorted.txt.gz
    </code></pre>

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv PON_P2.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin PON_P2,pyscript=/path/to/python/script/ponp2.py,hg=hg37
</code></pre>

**Category:** Pathogenicity predictions

**External libraries:** -

**Developer:**

- Abhishek Niroula
- Mauno Vihinen

<span id="PrimateAI"></span>

### [PrimateAI](https://github.com/Ensembl/VEP_plugins/blob/release/116/PrimateAI.pm)

The PrimateAI plugin is designed to retrieve clinical impact scores of variants, as described in <https://www.nature.com/articles/s41588-018-0167-z>. Please consider citing the paper if using this plugin.

<span id="div_primateai"></span>

In brief, common missense mutations in non-human primate species are usually benign in humans. Thousands of common variants from six non-human primate species were used to train a deep neural network to identify pathogenic mutations in humans with a rare disease.

This plugin uses files generated by the PrimateAI software, which is available from <https://github.com/Illumina/PrimateAI>. The files containing predicted pathogenicity scores can be downloaded from <https://basespace.illumina.com/s/yYGFdGih1rXL> (a free BaseSpace account may be required): PrimateAI_scores_v0.2.tsv.gz (for GRCh37/hg19) PrimateAI_scores_v0.2_hg38.tsv.gz (for GRCh38/hg38)

Before running the plugin for the first time, the following steps must be taken to format the downloaded files:

1.  Unzip the score files
2.  Add '#' in front of the column description line
3.  Remove any empty lines.
4.  Sort the file by chromosome and position
5.  Compress the file in .bgz format
6.  Create tabix index (requires tabix to be installed).

Command line examples for formatting input files:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">gunzip -cf PrimateAI_scores_v0.2.tsv.gz | sed '12s/.*/#&amp;/' | sed '/^$/d' | awk 'NR&lt;12{print $0;next}{print $0 | &quot;sort -k1,1 -k 2,2n -V&quot;}' | bgzip &gt; PrimateAI_scores_v0.2_GRCh37_sorted.tsv.bgz
tabix -s 1 -b 2 -e 2 PrimateAI_scores_v0.2_GRCh37_sorted.tsv.bgz
</code></pre>

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">gunzip -cf PrimateAI_scores_v0.2_hg38.tsv.gz | sed '12s/.*/#&amp;/' | sed '/^$/d' | awk 'NR&lt;12{print $0;next}{print $0 | &quot;sort -k1,1 -k 2,2n -V&quot;}' | bgzip &gt; PrimateAI_scores_v0.2_GRCh38_sorted.tsv.bgz
tabix -s 1 -b 2 -e 2 PrimateAI_scores_v0.2_GRCh38_sorted.tsv.bgz
</code></pre>

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv PrimateAI.pm ~/.vep/Plugins

./vep -i variations.vcf --plugin PrimateAI,PrimateAI_scores_v0.2_GRCh37_sorted.tsv.bgz
./vep -i variations.vcf --plugin PrimateAI,PrimateAI_scores_v0.2_GRCh38_sorted.tsv.bgz
</code></pre>

**Category:** Pathogenicity predictions

**External libraries:** -

**Developer:** Ensembl

<span id="PromoterAI"></span>

### [PromoterAI](https://github.com/Ensembl/VEP_plugins/blob/release/116/PromoterAI.pm)

An Ensembl VEP plugin that adds PromoterAI scores to promoter variants, predicting their impact on gene expression.

<span id="div_promoterai"></span>

Options are passed to the plugin as key=value pairs:

**`file`**

(mandatory) Tabix-indexed file from Illumina PromoterAI (see below)

**`cols`**

(optional) Colon-separated list of columns to return from the plugin file (default: "tss_pos:promoterAI"); use `all` to print all data

**`match_to`**

(optional) Feature type to match PromoterAI scores to. One of \["transcript", "gene", "any"\] (default: "transcript"). When "any", matching is done only on the genomic location and the alternative allele sequence. Choosing "any" can be useful to annotate promotor variants that are further away from affected gene region, ("intergenic" variant in VEP, whithout link to the nearest gene region), but this can lead to more noisy output for variants in regions with multiple overlapping genes/transcripts.

To download the PromoterAI scores file to use with VEP (GRCh38 based), please follow the instructions found in the README at <https://github.com/Illumina/PromoterAI>. You need a valid license agreement as described in the README to obtain and use the PromoterAI scores.

Please cite the PromoterAI publication alongside Ensembl VEP if you use this resource: <https://www.science.org/doi/10.1126/science.ads7373>

Necessary before using the plugin: Do the following steps to index the annotations file before using the plugin:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">zcat promoterAI.tsv.gz | sed '1s/.*/#&amp;/' | bgzip &gt; promoterAI.tsv.bgz
tabix -s 1 -b 2 -e 2 promoterAI.tsv.bgz
</code></pre>

You must have the Bio::DB::HTS module or the tabix utility must be installed in your path to use this plugin.

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv PromoterAI.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin PromoterAI,file=/path/to/PromoterAI.tsv.gz
</code></pre>

**Category:** Regulatory impact

**External libraries:**

- [Try::Tiny](https://metacpan.org/pod/Try::Tiny)
- [File::Spec](https://metacpan.org/pod/File::Spec)
- [File::Basename](https://metacpan.org/pod/File::Basename)

**Developer:** Ensembl

<span id="ProteinSeqs"></span>

### [ProteinSeqs](https://github.com/Ensembl/VEP_plugins/blob/release/116/ProteinSeqs.pm)

This is a plugin for the Ensembl Variant Effect Predictor (VEP) that prints out the reference and mutated protein sequences of any proteins found with non-synonymous mutations in the input file.

<span id="div_proteinseqs"></span>

You should supply the name of file where you want to store the reference protein sequences as the first argument, and a file to store the mutated sequences as the second argument.

Note that, for simplicity, where stop codons are gained the plugin simply substitutes a '\*' into the sequence and does not truncate the protein. Where a stop codon is lost any new amino acids encoded by the mutation are appended to the sequence, but the plugin does not attempt to translate until the next downstream stop codon. Also, the protein sequence resulting from each mutation is printed separately, no attempt is made to apply multiple mutations to the same protein.

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv ProteinSeqs.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin ProteinSeqs,reference.fa,mutated.fa
./vep -i variations.vcf --plugin ProteinSeqs,reference=reference.fa,mutated=mutated.fa
</code></pre>

**Category:** Sequence

**External libraries:** -

**Developer:** Ensembl

<span id="ProtVar"></span>

### [ProtVar](https://github.com/Ensembl/VEP_plugins/blob/release/116/ProtVar.pm)

An Ensembl VEP plugin that retrieves data from ProtVar resource providing contextualised information for missense variation, including destabilisation of protein structures, overlapping protein pockets, and protein-protein interaction interfaces.

<span id="div_protvar"></span>

Please cite the ProtVar publication alongside Ensembl VEP if you use this resource: <https://academic.oup.com/nar/article/52/W1/W140/7676839>

Pre-requisites:

1.  The data file. ProtVar SQLite db can be downloaded from - <https://ftp.ensembl.org/pub/current_variation/ProtVar/ProtVar_data.db>
2.  If you are using --offline please provide a FASTA file as this plugin requires the translation sequence to function.

Options are passed to the plugin as key=value pairs:

**`db`**

(mandatory) Path to SQLite database containing the data.

**`stability`**

Select this option to have protein stability related output. Output contains - ddG - Free energy change upon mutation (in kcal/mol units). ddG \> 2: likely to be destabilising.

**`pocket`**

Select this option to have overlapping protein pocket related output. Output contains - id - Pocket id; score - Combined score measuring confidence in pocket. score \< 800: low confidence score 800-900: high confidence score \> 900: very high confidence MpLDDT - Mean pLDDT score of all the residues from AlphaFold2 model used to form the pocket energy - Pocket energy per volume (in kcal/mol units) buriedness - Pocket buriedness (0.0 means entirely exposed and 1.0 means entirely burried) RoG - Pocket compactness in terms of radius of gyration (in Angstrom units) residues - Position of residues that form the pocket according to UniProt canonical (and AlphaFold) numbering.

**`int`**

Select this option to have protein-protein interface related output. Output contains - protein - Uniprot id of the protein with which the overlapping protein creates an interface pDockQ - A docking score for the interface. score \< 0.23: low confidence score 0.23-0.5: high confidence score \> 0.5: very high confidence

By default all of the three type of outputs (stability, pocket, int) are provided. But if you want to have some selected type and not all of them just select the relevant options.

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv ProtVar.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin ProtVar,db=/FULL_PATH_TO/ProtVar.db
./vep -i variations.vcf --plugin ProtVar,db=/FULL_PATH_TO/ProtVar_data.db,stability=1
</code></pre>

**Category:** Protein annotation

**External libraries:**

- [Digest::MD5](https://metacpan.org/pod/Digest::MD5) qw(md5_hex)
- [DBI](https://metacpan.org/pod/DBI)
- [List::MoreUtils](https://metacpan.org/pod/List::MoreUtils) qw(first_index)
- [Compress::Zlib](https://metacpan.org/pod/Compress::Zlib)

**Developer:** Ensembl

<span id="ReferenceQuality"></span>

### [ReferenceQuality](https://github.com/Ensembl/VEP_plugins/blob/release/116/ReferenceQuality.pm)

This is a plugin for the Ensembl Variant Effect Predictor (VEP) that reports on the quality of the reference genome using GRC data at the location of your variants. More information can be found at: <https://www.ncbi.nlm.nih.gov/grc/human/issues>

<span id="div_referencequality"></span>

The following steps are necessary before running this plugin:

GRCh38:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">wget https://ftp.ncbi.nlm.nih.gov/pub/grc/human/GRC/GRCh38/MISC/annotated_clone_assembly_problems_GCF_000001405.38.gff3
wget https://ftp.ncbi.nlm.nih.gov/pub/grc/human/GRC/Issue_Mapping/GRCh38.p12_issues.gff3
cat annotated_clone_assembly_problems_GCF_000001405.38.gff3 GRCh38.p12_issues.gff3 &gt; GRCh38_quality_mergedfile.gff3
sort -k 1,1 -k 4,4n -k 5,5n GRCh38_quality_mergedfile.gff3 &gt; sorted_GRCh38_quality_mergedfile.gff3
bgzip sorted_GRCh38_quality_mergedfile.gff3
tabix -p gff sorted_GRCh38_quality_mergedfile.gff3.gz
</code></pre>

The plugin can then be run with:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i variations.vcf --plugin ReferenceQuality,sorted_GRCh38_quality_mergedfile.gff3.gz
</code></pre>

GRCh37:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">wget https://ftp.ncbi.nlm.nih.gov/pub/grc/human/GRC/GRCh37/MISC/annotated_clone_assembly_problems_GCF_000001405.25.gff3
wget https://ftp.ncbi.nlm.nih.gov/pub/grc/human/GRC/Issue_Mapping/GRCh37.p13_issues.gff3
cat annotated_clone_assembly_problems_GCF_000001405.25.gff3 GRCh37.p13_issues.gff3 &gt; GRCh37_quality_mergedfile.gff3
sort -k 1,1 -k 4,4n -k 5,5n GRCh37_quality_mergedfile.gff3 &gt; sorted_GRCh37_quality_mergedfile.gff3
bgzip sorted_GRCh37_quality_mergedfile.gff3
tabix -p gff sorted_GRCh37_quality_mergedfile.gff3.gz
</code></pre>

The plugin can then be run with:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i variations.vcf --plugin ReferenceQuality,sorted_GRCh37_quality_mergedfile.gff3.gz
</code></pre>

The tabix utility must be installed in your path to use this plugin.

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv ReferenceQuality.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin ReferenceQuality,/path/to/data.gff3.gz
</code></pre>

**Category:** Sequence

**External libraries:** -

**Developer:** Ensembl

<span id="REVEL"></span>

### [REVEL](https://github.com/Ensembl/VEP_plugins/blob/release/116/REVEL.pm)

This is a plugin for the Ensembl Variant Effect Predictor (VEP) that adds the REVEL score for missense variants to the output.

<span id="div_revel"></span>

Please cite the REVEL publication alongside Ensembl VEP if you use this resource: <https://www.ncbi.nlm.nih.gov/pubmed/27666373>

Running options: If available, the plugin will match the scores by transcript id (default). Using the flag `1` the plugin will not try to match by transcript id.

REVEL scores can be downloaded from: <https://sites.google.com/site/revelgenomics/downloads>

The plugin supports several REVEL file versions:

- REVEL file version Dec 2017, which has 7 columns and only GRCh37 coordinates
- REVEL file version Feb 2020, which has 8 columns with GRCh37 and GRCh38 coordinates
- REVEL file version May 2021, which has 9 columns with GRCh37 and GRCh38 coordinates and a new column with transcript ids

These files can be tabix-processed by:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">unzip revel-v1.3_all_chromosomes.zip
cat revel_with_transcript_ids | tr &quot;,&quot; &quot;\t&quot; &gt; tabbed_revel.tsv
sed '1s/.*/#&amp;/' tabbed_revel.tsv &gt; new_tabbed_revel.tsv
bgzip new_tabbed_revel.tsv
</code></pre>

for GRCh37:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">tabix -f -s 1 -b 2 -e 2 new_tabbed_revel.tsv.gz
</code></pre>

for GRCh38:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">zcat new_tabbed_revel.tsv.gz | head -n1 &gt; h
zgrep -h -v ^#chr new_tabbed_revel.tsv.gz | awk '$3 != &quot;.&quot; ' | sort -k1,1 -k3,3n - | cat h - | bgzip -c &gt; new_tabbed_revel_grch38.tsv.gz
tabix -f -s 1 -b 3 -e 3 new_tabbed_revel_grch38.tsv.gz
</code></pre>

The plugin can then be run as default:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i variations.vcf --assembly GRCh38 --plugin REVEL,file=/path/to/revel/data.tsv.gz
</code></pre>

or with the option to not match by transcript id:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i variations.vcf --assembly GRCh38 --plugin REVEL,file=/path/to/revel/data.tsv.gz,no_match=1
</code></pre>

Requirements: The tabix utility must be installed in your path to use this plugin. The --assembly flag is required to use this plugin.

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv REVEL.pm ~/.vep/Plugins
./vep -i variations.vcf --assembly GRCh37 --plugin REVEL,file=/path/to/revel/data.tsv.gz
./vep -i variations.vcf --assembly GRCh38 --plugin REVEL,file=/path/to/revel/data.tsv.gz
</code></pre>

**Category:** Pathogenicity predictions

**External libraries:** -

**Developer:** Ensembl

<span id="RiboseqORFs"></span>

### [RiboseqORFs](https://github.com/Ensembl/VEP_plugins/blob/release/116/RiboseqORFs.pm)

An Ensembl VEP plugin that uses a standardized catalog of human Ribo-seq ORFs to re-calculate consequences for variants located in these translated regions.

<span id="div_riboseqorfs"></span>

This plugin reports new consequences based on the evidence from the Ribo-seq ORF annotation and supporting publications. The human Ribo-seq ORF data can be downloaded from: <https://ftp.ebi.ac.uk/pub/databases/gencode/riboseq_orfs/data>

After downloading the annotation, please bgzip and tabix it:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">bgzip Ribo-seq_ORFs.bed
tabix Ribo-seq_ORFs.bed.gz
</code></pre>

For optimal performance when running this plugin, please use a FASTA file (`--fasta`). A FASTA file is always required in offline mode.

Please cite the publication for the Ribo-seq ORF annotation alongside Ensembl VEP if you use this resource: <https://doi.org/10.1038/s41587-022-01369-0>

The tabix utility must be installed in your path to use this plugin.

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i variations.vcf --plugin RiboseqORFs,file=/path/to/Ribo-seq_ORFs.bed.gz
</code></pre>

**Category:** Transcript annotation

**External libraries:** -

**Developer:** Ensembl

<span id="SameCodon"></span>

### [SameCodon](https://github.com/Ensembl/VEP_plugins/blob/release/116/SameCodon.pm)

An Ensembl VEP plugin that reports existing variants that fall in the same codon. This plugin requires a database connection, can not be run in offline mode

<span id="div_samecodon"></span>

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv SameCodon.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin SameCodon
</code></pre>

**Category:** Variant data

**External libraries:** -

**Developer:** Ensembl

<span id="satMutMPRA"></span>

### [satMutMPRA](https://github.com/Ensembl/VEP_plugins/blob/release/116/satMutMPRA.pm)

An Ensembl VEP plugin that retrieves data for variants from a tabix-indexed satMutMPRA file (1-based file). The saturation mutagenesis-based massively parallel reporter assays (satMutMPRA) measures variant effects on gene RNA expression for 21 regulatory elements (11 enhancers, 10 promoters).

<span id="div_satmutmpra"></span>

The 20 disease-associated regulatory elements and one ultraconserved enhancer analysed in different cell lines are the following:

- ten promoters (of TERT, LDLR, HBB, HBG, HNF4A, MSMB, PKLR, F9, FOXE1 and GP1BB) and
- ten enhancers (of SORT1, ZRS, BCL11A, IRF4, IRF6, MYC (2x), RET, TCF7L2 and ZFAND3) and
- one ultraconserved enhancer (UC88).

Please refer to the satMutMPRA web server and Kircher M et al. (2019) paper for more information: <https://mpra.gs.washington.edu/satMutMPRA/> <https://www.ncbi.nlm.nih.gov/pubmed/31395865>

Parameters can be set using a key=value system:

**`file`**

required - a tabix indexed file of the satMutMPRA data corresponding to desired assembly.

**`pvalue`**

p-value threshold (default: 0.00001)

**`cols`**

colon delimited list of data types to be returned from the satMutMPRA data (default: `Value`, `P-Value`, and `Element`)

**`incl_repl`**

include replicates (default: off):

- full replicate for LDLR promoter (LDLR.2) and SORT1 enhancer (SORT1.2)
- a reversed sequence orientation for SORT1 (SORT1-flip)
- other conditions: PKLR-48h, ZRSh-13h2, TERT-GAa, TERT-GBM, TERG-GSc

The Bio::DB::HTS perl library or tabix utility must be installed in your path to use this plugin. The satMutMPRA data file can be downloaded from <https://mpra.gs.washington.edu/satMutMPRA/>

satMutMPRA data can be downloaded for both GRCh38 and GRCh37 from the web server (<https://mpra.gs.washington.edu/satMutMPRA/>): `Download` section, select `GRCh37` or `GRCh38` for 'Genome release' and 'Download All Elements'.

The file must be processed and indexed by tabix before use by this plugin.

\# GRCh38

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">(grep ^Chr GRCh38_ALL.tsv; grep -v ^Chr GRCh38_ALL.tsv | sort -k1,1 -k2,2n ) | bgzip &gt; satMutMPRA_GRCh38_ALL.gz
tabix -s 1 -b 2 -e 2 -c C satMutMPRA_GRCh38_ALL.gz
</code></pre>

\# GRCh37

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">(grep ^Chr GRCh37_ALL.tsv; grep -v ^Chr GRCh37_ALL.tsv | sort -k1,1 -k2,2n ) | bgzip &gt; satMutMPRA_GRCh37_ALL.gz
tabix -s 1 -b 2 -e 2 -c C satMutMPRA_GRCh37_ALL.gz
</code></pre>

When running the plugin by default `Value`, `P-Value`, and `Element` information is returned e.g.

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">--plugin satMutMPRA,file=/path/to/satMutMPRA_GRCh38_ALL.gz
</code></pre>

You may include all columns with ALL; this fetches all data per variant (e.g. Tags, DNA, RNA, Value, P-Value, Element):

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">--plugin satMutMPRA,file=/path/to/satMutMPRA_GRCh38_ALL.gz,cols=ALL
</code></pre>

You may want to select only a specific subset of information to be reported, you can do this by specifying the specific columns as parameters to the plugin e.g.

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">--plugin satMutMPRA,file=/path/to/satMutMPRA_GRCh38_ALL.gz,cols=Tags:DNA
</code></pre>

If a requested column is not found, the error message will report the complete list of available columns in the satMutMPRA file. For a detailed description of the available information please refer to the manuscript or online web server.

Tabix also allows the data file to be hosted on a remote server. This plugin is fully compatible with such a setup - simply use the URL of the remote file:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">--plugin satMutMPRA,file=http://my.files.com/satMutMPRA.gz
</code></pre>

Note that gene locations referred to in satMutMPRA may be out of sync with those in the latest release of Ensembl; this may lead to discrepancies with information retrieved from other sources.

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv satMutMPRA.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin satMutMPRA,file=/path/to/satMutMPRA_data.gz,cols=col1:col2
</code></pre>

**Category:** Phenotype data and citations

**External libraries:** -

**Developer:** Ensembl

<span id="SingleLetterAA"></span>

### [SingleLetterAA](https://github.com/Ensembl/VEP_plugins/blob/release/116/SingleLetterAA.pm)

This is a plugin for the Ensembl Variant Effect Predictor (VEP) that returns a HGVSp string with single amino acid letter codes

<span id="div_singleletteraa"></span>

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv SingleLetterAA.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin SingleLetterAA
</code></pre>

**Category:** HGVS

**External libraries:** -

**Developer:** Ensembl

<span id="SpliceAI"></span>

### [SpliceAI](https://github.com/Ensembl/VEP_plugins/blob/release/116/SpliceAI.pm)

An Ensembl VEP plugin that retrieves pre-calculated annotations from SpliceAI. SpliceAI is a deep neural network, developed by Illumina, Inc that predicts splice junctions from an arbitrary pre-mRNA transcript sequence. By default, this plugin appends all scores from SpliceAI files. The plugin works with any file outputed by the SpliceAI tool - Ensembl provides scores for all SNVs overlapping MANE transcripts. For more details see: 1. Download the input files

<span id="div_spliceai"></span>

Delta score of a variant, defined as the maximum of (DS_AG, DS_AL, DS_DG, DS_DL), ranges from 0 to 1 and can be interpreted as the probability of the variant being splice-altering. The author-suggested cutoffs are:

- 0.2 (high recall)
- 0.5 (recommended)
- 0.8 (high precision)

This plugin is available for both GRCh37 and GRCh38.

More information can be found at: <https://pypi.org/project/spliceai/>

Please cite the SpliceAI publication alongside Ensembl VEP if you use this resource: <https://www.ncbi.nlm.nih.gov/pubmed/30661751>

Running options:

cutoff : Only return the scores for the speficied cutoff Accepted values are between 0 and 1

split_output : Return each type of score in a different header. This is easier for parsing the output file.

Output: The output includes the gene symbol, delta scores (DS) and delta positions (DP) for acceptor gain (AG), acceptor loss (AL), donor gain (DG), and donor loss (DL).

- For tab the output contains one header "SpliceAI_pred" with all the delta scores and positions. The format is: "SYMBOL|DS_AG|DS_AL|DS_DG|DS_DL|DP_AG|DP_AL|DP_DG|DP_DL"
- For JSON the output is a hash with the following format: "spliceai": {"DP_DL":0,"DS_AL":0,"DP_AG":0,"DS_DL":0,"SYMBOL":"X","DS_AG":0,"DP_AL":0,"DP_DG":0,"DS_DG":0}
- For VCF output and option `split_output` the delta scores and positions are stored in different headers. The values are "SpliceAI_pred_xx" being "xx" the score/position. Example: "SpliceAI_pred_DS_AG" is the delta score for acceptor gain.

Gene matching: SpliceAI can contain scores for multiple genes that overlap a variant, and Ensembl VEP can also predict consequences on multiple genes for a given variant. The plugin only returns SpliceAI scores for the gene symbols that match (if any).

If plugin is run with option 2, the output also contains a flag: "PASS" if delta score passes the cutoff, "FAIL" otherwise.

The following steps are necessary to run this plugin:

1.  Download the input files:

- Ensembl-generated files (only available for GRCh38) We calculated SpliceAI scores for all possible substitutions (SNV) within MANE Select transcripts. The scores are available through the Ensembl FTP at <https://ftp.ensembl.org/pub/data_files/homo_sapiens/GRCh38/variation_plugins/> Note: Ensembl does not provide INDEL annotations, please use the Illumina's files for INDEL scores. To know more details on how the scores were calculated please read: <https://ftp.ensembl.org/pub/data_files/homo_sapiens/GRCh38/variation_plugins/README>
- Illumina-generated files Illumina calculated scores for all possible substitutions (SNV), 1 base insertions and 1-4 base deletions (INDEL), within genes are available through basespace (<https://basespace.illumina.com/s/otSPW8hnhaZR>).
- To download via Illumina's basespace: 1. Log-in to your Illumina account or sign-up (for free) if you do not have one. 2. Once you're in, a "Share Project" pop-up will appear - click "accept". 3. A smaller pop-up in the bottom right will then read "Share Accepted". Click "Predicting splicing from primary sequence". 4. You will get a list of files. Select "genome_scores_v1.3". 5. You will get an info/landing page. Under "Analysis: genome_scores_v1.3", select "FILES". 6. Click the file icon next to "genome_scores_v1.3" and you will get a list of available files. 7. Click filenames to download the relevant files - note that raw/masked, hg19/hg38 and snv/indel files are available.

2\. For Illumina files: tabix the files (.tbi files are provided for Ensembl-derived VCFs).

- GRCh37: tabix -p vcf spliceai_scores.raw.snv.hg19.vcf.gz tabix -p vcf spliceai_scores.raw.indel.hg19.vcf.gz
- GRCh38: tabix -p vcf spliceai_scores.raw.snv.hg38.vcf.gz tabix -p vcf spliceai_scores.raw.indel.hg38.vcf.gz

3\. The plugin can then be run:

- With Illumina files: ./vep -i variations.vcf --plugin SpliceAI,snv=/path/to/spliceai_scores.raw.snv.hg38.vcf.gz,indel=/path/to/spliceai_scores.raw.indel.hg38.vcf.gz ./vep -i variations.vcf --plugin SpliceAI,snv=/path/to/spliceai_scores.raw.snv.hg38.vcf.gz,indel=/path/to/spliceai_scores.raw.indel.hg38.vcf.gz,cutoff=0.5 ./vep -i variations.vcf --plugin SpliceAI,snv=/path/to/spliceai_scores.raw.snv.hg38.vcf.gz,indel=/path/to/spliceai_scores.raw.indel.hg38.vcf.gz,split_output=1
- Or with Ensembl files (only for SNV): ./vep -i variations.vcf --plugin SpliceAI,snv=/path/to/spliceai_scores.masked.snv.ensembl_mane_v1.4.grch38.vcf.gz,indel=/path/to/spliceai_scores.masked.indel.hg38.vcf.gz

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv SpliceAI.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin SpliceAI,snv=/path/to/spliceai_snv_.vcf.gz,
indel=/path/to/spliceai_indel_.vcf.gz
</code></pre>

**Category:** Splicing predictions

**External libraries:** [List::Util](https://metacpan.org/pod/List::Util) qw(max)

**Developer:** Ensembl

<span id="SpliceRegion"></span>

### [SpliceRegion](https://github.com/Ensembl/VEP_plugins/blob/release/116/SpliceRegion.pm)

This is a plugin for the Ensembl Variant Effect Predictor (VEP) that provides more granular predictions of splicing effects.

<span id="div_spliceregion"></span>

Three additional terms may be added:

\# splice_donor_5th_base_variant : variant falls in the 5th base after the splice donor junction (5' end of intron)

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">             v
 ...EEEEEIIIIIIIIII...
</code></pre>

(E = exon, I = intron, v = variant location)

\# splice_donor_region_variant : variant falls in region between 3rd and 6th base after splice junction (5' end of intron)

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">           vv vvv
 ...EEEEEIIIIIIIIII...
</code></pre>

\# splice_polypyrimidine_tract_variant : variant falls in polypyrimidine tract at 3' end of intron, between 17 and 3 bases from the end

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">      vvvvvvvvvvvvvvv
 ...IIIIIIIIIIIIIIIIIIIIEEEEE...
</code></pre>

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv SpliceRegion.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin SpliceRegion

To only show the additional consequence extended_intronic_splice_region_variant, use: 
./vep -i variations.vcf --plugin SpliceRegion,Extended
</code></pre>

**Category:** Splicing predictions

**External libraries:** -

**Developer:** Ensembl

<span id="SpliceVault"></span>

### [SpliceVault](https://github.com/Ensembl/VEP_plugins/blob/release/116/SpliceVault.pm)

An Ensembl VEP plugin that retrieves SpliceVault data to predict exon-skipping events and activated cryptic splice sites based on the most common mis-splicing events around a splice site.

<span id="div_splicevault"></span>

This plugin returns the most common variant-associated mis-splicing events based on SpliceVault data. Each event includes the following information:

- Type: exon skipping (ES), cryptic donor (CD) or cryptic acceptor (CA)
- Transcript impact:
- For ES, describes skipped exons, e.g. ES:2 represents exon 2 skipping and ES:2-3 represents skipping of exon 2 and 3
- For CD/CA, describes the distance from the annotated splice-site to the cryptic splice-site with reference to the transcript (distances to negative strand transcripts are reported according to the 5' to 3' distance)
- Percent of supporting samples: percent of samples supporting the event over total samples where splicing occurs in that site (note this may be above 100% if the event is seen in more samples than annotated splicing)
- Frameshift: inframe or out-of-frame event

The plugin also returns information specific to each splice site:

- Site position/type: genomic location and type (donor/acceptor) of the splice-site predicted to be lost by SpliceAI. Cryptic positions are relative to this genomic coordinate.
- Out of frame events: fraction of the top events that cause a frameshift. As per <https://pubmed.ncbi.nlm.nih.gov/36747048>, sites with 3/4 or more in-frame events are likely to be splice-rescued and not loss-of-function (LoF).
- Site sample count and max depth: sample count for this splice site and max number of reads in any single sample representing annotated splicing in Genotype-Tissue Expression (GTEx). This information allows to filter events based on a minimum number of samples or minimum depth in GTEx.
- SpliceAI delta score (provided by SpliceVault)

Please cite the SpliceVault publication alongside Ensembl VEP if you use this resource: <https://pubmed.ncbi.nlm.nih.gov/36747048>

The tabix utility must be installed in your path to use this plugin. The SpliceVault TSV and respective index (TBI) for GRCh38 can be downloaded from here:

- <https://ftp.ensembl.org/pub/current_variation/SpliceVault/SpliceVault_data_GRCh38.tsv.gz>
- <https://ftp.ensembl.org/pub/current_variation/SpliceVault/SpliceVault_data_GRCh38.tsv.gz.tbi>

and, for GRCh37 assembly can be downloaded from here:

- <https://ftp.ensembl.org/pub/current_variation/SpliceVault/SpliceVault_data_hg19.tsv.gz>
- <https://ftp.ensembl.org/pub/current_variation/SpliceVault/SpliceVault_data_hg19.tsv.gz.tbi>

To filter results, please use filter_vep with the output file or standard output. Documentation on filter_vep is available at: [https://www.ensembl.org/info/docs/tools/vep/script/vep_filter.html](/help/articles/vep-filtering-results)

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv SpliceVault.pm ~/.vep/Plugins

./vep -i variations.vcf --plugin SpliceVault,file=/path/to/SpliceVault_data_GRCh38.tsv.gz

# Stringently select predicted loss-of-function (pLoF) splicing variants
./filter_vep -i variant_effect_output.txt --filter &quot;SPLICEVAULT_OUT_OF_FRAME_EVENTS &gt;= 3&quot;
</code></pre>

**Category:** Splicing predictions

**External libraries:** -

**Developer:** Ensembl

<span id="SubsetVCF"></span>

### [SubsetVCF](https://github.com/Ensembl/VEP_plugins/blob/release/116/SubsetVCF.pm)

An Ensembl VEP plugin to retrieve overlapping records from a given VCF file. Values for POS, ID, and ALT, are retrieved as well as values for any requested INFO field. Additionally, the allele number of the matching ALT is returned.

<span id="div_subsetvcf"></span>

Though similar to using `--custom`, this plugin returns all ALTs for a given POS, as well as all associated INFO values.

By default, only VCF records with a filter value of "PASS" are returned, however this behaviour can be changed via the `filter` option.

The plugin accepts the following key=value parameters:

**`name`**

short name added used as a prefix (required)

**`file`**

path to tabix-index vcf file (required)

**`filter`**

only consider variants marked as `PASS`, 1 or 0 (default, 1)

**`fields`**

info fields to be returned (default, not used)

- '%' can delimit multiple fields
- '\*' can be used as a wildcard

Returns:

- `<name>_POS`: POS field from VCF
- `<name>_REF`: REF field from VCF (minimised)
- `<name>_ALT`: ALT field from VCF (minimised)
- `<name>_alt_index`: Index of matching variant (zero-based)
- `<name>_<field>`: List of requested info values

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i variations.vcf --plugin SubsetVCF,file=filepath.vcf.gz,name=myvfc,fields=AC*%AN*
</code></pre>

**Category:** Variant data

**External libraries:**

- [Data::Dumper](https://metacpan.org/pod/Data::Dumper)
- [Storable](https://metacpan.org/pod/Storable) qw(dclone)

**Developer:** Joseph A. Prinz

<span id="TranscriptAnnotator"></span>

### [TranscriptAnnotator](https://github.com/Ensembl/VEP_plugins/blob/release/116/TranscriptAnnotator.pm)

An Ensembl VEP plugin that annotates variant-transcript pairs based on a given file:

<span id="div_transcriptannotator"></span>

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">--plugin TranscriptAnnotator,file=${HOME}/file.tsv.gz
</code></pre>

Example of a valid tab-separated annotation file:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">#Chrom  Pos       Ref  Alt  Transcript       SIFT_score  SIFT_pred    Comment
11      436154    A    G    NM_001347882.2   0.03        Deleterious  Bad
11      1887471   C    T    ENST00000421485  0.86        Tolerated    Good
</code></pre>

Please bgzip and tabix the file with commands such as:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">bgzip file.txt
tabix -b2 -e2 file.txt.gz
</code></pre>

Options are passed to the plugin as key=value pairs:

**`file`**

(mandatory) Tabix-indexed file to parse. Must contain variant location (chromosome, position, reference allele, alternative allele) and transcript ID as the first 5 columns. Accepted transcript IDs include those from Ensembl and RefSeq.

**`cols`**

Colon-delimited list with names of the columns to append. Column names are based on the last header line. By default, all columns (except the first 5) are appended.

**`prefix`**

String to prefix the name of appended columns (default: basename of the filename without extensions). Set to 0 to avoid any prefix.

**`trim`**

Trim whitespaces from both ends of each column (default: 1).

The tabix and bgzip utilities must be installed in your path to read the tabix-indexed annotation file: check <https://github.com/samtools/htslib.git> for installation instructions.

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv TranscriptAnnotator.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin TranscriptAnnotator,file=/path/to/file.txt.gz
</code></pre>

**Category:** Transcript annotation

**External libraries:** [File::Basename](https://metacpan.org/pod/File::Basename)

**Developer:** Ensembl

<span id="TSSDistance"></span>

### [TSSDistance](https://github.com/Ensembl/VEP_plugins/blob/release/116/TSSDistance.pm)

An Ensembl VEP plugin that calculates the distance from the transcription start site for upstream variants. Or variants in both directions if parameter `both_direction=1` is provided.

<span id="div_tssdistance"></span>

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv TSSDistance.pm ~/.vep/Plugins
./vep -i variations.vcf --plugin TSSDistance

# Get both up and downstream distances:
./vep -i variations.vcf --plugin TSSDistance,both_direction=1
</code></pre>

**Category:** Nearby features

**External libraries:** -

**Developer:** Ensembl

<span id="UTRAnnotator"></span>

### [UTRAnnotator](https://github.com/Ensembl/VEP_plugins/blob/release/116/UTRAnnotator.pm)

An Ensembl VEP plugin that annotates the effect of 5' UTR variant especially for variant creating/disrupting upstream ORFs. Available for both GRCh37 and GRCh38.

<span id="div_utrannotator"></span>

Options are passed to the plugin as key=value pairs:

**`file`**

(Required) Path to UTRAnnotator data file:

- Download `uORF_5UTR_GRCh37_PUBLIC.txt` or `uORF_5UTR_GRCh38_PUBLIC.txt` from <https://github.com/Ensembl/UTRannotator>
- Download from <http://sorfs.org>

**`max_overlap`**

(Optional) Maximum percentage of overlap between variant and UTR for UTR annotation (default: 100)

Citation

About the role of 5'UTR variants in human genetic disease:

Whiffin, N., Karczewski, K.J., Zhang, X. et al. Characterising the loss-of-function impact of 5’ untranslated region variants in 15,708 individuals. Nat Commun 11, 2523 (2020). <https://doi.org/10.1038/s41467-019-10717-9>

About UTRAnnotator:

The original UTRAnnotator plugin is written by Xiaolei Zhang et al. Later adopted by Ensembl VEP plugins with some changes. You can find the original plugin here - <https://github.com/ImperialCardioGenetics/UTRannotator>

Please cite the UTRannotator publication alongside Ensembl VEP if you use this resource - Annotating high-impact 5'untranslated region variants with the UTRannotator Zhang, X., Wakeling, M.N., Ware, J.S, Whiffin, N. Bioinformatics; doi: <https://academic.oup.com/bioinformatics/advance-article/doi/10.1093/bioinformatics/btaa783/5905476>

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv UTRAnnotator.pm ~/.vep/Plugins
vep -i variations.vcf --plugin UTRAnnotator,file=/path/to/uORF_starts_ends_GRCh38_PUBLIC.txt

# skip annotation for variants with a 80% or higher overlap of the UTR
vep -i variations.vcf --plugin UTRAnnotator,file=/path/to/uORF_starts_ends_GRCh38_PUBLIC.txt,max_overlap=80
</code></pre>

**Category:** Transcript annotation

**External libraries:**

- [List::Util](https://metacpan.org/pod/List::Util) qw(min max)
- [Scalar::Util](https://metacpan.org/pod/Scalar::Util) qw(looks_like_number)

**Developer:** Ensembl

<span id="VARITY"></span>

### [VARITY](https://github.com/Ensembl/VEP_plugins/blob/release/116/VARITY.pm)

This is a plugin for the Ensembl Variant Effect Predictor (VEP) that adds the pre-computed VARITY scores to predict pathogenicity of rare missense variants to the output.

<span id="div_varity"></span>

Please cite the VARITY publication alongside Ensembl VEP if you use this resource: <https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8715197/>

Running options :

VARITY scores can be downloaded using

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">wget http://varity.varianteffect.org/downloads/varity_all_predictions.tar.gz
</code></pre>

The files can be tabix processed by :

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">tar -xzvf varity_all_predictions.tar.gz 
cat varity_all_predictions.txt | (head -n 1 &amp;&amp; tail -n +2  | sort -t$'\t' -k 1,1 -k 2,2n) &gt; varity_all_predictions_sorted.tsv
sed '1s/.*/#&amp;/'  varity_all_predictions_sorted.tsv &gt; varity_all_predictions.tsv  # to add a # in the first line of the file 
bgzip varity_all_predictions.tsv
tabix -f -s 1 -b 2 -e 2 varity_all_predictions.tsv.gz
</code></pre>

Requirements: The tabix utility must be installed in your path to use this plugin. The --assembly flag is required to use this plugin.

**Usage examples:**

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mv VARITY.pm ~/.vep/Plugins
./vep -i variations.vcf --assembly GRCh37 --plugin VARITY,file=/path/to/varity_all_predictions.txt
</code></pre>

**Category:** Pathogenicity predictions

**External libraries:** -

**Developer:** Ensembl

We hope that these will serve as useful examples for users implementing new plugins. If you have any questions about the system, or suggestions for enhancements please let us know on the [ensembl-dev](https://lists.ensembl.org/mailman/listinfo/dev) mailing list. We also encourage you to share any plugins you develop: we are happy to accept pull requests on the [VEP_plugins](https://github.com/Ensembl/VEP_plugins) git repository.

There are further published plugins available outside the Ensembl VEP repository including:

- [LOFTEE](https://github.com/konradjk/loftee) a Loss-Of-Function Transcript Effect Estimator ([Konrad Karczewski et al,2020](https://www.nature.com/articles/s41586-020-2308-7))
