---
title: VEP custom annotations
description: Annotate variants with custom BED, GFF, GTF, VCF and bigWig files.
slug: vep-cli-custom-annotations
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

# VEP custom annotations

**On this page**

- [Data formats](/help/articles/vep-custom-annotations#custom_formats)
- [Preparing files](/help/articles/vep-custom-annotations#custom_prep)
- [Options](/help/articles/vep-custom-annotations#custom_options)
- [Example - ClinVar](/help/articles/vep-custom-annotations#custom_example)
- [Using remote files](/help/articles/vep-custom-annotations#custom_remote)
- [Example - phyloP and phastCons conservation scores](/help/articles/vep-custom-annotations#remote_custom_example)

Ensembl VEP can integrate custom annotation from standard format files into your results by using the [--custom](/help/articles/vep-options-annotation#opt_custom) flag.

These files may be hosted locally or remotely, with no limit to the number or size of the files. The files must be indexed using the [tabix](http://samtools.sourceforge.net/tabix.shtml) utility (BED, GFF, GTF, VCF); bigWig files contain their own indices.

Annotations typically appear as key=value pairs in the Extra column of the VEP output; they will also appear in the INFO column if using VCF format output. The value for a particular annotation is defined as the identifier for each feature; if not available, an identifier derived from the coordinates of the annotation is used. Annotations will appear in each line of output for the variant where multiple lines exist.

<span id="custom_formats"></span>

## Data formats

Ensembl VEP supports the following annotation formats:

<span id="opt_gff"></span>

### `GFFGTF`

**Type:** Gene/transcript annotations & GENCODE promoters

Formats to describe genes and other genomic features — format specifications: [GFF3](https://github.com/The-Sequence-Ontology/Specifications/blob/master/gff3.md) and [GTF](https://jun2026.archive.ensembl.org/info/website/upload/gff.html)

**Notes:** Requires a **[FASTA](/help/articles/vep-annotation-sources#fasta)** file in offline mode or if the desired species or assembly is not part of the [Ensembl species list](https://jun2026.archive.ensembl.org/info/about/species.html).

<span id="opt_vcf"></span>

### `VCF`

**Type:** Variant data

A format used to describe genomic variants

**Notes:**

Ensembl VEP uses the 3rd column as the identifier. INFO and FILTER fields from records may be added to the Ensembl VEP output.

<span id="opt_bed"></span>

### `BED`

**Type:** Basic/uninterpreted data

A simple tab-delimited format containing 3-12 columns of data. The first 3 columns contain the coordinates of the feature.

**Notes:** Ensembl VEP uses the 4th column (if available) as the feature identifier.

<span id="opt_bigWig"></span>

### `bigWig`

**Type:** Basic/uninterpreted data

A format for storage of dense continuous data.

**Notes:**

Ensembl VEP uses the value for the given position as the identifier. BigWig files contain their own indices, and do not need to be indexed by tabix. Requires [Bio::DB::BigFile](/help/articles/vep-download-and-install#bigfile).

Any other files can be easily converted to be compatible with Ensembl VEP; the easiest format to produce is a BED-like file containing coordinates and an (optional) identifier:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">chr1    10000    11000    Feature1
chr3    25000    26000    Feature2
chrX    99000    99001    Feature3
</code></pre>

Chromosomes can be denoted by either e.g. "chr7" or "7", "chrX" or "X".

<span id="custom_prep"></span>

## Preparing files

Custom annotation files must be prepared in a particular way in order to work with tabix and therefore with Ensembl VEP. Files must be stripped of comment lines, sorted in chromosome and position order, compressed using bgzip and finally indexed using tabix. Here are some examples of that process for:

- **GFF file**

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">grep -v &quot;#&quot; myData.gff | sort -k1,1 -k4,4n -k5,5n -t$'\t' | bgzip -c &gt; myData.gff.gz
  tabix -p gff myData.gff.gz
  </code></pre>

  ### Note

  Ensembl VEP expects few extra fields in the 9th column of the GFF file. See the [extra fields list](/help/articles/vep-annotation-sources#gff_req).

- **BED file**

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">grep -v &quot;#&quot; myData.bed | sort -k1,1 -k2,2n -k3,3n -t$'\t' | bgzip -c &gt; myData.bed.gz
  tabix -p bed myData.bed.gz
  </code></pre>

The tabix utility has several preset filetypes that it can process, and it can also process any arbitrary filetype containing at least a chromosome and position column. See the [documentation](http://samtools.sourceforge.net/tabix.shtml) for details.

If you are going to use the file remotely (i.e. over HTTP or FTP protocol), you should ensure the file is world-readable on your server.

<span id="custom_options"></span>

## Options

<span id="custom_compatibility"></span>

 Using positional options in `--custom` with VEP 109 and earlier (compatible with VEP 116) 

<span id="div_custom_compatibility"></span>

Each custom file that you configure Ensembl VEP to use can be configured. Beyond the filepath, there are further options, each of which is specified in a comma-separated list, like this:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep [...] --custom Filename,Short_name,File_type,Annotation_type,Force_report_coordinates,VCF_fields
</code></pre>

The options are as follows:

- **Filename** : The path to the file. For tabix indexed files, the Ensembl VEP will check that both the file and the corresponding .tbi file exist. For remote files, Ensembl VEP will check that the tabix index is accessible on startup.

- **Short name** : A name for the annotation that will appear as the key in the key=value pairs in the results. If not defined, this will default to the annotation filename for the first set of annotation added (e.g. "myPhenotypes.bed.gz" in the second example below if the short name was missing).

- **File type** :

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">&quot;bed&quot;, &quot;gff&quot;, &quot;gtf&quot;, &quot;vcf&quot; or &quot;bigwig&quot;
  </code></pre>

- **Annotation type** :

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">&quot;exact&quot; or &quot;overlap&quot;
  </code></pre>

  (if left blank, assumed to be **overlap**) When using "exact" only annotations whose coordinates match exactly those of the variant will be reported. This would be suitable for position specific information such as conservation scores, allele frequencies or phenotype information. Using "overlap", any annotation that overlaps the variant by even 1bp will be reported.

- **Force report coordinates** :

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">&quot;0&quot; or &quot;1&quot;
  </code></pre>

  (if left blank, assumed to be **0**) If set to "1", this forces Ensembl VEP to output the coordinates of an overlapping custom feature instead of any found identifier (or value in the case of bigWig) field. If set to "0" (the default), Ensembl VEP will output the identifier field if one is found; if none is found, then the coordinates are used instead.

- **VCF fields** : You can specify any info type (e.g. "AC") present in the INFO field of the custom input VCF or specify "FILTER" for the FILTER field, to add these as custom annotations:
  - If using "exact" annotation type, allele-specific annotation will be retrieved.
  - The INFO field name will be prefixed with the short name, e.g. using short name "test", the INFO field "foo" will appear as "test_FOO" in the Ensembl VEP output. Similarly FILTER field will appear as "test_FILTER".
  - In VCF files the custom annotations are added to the CSQ INFO field.
  - Alleles in the input and VCF entry are trimmed in both directions in an attempt to match complex or poorly formatted entries.

For example:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">    # BigWig file
    ./vep [...] --custom frequencies.bw,Frequency,bigwig,exact,0
    # BED file
    ./vep [...] --custom http://www.myserver.com/data/myPhenotypes.bed.gz,Phenotype,bed,exact,1
    # VCF file
    ./vep [...] --custom https://ftp.ensembl.org/pub/data_files/homo_sapiens/GRCh37/variation_genotype/TOPMED_GRCh37.vcf.gz,,vcf,exact,0,TOPMED

    # For multiple custom files, use:
    ./vep [...] --custom clinvar.vcf.gz,ClinVar,vcf,exact,0,CLNSIG,CLNREVSTAT,CLNDN \
                --custom TOPMED_GRCh38_20180418.vcf.gz,topmed_20180418,vcf,exact,0,TOPMED \
                --custom UK10K_COHORT.20160215.sites.GRCh38.vcf.gz,uk10k,vcf,exact,0,AF_ALSPAC
</code></pre>

Using key-value pairs in `--custom` with VEP 116 

<span id="div_custom_options"></span>

Since Ensembl VEP 110, you can configure each custom file using a comma-separated list of key-value pairs:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep [...] --custom file=Filename,short_name=Short_name,format=File_type,type=Annotation_type,fields=VCF_fields
</code></pre>

The order of the options is irrelevant and most options have sensible defaults as described below:

<span id="opt_file"></span>

### `file`

**Accepted values:** String with valid path to file

**(Required) Filename:** The path to the file. For Tabix indexed files, Ensembl VEP will check if both the file and the corresponding index (`.tbi`) exist. For remote files, Ensembl VEP will check that the tabix index is accessible on startup.

<span id="opt_format"></span>

### `format`

**Accepted values:** `bed`, `gff`, `gtf`, `vcf` or `bigwig`

**(Required) File format** of [`file`](/help/articles/vep-custom-annotations#opt_file).

<span id="opt_short_name"></span>

### `short_name`

**Accepted values:** Annotation filename (default) or any string without commas

**Short name:** A name for the annotation that will appear as the key in the key=value pairs in the results. If not defined, this will default to the annotation filename.

<span id="opt_fields"></span>

### `fields`

**VCF fields:** Percentage (%) separated list of INFO fields to print (such as `AC`) present in the custom input VCF or specify `FILTER` for the FILTER field, to add these as custom annotations:

- If using `exact` annotation type, allele-specific annotation will be retrieved.
- The INFO field name will be prefixed with the short name, e.g. using short name `test`, the INFO field `foo` will appear as `test_FOO` in the Ensembl VEP output. Similarly FILTER field will appear as `test_FILTER`.
- In VCF files the custom annotations are added to the CSQ INFO field.
- Alleles in the input and VCF entry are trimmed in both directions in an attempt to match complex or poorly formatted entries.

<span id="opt_type"></span>

### `type`

**Accepted values:**

`overlap` (default), `within`, `surrounding` or `exact`

**Annotation type:**

- `overlap`: reports any annotation that overlaps the variant by even 1 base pair.
- `within` (\*): only reports annotations within the variant.
- `surrounding` (\*): only reports annotations that completely surround the variant.
- `exact`: only reports annotations whose coordinates match exactly those of the variant. This is suitable for position-specific information such as conservation scores, allele frequencies or phenotype information.

<span id="opt_overlap_cutoff"></span>

### `overlap_cutoff`

**Accepted values:** From `0` (default) to `100`

**Minimum percentage overlap (\*)** between annotation and variant. See also [`reciprocal`](/help/articles/vep-custom-annotations#opt_reciprocal).

<span id="opt_reciprocal"></span>

### `reciprocal`

**Accepted values:** `0` (default) or `1`

**Mode of calculating the overlap percentage (\*):**

- `0`: percentage of annotation covered by variant
- `1`: percentage of variant covered by annotation

<span id="opt_distance"></span>

### `distance`

**Accepted values:** `0` or a positive integer (disabled by default)

Distance (in base pairs) to the ends of the overlapping feature (\*).

<span id="opt_coords"></span>

### `coords`

**Accepted values:** `0` (default) or `1`

**Force report coordinates:**

- `0`: outputs the identifier field (or value in the case of `bigWig`) if available; otherwise, outputs coordinates instead.
- `1`: always outputs the coordinates of an overlapping custom feature.

<span id="opt_same_type"></span>

### `same_type`

**Accepted values:** `0` (default) or `1`

Only match identical variant classes (\*). For instance, only match deletions with deletions. This is only available for VCF annotations.

<span id="opt_num_records"></span>

### `num_records`

**Accepted values:** `50` (default), `all`, `0` or any positive integer

**Number of matching records to display.** Any remaining records are represented with ellipsis (`...`). Use `num_records = all` to display all matching records and `num_records = 0` to only display `...` if there are matching records.

<span id="opt_summary_stats"></span>

### `summary_stats`

**Accepted values:**

`none` (default), `min`, `mean`, `max`, `count` or `sum`

**Summary statistics to display**. A percentage-separated list may be used to calculate multiple summary statistics, such as `min%mean%max%count%sum`.

<span id="opt_gff_type"></span>

### `gff_type`

**Accepted values:** `transcript` (default) or `gencode_promoter`

**GFF feature type**. Generally GFF files are parsed to extract and form gene/transcript object. Use `gencode_promoter` to extract [GENCODE promoter windows](https://www.gencodegenes.org/pages/promoter_windows).

When `format = vcf`, the features marked with (\*) only work on structural variants.

Examples:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text"># BigWig file
./vep [...] --custom file=frequencies.bw,short_name=Frequency,format=bigwig,type=exact,coords=0
# BED file
./vep [...] --custom file=http://www.myserver.com/data/myPhenotypes.bed.gz,short_name=Phenotype,format=bed,type=exact,coords=1
# VCF file
./vep [...] --custom file=https://ftp.ensembl.org/pub/data_files/homo_sapiens/GRCh37/variation_genotype/TOPMED_GRCh37.vcf.gz,format=vcf,type=exact,coords=0,fields=TOPMED
./vep [...] --custom file=gnomad_v2.1_sv.sites.vcf.gz,short_name=gnomad,fields=PC%EVIDENCE%SVTYPE,format=vcf,type=within,reciprocal=1,overlap_cutoff=80

# For multiple custom files, use:
./vep [...] --custom file=clinvar.vcf.gz,short_name=ClinVar,format=vcf,type=exact,coords=0,fields=CLNSIG%CLNREVSTAT%CLNDN \
            --custom file=TOPMED_GRCh38_20180418.vcf.gz,short_name=topmed_20180418,format=vcf,type=exact,coords=0,fields=TOPMED \
            --custom file=UK10K_COHORT.20160215.sites.GRCh38.vcf.gz,short_name=uk10k,format=vcf,type=exact,coords=0,fields=AF_ALSPAC
</code></pre>

<span id="custom_example"></span>

## Example - ClinVar

We include the most recent public variant and phenotype data available in each Ensembl release, but some projects release data more frequently than we do. If you want to have the very latest annotations, you can use the data files from your prefered projects (in any format listed in [Data formats](/help/articles/vep-custom-annotations#custom_formats)) and use them as a VEP custom annotation.

For instance, you can annotate you variants with Ensembl VEP, using the the latest ClinVar data as custom annotation. ClinVar provides VCF files on their FTP site: [GRCh37](https://ftp.ncbi.nlm.nih.gov/pub/clinvar/vcf_GRCh37/) and [GRCh38](https://ftp.ncbi.nlm.nih.gov/pub/clinvar/vcf_GRCh38/).

See below an example about how to use ClinVar VCF files as a Ensembl VEP custom annotation:

1.  Download the VCF files (you need the compressed VCF file and the index file), e.g.:

    <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text"># Compressed VCF file
    curl -O https://ftp.ncbi.nlm.nih.gov/pub/clinvar/vcf_GRCh38/clinvar.vcf.gz
    # Index file
    curl -O https://ftp.ncbi.nlm.nih.gov/pub/clinvar/vcf_GRCh38/clinvar.vcf.gz.tbi
    </code></pre>

2.  Example of command you can use:

    <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep [...] --custom file=clinvar.vcf.gz,short_name=ClinVar,format=vcf,type=exact,coords=0,fields=CLNSIG%CLNREVSTAT%CLNDN

    ## Where the selected ClinVar INFO fields (from the ClinVar VCF file) are:
    # - CLNSIG:     Clinical significance for this single variant
    # - CLNREVSTAT: ClinVar review status for the Variation ID
    # - CLNDN:      ClinVar's preferred disease name for the concept specified by disease identifiers in CLNDISDB
    # Of course you can select the INFO fields you want in the ClinVar VCF file

    # Quick example on GRCh38:
    ./vep --id &quot;1  230710048 230710048 A/G 1&quot; --species homo_sapiens -o /path/to/output/output.txt --cache --offline --assembly GRCh38 --custom file=/path/to/custom_files/clinvar.vcf.gz,short_name=ClinVar,format=vcf,type=exact,coords=0,fields=CLNSIG%CLNREVSTAT%CLNDN
    </code></pre>

    

<span id="custom_results"></span>

 Results in the default VEP format 

<span id="div_custom_results"></span>

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code>``` text
## Column descriptions:
## Uploaded_variation : Identifier of uploaded variant
## Location : Location of variant in standard coordinate format (chr:start or chr:start-end)
## Allele : The variant allele used to calculate the consequence
## Gene : Stable ID of affected gene
## Feature : Stable ID of feature
## Feature_type : Type of feature - Transcript, RegulatoryFeature or MotifFeature
## Consequence : Consequence type
## cDNA_position : Relative position of base pair in cDNA sequence
## CDS_position : Relative position of base pair in coding sequence
## Protein_position : Relative position of amino acid in protein
## Amino_acids : Reference and variant amino acids
## Codons : Reference and variant codon sequence
## Existing_variation : Identifier(s) of co-located known variants
## Extra column keys:
## IMPACT : Subjective impact classification of consequence type
## DISTANCE : Shortest distance from variant to transcript
## STRAND : Strand of the feature (1/-1)
## FLAGS : Transcript quality flags
## SOURCE : Source of transcript
## ClinVar : /opt/vep/.vep/custom/clinvar.vcf.gz (exact)
## ClinVar_CLNSIG : CLNSIG field from /path/to/custom_files/clinvar.vcf.gz
## ClinVar_CLNREVSTAT : CLNREVSTAT field from /path/to/custom_files/clinvar.vcf.gz
## ClinVar_CLNDN : CLNDN field from /path/to/custom_files/clinvar.vcf.gz
#Uploaded_variation  Location     Allele  Gene             Feature          Feature_type  Consequence              ...  Extra
1_230710048_A/G      1:230710048  G       ENSG00000135744  ENST00000366667  Transcript    missense_variant         ...  IMPACT=MODERATE;STRAND=-1;ClinVar=18068;ClinVar_CLNDN=Hypertension,_essential,_susceptibility_to|Preeclampsia,_susceptibility_to|Renal_dysplasia|Susceptibility_to_progression_to_renal_failure_in_IgA_nephropathy|not_specified;ClinVar_CLNREVSTAT=criteria_provided,_multiple_submitters,_no_conflicts;ClinVar_CLNSIG=Benign;ClinVar_FILTER=.
1_230710048_A/G      1:230710048  G       ENSG00000244137  ENST00000412344  Transcript    downstream_gene_variant  ...  IMPACT=MODIFIER;DISTANCE=650;STRAND=-1;ClinVar=18068;ClinVar_CLNDN=Hypertension,_essential,_susceptibility_to|Preeclampsia,_susceptibility_to|Renal_dysplasia|Susceptibility_to_progression_to_renal_failure_in_IgA_nephropathy|not_specified;ClinVar_CLNREVSTAT=criteria_provided,_multiple_submitters,_no_conflicts;ClinVar_CLNSIG=Benign;ClinVar_FILTER=.
```
</code></pre>

    

<span id="custom_results_vcf"></span>

 Results in VCF (adding the tag **--vcf** in the command line) 

<span id="div_custom_results_vcf"></span>

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code>``` text
##fileformat=VCFv4.1
##INFO=&lt;ID=CSQ,Number=.,Type=String,Description=&quot;Consequence annotations from Ensembl VEP. Format: Allele|Consequence|IMPACT|SYMBOL|Gene|Feature_type|Feature|BIOTYPE|EXON|INTRON|HGVSc|HGVSp|cDNA_position|CDS_position|Protein_position|Amino_acids|Codons|Existing_variation|DISTANCE|STRAND|FLAGS|SYMBOL_SOURCE|HGNC_ID|SOURCE|ClinVar|ClinVar_CLNSIG|ClinVar_CLNREVSTAT|ClinVar_CLNDN&quot;&gt;
##INFO=&lt;ID=ClinVar,Number=.,Type=String,Description=&quot;/path/to/custom_files/clinvar.vcf.gz (exact)&quot;&gt;
##INFO=&lt;ID=ClinVar_CLNSIG,Number=.,Type=String,Description=&quot;CLNSIG field from /path/to/custom_files/clinvar.vcf.gz&quot;&gt;
##INFO=&lt;ID=ClinVar_CLNREVSTAT,Number=.,Type=String,Description=&quot;CLNREVSTAT field from /path/to/custom_files/clinvar.vcf.gz&quot;&gt;
##INFO=&lt;ID=ClinVar_CLNDN,Number=.,Type=String,Description=&quot;CLNDN field from /path/to/custom_files/clinvar.vcf.gz&quot;&gt;
#CHROM  POS        ID               REF  ALT  QUAL  FILTER  INFO
1       230710048  1_230710048_A/G  A    G    .     .       CSQ=G|missense_variant|MODERATE|AGT|ENSG00000135744|Transcript|ENST00000366667|protein_coding|2/5||||1018|803|268|M/T|aTg/aCg|||-1||HGNC|HGNC:333||18068|Benign|criteria_provided&amp;_multiple_submitters&amp;_no_conflicts|Hypertension&amp;_essential&amp;_susceptibility_to&amp;Preeclampsia&amp;_susceptibility_to&amp;Renal_dysplasia&amp;Susceptibility_to_progression_to_renal_failure_in_IgA_nephropathy¬_specified,G|downstream_gene_variant|MODIFIER|AL512328.1|ENSG00000244137|Transcript|ENST00000412344|antisense|||||||||||650|-1||Clone_based_ensembl_gene|||18068|Benign|criteria_provided&amp;_multiple_submitters&amp;_no_conflicts|Hypertension&amp;_essential&amp;_susceptibility_to&amp;Preeclampsia&amp;_susceptibility_to&amp;Renal_dysplasia&amp;Susceptibility_to_progression_to_renal_failure_in_IgA_nephropathy&amp;not_specified
```
</code></pre>

<span id="custom_remote"></span>

## Using remote files

The tabix utility makes it possible to read annotation files from remote locations, for example over HTTP or FTP protocols.

In order to do this, the .tbi index file is downloaded locally (to the current working directory) when Ensembl VEP is run. From this point on, only the portions of data requested by Ensembl VEP (i.e. those overlapping the variants in your input file) are downloaded.

### Be aware

1\. It is still possible to cause problems with network traffic in this manner by requesting data for a large number of variants.

2\. Users with large amounts of data should download the annotation file locally rather than risk causing any issues!

bigWig files can also be used remotely in the same way as tabix-indexed files, although less stringent checks are carried out on Ensembl VEP startup.

<span id="remote_custom_example"></span>

## Example - phyloP and phastCons conservation scores

The [UCSC Genome Browser](https://genome.ucsc.edu) provides multiple alignment files with phyloP and phastCons conservation scores for different genomes in the BigWig (`.bw`) format.

These files can be remotely used as Ensembl VEP custom annotations by simply pointing to their URL. For instance, to include phyloP or phastCons 100 way conservation scores found in the [Downloads section](https://hgdownload.soe.ucsc.edu/downloads) of the UCSC Genome Browser, you can use commands such as:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text"># Human GRCh38/hg38 phyloP100way scores
./vep [...] --custom file=http://hgdownload.soe.ucsc.edu/goldenPath/hg38/phyloP100way/hg38.phyloP100way.bw,short_name=phyloP100way,format=bigwig

# Human GRCh38/hg38 phastCons100way scores
./vep [...] --custom file=http://hgdownload.soe.ucsc.edu/goldenPath/hg38/phastCons100way/hg38.phastCons100way.bw,short_name=phastCons100way,format=bigwig
</code></pre>

## Multiple files split by chromosome

Often large annotation files are split into several smaller files for each chromosome. In such cases you can run custom annotation on those files using a single [--custom](/help/articles/vep-options-annotation#opt_custom) flag instead of separate ones for each file.

To do this, you need all the files to have the same name except for chromosome. When providing the `file` option replace the chromosome name with `###CHR###` placeholder.

For example, if you have separate gnomAD frequency files for each 24 chromosomes you can run:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text"># Human GRCh38/hg38 gnomAD frequency - there are total 24 files for each chromosome
./vep [...] --custom file=gnomad.exomes.v4.1.sites.chr###CHR###.vcf.bgz,short_name=gnomade,fields=AF,format=vcf
</code></pre>
