---
title: VEP examples and use cases
description: Example VEP commands for frequencies, conservation, dbNSFP,
  structural variants and pangenomes.
slug: vep-cli-examples-and-use-cases
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

# VEP examples and use cases

**On this page**

- [Example commands](/help/articles/vep-examples-and-use-cases#examples)
- [gnomAD](/help/articles/vep-examples-and-use-cases#gnomad)
- [Conservation scores](/help/articles/vep-examples-and-use-cases#gerp)
- [dbNSFP](/help/articles/vep-examples-and-use-cases#dbNSFP)
- [Structural variants](/help/articles/vep-examples-and-use-cases#StructVar)
- [Pangenome assemblies](/help/articles/vep-examples-and-use-cases#pangenomes)
- [Citations and Ensembl VEP users](/help/articles/vep-examples-and-use-cases#citations)

<span id="examples"></span>

## Example commands

- Read input from **STDIN**, output to **STDOUT**

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep --cache -o stdout
  </code></pre>

- Add **regulatory** region **consequences**

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep --cache -i variants.txt --regulatory
  </code></pre>

- Input file `variants.vcf.txt`, input file **format VCF**, add **gene symbol** identifiers

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep --cache -i variants.vcf.txt --format vcf --symbol
  </code></pre>

- **Filter** out **common variants** based on 1000 Genomes data

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep --cache -i variants.txt --filter_common
  </code></pre>

- **Force overwrite** of output file `variants_output.txt`, check for existing **co-located variants**, output only **coding sequence** consequences, output **HGVS names**

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep --cache -i variants.txt -o variants_output.txt --force --check_existing --coding_only --hgvs
  </code></pre>

- Specify **DB connection parameters** in registry file `ensembl.registry`, add **SIFT** score and prediction, **PolyPhen** prediction

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep --database -i variants.txt --registry ensembl.registry --sift b --polyphen p
  </code></pre>

- Connect to **Ensembl Genomes** db server for *Arabidopsis thaliana*

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep --database -i variants.txt --genomes --species arabidopsis_thaliana
  </code></pre>

- Load config from **ini file**, run in **quiet mode**

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep --config vep.ini -i variants.txt -q
  </code></pre>

- Use **cache** in `/home/vep/mycache/`, use **gzcat** instead of zcat

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep --cache --dir /home/vep/mycache/ -i variants.txt --compress gzcat
  </code></pre>

- Add custom position-based **phenotype** annotation from remote **BED file**

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep --cache -i variants.vcf --custom file=ftp://ftp.myhost.org/data/phenotypes.bed.gz,short_name=phenotype
  </code></pre>

- Use the **plugin** named MyPlugin, output only the variation name, feature, consequence type and MyPluginOutput **fields**

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep --cache -i variants.vcf --plugin MyPlugin --fields Uploaded_variation,Feature,Consequence,MyPluginOutput
  </code></pre>

- Right align variants before consequence calculation. For more information, see [here](/help/articles/vep-other-information#shifting).

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep --cache -i variants.vcf --shift_3prime 1
  </code></pre>

- Report uploaded allele before minimisation. For more information, see [here](/help/articles/vep-output-options#opt_uploaded_allele).

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep --cache -i variants.vcf --uploaded_allele
  </code></pre>

<span id="gnomad"></span>

## gnomAD

[gnomAD](http://gnomad.broadinstitute.org/) exome frequency data is included in Ensembl VEP's cache files from release 90, replacing ExAC; use [--af_gnomade](/help/articles/vep-co-located-variants#opt_af_gnomade) to enable using this data. Ensembl VEP can also retrieve frequency data from the gnomAD genomes set or ExAC via Ensembl VEP's custom annotation functionality.

For the latest gnomAD data, please visit [gnomAD downloads](https://gnomad.broadinstitute.org/downloads).

1.  Ensembl VEP requires Bio::DB::HTS to read data from tabix-indexed VCFs - see [installation instructions](/help/articles/download-and-install-vep#installer)

2.  The Ensembl FTP site hosts abridged VCF files for gnomAD additionally remapped to GRCh38 using [CrossMap](http://crossmap.sourceforge.net/). It is possible for Ensembl VEP to read these files directly from their remote location, though for optimal performance the VCF and index should be downloaded to a local file system.
    - **GRCh38**
      - gnomAD genomes (r2.1, remapped with CrossMap): [\[VCFs and tabix indexes\]](https://ftp.ensembl.org/pub/data_files/homo_sapiens/GRCh38/variation_genotype/gnomad/r2.1/genomes/)
      - gnomAD exomes (r2.1, remapped with CrossMap): [\[VCFs and tabix indexes\]](https://ftp.ensembl.org/pub/data_files/homo_sapiens/GRCh38/variation_genotype/gnomad/r2.1/exomes/)
      - ExAC (v0.3, remapped using CrossMap): [\[VCF\]](https://ftp.ensembl.org/pub/data_files/homo_sapiens/GRCh38/variation_genotype/ExAC.0.3.GRCh38.vcf.gz) [\[tabix index\]](https://ftp.ensembl.org/pub/data_files/homo_sapiens/GRCh38/variation_genotype/ExAC.0.3.GRCh38.vcf.gz.tbi)
    - **GRCh37**
      - gnomAD genomes (r2.1): [\[VCF and tabix indexes\]](https://ftp.ensembl.org/pub/data_files/homo_sapiens/GRCh37/variation_genotype/)
      - gnomAD exomes (r2.1): [\[VCF and tabix indexes\]](https://ftp.ensembl.org/pub/data_files/homo_sapiens/GRCh37/variation_genotype/)
      - ExAC (v0.3): [\[VCF\]](https://ftp.ensembl.org/pub/data_files/homo_sapiens/GRCh37/variation_genotype/ExAC.0.3.GRCh37.vcf.gz) [\[tabix index\]](https://ftp.ensembl.org/pub/data_files/homo_sapiens/GRCh37/variation_genotype/ExAC.0.3.GRCh37.vcf.gz.tbi)

3.  Run Ensembl VEP with the following command (using the GRCh38 input example) to get locations and continental-level allele frequencies:

    <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i examples/homo_sapiens_GRCh38.vcf --cache \
    --custom file=gnomad.genomes.r2.0.1.sites.GRCh38.noVEP.vcf.gz,short_name=gnomADg,format=vcf,type=exact,coords=0,fields=AF_AFR%AF_AMR%AF_ASJ%AF_EAS%AF_FIN%AF_NFE%AF_OTH
    </code></pre>

    You will then see data under field names as described in the Ensembl VEP output header:

    <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">## gnomADg : gnomad.genomes.r2.0.1.sites.GRCh38.noVEP.vcf.gz (exact)
    ## gnomADg_AFR_AF : AFR_AF field from gnomad.genomes.r2.0.1.sites.GRCh38.noVEP.vcf.gz
    ## gnomADg_AMR_AF : AMR_AF field from gnomad.genomes.r2.0.1.sites.GRCh38.noVEP.vcf.gz
    ...
    </code></pre>

    where the gnomADg field contains the ID (or coordinates if no ID found) of the variant in the VCF file. Any of the fields in the gnomAD file INFO field can be added by appending them to the list in your Ensembl VEP command.

<span id="gerp"></span>

## Conservation scores

You can use the [custom annotation](/help/articles/vep-custom-annotations) feature to add conservation scores to your output. For example, to add GERP scores, download the bigWig file from the list below, and run Ensembl VEP with the following flag:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep --cache -i example.vcf --custom file=All_hg19_RS.bw,short_name=GERP,format=bigwig
</code></pre>

Example conservation score files:

**Human (GRCh38)**

- [phastCons 7-way](http://hgdownload.soe.ucsc.edu/goldenPath/hg38/phastCons7way/)
- [phastCons 20-way](http://hgdownload.soe.ucsc.edu/goldenPath/hg38/phastCons20way/)
- [phastCons 100-way](http://hgdownload.soe.ucsc.edu/goldenPath/hg38/phastCons100way/)
- [phyloP 7-way](http://hgdownload.soe.ucsc.edu/goldenPath/hg38/phyloP7way/)
- [phyloP 20-way](http://hgdownload.soe.ucsc.edu/goldenPath/hg38/phyloP20way/)
- [phyloP 100-way](http://hgdownload.soe.ucsc.edu/goldenPath/hg38/phyloP100way/)

**Human (GRCh37)**

- [GERP](http://hgdownload.soe.ucsc.edu/gbdb/hg19/bbi/All_hg19_RS.bw)
- [phastCons 46-way](http://hgdownload.soe.ucsc.edu/goldenPath/hg19/phastCons46way/)
- [phastCons 100-way](http://hgdownload.soe.ucsc.edu/goldenPath/hg19/phastCons100way/)
- [phyloP 46-way](http://hgdownload.soe.ucsc.edu/goldenPath/hg19/phyloP46way/)
- [phyloP 100-way](http://hgdownload.soe.ucsc.edu/goldenPath/hg19/phyloP100way/)

All files provided by the UCSC genome browser - files for other species are available from their [FTP site](http://hgdownload.soe.ucsc.edu/goldenPath/), though be sure to use the file corresponding to the [correct assembly](https://jun2026.archive.ensembl.org/Homo_sapiens/Info/Annotation#assembly).

<span id="dbNSFP"></span>

## dbNSFP

dbNSFP - ["a lightweight database of human nonsynonymous SNPs and their functional predictions"](http://www.ncbi.nlm.nih.gov/pubmed/21520341) - provides pathogenicity predictions from many tools (including SIFT, LRT, MutationTaster, FATHMM) across every possible missense substitution in the human proteome.

Ensembl VEP plugins sometimes require data processed in specific ways as arguments. Any requirements and usage instructions for each plugin can be found in the [plugin documentation](/help/articles/vep-plugins).

In the case of the dbNSFP.pm plugin, the data needs to be [downloaded](https://www.dbnsfp.org/) and then processed into a format that the plugin can use. Note that there are two distinct branches of the files provided for academic and commercial usage; please use the appropriate files for your use case.

After downloading the file, you will need to process it so that tabix can index it correctly. This will take a while as the file is very large! Note that you will need the [tabix](http://samtools.sourceforge.net/tabix.shtml) utility in your path to use dbNSFP.

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">version=4.5c
unzip dbNSFP${version}.zip
zcat dbNSFP${version}_variant.chr1.gz | head -n1 &gt; h

# GRCh38/hg38 data
zgrep -h -v &quot;^#chr&quot; dbNSFP${version}_variant.chr* | sort -k1,1 -k2,2n - | cat h - | bgzip -c &gt; dbNSFP${version}_grch38.gz
tabix -s 1 -b 2 -e 2 dbNSFP${version}_grch38.gz

# GRCh37/hg19 data
zgrep -h -v &quot;^#chr&quot; dbNSFP${version}_variant.chr* | awk '$8 != &quot;.&quot; ' | sort -k8,8 -k9,9n - | cat h - | bgzip -c &gt; dbNSFP${version}_grch37.gz
tabix -s 8 -b 9 -e 9 dbNSFP${version}_grch37.gz
</code></pre>

Then simply download the [dbNSFP.pm plugin](https://github.com/Ensembl/VEP_plugins/blob/release/116/dbNSFP.pm) and place it either in **$HOME/.vep/Plugins/** or a path in your **$PERL5LIB**. When you run Ensembl VEP with the plugin, you will need to select some of the columns that you wish to retrieve; to list them run Ensembl VEP with the plugin and the path to the dbNSFP file and no further parameters:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep --cache --force --plugin dbNSFP,dbNSFP4.5c_grch38.txt.gz
2014-04-04 11:27:05 - Read existing cache info
2014-04-04 11:27:05 - Auto-detected FASTA file in cache directory
2014-04-04 11:27:05 - Checking/creating FASTA index
2014-04-04 11:27:05 - Failed to instantiate plugin dbNSFP: ERROR: No columns selected to fetch. Available columns are:
#chr,pos(1-coor),ref,alt,aaref,aaalt,hg18_pos(1-coor),genename,Uniprot_acc,
Uniprot_id,Uniprot_aapos,Interpro_domain,cds_strand,refcodon,SLR_test_statistic,
codonpos,fold-degenerate,Ancestral_allele,Ensembl_geneid,Ensembl_transcriptid,
...
</code></pre>

Note that some of these fields are replicates of those produced by the core Ensembl VEP code (e.g. [SIFT](/help/articles/vep-output-options#opt_sift), the [1000 Genomes Project](/help/articles/vep-co-located-variants#opt_af_1kg) frequencies) - you should use the Ensembl VEP options for frequency information rather than the annotations from dbNSFP as the dbNSFP file covers **only** missense substitutions. Other fields, such as the conservation scores, may be better served by using genome-wide files as described [above](/help/articles/vep-examples-and-use-cases#gerp).

To select fields, just add them as a comma-separated list to your command line:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep --cache --force --plugin dbNSFP,dbNSFP4.5c_grch38.txt.gz,LRT_score,FATHM_score,MutationTaster_score
</code></pre>

One final point to note is that the dbNSFP scores are frozen on a particular Ensembl release's transcript set; check the readme file on their download site to find out exactly which. While in the majority of cases protein sequences don't change between releases, in some circumstances the protein sequence used by Ensembl VEP in the latest release may differ from the sequence used to calculate the scores in dbNSFP.

<span id="StructVar"></span>

## Structural variants

Ensembl VEP can annotate structural variants (SV) with their predicted effect on other genomic features. For more information on SV input format, see [here](/help/articles/vep-data-formats#sv).

### Prediction process

- If the INFO keys `END` or `SVLEN` are present, the proportion of any overlapping feature covered by the variant is calculated

- The alternative allele (or `SVTYPE` in older VCF files) defines the type of structural variant; some types of structural variants are tested for specific consequences:

  ### `Insertion`

  **Abbreviation:** INS

  **Specific consequences:** Feature elongation

  ### `Deletion`

  **Abbreviation:** DEL

  **Specific consequences:** Feature truncation

  ### `Duplication`

  **Abbreviation:** DUP

  **Specific consequences:** Feature amplification/elongation

  ### `Inversion`

  **Abbreviation:** INV

  **Specific consequences:** *Not tested for any specific consequence*

  ### `Copy number variation`

  **Abbreviation:** CNV

  **Specific consequences:** Feature amplification/elongation (if copy number is 2) or truncation (if copy number is 0)

  ### `Breakpoint variant`

  **Abbreviation:** BND

  **Specific consequences:** Feature truncation

##### Insertions and deletions

- Supports [mobile element insertions/deletions](/help/articles/vep-data-formats#sv), including ALU, HERV, LINE1 and SVA elements
  - Currently, mobile element variants are treated as any insertion/deletion

##### Breakpoint variants

- Supports chromosome synonyms in breakends (such as `chr4` and `NC_000004.12`)
- Processes [single breakends and multiple, comma-separated alternative breakends](/help/articles/vep-data-formats#sv)
- Consequences are reported for each breakend; for instance, for a VCF input like `1 7936271 . N N[12:58877476[,N[X:10932343[`, it will report the consequences for each of the 3 breakends:
  - `N[12:58877476[`: consequences for the first alternative breakend near chr12:58877476
  - `N[X:10932343[`: consequences for the second alternative breakend near chrX:10932343
  - `N.`: consequences for the reference breakend near chr1:7936271 (represented as detailed in the [VCF 4.4 specification, section 5.4.9: Single breakends](https://samtools.github.io/hts-specs/VCFv4.4.pdf))
- In case of specific breakends not overlaping any reported Ensembl features (such as transcripts and regulatory regions), that specific breakend will **NOT** be presented in VEP output.

### Reported overlaps

- Ensembl VEP calculates the length and proportion of each genomic feature overlapped by a structural variant
- Use the [--overlaps](/help/articles/vep-output-options#opt_overlaps) option to enable this when using VCF or tab format. (This is reported by default in standard Ensembl VEP and JSON format.)
- The keys `bp_overlap` and `percentage_overlap` are used in JSON format and `OverlapBP` and `OverlapPC` in other formats.

### Plugin support

- [CADD plugin](/help/articles/vep-plugin-catalogue#CADD)
- [Conservation plugin](/help/articles/vep-plugin-catalogue#Conservation)
- [NearestGene plugin](/help/articles/vep-plugin-catalogue#NearestGene)
- [Phenotypes plugin](/help/articles/vep-plugin-catalogue#Phenotypes)
- StructuralVariantOverlap plugin: please note that all features of this plugin have been ported to [--custom annotation](/help/articles/vep-custom-annotations), with additional improvements
- [TSSDistance plugin](/help/articles/vep-plugin-catalogue#TSSDistance)

### Changing memory requirements

- By default, Ensembl VEP does not annotate variants larger than 10M. If you are using the command line tool, you can use the [--max_sv_size](/help/articles/vep-basic-options#opt_max_sv_size) option to modify this.
  - This limit is not associated with breakpoint variants: each breakend in a breakpoint variant is analysed by Ensembl VEP as a single base (the alternative sequence is currently ignored).
- By default, variants are analysed in batches of 5000. Using the [--buffer_size](/help/articles/vep-cache-options#opt_buffer_size) option to reduce this can reduce memory requirements, especially if your data is sparse. A smaller buffer size is essential when annotating structural variants with regulatory data.

<span id="pangenomes"></span>

## Pangenome assemblies

Ensembl VEP is able to analyse variants in **any species or assembly** (even if not part of [Ensembl data](https://jun2026.archive.ensembl.org/info/about/species.html)) by providing your own [FASTA file](/help/articles/vep-annotation-sources#fasta) and [GFF/GTF annotation](/help/articles/vep-annotation-sources#gff):

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i variants.txt -o variants_output.txt --gff data.gff.gz --fasta genome.fa.gz
</code></pre>

We also provide data for other assemblies besides those supported in the current Ensembl and Ensembl Genomes sites.

<span id="HPRC"></span>

### HPRC assemblies

The [Human Pangenome Reference Consortium (HPRC)](https://humanpangenome.org/) aims to sequence 350 individuals of diverse ancestries, producing a pangenome of 700 haplotypes by the end of 2024. The first publication (*[A draft human pangenome reference](https://www.nature.com/articles/s41586-023-05896-x)*) describes 47 phased, diploid assemblies from a cohort of genetically diverse individuals.

The Ensembl VEP command-line tool (CLI) can annotate and filter variants called against the latest human assemblies, including the telomere-to-telomere assembly of the CHM13 cell line (T2T-CHM13). We have annotated genes on these human assemblies, based on Ensembl/[GENCODE 38](https://www.gencodegenes.org/human/release_38.html) genes and transcripts, via a new mapping pipeline as detailed in the Methods section of *[A draft human pangenome reference](https://www.nature.com/articles/s41586-023-05896-x)*. The links to download and visualise the human annotations for HPRC assemblies are summarised in the [Ensembl HPRC data page](https://projects.ensembl.org/hprc/).

<span id="HPRC_run"></span>

### Running Ensembl VEP with the human HPRC assemblies

Currently, Ensembl VEP can only be run with HPRC assemblies in offline mode, one assembly at a time. There are two ways to use Ensembl VEP with HPRC assemblies:

- Using **Ensembl VEP cache** with (recommended) **FASTA sequence** (the most efficient way)
- Using **GTF annotation** with (mandatory) **FASTA sequence**

In the examples below, we demonstrate annotating variants on **T2T-CHM13v2.0** ([GCA_009914755.4](https://ftp.ensembl.org/pub/rapid-release/species/Homo_sapiens/GCA_009914755.4/) assembly). To create a sample VCF to use in the examples below, you can take the first 100 lines from the ClinVar VCF file mapped to T2T-CHM13:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">clinvar=ftp://ftp.ensembl.org/pub/rapid-release/species/Homo_sapiens/GCA_009914755.4/ensembl/variation/2022_10/vcf/2024_07/clinvar_20240624_GCA_009914755.4.vcf.gz
tabix -h $clinvar 1 | head -n 100 &gt; test.vcf
</code></pre>

<span id="cache"></span>

##### Ensembl VEP cache

The [cache](/help/articles/vep-annotation-sources#cache) is a downloadable archive containing all transcript models for an assembly; it may also contain regulatory features and variant data.

Let's start by downloading and extracting the cache to the default Ensembl VEP directory (available for each annotation by clicking in **VEP cache** in the [Ensembl HPRC data page](https://projects.ensembl.org/hprc/)). In the case of T2T-CHM13:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">cd $HOME/.vep
curl -O https://ftp.ensembl.org/pub/rapid-release/species/Homo_sapiens/GCA_009914755.4/ensembl/variation/2022_10/indexed_vep_cache/Homo_sapiens-GCA_009914755.4-2022_10.tar.gz
tar xzf Homo_sapiens-GCA_009914755.4-2022_10.tar.gz
</code></pre>

This will create the folder `homo_sapiens_gca009914755v4/107_T2T-CHM13v2.0` with the gene data required to run Ensembl VEP. The name of this folder contains relevant information when running Ensembl VEP:

- Species: `homo_sapiens_gca009914755v4`
- Cache version: `107`
- Assembly: `T2T-CHM13v2.0`

As well as molecular consequence predictions, many gene/transcript-based [options](/help/articles/running-vep) are supported for HPRC assemblies:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">vep -i test.vcf --offline \
    --species homo_sapiens_gca009914755v4 \
    --cache_version 107 \
    --fasta Homo_sapiens-GCA_009914755.4-softmasked.fa.gz \
    --domains --symbol --canonical --protein --biotype --uniprot --variant_class
</code></pre>

We don't have other annotations, such as RefSeq transcripts or variant information in the cache.

To run Ensembl VEP with the downloaded cache in offline mode, please specify the species (which here includes assembly name) and cache version:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">vep -i test.vcf --offline --species homo_sapiens_gca009914755v4 --cache_version 107
</code></pre>

<span id="fasta"></span>

##### FASTA sequence

When using the cache, supplying the reference genomic sequence in a FASTA file is optional, but is required to enable the following options:

- Create HGVS notations ([--hgvs](/help/articles/vep-identifiers#opt_hgvs) and [--hgvsg](/help/articles/vep-identifiers#opt_hgvsg))
- Check the reference sequence given in input data ([--check_ref](/help/articles/vep-filtering-and-qc-options#opt_check_ref))

Genomic FASTA files can be found in [Ensembl HPRC data page](https://projects.ensembl.org/hprc/) **\> FTP dumps \> ensembl \> genome**. FASTA files need to be either uncompressed or compressed with **bgzip** (recommended) to be compatible with Ensembl VEP. For instance, to download a compressed FASTA file, uncompress it and then re-compress it with bgzip:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">curl -O https://ftp.ensembl.org/pub/rapid-release/species/Homo_sapiens/GCA_009914755.4/ensembl/genome/Homo_sapiens-GCA_009914755.4-softmasked.fa.gz
gzip -d Homo_sapiens-GCA_009914755.4-softmasked.fa.gz
bgzip Homo_sapiens-GCA_009914755.4-softmasked.fa.gz
</code></pre>

Afterwards, you can run Ensembl VEP using cache and the [--fasta](/help/articles/vep-cache-options#opt_fasta) flag:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">vep -i test.vcf --offline \
    --species homo_sapiens_gca009914755v4 \
    --cache_version 107 \
    --fasta Homo_sapiens-GCA_009914755.4-softmasked.fa.gz
</code></pre>

More information on using FASTA files is available [here](/help/articles/vep-annotation-sources#fasta).

<span id="gtf"></span>

##### GTF and GFF annotation

As an alternative to using cache files, Ensembl VEP can utilise gene information in appropriately indexed GTF or GFF files. GTF and GFF files can be downloaded from the annotation column in the [Ensembl HPRC data page](https://projects.ensembl.org/hprc/). The data needs to be re-sorted in chromosomal order, compressed in **bgzip** and indexed with **tabix**. We present here the example for a GTF file:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">curl -O https://ftp.ensembl.org/pub/rapid-release/species/Homo_sapiens/GCA_009914755.4/ensembl/geneset/2022_07/Homo_sapiens-GCA_009914755.4-2022_07-genes.gtf.gz
gzip -d Homo_sapiens-GCA_009914755.4-2022_07-genes.gtf.gz
grep -v &quot;#&quot; Homo_sapiens-GCA_009914755.4-2022_07-genes.gtf |\
  sort -k1,1 -k4,4n -k5,5n -t$'\t' |\
  bgzip -c &gt; Homo_sapiens-GCA_009914755.4-2022_07-genes.gtf.gz
tabix Homo_sapiens-GCA_009914755.4-2022_07-genes.gtf.gz
</code></pre>

FASTA files are **always** required when running HPRC data with GTF annotation, as the transcript sequences are not available in the GFF files.

Afterwards, you can run Ensembl VEP using the GTF and FASTA files:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">vep -i test.vcf \
      --gtf Homo_sapiens-GCA_009914755.4-2022_07-genes.gtf.gz \
      --fasta Homo_sapiens-GCA_009914755.4-softmasked.fa.gz
</code></pre>

Check [here](/help/articles/vep-annotation-sources#gff) for more information on using gene annotations in GTF and GFF files.

<span id="PolyPhen_SIFT"></span>

### Missense deleteriousness predictions

Although PolyPhen-2 and SIFT scores are not directly available for alternative assemblies by using [--polyphen](/help/articles/vep-output-options#opt_polyphen) and [--sift](/help/articles/vep-output-options#opt_sift), they can be retrieved via the [PolyPhen_SIFT plugin](/help/articles/vep-plugin-catalogue#PolyPhen_SIFT).

Using our [ProteinFunction pipeline](https://github.com/Ensembl/ensembl-variation/tree/main/nextflow/ProteinFunction), we ran **PolyPhen-2 2.2.3** and **SIFT 6.2.1** on the proteome sequences for GRCh38 and all HPRC assemblies (the protein FASTA files indicated in [Ensembl HPRC data page](https://projects.ensembl.org/hprc/)) and stored their results in a single SQLite file: [`homo_sapiens_pangenome_PolyPhen_SIFT_20240502.db`](https://ftp.ensembl.org/pub/current_variation/pangenomes/Human/homo_sapiens_pangenome_PolyPhen_SIFT_20240502.db).

Pre-computed scores and predictions can be retrieved by downloading this file and using the **PolyPhen_SIFT plugin**:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">curl -O https://ftp.ensembl.org/pub/current_variation/pangenomes/Human/homo_sapiens_pangenome_PolyPhen_SIFT_20240502.db
vep -i test.vcf --offline \
    --species homo_sapiens_gca009914755v4 \
    --cache_version 107 \
    --fasta Homo_sapiens-GCA_009914755.4-softmasked.fa.gz \
    --plugin PolyPhen_SIFT,db=human_pangenomes.PolyPhen_SIFT.db
</code></pre>

### Matched variant annotations (ClinVar, gnomAD and dbSNP)

We don't have variant data in the caches for the HPRC assemblies, but it can be integrated using the [--custom](/help/articles/vep-custom-annotations) option with data files using the same assembly coordinates. We have lifted-over some key datasets, including ClinVar and gnomAD to the HPRC assemblies (downloadable from the VCF column in [Ensembl HPRC data page](https://projects.ensembl.org/hprc/)).

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text"># Download ClinVar data and respective index (TBI)
curl -O https://ftp.ensembl.org/pub/rapid-release/species/Homo_sapiens/GCA_009914755.4/ensembl/variation/2022_10/vcf/2024_07/clinvar_20240624_GCA_009914755.4.vcf.gz
curl -O https://ftp.ensembl.org/pub/rapid-release/species/Homo_sapiens/GCA_009914755.4/ensembl/variation/2022_10/vcf/2024_07/clinvar_20240624_GCA_009914755.4.vcf.gz.tbi

# Run Ensembl VEP with ClinVar data
vep -i test.vcf --offline \
    --species homo_sapiens_gca009914755v4 --cache_version 107 \
    --fasta Homo_sapiens-GCA_009914755.4-softmasked.fa.gz \
    --custom file=clinvar_20240624_GCA_009914755.4.vcf.gz,short_name=ClinVar,format=vcf,type=exact,coords=0,fields=CLNSIG%CLNREVSTAT%CLNDN
</code></pre>

### Additional annotations

Ensembl VEP plugins are a simple way to add new functionality to your analysis. Many require data that is only available for GRCh37 or GRCh38, but others, for example those based on gene attributes or on the fly analysis are compatible with the HGRC assemblies.

Here follows Ensembl VEP plugins that are easily compatible with alternative human assemblies:

### [Blosum62](https://github.com/Ensembl/VEP_plugins/blob/main/Blosum62.pm)

Looks up the BLOSUM 62 substitution matrix score for the reference and alternative amino acids predicted for a missense mutation.

**Usage example:** `--plugin Blosum62`

### [DosageSensitivity](https://github.com/Ensembl/VEP_plugins/blob/main/DosageSensitivity.pm)

Retrieves haploinsufficiency and triplosensitivity probability scores for affected genes ([Collins *et al.*, 2022](https://doi.org/10.1016/j.cell.2022.06.036)).

**Plugin data:** [`Collins_rCNV_2022.dosage_sensitivity_scores.tsv.gz`](https://zenodo.org/record/6347673/files/Collins_rCNV_2022.dosage_sensitivity_scores.tsv.gz)

**Usage example:** `--plugin DosageSensitivity,file=Collins_rCNV_2022.dosage_sensitivity_scores.tsv.gz`

### [Downstream](https://github.com/Ensembl/VEP_plugins/blob/main/Downstream.pm)

Predicts downstream effects of a frameshift variant on the protein sequence of a transcript.

**Plugin data:** Requires a FASTA file provided via the [--fasta](/help/articles/vep-cache-options#opt_fasta) option

**Usage example:** `--plugin Downstream`

### [Draw](https://github.com/Ensembl/VEP_plugins/blob/main/Draw.pm)

Draws pictures of the transcript model showing the variant location.

**Usage example:** `--plugin Draw`

### [GeneSplicer](https://github.com/Ensembl/VEP_plugins/blob/main/GeneSplicer.pm)

Runs [GeneSplicer](https://ccb.jhu.edu/software/genesplicer/) to get splice site predictions.

**Plugin data:** Binary and training data for GeneSplicer ([plugin instructions](/help/articles/vep-plugin-catalogue#GeneSplicer))

**Usage example:** `--plugin GeneSplicer,binary=genesplicer/bin/linux/genesplicer,training=genesplicer/human`

### [GO](https://github.com/Ensembl/VEP_plugins/blob/main/GO.pm)

Retrieves Gene Ontology (GO) terms associated with genes (for HGRC assemblies, specifically) using custom GFF annotation containing GO terms.

**Plugin data:**

[Ensembl HPRC data page](https://projects.ensembl.org/hprc/) **\> FTP dumps \> ensembl \> variation \> \[date\] \> gff:**

- `*_GO_plugin.gff.gz`
- `*_GO_plugin.gff.gz.tbi`

**Usage example:** `--plugin GO,file=homo_sapiens_gca009914755v4_110_VEP_GO_plugin.gff.gz`

### [HGVSIntronOffset](https://github.com/Ensembl/VEP_plugins/blob/main/HGVSIntronOffset.pm)

Returns HGVS intron start and end offsets. To be used with [--hgvs](/help/articles/vep-identifiers#opt_hgvs) option.

**Usage example:** `--plugin HGVSIntronOffset`

### [LoFtool](https://github.com/Ensembl/VEP_plugins/blob/main/LoFtool.pm)

Provides a rank of genic intolerance and consequent susceptibility to disease based on the ratio of Loss-of-function (LoF) to synonymous mutations for each gene.

**Usage example:** `--plugin LoFtool`

### [MaxEntScan](https://github.com/Ensembl/VEP_plugins/blob/main/MaxEntScan.pm)

Runs [MaxEntScan](http://hollywood.mit.edu/burgelab/maxent/Xmaxentscan_scoreseq.html) to get splice site predictions.

**Plugin data:** Extracted directory from [fordownload.tar.gz](http://hollywood.mit.edu/burgelab/maxent/download/fordownload.tar.gz)

**Usage example:** `--plugin MaxEntScan,/path/to/fordownload`

### [NearestExonJB](https://github.com/Ensembl/VEP_plugins/blob/main/NearestExonJB.pm)

Finds the nearest exon junction boundary to a coding sequence variant.

**Usage example:** `--plugin NearestExonJB`

### [NMD](https://github.com/Ensembl/VEP_plugins/blob/main/NMD.pm)

Predicts if a variant allows the transcript to escape nonsense-mediated mRNA decay based on certain rules.

**Usage example:** `--plugin NMD`

### [Phenotypes](https://github.com/Ensembl/VEP_plugins/blob/main/Phenotypes.pm)

Retrieves overlapping phenotype information.

**Plugin data:**

[Ensembl HPRC data page](https://projects.ensembl.org/hprc/) **\> FTP dumps \> ensembl \> variation \> \[date\] \> gff:**

- `*_phenotypes_plugin.gvf.gz`
- `*_phenotypes_plugin.gvf.gz.tbi`

**Usage example:** `--plugin Phenotypes,file=homo_sapiens_gca009914755v4_110_VEP_phenotypes_plugin.gvf.gz`

### [pLI](https://github.com/Ensembl/VEP_plugins/blob/main/pLI.pm)

Adds the probability of a gene being loss-of-function intolerant (pLI).

**Usage example:** `--plugin pLI`

### [PolyPhen_SIFT](https://github.com/Ensembl/VEP_plugins/blob/main/PolyPhen_SIFT.pm)

Retrieves PolyPhen and SIFT predictions from a SQLite database.

**Plugin data:** [`homo_sapiens_pangenome_PolyPhen_SIFT_20240502.db`](https://ftp.ensembl.org/pub/current_variation/pangenomes/Human/homo_sapiens_pangenome_PolyPhen_SIFT_20240502.db)

**Usage example:** `--plugin PolyPhen_SIFT,db=homo_sapiens_pangenome_PolyPhen_SIFT_20240502.db`

### [ProteinSeqs](https://github.com/Ensembl/VEP_plugins/blob/main/ProteinSeqs.pm)

Writes two files with the reference and mutated protein sequences of any proteins found with non-synonymous mutations in the input file.

**Usage example:** `--plugin ProteinSeqs`

### [SingleLetterAA](https://github.com/Ensembl/VEP_plugins/blob/main/SingleLetterAA.pm)

Returns HGVSp string with single amino acid letter codes.

**Usage example:** `--plugin SingleLetterAA`

### [SpliceRegion](https://github.com/Ensembl/VEP_plugins/blob/main/SpliceRegion.pm)

Provides more granular predictions of splicing effects.

**Usage example:** `--plugin SpliceRegion`

### [SubsetVCF](https://github.com/Ensembl/VEP_plugins/blob/main/SubsetVCF.pm)

Retrieves overlapping records from a given VCF file.

**Plugin data:** A VCF file

**Usage example:** `--plugin SubsetVCF,file=file.vcf.gz,name=myvfc`

### [TranscriptAnnotator](https://github.com/Ensembl/VEP_plugins/blob/main/TranscriptAnnotator.pm)

Annotates variant-transcript pairs based on a given file.

**Plugin data:** Tab-separated annotation file ([plugin instructions](/help/articles/vep-plugin-catalogue#TranscriptAnnotator))

**Usage example:** `--plugin TranscriptAnnotator,file=annotation.txt.gz`

### [TSSDistance](https://github.com/Ensembl/VEP_plugins/blob/main/TSSDistance.pm)

Calculates the distance from the transcription start site for upstream variants.

**Usage example:** `--plugin TSSDistance`

<span id="citations"></span>

## Citations and Ensembl VEP users

Ensembl VEP is used by many organisations and projects:

- Ensembl VEP forms a part of [Illumina's VariantStudio](http://variantstudio.software.illumina.com/) software
- [Gemini](http://gemini.readthedocs.org/) is a framework for exploring genome variation that uses Ensembl VEP
- The [DECIPHER project](https://www.deciphergenomics.org/) uses Ensembl VEP to aid variant interpretation

Other citations and use cases:

- [VAX](http://bib.oxfordjournals.org/content/early/2014/03/12/bib.bbu008.full) is a suite of plugins that expand Ensembl VEP functionality
- [pViz](https://academic.oup.com/bioinformatics/article/30/23/3408/207567) is a visualisation tool for Ensembl VEP results files
- [McCarthy *et al*](https://genomemedicine.biomedcentral.com/articles/10.1186/gm543) compares Ensembl VEP to AnnoVar
- [Pabinger *et al*](http://bib.oxfordjournals.org/content/early/2013/01/21/bib.bbs086.full) reviews variant analysis software, including Ensembl VEP
- Ensembl VEP is used to provide annotation for the [gnomAD](http://gnomad.broadinstitute.org/) project
- For a fuller list of Ensembl VEP citations see EuropePMC information for our [2010,](https://europepmc.org/article/PMC/2916720#impact) [2016](https://europepmc.org/article/MED/27268795#impact) and [tutorial](https://europepmc.org/article/MED/34816521#impact) publications.
