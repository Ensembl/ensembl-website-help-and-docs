---
title: VEP frequently asked questions
description: Answers to common questions about VEP annotation and command line use.
slug: vep-cli-faq
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

# VEP frequently asked questions

For any questions not covered here, please send an email to the Ensembl [developer's mailing list](https://jun2026.archive.ensembl.org/info/about/contact/index.html) (public) or contact the [Ensembl Helpdesk](https://jun2026.archive.ensembl.org/Help/Contact) (private). Also you can report issues through our (public) Github repositories. For general Ensembl VEP issues you should use [ensembl-vep](https://github.com/Ensembl/ensembl-vep/issues) repository and for specific plugins you should use [VEP_plugins](https://github.com/Ensembl/VEP_plugins/issues) repository.

<span id="general"></span>

## General questions

<span id="indel-vcf"></span>

### Q: Why has my insertion/deletion variant encoded in VCF disappeared from the output?

Ensembl treats unbalanced variants differently to VCF - your variant hasn't disappeared, it may have just changed slightly! You can solve this by giving your variants a unique identifier in the third column of the VCF file. See [here](/help/articles/vep-data-formats#vcf) for a full discussion.

<span id="no-co-located-vars"></span>

### Q: Why don't I see any co-located variants when using species X?

Not all species have variants and not all species that do are in the Ensembl variation resource - see [this document](https://jun2026.archive.ensembl.org/info/genome/variation/species/species_data_types.html#source) for details. The [custom](/help/articles/vep-options-annotation#opt_custom) option can be used in the commandline interface to include more variant sets

<span id="multi-vars-mapped"></span>

### Q: Why do I see multiple known variants mapped to my input variant?

Ensembl VEP compares your input to known variants from the Ensembl variation database. In some cases one input variant can match multiple known variants:

- Germline variants from dbSNP and somatic mutations from COSMIC may be found at the same locus
- Some sources, e.g. HGMD, do not provide public access to allele-specific data, so an HGMD variant with unknown alleles may colocate with one from dbSNP with known alleles
- Multiple alternate alleles from your input may match different variants as they are described in dbSNP

See [here](/help/articles/vep-other-information#colocated) for a full discussion. 

<span id="no-freq"></span>

### Q: Ensembl VEP is not assigning a frequency to my input variant - why?

Ensembl VEP's cache contains frequency data only for specific studies. See [here](/help/articles/vep-other-information#colocated) for a full discussion. The [custom](/help/articles/vep-options-annotation#opt_custom) option can be used in the commandline interface to include more frequency sets

<span id="many-lines"></span>

### Q: Why do I see so many lines of output for each variant in my input?

While it would be convenient to have a simple, one word answer to the question "What is the consequence of this variant?", in reality biology is not this simple! Many genes have more than one transcript, so Ensembl VEP provides a prediction for each transcript that a variant overlaps. Ensembl VEP has options to help select results according to your requirements; the [--canonical](/help/articles/vep-options-identifiers#opt_canonical) and [--mane](/help/articles/vep-options-identifiers#opt_mane) options indicate which transcripts are canonical and belong to the human MANE set respectively, while [--pick](/help/articles/vep-options-filtering#opt_pick), [--per_gene](/help/articles/vep-options-filtering#opt_per_gene), [--summary](/help/articles/vep-options-filtering#opt_summary) and [--most_severe](/help/articles/vep-options-filtering#opt_most_severe) allow you to give a more summary level assessment per variant.

Furthermore, several "compound" consequences are also possible - if, for example, a variant falls in the final few bases of an exon, it may be considered to affect a splicing site, in addition to possibly affecting the coding sequence.

<span id="reduce-mem"></span>

### Q: How do I reduce Ensembl VEP's memory requirement?

There are a number of ways to do this-

1.  Ensure your input file is sorted by location. This can greatly reduce memory requirements and runtime
2.  Consider reducing the buffer size. This reduces the number of variants annotated together in a batch and can be modified in both command line and web interfaces. Reducing buffer size may increase run time.
3.  Ensure you are only using the options you need, rather than --everything. Some data-rich options, such as regulatory annotation have an impact on memory use

<span id="cite-vep"></span>

### Q: How to cite Ensembl VEP?

If you use Ensembl VEP, please cite our [latest publication](https://jun2026.archive.ensembl.org/info/docs/tools/vep/index.html#publication) to continue to support Ensembl VEP development.

<span id="script"></span>

## Ensembl VEP command line tool questions

<span id="faster-vep"></span>

### Q: How can I make Ensembl VEP run faster?

There are a number of factors that influence how fast Ensembl VEP runs. Have a look at our [handy guide](/help/articles/vep-other-information#faster) for tips on improving runtime.

<span id="different-input-var"></span>

### Q: Why am I not seeing the same variant from my input in the output?

Since the Ensembl 110 release, Ensembl VEP by default will minimise the input allele for display in the output. To see the exact allele representation you provided, use the [--uploaded_allele](/help/articles/vep-options-output#opt_uploaded_allele) option.

<span id="hgvs-n"></span>

### Q: Why do I see "N" as the reference allele in my HGVS strings?

<span id="sequence.pm"></span>

### Q: Why do I get errors related with Sequence.pm?

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">substr outside of string at /nfs/users/nfs_w/wm2/Perl/ensembl-variation/modules/Bio/EnsEMBL/Variation/Utils/Sequence.pm line 511.
Use of uninitialized value $ref_allele in string eq at /nfs/users/nfs_w/wm2/Perl/ensembl-variation/modules/Bio/EnsEMBL/Variation/Utils/Sequence.pm line 514.
Use of uninitialized value in concatenation (.) or string at /nfs/users/nfs_w/wm2/Perl/ensembl-variation/modules/Bio/EnsEMBL/Variation/Utils/Sequence.pm line 643.
</code></pre>

Both of these error types are usually seen when using a [FASTA file](/help/articles/vep-annotation-sources#fasta) for retrieving sequence. There are a couple of steps you can take to try to remedy them:

1.  The index alongside the FASTA can become corrupted. Delete \[fastafile\].index and re-run Ensembl VEP to regenerate it. By default this file is located in your $HOME/.vep/\[species\]/\[version\]\_\[assembly\] directory.
2.  The FASTA file itself may have been corrupted during download; delete the fasta file and the index and re-download (you can use the [Ensembl VEP installer](/help/articles/vep-download-and-install#installer) to do this).
3.  Older versions of BioPerl (1.2.3 in particular is known to have this) cannot properly index large FASTA files. Make sure you are using a later (\>=1.6) version of BioPerl. The [Ensembl VEP installer](/help/articles/vep-download-and-install#installer) installs 1.6.924 for you.

If you still see problems after taking these steps, or if you were not using a FASTA file in the first place, please [contact us](/help/articles/vep-faq#top).

<span id="chr-not-found"></span>

### Q: Why are chromosomes not found in annotation sources or synonyms?

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">WARNING: Chromosome 21 not found in annotation sources or synonyms on line 160
</code></pre>

This can occur if the chromosome names differ between your input variant and any annotation source that you are using (cache, database, GFF/GTF file, FASTA file, custom annotation file). To circumvent this you may provide a [synonyms file](/help/articles/vep-options-identifiers#opt_synonyms). A synonym file is included in Ensembl VEP's cache files, so if you have one of these for your species you can use it as follows:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i input.vcf -cache -synonyms ~/.vep/homo_sapiens/116_GRCh38/chr_synonyms.txt
</code></pre>

The file consists of lines containing pairs of tab-separated synonyms. Order is not important as synonyms can be used in both "directions".

<span id="feature_type_warnings"></span>

### Q: Why do I get feature_type warnings from my GFF/GTF file?

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">WARNING: Ignoring 'five_prime_utr' feature_type from Homo_sapiens.GRCh38.111.gtf.gz GFF/GTF file. This feature_type is not supported in Ensembl VEP.
</code></pre>

This can occur if you are using GFF/GTF file and the file contains a type that is not supported by Ensembl VEP. Those lines are simply ignored. However, in cases where the transcript model is incomplete the full model may be ignored.

Please try to use supported feature types as mentioned [here](/help/articles/vep-annotation-sources#gff)

<span id="gnomad-frequences"></span>

### Q: Can I get gnomAD exomes and genomes frequencies in Ensembl VEP?

Yes, see [this guide](/help/articles/vep-examples-and-use-cases#gnomad).

<span id="no-server-connection"></span>

### Q: Why do I have issues connecting to Ensembl databases?

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">Could not connect to database homo_sapiens_core_63_37 as user anonymous using [DBI:mysql:database=homo_sapiens_core_63_37;host=ensembldb.ensembl.org;port=5306] as a locator:
Unknown MySQL server host 'ensembldb.ensembl.org' (2) at $HOME/src/ensembl/modules/Bio/EnsEMBL/DBSQL/DBConnection.pm line 290.

-------------------- EXCEPTION --------------------
MSG: Could not connect to database homo_sapiens_core_63_37 as user anonymous using [DBI:mysql:database=homo_sapiens_core_63_37;host=ensembldb.ensembl.org;port=5306] as a locator:
Unknown MySQL server host 'ensembldb.ensembl.org' (2)
</code></pre>

If you select the database option rather than using a cache Ensembl VEP will try to connect to the public MySQL server at ensembldb.ensembl.org. Occasionally the server may break connection with your process, which causes this error. This can happen when the server is busy, or due to various network issues. Consider using the [caching system](/help/articles/vep-annotation-sources#cache). Using a cache and fasta file is the most effcient way to run Ensembl VEP

<span id="vep-windows"></span>

### Q: Can I use Ensembl VEP on Windows?

Yes - see the [documentation](/help/articles/vep-download-and-install#windows) for a few different ways to get the Ensembl VEP running on Windows.

<span id="vep-custom-assemblies"></span>

### Q: Can I use Ensembl VEP with species and assemblies which are not available in Ensembl?

Yes - you can run Ensembl VEP on any species you have data for by providing a custom gene annotation in [GFF/GTF](/help/articles/vep-annotation-sources#gff) and genome sequence in [FASTA](/help/articles/vep-annotation-sources#fasta) file, like so:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i input.vcf --gff data.gff.gz --fasta genome.fa.gz
</code></pre>

### Q: Can I use Ensembl VEP with T2T-CHM13 and other human assemblies?

Yes - you can run Ensembl VEP using [Human Pangenome Reference Consortium (HPRC)](https://humanpangenome.org/) data by following the instructions on how to [use Ensembl VEP with HPRC assemblies](/help/articles/vep-examples-and-use-cases#pangenomes).

<span id="download-sift-polyphen"></span>

### Q: Can I download all of the SIFT and/or PolyPhen predictions?

The Ensembl Variation database and the human Ensembl VEP cache file contain precalculated SIFT and PolyPhen-2 predictions for every possible amino acid change in every translated protein product in Ensembl. Since these data are huge, we store them in a [compressed format](https://jun2026.archive.ensembl.org/info/genome/variation/prediction/protein_function.html#nsSNP_data_format).

There are different approaches to download SIFT/PolyPhen-2 data:

- Using the [PolyPhen_SIFT plugin](/help/articles/vep-plugin-catalogue#PolyPhen_SIFT):
  - For any species with predictions in our Ensembl databases, the plugin is able to download the predictions data into a local SQLite database for offline use. PolyPhen predictions are only available for human data.
  - We also provide a downloadble SQLite database containing PolyPhen/SIFT predictions based on [Human Pangenome Reference Consortium (HPRC)](https://humanpangenome.org) and GRCh38 assemblies. For more information, refer to [Missense deleteriousness predictions](/help/articles/vep-examples-and-use-cases#PolyPhen_SIFT) in HPRC assemblies.
- Using our **Perl API**:
  - Fetch a [`ProteinFunctionPredictionMatrix`](https://jun2026.archive.ensembl.org/info/docs/Doxygen/variation-api/classBio_1_1EnsEMBL_1_1Variation_1_1ProteinFunctionPredictionMatrix.html) for your protein of interest and then call its [`get_prediction()`](https://jun2026.archive.ensembl.org/info/docs/Doxygen/variation-api/classBio_1_1EnsEMBL_1_1Variation_1_1ProteinFunctionPredictionMatrix.html#af6346bcc5c4c28281e3c9a009ffcb15d) method to get the score for a particular position and amino acid, looping over all possible amino acids for your position.
  - You would need to work out which peptide position your codon maps to, but there are methods in the [`TranscriptVariation`](https://jun2026.archive.ensembl.org/info/docs/Doxygen/variation-api/classBio_1_1EnsEMBL_1_1Variation_1_1TranscriptVariation.html) class that should help you (probably [`translation_start()`](https://jun2026.archive.ensembl.org/info/docs/Doxygen/variation-api/classBio_1_1EnsEMBL_1_1Variation_1_1BaseTranscriptVariation.html#acfc84f951919f445624545afbd5da0a8) and [`translation_end()`](https://jun2026.archive.ensembl.org/info/docs/Doxygen/variation-api/classBio_1_1EnsEMBL_1_1Variation_1_1BaseTranscriptVariation.html#ae32d5894a6466c7bf0fa02e6d200d038)).
