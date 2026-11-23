---
title: VEP annotation sources
description: Choose VEP caches, GFF or GTF annotations, FASTA reference
  sequences and Ensembl databases.
slug: vep-cli-annotation-sources
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

# VEP annotation sources

**On this page**

- [Caches](/help/articles/vep-annotation-sources#cache)
- [GFF/GTF files](/help/articles/vep-annotation-sources#gff)
- [Regulatory annotation from GFF files](/help/articles/vep-annotation-sources#reg_gff)
- [FASTA files](/help/articles/vep-annotation-sources#fasta)
- [Databases](/help/articles/vep-annotation-sources#database)
- [Cache - technical information](/help/articles/vep-annotation-sources#technical)

Ensembl VEP can use a variety of annotation sources to retrieve the transcript models used to predict consequence types.

- **[Cache](/help/articles/vep-annotation-sources#cache)** - a downloadable file containing all transcript models, regulatory features and variant data for a species
- **[GFF or GTF](/help/articles/vep-annotation-sources#gff)** - use transcript models defined in a tabix-indexed GFF or GTF file
  - Requires a **[FASTA](/help/articles/vep-annotation-sources#fasta)** file in [--offline](/help/articles/vep-options-cache#opt_offline) mode or if the desired species or assembly is not part of the [Ensembl species list](https://jun2026.archive.ensembl.org/info/about/species.html).
- **[Database](/help/articles/vep-annotation-sources#database)** - connect to a MySQL database server hosting Ensembl databases

Regulatory features can additionally be read from **[Ensembl regulatory annotation GFF files](/help/articles/vep-annotation-sources#reg_gff)** using [--regulatory_gff](/help/articles/vep-options-output#opt_regulatory_gff), as an alternative to the regulatory data in a cache or the funcgen database.

Data from VCF, BED and bigWig files can also be incorporated by Ensembl VEP's [Custom annotation](/help/articles/vep-custom-annotations) feature.

Using a cache is the most efficient way to use Ensembl VEP; we would encourage you to use a cache wherever possible. Caches are easy to download and set up using the [installer](/help/articles/vep-download-and-install#installer). Follow the [tutorial](/help/articles/vep-tutorial) for a simple guide. 

<span id="cache"></span>

## Caches

Using a cache ([--cache](/help/articles/vep-options-cache#opt_cache)) is the fastest and most efficient way to use Ensembl VEP, as in most cases only a single initial network connection is made and most data is read from local disk. Use [offline](/help/articles/vep-annotation-sources#offline) mode to eliminate all network connections for speed and/or privacy.

<span id="read_write_access"></span>

### Cache version

We strongly recommend that you download/use the cache version which corresponds to your Ensembl VEP installation, i.e. cache version **116** should be used with the Ensembl VEP tool version **116**.

This is mainly due to the fact that the cache (data content and structure) is generated every Ensembl release, regarding the data and API updates for this release, therefore the cache data format might differ between versions (and be incompatible with a newer version of the Ensembl VEP tool).

<span id="pre"></span>

### Downloading caches

Cache files are created for every species for each Ensembl release. They can be automatically downloaded and configured using [INSTALL.pl](/help/articles/vep-download-and-install#installer).

If interested in RefSeq transcripts you may download an alternate cache file (e.g. homo_sapiens_refseq), or a merged file of RefSeq and Ensembl transcripts (eg homo_sapiens_merged); remember to specify [--refseq](/help/articles/vep-options-cache#opt_refseq) or [--merged](/help/articles/vep-options-cache#opt_merged) when running Ensembl VEP to use the relevant cache. See [documentation](/help/articles/vep-other-information#refseq) for full details.

<span id="manual_cache"></span>

### Manually downloading caches

It is also simple to download and set up caches without using the installer. By default, Ensembl VEP searches for caches in $HOME/.vep; to use a different directory when running Ensembl VEP, use [--dir_cache](/help/articles/vep-options-cache#opt_dir_cache).

- **Indexed cache** (<https://ftp.ensembl.org/pub/release-116/variation/indexed_vep_cache/>)

  Essential for human and other species with large sets of variant data - requires [Bio::DB::HTS](https://github.com/Ensembl/Bio-DB-HTS) (setup by INSTALL.pl) or [tabix](https://github.com/samtools/tabix), e.g.:

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">cd $HOME/.vep
  curl -O https://ftp.ensembl.org/pub/release-116/variation/indexed_vep_cache/homo_sapiens_vep_116_GRCh38.tar.gz
  tar xzf homo_sapiens_vep_116_GRCh38.tar.gz
  </code></pre>

**FTP directories with indexed cache data:**

<table>
<tbody>
<tr>
<th>Ensembl:</th>
<td><a href="https://ftp.ensembl.org/pub/current_variation/indexed_vep_cache/">Vertebrates</a></td>
</tr>
<tr>
<th>Ensembl Genomes:</th>
<td><a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/bacteria/current/variation/indexed_vep_cache/">Bacteria</a> <span>|</span> <a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/fungi/current/variation/indexed_vep_cache/">Fungi</a> <span>|</span> <a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/metazoa/current/variation/indexed_vep_cache/">Metazoa</a> <span>|</span> <a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/plants/current/variation/indexed_vep_cache/">Plants</a> <span>|</span> <a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/protists/current/variation/indexed_vep_cache/">Protists</a></td>
</tr>
</tbody>
</table>

**NB:** When using Ensembl Genomes caches, you should use the [--cache_version](/help/articles/vep-options-cache#opt_cache_version) option to specify the relevant Ensembl Genomes version number as these differ from the concurrent Ensembl VEP version numbers.

<span id="pangenomes"></span>

### HPRC and alternative assemblies

Ensembl VEP caches are also available for Human Pangenome Reference Consortium (HPRC) data at the [Ensembl HPRC data page](https://projects.ensembl.org/hprc/). Click [here](/help/articles/vep-examples-and-use-cases#pangenomes) for more information on how to annotate variants on HPRC assemblies.

<span id="cache_content"></span>

### Data in the cache

The data content of Ensembl VEP caches vary by species. This table shows the contents of the default human cache files in release 116.

<table>

<thead>
<tr>
<th>Source</th>
<th>Version (GRCh38)</th>
<th>Version (GRCh37)</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Ensembl database version</strong></td>
<td>116</td>
<td>116</td>
</tr>
<tr>
<td><strong>Genome assembly</strong></td>
<td>GRCh38.p14</td>
<td>GRCh37.p13</td>
</tr>
<tr>
<td><strong>MANE Version</strong></td>
<td>v1.5</td>
<td>n/a</td>
</tr>
<tr>
<td><strong>GENCODE</strong></td>
<td>50</td>
<td>19</td>
</tr>
<tr>
<td><strong>RefSeq</strong></td>
<td>GCF_000001405.40-RS_2025_08<br />
(GCF_000001405.40_GRCh38.p14_genomic.gff)</td>
<td>GCF_000001405.25-RS_2024_09<br />
(GCF_000001405.25_GRCh37.p13_genomic.gff)</td>
</tr>
<tr>
<td><strong>Regulatory build</strong></td>
<td>1.0</td>
<td>1.0</td>
</tr>
<tr>
<td><strong>PolyPhen-2</strong></td>
<td>2.2.3</td>
<td>2.2.2</td>
</tr>
<tr>
<td><strong>SIFT</strong></td>
<td>6.2.1</td>
<td>5.2.2</td>
</tr>
<tr>
<td><strong>dbSNP</strong></td>
<td>156</td>
<td>156</td>
</tr>
<tr>
<td><strong>COSMIC</strong></td>
<td>102</td>
<td>98</td>
</tr>
<tr>
<td><strong>HGMD-PUBLIC</strong></td>
<td>2020.4</td>
<td>2020.4</td>
</tr>
<tr>
<td><strong>ClinVar</strong></td>
<td>2025-09</td>
<td>2023-06</td>
</tr>
<tr>
<td><strong>1000 Genomes</strong></td>
<td>Phase 3 (remapped)</td>
<td>Phase 3</td>
</tr>
<tr>
<td><strong>gnomAD exomes</strong></td>
<td>v4.1</td>
<td>v4.1</td>
</tr>
<tr>
<td><strong>gnomAD genomes</strong></td>
<td>v4.1</td>
<td>v4.1</td>
</tr>
</tbody>
</table>

<span id="limitations"></span>

### Limitations of the cache

The cache **stores** the following information:

- Transcript location, sequence, exons and other attributes
- Gene, protein, HGNC and other identifiers for each transcript (where applicable, [limitations apply to RefSeq caches](/help/articles/vep-other-information#refseq_limitations))
- Locations, alleles and frequencies of [existing variants](/help/articles/vep-annotation-sources#existing_variants) (see note below).
- Regulatory regions
- Predictions and scores for SIFT, PolyPhen-2

The cache **does not store** any information pertaining to, and therefore cannot be used for, the following:

- HGVS names ([--hgvs](/help/articles/vep-options-identifiers#opt_hgvs), [--hgvsg](/help/articles/vep-options-identifiers#opt_hgvsg)) - to retrieve these you must additionally point to a [FASTA](/help/articles/vep-annotation-sources#fasta) file containing the reference sequence for your species ([--fasta](/help/articles/vep-options-cache#opt_fasta))
- Using HGVS notation as input ([--format hgvs](/help/articles/vep-options-basic#opt_format))
- Using variant identifiers as input ([--format id](/help/articles/vep-options-basic#opt_format))
- Finding overlapping structural variants ([--check_svs](/help/articles/vep-options-existing-variants#opt_check_svs))
- Readthrough transcripts are excluded from the cache

Enabling one of these options with [--cache](/help/articles/vep-options-cache#opt_cache) will cause Ensembl VEP to warn you in its status output with something like the following:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">2011-06-16 16:24:51 - INFO: Database will be accessed when using --hgvs
</code></pre>

<span id="existing_variants"></span>

### Existing variants

Here **existing variants** referes to those variants that have been loaded to [Ensembl variation database](/help/articles/vep-annotation-sources#database) from accessioning resources. For example, for human, you can see the source of data in the above table. We load variants from accessioning resources such as dbSNP, COSMIC, and HGMD-PUBLIC.

Note that **gnomAD** is not a variant accessioning body. What it means is that any gnomAD variant that are not accessioned will not be avialable in the cache. For example, gnomAD v4.1 was released in April 2024, but will not be available in the cache until the variants have been submitted to dbSNP for accessioning and made available in a dbSNP release. If you run the variant [5-32100960-ATAAG-A](https://gnomad.broadinstitute.org/variant/5-32100960-ATAAG-A?dataset=gnomad_r4) using 113 cache you would not get any frequency information because it was not accessioned at the time of Ensembl 113 release -

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep --id &quot;5 32100960 . ATAAG A&quot; --af_gnomadg --af_gnomade --check_existing --cache --cache_version 113 --fasta genome.fa.gz
#Uploaded_variation Location    Allele  Gene    Feature Feature_type    Consequence cDNA_position   CDS_position    Protein_position    Amino_acids Codons  Existing_variation  Extra
5_32100961_TAAG/-   5:32100961-32100964 -   ENSG00000133401 ENST00000397559 Transcript  splice_donor_variant,non_coding_transcript_exon_variant 95-?    -   -   -   -   -   IMPACT=HIGH;STRAND=1
</code></pre>

**Alternative:** In such cases you can use gnomAD VCF file with [--custom](/help/articles/vep-custom-annotations) option.

<span id="offline"></span>

### Data privacy and offline mode

When using the public database servers, Ensembl VEP requests transcript and variation data that overlap the loci in your input file. As such, these coordinates are transmitted over the network to a public server, which may not be appropriate for the analysis of sensitive or private data.

### Note

**Only** the **coordinates** are transmitted to the server; no other information is sent.

To use offline mode that does not use any network connections, use the flag [--offline](/help/articles/vep-options-cache#opt_offline).

The [limitations](/help/articles/vep-annotation-sources#limitations) described above apply absolutely when using offline mode. For example, if you specify [--offline](/help/articles/vep-options-cache#opt_offline) and [--format id](/help/articles/vep-options-basic#opt_format), Ensembl VEP will report an error and refuse to run:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">ERROR: Cannot use ID format in offline mode
</code></pre>

All other features, including the ability to use [custom annotations](/help/articles/vep-custom-annotations) and [plugins](/help/articles/vep-plugins), are accessible in offline mode.

<span id="gff"></span>

## GFF/GTF files

Ensembl VEP can use transcript annotations defined in [GFF](https://github.com/The-Sequence-Ontology/Specifications/blob/master/gff3.md) or [GTF](https://jun2026.archive.ensembl.org/info/website/upload/gff.html) files. The files must be bgzipped and indexed with tabix and a [FASTA](/help/articles/vep-annotation-sources#fasta) file containing the genomic sequence is required in order to generate transcript models. This allows you to annotate variants from any species and assembly with these data.

Your GFF or GTF file must be sorted in chromosomal order. Ensembl VEP does not use header lines so it is safe to remove them.

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">grep -v &quot;#&quot; data.gff | sort -k1,1 -k4,4n -k5,5n -t$'\t' | bgzip -c &gt; data.gff.gz
tabix -p gff data.gff.gz
./vep -i input.vcf --gff data.gff.gz --fasta genome.fa.gz
</code></pre>

You may use any number of GFF/GTF files in this way, providing they refer to the same genome. You may also use them in concert with annotations from a cache or database source; annotations are distinguished by the SOURCE field in the output.

- **GFF file**

  Example of command line with GFF, using flag [--gff](/help/articles/vep-options-annotation#opt_gff) :

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i input.vcf --cache --gff data.gff.gz --fasta genome.fa.gz
  </code></pre>

  **NOTE:** If you wish to customise the name of the GFF as it appears in the SOURCE field and Ensembl VEP output header, use the [longer `--custom` annotation form](/help/articles/vep-custom-annotations#custom_options):

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">--custom file=data.gff.gz,short_name=frequency,format=gff
  </code></pre>

- **GTF file**

  Example of command line with GTF, using flag [--gtf](/help/articles/vep-options-annotation#opt_gtf) :

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i input.vcf --cache --gtf data.gtf.gz --fasta genome.fa.gz
  </code></pre>

  **NOTE:** If you wish to customise the name of the GFF as it appears in the SOURCE field and Ensembl VEP output header, use the [longer `--custom` annotation form](/help/articles/vep-custom-annotations#custom_options):

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">--custom file=data.gtf.gz,short_name=frequency,format=gtf
  </code></pre>

<span id="gff_req"></span>

### GFF format expectations

Ensembl VEP has been tested on GFF files generated by Ensembl and NCBI (RefSeq). Due to inconsistency in the GFF specification and adherence to it, not all GFF files will be compatible with Ensembl VEP and not all transcript biotypes may be supported. Additionally, Ensembl VEP does not support GFF files with embedded FASTA sequence.

<span id="gff_type"></span>

**Column "type" (3rd column):**

The following entity/feature types are supported by Ensembl VEP.

<span id="div_gfftypes"></span>

- aberrant_processed_transcript
- CDS
- C_gene_segment
- D_gene_segment
- exon
- gene
- J_gene_segment
- lincRNA
- lincRNA_gene
- miRNA
- miRNA_gene
- mRNA
- mt_gene
- ncRNA
- NMD_transcript_variant
- primary_transcript

<!-- -->

- processed_pseudogene
- processed_transcript
- pseudogene
- pseudogenic_transcript
- RNA
- rRNA
- rRNA_gene
- snoRNA
- snoRNA_gene
- snRNA
- snRNA_gene
- supercontig
- transcript
- tRNA
- VD_gene_segment
- V_gene_segment

Lines of other types will be ignored; if this leads to an incomplete transcript model, the whole transcript model may be discarded. If unsupported types are used you will see a warning like the following -

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">WARNING: Ignoring 'five_prime_utr' feature_type from Homo_sapiens.GRCh38.111.gtf.gz GFF/GTF file. This feature_type is not supported in Ensembl VEP.
</code></pre>

<span id="gff_9th"></span>

**Expected parameters in the 9th column:**

- **ID**

  Only required for the genes and transcripts entities.

- **parent**/**Parent**

  \- Entities in the GFF are expected to be linked using a key named "**parent**" or "**Parent**" in the attributes (9th) column of the GFF. - Unlinked entities (i.e. those with no parents **or** children) are discarded. - Sibling entities (those that share the same parent) may have overlapping coordinates, e.g. for exon and CDS entities.

- **biotype**

  Transcripts require a Sequence Ontology biotype to be defined in order to be used. The simplest way to define this is using an attribute named "**biotype**" on the transcript entity. Other configurations are supported in order for Ensembl VEP to use GFF files from NCBI and other sources.

Here is an example:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">##gff-version 3.2.1
##sequence-region 1 1 10000
1 Ensembl gene        1000  5000  . + . ID=gene1;Name=GENE1
1 Ensembl transcript  1100  4900  . + . ID=transcript1;Name=GENE1-001;Parent=gene1;biotype=protein_coding
1 Ensembl exon        1200  1300  . + . ID=exon1;Name=GENE1-001_1;Parent=transcript1
1 Ensembl exon        1500  3000  . + . ID=exon2;Name=GENE1-001_2;Parent=transcript1
1 Ensembl exon        3500  4000  . + . ID=exon3;Name=GENE1-001_2;Parent=transcript1
1 Ensembl CDS         1300  3800  . + . ID=cds1;Name=CDS0001;Parent=transcript1
</code></pre>

<span id="gtf_req"></span>

### GTF format expectations

The following GTF entity types will be extracted:

- cds (or CDS)
- stop_codon
- exon
- gene
- transcript

Entities are linked by an attribute named for the **parent** entity type e.g. exon is linked to transcript by transcript_id, transcript is linked to gene by gene_id.

Transcript biotypes are defined in attributes named "**biotype**", "**transcript_biotype**" or "**transcript_type**". If none of these exist, Ensembl VEP will attempt to interpret the source field (2nd column) of the GTF as the biotype.

Here is an example:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">1 Ensembl gene        1000  5000  . + . gene_id &quot;gene1&quot;; gene_name &quot;GENE1&quot;;
1 Ensembl transcript  1100  4900  . + . gene_id &quot;gene1&quot;; transcript_id &quot;transcript1&quot;; gene_name &quot;GENE1&quot;; transcript_name &quot;GENE1-001&quot;; transcript_biotype &quot;protein_coding&quot;;
1 Ensembl exon        1200  1300  . + . gene_id &quot;gene1&quot;; transcript_id &quot;transcript1&quot;; exon_number &quot;exon1&quot;; exon_id &quot;GENE1-001_1&quot;;
1 Ensembl exon        1500  3000  . + . gene_id &quot;gene1&quot;; transcript_id &quot;transcript1&quot;; exon_number &quot;exon2&quot;; exon_id &quot;GENE1-001_2&quot;;
1 Ensembl exon        3500  4000  . + . gene_id &quot;gene1&quot;; transcript_id &quot;transcript1&quot;; exon_number &quot;exon3&quot;; exon_id &quot;GENE1-001_2&quot;;
1 Ensembl CDS         1300  3800  . + . gene_id &quot;gene1&quot;; transcript_id &quot;transcript1&quot;; exon_number &quot;exon2&quot;; ccds_id &quot;CDS0001&quot;;
</code></pre>

<span id="gff_synonyms"></span>

### Chromosome synonyms

If the chromosome names used in your GFF/GTF differ from those used in the FASTA or your input VCF, you may see warnings like this when running Ensembl VEP:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">WARNING: Chromosome 21 not found in annotation sources or synonyms on line 160
</code></pre>

To circumvent this you may provide Ensembl VEP with a [synonyms file](/help/articles/vep-options-identifiers#opt_synonyms). A synonym file is included in Ensembl VEP's cache files, so if you have one of these for your species you can use it as follows:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i input.vcf -cache -gff data.gff.gz -fasta genome.fa.gz -synonyms ~/.vep/homo_sapiens/116_GRCh38/chr_synonyms.txt
</code></pre>

<span id="gff_limitations"></span>

### Limitations of the cache

Using a GFF or GTF file as the gene annotation source limits access to some auxiliary information available when using a [cache](/help/articles/vep-annotation-sources#cache). Currently most external reference data such as gene symbols, transcript identifiers and protein domains are inaccessible when using only a GFF/GTF file.

Ensembl VEP's flexibility does allow some annotation types to be replaced. The following table illustrates some examples and alternative means to retrieve equivalent data.

<table>

<thead>
<tr>
<th>Data type</th>
<th>Alternative</th>
</tr>
</thead>
<tbody>
<tr>
<td>SIFT and PolyPhen-2 predictions (<a href="/help/articles/vep-options-output#opt_sift">--sift</a>, <a href="/help/articles/vep-options-output#opt_polyphen">--polyphen</a>)</td>
<td>Use the <a href="/help/articles/vep-plugin-catalogue#PolyPhen_SIFT">PolyPhen_SIFT plugin</a></td>
</tr>
<tr>
<td>Co-located variants (<a href="/help/articles/vep-options-existing-variants#opt_check_existing">--check_existing</a>, --af* flags)</td>
<td>A couple of options are available:
<ol>
<li>Use a <a href="/help/articles/vep-custom-annotations">VCF with --custom</a> to retrieve variant IDs, frequency and other data</li>
<li>Add <a href="/help/articles/vep-options-cache#opt_cache">--cache</a> to use variants in the <a href="/help/articles/vep-annotation-sources#cache">cache</a>. <strong>*</strong></li>
</ol></td>
</tr>
<tr>
<td>Regulatory consequences (<a href="/help/articles/vep-options-output#opt_regulatory">--regulatory</a>)</td>
<td>A couple of options are available:
<ol>
<li>Use <a href="/help/articles/vep-options-output#opt_regulatory_gff">--regulatory_gff</a> to take regulatory features from <a href="/help/articles/vep-annotation-sources#reg_gff">GFF files</a></li>
<li>Add <a href="/help/articles/vep-options-cache#opt_cache">--cache</a> to use regulatory features in the <a href="/help/articles/vep-annotation-sources#cache">cache</a>. <strong>*</strong></li>
</ol></td>
</tr>
</tbody>
</table>

**\*** Note this will also instruct Ensembl VEP to annotate input variants against transcript models retrieved from the cache **as well as** those from the GFF/GTF file. It is possible to use [--transcript_filter](/help/articles/vep-options-filtering#opt_transcript_filter) to include only the transcripts from your GFF/GTF file:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i input.vcf -cache --custom file=data.gff.gz,short_name=myGFF,format=gff --fasta genome.fa.gz --transcript_filter &quot;_source_cache is myGFF&quot;
</code></pre>

<span id="reg_gff"></span>

## Regulatory annotation from GFF files

As well as [transcript annotation](/help/articles/vep-annotation-sources#gff), Ensembl VEP can take regulatory annotation from GFF3 files, using [--regulatory_gff](/help/articles/vep-options-output#opt_regulatory_gff). This is an alternative to the regulatory data held in a [cache](/help/articles/vep-annotation-sources#cache) or the funcgen [database](/help/articles/vep-annotation-sources#database), and is useful when annotating against a regulatory build that is not available as a cache, or when working without database access.

This option is designed for the regulatory annotation files published by Ensembl, and expects the feature types and attributes they use. Download them from the [Ensembl FTP site](https://ftp.ensembl.org/pub/current/regulation/), under **species/annotation**. Files from other sources may work, but are not supported.

The simplest form supplies a single regulatory-feature GFF:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i input.vcf --cache --regulatory_gff regulatory_features.gff3.gz
</code></pre>

Motif features and EMARs can be added as further, optional inputs using a comma-separated **key=value** list, in the same style as [--custom](/help/articles/vep-custom-annotations):

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i input.vcf --cache --regulatory_gff file=regulatory_features.gff3.gz,motifs=motif_features.gff3.gz,emars=EMARs.gff.gz
</code></pre>

As with transcript [GFF/GTF files](/help/articles/vep-annotation-sources#gff), each file must be sorted in chromosomal order, bgzipped and indexed with tabix. The files published by Ensembl are already bgzipped, so if no index is supplied alongside one, it is enough to create it:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">tabix -p gff regulatory_features.gff3.gz
</code></pre>

A file that is not already bgzipped must be prepared first. Ensembl VEP does not use header lines, so it is safe to remove them:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">grep -v &quot;#&quot; regulatory_features.gff3 | sort -k1,1 -k4,4n -k5,5n -t$'\t' | bgzip -c &gt; regulatory_features.gff3.gz
tabix -p gff regulatory_features.gff3.gz
</code></pre>

Regulatory features are taken from exactly one source. If a cache or database containing regulatory data is also in use, its regulatory features are ignored in favour of the GFF and a warning is issued; transcript annotation from the cache or database is unaffected.

<span id="reg_gff_features"></span>

### Regulatory features (file=, emars=)

The feature type — **promoter**, **enhancer**, **CTCF_binding_site**, **open_chromatin_region** and so on — is reported under BIOTYPE. Every type yields the **regulatory_region_variant** consequence (for short variants), with BIOTYPE distinguishing it, matching the behaviour of a cache or database regulatory source. Any feature type Ensembl VEP does not recognise is skipped with a warning.

**emars=** reads a second regulatory-feature file (of type EMAR) as an additional source. EMARs are broad container regions that overlap many regulatory features, so enabling them typically adds a second annotation line to variants that already overlap a promoter, enhancer or CTCF binding site. Note that the funcgen database source excludes EMARs, so this is an additional feature in GFF and not available via database.

Promoters in the Ensembl files also define a wider region around the promoter core. This is ignored unless [--extended_promoters](/help/articles/vep-options-output#opt_extended_promoters) is given.

<span id="reg_gff_motifs"></span>

### Motif features (motifs=)

**motifs=** reads a transcription factor binding motif GFF. Each record produces a MotifFeature and the **TF_binding_site_variant** consequence, reporting MOTIF_NAME, TRANSCRIPTION_FACTORS, MOTIF_POS and STRAND.

HIGH_INF_POS and MOTIF_SCORE_CHANGE require the position weight matrix frequencies, which the motif GFF does not carry (it references the matrix by identifier only), so they are omitted rather than reported with a placeholder value.

<span id="reg_gff_cell_type"></span>

### Cell types

[--cell_type](/help/articles/vep-options-output#opt_cell_type) is not supported for GFF-based regulatory annotation: a feature GFF carries no epigenome activity data, so CELL_TYPE is empty. Supplying [--cell_type](/help/articles/vep-options-output#opt_cell_type) produces a warning and is otherwise ignored; the rest of the run is unaffected. Use a cache or database regulatory source if you need cell-type-specific activity.

With **motifs=** supplied, GFF-based regulatory annotation is close to a cache or database regulatory source. The remaining differences are HIGH_INF_POS and MOTIF_SCORE_CHANGE, which need the binding matrix frequencies, and CELL_TYPE, which needs epigenome activity — none of which the GFF files carry.

<span id="fasta"></span>

## FASTA files

By pointing Ensembl VEP to a FASTA file (or directory containing several files), it is possible to retrieve reference sequence locally when using [--cache](/help/articles/vep-options-cache#opt_cache) or [--offline](/help/articles/vep-options-cache#opt_offline). This enables Ensembl VEP to:

- Retrieve HGVS notations ([--hgvs](/help/articles/vep-options-identifiers#opt_hgvs))
- Check the reference sequence given in input data ([--check_ref](/help/articles/vep-options-filtering#opt_check_ref))
- Construct transcript models from a GFF or GTF file without accessing a database (specially useful for performance reasons or if using data from species/assembly not part of [Ensembl species list](https://jun2026.archive.ensembl.org/info/about/species.html))

FASTA files from Ensembl can be set up using the [installer](/help/articles/vep-download-and-install#installer); files set up using the installer are automatically detected when using [--cache](/help/articles/vep-options-cache#opt_cache) or [--offline](/help/articles/vep-options-cache#opt_offline); you should not need to use [--fasta](/help/articles/vep-options-cache#opt_fasta) to manually specify them.

The following plugins do require the fasta file to be explicitly passed as a command line argument (i.e. `--fasta /VEP_DIR/your_downloaded.fasta`)

- CSN
- GeneSplicer
- MaxEntScan

To enable this, Ensembl VEP uses one of two modules:

- The [Bio::DB::HTS](https://github.com/Ensembl/Bio-DB-HTS) Perl XS module with [HTSlib](http://www.htslib.org). This module uses compiled C code and can access compressed (bgzipped) or uncompressed FASTA files. It is set up by the [installer](/help/articles/vep-download-and-install#installer).
- The [Bio::DB::Fasta](http://search.cpan.org/~cjfields/BioPerl-1.6.924/Bio/DB/Fasta.pm) module. This may be used on systems where installation of the Bio::DB::HTS module has not been possible. It can access only uncompressed FASTA files. It is also set up by the installer and comes as part of the BioPerl package.

The first time you run Ensembl VEP with a specific FASTA file, an index will be built. This can take a few minutes, depending on the size of the FASTA file and the speed of your system. On subsequent runs the index does not need to be rebuilt (if the FASTA file has been modified, Ensembl VEP will force a rebuild of the index).

**FASTA FTP directories**

Suitable reference FASTA files are available to download from the Ensembl FTP server. See the [Downloads](https://jun2026.archive.ensembl.org/info/data/ftp/index.html) page for details.

You should preferably use the installer as described above to fetch these files; manual instructions are provided for reference. In most cases it is best to download the single large "primary_assembly" file for your species. You should use the unmasked (without `_rm` or `_sm` in the name) sequences.

Note that Ensembl VEP requires that the file be either unzipped (`Bio::DB::Fasta`) or unzipped and then recompressed with bgzip (`Bio::DB::HTS::Faidx`) to run; when unzipped these files can be very large (25GB for human). An example set of commands for setting up the data for human follows:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">curl -O https://ftp.ensembl.org/pub/release-116/fasta/homo_sapiens/dna/Homo_sapiens.GRCh38.dna.primary_assembly.fa.gz
gzip -d Homo_sapiens.GRCh38.dna.primary_assembly.fa.gz
bgzip Homo_sapiens.GRCh38.dna.primary_assembly.fa
./vep -i input.vcf --offline --hgvs --fasta Homo_sapiens.GRCh38.dna.primary_assembly.fa.gz
</code></pre>

<span id="database"></span>

## Databases

Ensembl VEP can use remote or local database servers to retrieve annotations.

- Using [--cache](/help/articles/vep-options-cache#opt_cache) (without [--offline](/help/articles/vep-options-cache#opt_offline)) uses the local cache on disk to fetch most annotations, but allows database connections for some features (see [cache limitations](/help/articles/vep-annotation-sources#limitations))
- Using [--database](/help/articles/vep-options-database#opt_database) tells Ensembl VEP to retrieve **all** annotations from the database. **Please only use this for small input files or when using a local database server!**

<span id="public"></span>

### Public database servers

By default, Ensembl VEP is configured to connect to the public MySQL instance at ensembldb.ensembl.org. If you are in the USA (or geographically closer to the east coast of the USA than to the Ensembl data centre in Cambridge, UK), a mirror server is available at useastdb.ensembl.org. To use the mirror, use the flag [`--host`](/help/articles/vep-options-database#opt_host)` useastdb.ensembl.org`

Data for Ensembl Genomes species (e.g. plants, fungi, microbes) is available through a different public MySQL server. The appropriate connection parameters can be automatically loaded by using the flag [--genomes](/help/articles/vep-options-database#opt_genomes)

If you have a very small data set (100s of variants), using the public database servers should provide adequate performance. If you have larger data sets, or wish to use Ensembl VEP in a batch manner, consider one of the alternatives below.

<span id="local"></span>

### Using a local database

It is possible to set up a local MySQL mirror with the databases for your species of interest installed. For instructions on installing a local mirror, see [here](https://jun2026.archive.ensembl.org/info/docs/webcode/mirror/install/ensembl-data.html). You will need a MySQL server that you can connect to from the machine where you will run Ensembl VEP (this can be the same machine). For most annotation functionality, you will only need the Core database (e.g. homo_sapiens_core_116_38) installed. In order to find co-located variants or to use SIFT or PolyPhen-2, it is also necessary to install the relevant variation database (e.g. homo_sapiens_variation_116_38).

Note that unless you have custom data to insert in the database, in most cases it will be much more efficient to use a [pre-built cache](/help/articles/vep-annotation-sources#cache) in place of a local database.

To connect to your mirror, you can either set the connection parameters using [--host](/help/articles/vep-options-database#opt_host), [--port](/help/articles/vep-options-database#opt_port), [--user](/help/articles/vep-options-database#opt_user) and [--password](/help/articles/vep-options-database#opt_password), or use a registry file. Registry files contain all the connection parameters for your database, as well as any species aliases you wish to set up:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">use Bio::EnsEMBL::DBSQL::DBAdaptor;
use Bio::EnsEMBL::Variation::DBSQL::DBAdaptor;
use Bio::EnsEMBL::Registry;

Bio::EnsEMBL::DBSQL::DBAdaptor-&gt;new(
  '-species' =&gt; &quot;Homo_sapiens&quot;,
  '-group'   =&gt; &quot;core&quot;,
  '-port'    =&gt; 5306,
  '-host'    =&gt; 'ensembldb.ensembl.org',
  '-user'    =&gt; 'anonymous',
  '-pass'    =&gt; '',
  '-dbname'  =&gt; 'homo_sapiens_core_116_38'
);

Bio::EnsEMBL::Variation::DBSQL::DBAdaptor-&gt;new(
  '-species' =&gt; &quot;Homo_sapiens&quot;,
  '-group'   =&gt; &quot;variation&quot;,
  '-port'    =&gt; 5306,
  '-host'    =&gt; 'ensembldb.ensembl.org',
  '-user'    =&gt; 'anonymous',
  '-pass'    =&gt; '',
  '-dbname'  =&gt; 'homo_sapiens_variation_116_38'
);

Bio::EnsEMBL::Registry-&gt;add_alias(&quot;Homo_sapiens&quot;,&quot;human&quot;);
</code></pre>

For more information on the registry and registry files, see [here](https://jun2026.archive.ensembl.org/info/docs/api/registry.html).

<span id="technical"></span>

## Cache - technical information

ADVANCED The cache consists of compressed files containing listrefs of serialised objects. These objects are initially created from the database as if using the Ensembl API normally. In order to reduce the size of the cache and allow the serialisation to occur, some changes are made to the objects before they are dumped to disk. This means that they will not behave in exactly the same way as an object retrieved from the database when writing, for example, a plugin that uses the cache.

The following hash keys are deleted from each transcript object:

- **analysis**

- **created_date**

- **dbentries** : this contains the external references retrieved when calling $transcript-\>get_all_DBEntries(); hence this call on a cached object will return no entries

- **description**

- **display_xref**

- **edits_enabled**

- **external_db**

- **external_display_name**

- **external_name**

- **external_status**

- **is_current**

- **modified_date**

- **status**

- **transcript_mapper** : used to convert between genomic, cdna, cds and protein coordinates. A copy of this is cached separately by Ensembl VEP as

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">$transcript-&gt;{_variation_effect_feature_cache}-&gt;{mapper}
  </code></pre>

As mentioned above, a special hash key "\_variation_effect_feature_cache" is created on the transcript object and used to cache things used by Ensembl VEP in predicting consequences, things which might otherwise have to be fetched from the database. Some of these are stored in place of equivalent keys that are deleted as described above. The following keys and data are stored:

- **introns** : listref of intron objects for the transcript. The adaptor, analysis, dbID, next, prev and seqname keys are stripped from each intron object

- **translateable_seq** : as returned by

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">$transcript-&gt;translateable_seq
  </code></pre>

- **mapper** : transcript mapper as described above

- **peptide** : the translated sequence as a string, as returned by

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">$transcript-&gt;translate-&gt;seq
  </code></pre>

- **protein_features** : protein domains for the transcript's translation as returned by

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">$transcript-&gt;translation-&gt;get_all_ProteinFeatures
  </code></pre>

  Each protein feature is stripped of all keys but: start, end, analysis, hseqname

- **codon_table** : the codon table ID used to translate the transcript, as returned by

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">$transcript-&gt;slice-&gt;get_all_Attributes('codon_table')-&gt;[0]
  </code></pre>

- **protein_function_predictions** : a hashref containing the keys "sift" and "polyphen"; each one contains a protein function prediction matrix as returned by e.g.

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">$protein_function_prediction_matrix_adaptor-&gt;fetch_by_analysis_translation_md5('sift', md5_hex($transcript-{_variation_effect_feature_cache}-&gt;{peptide}))
  </code></pre>

Similarly, some further data is cached directly on the transcript object under the following keys:

- **\_gene** : gene object. This object has all keys but the following deleted: start, end, strand, stable_id
- **\_gene_symbol** : the gene symbol
- **\_ccds** : the CCDS identifier for the transcript
- **\_refseq** : the "NM" RefSeq mRNA identifier for the transcript
- **\_protein** : the Ensembl stable identifier of the translation
- **\_source_cache** : the source of the transcript object. Only defined in the merged cache (values: Ensembl, RefSeq) or when using a GFF/GTF file (value: short name or filename)
