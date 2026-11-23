---
title: VEP command line tutorial
description: Install a cache, annotate example variants and filter the results
  with the VEP command line tool.
slug: vep-cli-tutorial
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

# VEP command line tutorial

<span id="read_write_access"></span>

### Note

If you're using a UNIX or Mac system, you can dive straight into this tutorial by opening your favourite terminal application. If you're on Windows you might like to have a look at the [guide for Windows users](/help/articles/download-and-install-vep#windows) before starting.

<span id="install"></span>

## Install Ensembl VEP

Have you downloaded Ensembl VEP yet? Use git to clone it:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">git clone --branch release/116 https://github.com/Ensembl/ensembl-vep
cd ensembl-vep
</code></pre>

Ensembl VEP uses "cache files" or a remote database to read genomic data. Using cache files gives the best performance - let's set one up using the installer:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">perl INSTALL.pl

Hello! This installer is configured to install v116 of the Ensembl API for use by VEP.
It will not affect any existing installations of the Ensembl API that you may have.

It will also download and install cache files from Ensembl's FTP server.

Checking for installed versions of the Ensembl API...done
It looks like you already have v116 of the API installed.
You shouldn't need to install the API

Skip to the next step (n) to install cache files

Do you want to continue installing the API (y/n)?
</code></pre>

If you haven't yet installed the API, type "y" followed by enter, otherwise type "n" (perhaps if you ran the installer before). At the next prompt, type "y" to install cache files

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">Do you want to continue installing the API (y/n)? n
 - skipping API installation

Ensembl VEP can either connect to remote or local databases, or use local cache files.
Cache files will be stored in /nfs/users/nfs_w/wm2/.vep
Do you want to install any cache files (y/n)? y

Downloading list of available cache files
The following species/files are available; which do you want (can specify multiple separated by spaces):
1 : ailuropoda_melanoleuca_vep_116_ailMel1.tar.gz
2 : anas_platyrhynchos_vep_116_BGI_duck_1.0.tar.gz
3 : anolis_carolinensis_vep_116_AnoCar2.0.tar.gz
...
42 : homo_sapiens_vep_116_GRCh38.tar.gz
...

?
</code></pre>

Type "42" (or the relevant number for homo_sapiens and GRCh38) to install the cache for the latest human assembly. This will take a little while to download and unpack! By default Ensembl VEP assumes you are working in human; it's easy to switch to any other species using [--species \[species\]](/help/articles/vep-basic-options#opt_species).

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">? 42
 - downloading https://ftp.ensembl.org/pub/release-116/variation/indexed_vep_cache/homo_sapiens_vep_116_GRCh38.tar.gz
 - unpacking homo_sapiens_vep_116_GRCh38.tar.gz

Success
</code></pre>

By default Ensembl VEP installs cache files in a folder in your home area (**$HOME/.vep**); you can easily change this using the **-d** flag when running the installer. See the [installer documentation](/help/articles/download-and-install-vep#installer) for more details.

<span id="run"></span>

## Run Ensembl VEP

Ensembl VEP needs some input containing variant positions to run. In their most basic form, this should just be a chromosomal location and a pair of alleles (reference and alternate). Ensembl VEP can also use common formats such as VCF and HGVS as input. Have a look at the [Data formats](/help/articles/vep-data-formats#input) page for more information.

We can now use our cache file to run Ensembl VEP on the supplied example file **examples/homo_sapiens_GRCh38.vcf**, which is a VCF file containing variants from the 1000 Genomes Project, remapped to GRCh38:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i examples/homo_sapiens_GRCh38.vcf --cache

2013-07-31 09:17:54 - Read existing cache info
2013-07-31 09:17:54 - Starting...
ERROR: Output file variant_effect_output.txt already exists. Specify a different output file
with --output_file or overwrite existing file with --force_overwrite
</code></pre>

You may see this error message if you've already run Ensembl VEP in the same directory. It will not overwrite your existing files unless you request this. So let's tell it to using [--force_overwrite](/help/articles/vep-basic-options#opt_force_overwrite)

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i examples/homo_sapiens_GRCh38.vcf --cache --force_overwrite
</code></pre>

By default Ensembl VEP writes to a file named "variant_effect_output.txt" - you can change this file name using [-o](/help/articles/vep-basic-options#opt_output_file). Let's have a look at the output.

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">head variant_effect_output.txt

## ENSEMBL VARIANT EFFECT PREDICTOR v116.0
## Output produced at 2017-03-21 14:51:27
## Connected to homo_sapiens_core_116_38 on ensembldb.ensembl.org
## Using cache in /homes/user/.vep/homo_sapiens/116_GRCh38
## Using API version 116, DB version 116
## polyphen version 2.2.2
## sift version sift5.2.2
## COSMIC version 78
## ESP version 20141103
## gencode version GENCODE 25
## genebuild version 2014-07
## HGMD-PUBLIC version 20162
## regbuild version 16
## assembly version GRCh38.p7
## ClinVar version 201610
## dbSNP version 147
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
#Uploaded_variation  Location     Allele  Gene             Feature          Feature_type  Consequence        ...
rs7289170            22:17181903  G       ENSG00000093072  ENST00000262607  Transcript    synonymous_variant ...
rs7289170            22:17181903  G       ENSG00000093072  ENST00000330232  Transcript    synonymous_variant ...
</code></pre>

The lines starting with "#" are header or meta information lines. The final one of these (highlighted in blue above) gives the column names for the data that follows. To see more information about Ensembl VEP's output format, see the [Data formats](/help/articles/vep-data-formats#output) page.

We can see two lines of output here, both for the uploaded variant named rs7289170. In many cases, a variant will fall in more than one transcript. Typically this is where a single gene has multiple splicing variants. Here our variant has a consequence for the transcripts ENST00000262607 and ENST00000330232.

In the consequence column, we can see the term 'synonymous_variant'. This term is from the [Sequence Ontology (SO)](http://www.sequenceontology.org/). which describes the predicted molecular effects of sequence variants on genomic features. See our [predicted data](https://jun2026.archive.ensembl.org/info/genome/variation/prediction/predicted_data.html#consequences) page for a guide to the consequence types used in Ensembl VEP.

Let's try something a little more interesting. SIFT is an algorithm for predicting whether a given change in a protein sequence will be deleterious to the function of that protein. Ensembl VEP can give SIFT predictions for most of the missense variants in human and other highly studied species. To do this, simply add [--sift b](/help/articles/vep-output-options#opt_sift) (the b means we want **b**oth the prediction and the score):

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i examples/homo_sapiens_GRCh38.vcf --cache --force_overwrite --sift b
</code></pre>

SIFT calls variants either "deleterious" or "tolerated". We can use the [filtering tool](/help/articles/filtering-vep-results) to find only those that SIFT considers deleterious:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./filter_vep -i variant_effect_output.txt -filter &quot;SIFT match deleterious&quot; | grep -v &quot;##&quot; | head -n5

#Uploaded_variation  Location     Allele  Gene             Feature          ...  Extra
rs2231495            22:17188416  C       ENSG00000093072  ENST00000262607  ...  SIFT=deleterious(0.05)
rs2231495            22:17188416  C       ENSG00000093072  ENST00000399837  ...  SIFT=deleterious(0.05)
rs2231495            22:17188416  C       ENSG00000093072  ENST00000399839  ...  SIFT=deleterious(0.05)
rs115736959          22:19973143  A       ENSG00000099889  ENST00000263207  ...  SIFT=deleterious(0.01)
</code></pre>

Note that the SIFT score appears in the "Extra" column, as a key/value pair. This column can contain multiple key/value pairs depending on the options you give to Ensembl VEP. See the [Data formats](/help/articles/vep-data-formats#output) page for more information on the fields in the Extra column.

You can also configure how Ensembl VEP writes its output using the [--fields](/help/articles/vep-output-format-options#opt_fields) flag.

You'll also see that we have multiple results for the same gene, ENSG00000093072. Let's say we're only interested in what is considered the canonical transcript for this gene ([--canonical](/help/articles/vep-identifiers#opt_canonical)), and that we want to know what the commonly used gene symbol from HGNC is for this gene ([--symbol](/help/articles/vep-identifiers#opt_symbol)). We can also use a UNIX pipe to pass the output from Ensembl VEP directly into the filtering tool:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i examples/homo_sapiens_GRCh38.vcf --cache --force_overwrite --sift b --canonical --symbol --tab --fields Uploaded_variation,SYMBOL,CANONICAL,SIFT -o STDOUT | \
./filter_vep --filter &quot;CANONICAL is YES and SIFT match deleterious&quot;

...

#Uploaded_variation  SYMBOL  CANONICAL  SIFT
rs2231495            CECR1   YES        deleterious(0.05)
rs115736959          ARVCF   YES        deleterious(0.01)
rs116398106          ARVCF   YES        deleterious(0)
rs116782322          ARVCF   YES        deleterious(0)
...                  ...     ...        ...
rs115264708          PHF21B  YES        deleterious(0.03)
</code></pre>

So now we can see all of the variants that have a deleterious effect on canonical transcripts, and the symbol for their genes. Nice!

For [species with an Ensembl database of variants](https://jun2026.archive.ensembl.org/info/genome/variation/species/species_data_types.html#sources), Ensembl VEP can be configured to annotate your input with identifiers and frequency data from variants co-located with your input data. For human, Ensembl VEP's cache contains frequency data from the 1000 Genomes Project and gnomAD. Since our input file is from the 1000 Genomes Project, let's add frequency data using [--af_1kg](/help/articles/vep-co-located-variants#opt_af_1kg):

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i examples/homo_sapiens_GRCh38.vcf --cache --force_overwrite --af_1kg -o STDOUT | grep -v &quot;##&quot; | head -n2

#Uploaded_variation  Location     Allele  Gene             Feature          ...  Existing_variation  Extra
rs7289170            22:17181903  G       ENSG00000093072  ENST00000262607  ...  rs7289170           IMPACT=LOW;STRAND=-1;AFR_AF=0.2390;AMR_AF=0.2003;EAS_AF=0.0456;EUR_AF=0.3211;SAS_AF=0.1401
</code></pre>

We can see frequency data for the AFR, AMR, EAS, EUR and SAS continental population groupings; these represent the frequency of the alternate (ALT) allele from our input (G in the case of rs7289170). Note that the Existing_variation column is populated by the identifier of the variant found in the Ensembl VEP cache (and that it corresponds to the identifier from our input in Uploaded_variation). To retrieve only this information and not the frequency data, we could have used [--check_existing](/help/articles/vep-co-located-variants#opt_check_existing) (--af_1kg silently switches on --check_existing).

## Over to you!

This has been just a short introduction to the capabilities of Ensembl VEP - have a look through some more of the [options](/help/articles/running-vep), see them all on the command line using [--help](/help/articles/vep-basic-options#opt_help), or try using the shortcut [--everything](/help/articles/vep-basic-options#opt_everything) which switches on almost all available output fields! Try out the different options in the [filtering tool](/help/articles/filtering-vep-results), and if you're feeling adventurous why not use some of your [own data to annotate your variants](/help/articles/vep-custom-annotations) or have a go with a [plugin](/help/articles/vep-plugins) or two.
