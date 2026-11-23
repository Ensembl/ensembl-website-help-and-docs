---
title: VEP release history
description: Changes in VEP release 116 and earlier releases.
slug: vep-cli-release-history
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

# VEP release history

These are historical release notes, ending with release 116 (June 2026). Options, datasets and services mentioned in older entries may have changed or been retired; use the current [option reference](/help/articles/running-vep) for the release documented here.

<span id="new"></span>

## What's new?

### New in version 116 *(June 2026)*

- New and updated Ensembl VEP plugin(s) (supported on CLI, Web and REST):
  - [ProtVar](https://github.com/Ensembl/VEP_plugins/blob/release/116/ProtVar.pm) - provides contextualised information for missense variation from the [ProtVar Tool](https://www.ebi.ac.uk/ProtVar/), including impact predictions on destabilisation of protein structures, overlapping protein pockets, and protein-protein interaction interfaces.
  - [OpenTargets](https://github.com/Ensembl/VEP_plugins/blob/release/116/OpenTargets.pm) - Redesigned to work with the updated OpenTargets resource, this plugin integrates data from from the [OpenTargets Platform](https://platform.opentargets.org/), a target identification tool that includes comprehensive variant annotation and the results of state-of-the-art large-scale statistical analyses, including fine-mapping, colocalisation, and locus-to-gene assignment across all complex and molecular traits.
  - [EVE](https://github.com/Ensembl/VEP_plugins/blob/release/116/EVE.pm) - The EVE plugin has been updated and expanded to additionally report scores from the recent [popEVE publication.](https://www.nature.com/articles/s41588-025-02400-1) Where a deep generative model combining evolutionary and human population data was devleoped to estimate variant deleteriousness on a proteome-wide scale.
- New Ensembl VEP plugin(s) (supported on CLI):
  - [gnomADMT](https://github.com/Ensembl/VEP_plugins/blob/release/116/gnomADMT.pm) - retrieves allele frequencies for mitochondrial variants from the gnomAD genomes mitochondrial annotations files, enabling annotation of MT variants with allele frequencies.
  - [PromoterAI](https://github.com/Ensembl/VEP_plugins/blob/release/116/PromoterAI.pm) - a plugin that adds Illumina's PromoterAI scores to promoter variants, predicting their impact on gene expression.
- Additionally:
  - Updated plugin data for dbNSFP -\> version 5.3.1.
  - Deprecated neXtprot and postGAP plugins due to lack of data availability.

<span id="history"></span>

### Previous version history - from version 88:

<span id="div_history"></span>

### New in version 115 *(September 2025)*

- Added Ensembl VEP support for annotating structural variants with allele frequencies from gnomAD and clinical significance (CLINSIG) from ClinVar.
- Added Ensembl VEP and Ensembl Variation API support for the new [ClinVar somatic classifications.](https://doi.org/10.1093/nar/gkae1090)
- We have enabled support for [GENCODE promoters,](https://www.gencodegenes.org/pages/promoter_windows/) variants falling within them can now be annotated with details of the promoter
- New plugin (on CLI):
  - [MechPredict](https://github.com/Ensembl/VEP_plugins/blob/release/116/MechPredict.pm)

### New in version 114 *(May 2025)*

- MAVE data has been updated from the latest version of MaveDB, representing a nearly 6.5 fold increase in variants covered (~1.2 million to ~7.7 million).
- Support for https protocol when downloading FTP files and adding GitHub Token to increase rate limit in Ensembl VEP install script.
- Allele frequency from NIH AllOfUs study is now available in the web Ensembl VEP.
- Plugin support added to REST for:
  - [Paralogues](https://github.com/Ensembl/VEP_plugins/blob/release/116/Paralogues.pm)
- Plugin data version updated:
  - [dbNSFP](https://github.com/Ensembl/VEP_plugins/blob/release/116/dbNSFP.pm) (from 4.7c to 4.9c)
  - [LOEUF](https://github.com/Ensembl/VEP_plugins/blob/release/116/LOEUF.pm) (from gnomAD v2.1.1 to gnomAD v4.1)
- Plugin deprecated:
  - [DisGeNET](https://github.com/Ensembl/VEP_plugins/blob/release/113/DisGeNET.pm)
  - [Mastermind](https://github.com/Ensembl/VEP_plugins/blob/release/116/Mastermind.pm) (Only from REST)

### New in version 113 *(October 2024)*

- gnomAD frequency data updated to v4.1 for both genomes and exomes.
- Support for GENCODE primary transcript set added. See, [--gencode_primary](/help/articles/vep-filtering-and-qc-options#opt_gencode_primary) and [--flag_gencode_primary](/help/articles/vep-filtering-and-qc-options#opt_flag_gencode_primary).
- Support added for [--mane](/help/articles/vep-identifiers#opt_mane), [--mane_select](/help/articles/vep-identifiers#opt_mane_select), and [--canonical](/help/articles/vep-identifiers#opt_canonical) when GFF/GTF file used as annotation source.
- Nextflow Ensembl VEP now supports other input data formats besides VCF. For supported formats see - [Data formats](/help/articles/vep-data-formats#input).
- Plugin support added to REST and Web for:
  - [RiboseqORFs](https://github.com/Ensembl/VEP_plugins/blob/release/116/RiboseqORFs.pm)
  - [REVEL](https://github.com/Ensembl/VEP_plugins/blob/release/116/REVEL.pm)
  - [ClinPred](https://github.com/Ensembl/VEP_plugins/blob/release/116/ClinPred.pm)
- Plugin support added to Web for:
  - [Paralogues](https://github.com/Ensembl/VEP_plugins/blob/release/116/Paralogues.pm)
- Plugin support added to REST for:
  - [LOEUF](https://github.com/Ensembl/VEP_plugins/blob/release/116/LOEUF.pm)
- Plugin data version updated for CADD (v1.6 to v1.7) and dbNSFP (4.5c to 4.7c).

### New in version 112 *(May 2024)*

- Enhanced Structural Variant Support:
  - Added support for CNV:TR
  - Enabled the use of chromosome synonyms in breakends
  - Report consequences for each breakend and enable the input of single breakends
- New plugins (supported on CLI, Web and REST):
  - [AlphaMissense](https://github.com/Ensembl/VEP_plugins/blob/release/116/AlphaMissense.pm) - annotates missense variants with the pre-computed AlphaMissense pathogenicity scores. AlphaMissense is a deep learning model developed by Google DeepMind that predicts the pathogenicity of single nucleotide missense variants.
- New plugins (supported on CLI and Web):
  - [RiboseqORFs](https://github.com/Ensembl/VEP_plugins/blob/release/116/RiboseqORFs.pm) - uses a standardized catalog of human Ribo-seq ORFs to re-calculate consequences for variants located in these translated regions
- New plugins (supported on CLI):
  - [Paralogues](https://github.com/Ensembl/VEP_plugins/blob/release/116/Paralogues.pm) - fetches variants overlapping the genomic coordinates of amino acids aligned between paralogue proteins
  - [AVADA](https://github.com/Ensembl/VEP_plugins/blob/release/116/AVADA.pm) - Automatic VAriant evidence DAtabase is a novel machine learning tool that uses natural language processing to automatically identify pathogenic genetic variant evidence in full-text primary literature about monogenic disease and convert it to genomic coordinates
  - [GeneBe](https://github.com/Ensembl/VEP_plugins/blob/release/116/GeneBe.pm) - A plugin kindly contributed by the GeneBe team, it retrieves automatic ACMG variant classification data from https://genebe.net/
  - [PhenotypeOrthologous](https://github.com/Ensembl/VEP_plugins/blob/release/116/PhenotypeOrthologous.pm) A VEP plugin that retrieves phenotype information associated with orthologous genes from model organisms
- Plugin support added to REST and Web for:
  - [CADD_SV](https://github.com/Ensembl/VEP_plugins/blob/release/116/CADD.pm)
  - [CADD](https://github.com/Ensembl/VEP_plugins/blob/release/116/CADD.pm) scores for *Sus scrofa*
  - [Dosage Sensitivity](https://github.com/Ensembl/VEP_plugins/blob/release/116/DosageSensitivity.pm)
  - [Enformer](https://github.com/Ensembl/VEP_plugins/blob/release/116/Enformer.pm)

### New in version 111 *(January 2024)*

- New option [--individual_zyg](/help/articles/vep-output-options#opt_individual_zyg) returns a single list of individuals and their zygosity (instead of a separate line of output for each individual and variant combination like in [--individual](/help/articles/vep-output-options#opt_individual))
- [Custom annotation](/help/articles/vep-custom-annotations) has been improved with the following options:
  - [num_records](/help/articles/vep-custom-annotations#opt_num_records) to limit the number of matching records (50 by default)
  - [summary_stats](/help/articles/vep-custom-annotations#opt_summary_stats) to calculate summary statistics (min, mean, max, count, sum) using annotation scores (not used by default)
- New plugin (supported on CLI, REST and web):
  - [OpenTargets](https://github.com/Ensembl/VEP_plugins/blob/release/116/OpenTargets.pm) - Report trait associations from Open Targets Platform through GWAS- or QTL-gene associations, including locus-to-gene (L2G) scores for GWAS loci
- New plugin (supported on CLI and REST):
  - [Enformer](https://github.com/Ensembl/VEP_plugins/blob/release/116/Enformer.pm) - adds pre-calculated predictions of variant impact on gene expression
- New plugins (supported on CLI):
  - [BayesDel](https://github.com/Ensembl/VEP_plugins/blob/release/116/BayesDel.pm) - adds a deleteriousness meta-score combining multiple deleteriousness predictors
  - [DeNovo](https://github.com/Ensembl/VEP_plugins/blob/release/116/DeNovo.pm) - identifies de novo variants in a VCF file. This plugin requires a pedigree (.ped) file
  - [SpliceVault](https://github.com/Ensembl/VEP_plugins/blob/release/116/SpliceVault.pm) - predicts exon-skipping events and activated cryptic splice sites based on the most common mis-splicing events around a splice site
  - [DosageSensitivity](https://github.com/Ensembl/VEP_plugins/blob/release/116/DosageSensitivity.pm) - annotates the likelihood of a gene being haploinsufficient or triplosensitive
  - [VARITY](https://github.com/Ensembl/VEP_plugins/blob/release/116/VARITY.pm) - adds pre-calculated pathogenicity scores of rare human missense variants

### New in version 110 *(July 2023)*

- New plugins (supported on CLI):
  - [TranscriptAnnotator](https://github.com/Ensembl/VEP_plugins/blob/release/116/TranscriptAnnotator.pm) - an Ensembl VEP plugin that annotates variant-transcript pairs
- New Plugins (supported on CLI, REST and web):
  - [Geno2MP](https://github.com/Ensembl/VEP_plugins/blob/release/116/Geno2MP.pm) - adds information from Geno2MP, a web-accessible database of rare variant genotypes linked to phenotypic information
  - [MaveDB](https://github.com/Ensembl/VEP_plugins/blob/release/116/MaveDB.pm) - adds information from MaveDB, a database that holds experimentally determined measures of variant effect

### New in version 109 *(February 2023)*

- [Ensembl VEP Docker image](https://hub.docker.com/r/ensemblorg/ensembl-vep) now includes all Ensembl VEP plugins
- New plugin (supported on CLI):
  - [GWAS](https://github.com/Ensembl/VEP_plugins/blob/release/116/GWAS.pm) - reports genome-wide association study data from GWAS catalog
- Plugins now available in REST and web:
  - [UTRAnnotator](https://github.com/Ensembl/VEP_plugins/blob/release/116/UTRAnnotator.pm) - annotates the effect of 5' UTR variant especially for variant creating/disrupting upstream ORFs
- Plugins now available in REST:
  - [NMD](https://github.com/Ensembl/VEP_plugins/blob/release/116/NMD.pm) - predicts if a variant allows transcript to escape nonsense-mediated mRNA decay based on certain rules
- Plugin LOEUF replaces Loftool in the web with more recent ‘loss-of-function’ score for variants
- Deprecated Plugins:
  - [miRNA](https://github.com/Ensembl/VEP_plugins/blob/release/116/miRNA.pm) - this plugin was fully deprecated in favour of --mirna flag (in web and REST)
  - [ExAC](https://github.com/Ensembl/VEP_plugins/blob/release/116/ExAC.pm) - this plugin was deprecated given that Ensembl VEP cache includes ExAC data as part of gnomAD
- SIFT version has been updated from 5.2.2 to 6.2.1 (except for human GRCh37)
- PolyPhen-2 version has been updated from 2.2.2 to 2.2.3 (except for human GRCh37)

### New in version 108 *(October 2022)*

- New plugin (supported on CLI, REST, and web):
  - [mutfunc](https://github.com/Ensembl/VEP_plugins/blob/release/116/mutfunc.pm) - predicts destabilization of protein structure, interaction and others features by a variant (GRCh38 only)
- Plugin feature extension:
  - [IntAct](https://github.com/Ensembl/VEP_plugins/blob/release/116/IntAct.pm) - 4 new species are now supported - rat, chicken (red jungle fowl), yeast, and arabidopsis

### New in version 107 *(July 2022)*

- New plugin (supported on CLI, REST, and web):
  - [EVE](https://github.com/Ensembl/VEP_plugins/blob/release/116/EVE.pm) - annotates human variants using EVA classification method based solely on evolutionary sequences (GRCh38 only)
- Plugins now available in REST and web (already available in CLI):
  - [GO](https://github.com/Ensembl/VEP_plugins/blob/release/116/GO.pm) - retrieves Gene Ontology terms associated with transcripts/translations
  - [IntAct](https://github.com/Ensembl/VEP_plugins/blob/release/116/IntAct.pm) - annotates human variants which fall in interaction sites, as described in the IntAct database
- Plugins now available in web (already available in CLI):
  - [NMD](https://github.com/Ensembl/VEP_plugins/blob/release/116/NMD.pm) - predicts if a stop_gained variant allows transcript to escape nonsense-mediated mRNA decay based on certain rules
- Readthrough transcripts are now removed from cache
- Transcripts of biotype ‘artifact’ which are artifactual duplication are now removed from cache and not accessible using database
- gnomaAD allele frequencies are now available for exomes and genomes separately through —af_gnomade and —af_gnomadg options respectively. The —af_gnomad option have same function as --af_gnomade.

### New in version 106 *(April 2022)*

- New plugins for command line use:
  - [IntAct](https://github.com/Ensembl/VEP_plugins/blob/release/116/IntAct.pm) - annotates human variants which fall in interaction sites, as described in the IntAct database
  - [CAPICE](https://github.com/Ensembl/VEP_plugins/blob/release/116/CAPICE.pm) - integrates scored from a machine-learning-based method for prioritizing pathogenic variants (GRCh37 only)
- Nextflow pipeline:
  - A new configurable pipeline is available to run Ensembl VEP efficiently on large scale VCF

### New in version 105 *(December 2021)*

- 3 new Sequence Ontology terms are reported for more detailed splice consequence annotation
  - splice_donor_5th_base_variant ([SO:0001787](http://www.sequenceontology.org/miso/current_release/term/SO:0001787))
  - splice_donor_region_variant ([SO:0002170](http://www.sequenceontology.org/miso/current_release/term/SO:0002170))
  - splice_polypyrimidine_tract_variant ([SO:0002169](http://www.sequenceontology.org/miso/current_release/term/SO:0002169))
- New plugins
  - [ClinPred](https://github.com/Ensembl/VEP_plugins/blob/release/116/ClinPred.pm) - adds pre-calculated scores from ClinPred which helps identify disease-relevant missense variants
  - [NMD](https://github.com/Ensembl/VEP_plugins/blob/release/116/NMD.pm) - predicts whether a stop-gained variant will allow a transcript to escape nonsense-mediated decay
- Condel scores are no longer available via the Ensembl VEP web interface as they have not been updated since 2014 and newer scores like CADD and REVEL are available

### New in version 104 *(May 2021)*

- Human GRCh37 cache files now include dbSNP 154!
- [--var_synonyms](/help/articles/vep-co-located-variants#opt_var_synonyms) output structure has been altered when used with [--json](/help/articles/vep-output-format-options#opt_json)

<!-- -->

- Ensembl VEP Plugins:
  - [dbNSFP](https://github.com/Ensembl/VEP_plugins/blob/release/116/dbNSFP.pm) - now supports matching by peptides
  - [SpliceAI](https://github.com/Ensembl/VEP_plugins/blob/release/116/SpliceAI.pm) - now compares gene symbols to improve score accuracy

### New in version 103 *(February 2021)*

- **New:** Variant Recoder is now available as a web tool
- Variant Recoder output is now allele specific

<!-- -->

- Web Ensembl VEP Options:
  - Variant Synonyms are now available through the web interface
  - MasterMind results are available through the REST and web interfaces

<!-- -->

- Ensembl VEP Options:
  - [--mane](/help/articles/vep-identifiers#opt_mane) : Now provides additional MANE Plus Clinical annotations alongside MANE Select
  - [--mane_select](/help/articles/vep-identifiers#opt_mane_select) : Returns MANE Select annotations

### New in version 102 *(November 2020)*

- Ensembl VEP options:
  - [--uniprot](/help/articles/vep-identifiers#opt_uniprot): Now we report precise Ensembl translation to UniProt isoform mappings.
  - [--spdi](/help/articles/vep-identifiers#opt_spdi) - **new**: Add genomic [SPDI](https://www.ncbi.nlm.nih.gov/variation/notation/) notation.
- Web Ensembl VEP options:
  - Shifting variants in the 3' direction with [--shift_3prime](/help/articles/vep-output-options#opt_shift_3prime) and [--shift_genomic](/help/articles/vep-output-options#opt_shift_genomic) is now supported through the web interface.
  - [SpliceAI](https://github.com/Ensembl/VEP_plugins/blob/release/116/SpliceAI.pm) - **new**: SpliceAI pre-calculated scores are available through the web interface.
- Ensembl VEP filter options:
  - [--soft_filter](/help/articles/filtering-vep-results#opt_softfilter) - **new**: Option to only flag the failing variation in the FILTER column and keep the entries in the output VCF file.

### New in version version 101 *(August 2020)*

- New options:
  - [--var_synonyms](/help/articles/vep-co-located-variants#opt_var_synonyms): Report known synonyms for colocated variants. Must be used with [--cache](/help/articles/vep-cache-options#opt_cache).
- Ensembl VEP plugins:
  - [neXtProt](https://github.com/Ensembl/VEP_plugins/blob/release/116/neXtProt.pm) - **new**: neXtProt retrieves comprehensive human-centric protein-related data for missense variants

### New in version 100 *(April 2020)*

- Human GRCh37 variant and phenotype data has been updated with multiple data sets including dbSNP153, ClinVar's 201912 release and COSMIC release 90
- The GRCh37 RefSeq transcript set has been updated to NCBI's 1st November 2019 release (initially annotated on GCF_000001405.25)!
- New options:
  - [--shift_3prime](/help/articles/vep-output-options#opt_shift_3prime): Right aligns all variants relative to their associated transcripts prior to consequence calculation
  - [--shift_genomic](/help/articles/vep-output-options#opt_shift_genomic): Right aligns all variants, including intergenic variants, before consequence calculation and updates the *Location* field
- Ensembl VEP plugins:
  - [SpliceAI](https://github.com/Ensembl/VEP_plugins/blob/release/116/SpliceAI.pm) - **new**: SpliceAI is a deep neural network, developed by Illumina, Inc that predicts splice junctions from an arbitrary pre-mRNA transcript sequence.

### New in version 99 *(January 2020)*

- Human GRCh38 cache files now contain variants from dbSNP153
- New options have been added to REST:
  - vcf_string: Ensembl VEP can now provide a VCF-like string representing the input variant
  - transcript_version: Add version numbers to Ensembl transcript identifiers
  - SpliceRegion: Provides granular predictions of splicing effects ([Details](https://raw.githubusercontent.com/ensembl-variation/VEP_plugins/master/SpliceRegion.pm))
  - LoF: LOFTEE implements a set of filters to predict LoF (loss-of-function) variants. ([Details](https://github.com/konradjk/loftee/blob/master/README.md))

### New in version 98 *(September 2019)*

- Human GRCh38 cache files now contain variants from dbSNP152
- This employs a new clustering strategy which may result in different rsIDs being reported as known variants for some insertions and deletions - for more information see [here](http://www.ensembl.info/2019/08/29/coming-soon-to-an-ensembl-near-you-dbsnp-2-0/)
- [--clin_sig_allele](/help/articles/vep-co-located-variants#opt_clin_sig_allele) has been updated to be used by default
- New options:
  - [--custom_multi_allelic](/help/articles/vep-other-annotation-sources#opt_custom_multi_allelic): prevents Ensembl VEP from assuming that comma separated lists in custom annotations are allele specific
- MANE attributes are now included within Ensembl VEP cache files, web Ensembl VEP and REST
- Ensembl VEP plugins:
  - [satMutMPRA](https://github.com/Ensembl/VEP_plugins/blob/release/116/satMutMPRA.pm) - **new**: measures variant effects on gene RNA expression for 21 regulatory elements
- Ensembl VEP Installer:
  - HTSLib v1.9 is now installed by default (previously v1.3.2)
  - Bio::DB::HTS v2.11 is now installed by default (previously v2.9)
  - New option 'PLUGINSDIR' allows you to specify the installation directory for plugins

### New in version 97 *(July 2019)*

- Allele-specific clinical significance reported (it was previously variant-specific).
- New options:
  - [--clin_sig_allele](/help/articles/vep-co-located-variants#opt_clin_sig_allele): report allele specific clinical significance.
  - [--mane](/help/articles/vep-identifiers#opt_mane): report if a transcript is the MANE Select.
  - [--max_sv_size](/help/articles/vep-basic-options#opt_max_sv_size): extend the maximum Structural Variant size Ensembl VEP can process.
  - [--no_check_variants_order](/help/articles/vep-basic-options#opt_no_check_variants_order): permit the use of unsorted input files (WARNING - this is slow and requires more memory).
  - [--overlaps](/help/articles/vep-output-options#opt_overlaps): report the proportion and length of a transcript overlapped by a structural variant in VCF format.
- Include the [--mane](/help/articles/vep-identifiers#opt_mane) option into the [--everything](/help/articles/vep-basic-options#opt_everything) group option.
- Update [--pick](/help/articles/vep-filtering-and-qc-options#opt_pick) and [--pick_order](/help/articles/vep-filtering-and-qc-options#opt_pick_order) to support MANE Select transcripts.
- Check if the input variants are ordered: non ordered variants slow down Ensembl VEP and require more memory.
- Skip annotation of complex and long structural variants and display a warning message.
- Variant recoder: add an option [--vcf_string](https://jun2026.archive.ensembl.org/info/docs/tools/vep/recoder/index.html#opt_vcf_string) to return results in VCF format.
- Ensembl VEP plugins:
  - [FunMotifs](https://github.com/Ensembl/VEP_plugins/blob/release/116/FunMotifs.pm) - **new**: provide information about overlapping tissue-specific transcription factor motifs.
  - [Mastermind](https://github.com/Ensembl/VEP_plugins/blob/release/116/Mastermind.pm) - **new**: reports variants that have clinical evidence cited in the medical literature.
  - [StructuralVariantOverlap](https://github.com/Ensembl/VEP_plugins/blob/release/116/StructuralVariantOverlap.pm) - **new**: provide information from overlapping structural variants.
  - [G2P](https://github.com/Ensembl/VEP_plugins/blob/release/116/G2P.pm) - **update**: now the plugin can be run offline.
  - [Phenotypes](https://github.com/Ensembl/VEP_plugins/blob/release/116/Phenotypes.pm) - **update**: change the format of the data file (from BED to GVF).
- Ensembl VEP web tool: the transcript identifiers are now returned with versions unless otherwise specified.
- Ensembl VEP installer: tabix-indexed variant cache files are now installed by default.

### New in version 96 *(April 2019)*

- Add **SPDI** format for Ensembl VEP (input) and Variant Recoder (input and output).
- Update Ensembl VEP cache with **gnomAD 2.1** (human).
- Update the Docker Ensembl VEP base image to **Ubuntu 18.04**.
- Retire deprecated flags: --gmaf, --maf_1kg, --maf_esp, --maf_exac, --check_alleles, --html, --gvf.
- Retire legacy code about the pileup input format, which is no longer supported.
- Deprecate the installation flag "--VERSION"
- Force numbers to be encoded as numbers in JSON output
- Ensembl VEP plugins:
  - [NearestExonJB](https://github.com/Ensembl/VEP_plugins/blob/release/116/NearestExonJB.pm) - **new**: find the nearest exon junction boundary to a coding sequence variant.
  - [Conservation](https://github.com/Ensembl/VEP_plugins/blob/release/116/Conservation.pm) - update: can use BigWig files instead of the Ensembl Compara database.
  - [dbNSFP](https://github.com/Ensembl/VEP_plugins/blob/release/116/dbNSFP.pm) - update: support of the dbNSFP data version 4.
  - [Phenotypes](https://github.com/Ensembl/VEP_plugins/blob/release/116/Phenotypes.pm) - update: possibility to report the phenotype description(s) and other information.
  - [PostGAP](https://github.com/Ensembl/VEP_plugins/blob/release/116/PostGAP.pm) - update: replace the plugin name POSTGAP to PostGAP.

### New in version 95 *(January 2019)*

- The Ensembl VEP parser is now more permissive for the GFF files (ID attribute only required for genes and transcripts)
- Add new option [--show_ref_allele](/help/articles/vep-output-options#opt_show_ref_allele) to include the allele reference in the VEP default output and the tab output formats
- Add a warning message when the Ensembl VEP annotations INFO field hasn't been found/recognised in the VCF input file
- Ensembl VEP Docker image:
  - Reduce the size of the Ensembl VEP Docker image by about 45%.
  - Include the Linkage disequilibrium script in the Ensembl VEP Docker image, making possible to run the LD plugin
- New Ensembl VEP plugins:
  - [Reference quality](https://github.com/Ensembl/VEP_plugins/blob/release/116/ReferenceQuality.pm)
  - [OpenTargets results (POSTGAP)](https://github.com/Ensembl/VEP_plugins/blob/release/116/POSTGAP.pm)
  - [Single letter amino acid for HGVS](https://github.com/Ensembl/VEP_plugins/blob/release/116/SingleLetterAA.pm)

### New in version 94 *(October 2018)*

- RefSeq transcript version updated.
- Minor updates on the [Ensembl VEP web tool](https://jun2026.archive.ensembl.org/Tools/VEP) interface.
- When the input data format is not specified on the command line, Ensembl VEP attempts to detect it. The assumed format is now reported in verbose mode ([--verbose](/help/articles/vep-basic-options#opt_verbose)).
- Ensembl VEP assigns assigned the consequence types *TF_binding_site_variant*, *TFBS_ablation*, *TFBS_fusion*, *TFBS_amplification* and *TFBS_translocation* to human and mouse variants which overlapped motif features. These annotations will not be available in VEP caches for human in release 94 so must be added as a [custom annotation](/help/articles/vep-custom-annotations).

### New in version 93 *(July 2018)*

- Update the JSON output format (allele frequencies) for the [Ensembl REST - Ensembl VEP](https://rest.ensembl.org/#VEP) endpoints. [See more information](https://github.com/Ensembl/ensembl-rest/wiki/Change-log#70---2018-06).
- The new Ensembl release brings more frequency data from [gnomAD](http://gnomad.broadinstitute.org/).
- Add the possibility to print the content of the FILTER column (from the VCF custom annotation files) in the output.
- Include the [Ensembl/ensembl-xs](https://github.com/Ensembl/ensembl-xs) repository in Docker image to speed up the Ensembl VEP container.
- Add a new consequence 'extended_intronic_splice_region_variant' in the [SpliceRegion](https://github.com/Ensembl/VEP_plugins/blob/release/116/SpliceRegion.pm) Ensembl VEP plugin.

### New in version 92 *(April 2018)*

- New Ensembl VEP plugin [REVEL](https://www.ncbi.nlm.nih.gov/pubmed/27666373) (see [REVEL plugin](https://github.com/Ensembl/VEP_plugins/blob/release/92/REVEL.pm)).
- Get ambiguity code with `--ambiguity`.
- [GFF/GTF files](/help/articles/vep-annotation-sources#gff) with exons assigned to multiple transcripts are now supported.
- Improved 1000 Genomes Project frequencies.

### New in version 91 *(December 2017)*

- New input format "[region](/help/articles/vep-data-formats#region)" allows REST-style input to Ensembl VEP.
- Replace your input variant reference allele with the correct one from the genome with [--lookup_ref](/help/articles/vep-filtering-and-qc-options#opt_lookup_ref).
- Add version numbers to Ensembl transcripts with [--transcript_version](/help/articles/vep-identifiers#opt_transcript_version).

### New in version 90 *(August 2017)*

- [gnomAD](http://gnomad.broadinstitute.org/) exomes allele frequencies now available with [--af_gnomad](/help/articles/vep-co-located-variants#opt_af_gnomade), replacing ExAC. gnomAD genomes and ExAC are [available via custom annotation](/help/articles/vep-examples-and-use-cases#gnomad).
- Ensembl VEP is now available as a [Docker image](/help/articles/download-and-install-vep#docker).
- RefSeq transcripts in Ensembl VEP cache files are now ["corrected" from the reference genome sequence](/help/articles/vep-other-information#refseq).
- Ensembl VEP's algorithm for matching colocated known variants has been overhauled - [details](/help/articles/vep-other-information#colocated).
- Change Ensembl VEP's default (5kb) up/downstream distance with [--distance](/help/articles/vep-output-options#opt_distance). This supercedes the functionality of the UpDownDistance Ensembl VEP plugin.
- Feed input directly to Ensembl VEP with [--input_data](/help/articles/vep-basic-options#opt_input_data).
- Suppress header output with [--no_headers](/help/articles/vep-output-options#opt_no_headers).
- Detailed [installation instructions for Bio::DB::BigFile](/help/articles/download-and-install-vep#bigfile) to access bigWig custom annotation files.

### New in version 89 *(May 2017)*

- exclude known variants with unknown (null) alleles with [--exclude_null_alleles](/help/articles/vep-co-located-variants#opt_exclude_null_alleles).
- write compressed output with [--compress_output](/help/articles/vep-output-format-options#opt_compress_output).
- improved matching of alleles in [custom VCF files](/help/articles/vep-custom-annotations).
- API perldoc documentation added.

### New in version 88 *(March 2017)*

- ensembl-vep is now the officially supported version of Ensembl VEP
- Documentation updated to reflect switch to ensembl-vep. See the [Ensembl 87 VEP script PDF](https://github.com/Ensembl/public-plugins/blob/release/87/docs/htdocs/info/docs/tools/vep/script/VEP_script_documentation.pdf) for documentation of the obsolete ensembl-tools Ensembl VEP.
- The Ensembl VEP script is now named simply `vep` (formerly `variant_effect_predictor.pl` or `vep.pl`)
- Directly use tabix-indexed [GFF/GTF files as annotation sources](/help/articles/vep-annotation-sources#gff)
- Allele-specific reporting of frequencies ([--af](/help/articles/vep-co-located-variants#opt_af) and more) and [custom VCF annotations](/help/articles/vep-custom-annotations)
- [--check_existing](/help/articles/vep-co-located-variants#opt_check_existing) now compares alleles by default, disable with [--no_check_alleles](/help/articles/running-vep)
- Report the highest allele frequency observed in any population from 1000 genomes, ESP or ExAC using [--max_af](/help/articles/vep-co-located-variants#opt_max_af)
- Get genomic HGVS nomenclature with [--hgvsg](/help/articles/vep-identifiers#opt_hgvsg)
- Find the gene or transcript with the nearest transcription start site (TSS) to each input variant with [--nearest](/help/articles/vep-output-options#opt_nearest)
- [filter_vep](/help/articles/filtering-vep-results) supports field/field comparisons e.g. AFR_AF \> \#EUR_AF
- Exclude predicted (XM and XR) transcripts when using RefSeq or merged cache with [--exclude_predicted](/help/articles/vep-filtering-and-qc-options#opt_exclude_predicted)
- Filter transcripts used for annotation with [--transcript_filter](/help/articles/vep-filtering-and-qc-options#opt_transcript_filter)
- pileup input format no longer supported

<span id="old_vep_tool"></span>

### Older versions (ensembl-tools) - until version 87:

<span id="div_old_vep_tool"></span>

Versions of Ensembl VEP up to and including 87 were released as part of the ensembl-tools package. See [download links](/help/articles/download-and-install-vep#toolsversions) above.

### New in version 87 *(December 2016)*

- [Shiny new code](https://github.com/Ensembl/ensembl-vep) available for beta testing!
- Some minor speed optimisations
- Improve checks for valid chromosome names in input
- [Haplosaurus](https://github.com/Ensembl/ensembl-vep#haplo) beta released - generate whole-transcript haplotype sequences from phased genotype data

### New in version 86 *(October 2016)*

- Chromosome synonyms supported when using Ensembl VEP caches; may be loaded manually with [--synonyms](/help/articles/vep-identifiers#opt_synonyms)

### New in version 85 *(July 2016)*

- [--pick](/help/articles/vep-filtering-and-qc-options#opt_pick) now uses translated length instead of genomic transcript length
- Support for epigenomes in regulatory features

### New in version 84 *(March 2016)*

- Add [tab-delimited](/help/articles/vep-data-formats#tab) output option
- Add [transcript flags](/help/articles/vep-data-formats#output) indicating if the transcript is 5'- or 3'-incomplete
- Improve annotation of long variants where invariant parts of the alternate allele overlap splice regions

### New in version 83 *(December 2015)*

- Speed:
  - Basic consequence calculations up to 2x faster than version 82
  - HGVS calculations up to 10x faster
  - FASTA sequence retrieval implements caching
- Add [ExAC project](http://exac.broadinstitute.org/) frequencies with [--af_exac](/help/articles/vep-co-located-variants#opt_af_exac)
- [APPRIS](https://jun2026.archive.ensembl.org/glossary/ENSGLOSSARY_0000012) isoform annotations now available with [--appris](/help/articles/vep-identifiers#opt_appris) and used by [--pick](/help/articles/vep-filtering-and-qc-options#opt_pick) and others to prioritise VEP annotations

### New in version 82 *(September 2015)*

- [Faster FASTA file access](/help/articles/download-and-install-vep#installer) using Bio::DB::HTS/htslib and bgzipped FASTA files
- [Flag genes](/help/articles/vep-output-options#opt_gene_phenotype) with phenotype associations
- Some plugins now available for use via the [web](https://jun2026.archive.ensembl.org/Tools/VEP) and [REST](http://rest.ensembl.org/#VEP) interfaces

### New in version 81 *(July 2015)*

- Plugin registry means plugins can be installed from the [Ensembl VEP installer](/help/articles/download-and-install-vep#installer)
- GFF format now supported by Ensembl VEP's [cache converter](/help/articles/vep-annotation-sources#gff)
- Fixes and improvements for sequence retrieval from FASTA files

### New in version 80 *(May 2015)*

- [Flag added](/help/articles/vep-data-formats#output) indicating if an overlapping known variant is associated with a phenotype, disease or trait
- HGVS notations are now 3'-shifted by default (use [--shift_hgvs](/help/articles/vep-identifiers#opt_shift_hgvs) to force enable/disable)
- Source version information added to caches; see output file headers or use [--show_cache_info](/help/articles/vep-cache-options#opt_show_cache_info)
- Get the variant class using [--variant_class](/help/articles/vep-output-options#opt_variant_class)
- CCDS status added to categories used by [--pick](/help/articles/vep-filtering-and-qc-options#opt_pick) flag (and [others](/help/articles/vep-other-information#pick))

### New in version 79 *(March 2015)*

- Focus on performance and stability: ~100% faster than version 78 and a new test suite
- New guide to [getting Ensembl VEP running faster](/help/articles/vep-other-information#faster)
- 1000 Genomes Phase 3 data available in GRCh37 cache download (GRCh38 support was still forthcoming at the time of this release)
- [VCF output](/help/articles/vep-data-formats#vcfout) has changed slightly to match output from other tools
- Impact modifier added for each consequence type

### New in version 78 *(December 2014)*

- Customise [--pick](/help/articles/vep-filtering-and-qc-options#opt_pick) using [--pick_order](/help/articles/vep-filtering-and-qc-options#opt_pick_order)
- Get [transcript support level](https://jun2026.archive.ensembl.org/glossary/ENSGLOSSARY_0000005) using [--tsl](/help/articles/vep-identifiers#opt_tsl)

### New in version 77 *(October 2014)*

- Get the [SO](http://www.sequenceontology.org/) feature type of regulatory features using [--regulatory](/help/articles/vep-output-options#opt_regulatory) and [--biotype](/help/articles/vep-identifiers#opt_biotype)

### New in version 76 *(August 2014)*

- Ensembl VEP now supports caches from multiple assemblies ([--assembly](/help/articles/vep-basic-options#opt_assembly)) on the same software version - e.g. [human builds GRCh37 and GRCh38](/help/articles/vep-other-information#assembly)
- Protein identifiers from UniProt (SWISSPROT, TrEMBL and UniParc) now available using [--uniprot](/help/articles/vep-identifiers#opt_uniprot)
- Ensembl VEP can generate [JSON output](/help/articles/vep-data-formats#json) using [--json](/help/articles/vep-output-format-options#opt_json)
- Two new analysis set options - [--gencode_basic](/help/articles/vep-filtering-and-qc-options#opt_gencode_basic) and the merged Ensembl/RefSeq cache ([--merged](/help/articles/vep-cache-options#opt_merged))
- Non-RefSeq transcripts now excluded by default when using the RefSeq or merged cache; use `--all_refseq` to include them
- Let Ensembl VEP pick one consequence per variant allele using [--pick_allele](/help/articles/vep-filtering-and-qc-options#opt_pick_allele)
- Allele now included alongside frequency for 1000 Genomes ([--af_1kg](/help/articles/vep-co-located-variants#opt_af_1kg)) and ESP ([--af_esp](/help/articles/vep-co-located-variants#opt_af_esp)) data
- Not strictly script-related, but the [Ensembl VEP REST API](http://rest.ensembl.org/#Variation) has come out of beta!

### New in version 75 *(February 2014)*

- let Ensembl VEP pick one consequence per variant for you using [--pick](/help/articles/vep-filtering-and-qc-options#opt_pick); includes all transcript-specific data
- [gene symbol](/help/articles/vep-identifiers#opt_symbol) available in RefSeq cache and when using [--refseq](/help/articles/vep-cache-options#opt_refseq)
- Installation and use of RefSeq cache improved - remember to use [--refseq](/help/articles/vep-cache-options#opt_refseq) with your RefSeq cache!
- Added [--cache_version](/help/articles/vep-cache-options#opt_cache_version) option, primarily to aid Ensembl Genomes users.

### New in version 74 *(December 2013)*

- retrieve the [humDiv PolyPhen prediction](http://genetics.bwh.harvard.edu/wiki/!pph2/overview#prediction) instead of humVar using [--humdiv](/help/articles/vep-output-options#opt_humdiv)
- source for gene symbol available with [--symbol](/help/articles/vep-identifiers#opt_symbol)

### New in version 73 *(August 2013)*

- NHLBI-ESP frequencies available in cache ([--af_esp](/help/articles/vep-co-located-variants#opt_af_esp))
- Pubmed IDs for cited existing variants available in cache ([--pubmed](/help/articles/vep-co-located-variants#opt_pubmed))
- [Convert your cache to use tabix](/help/articles/vep-annotation-sources#manual_cache) - much faster when retrieving co-located existing variants!
- The [installer](/help/articles/download-and-install-vep#installer) can now update the Ensembl VEP to the latest version and install [FASTA files](/help/articles/vep-annotation-sources#fasta)
- **--hgnc** replaced by [--symbol](/help/articles/vep-identifiers#opt_symbol) for non-human compatibility
- HGVS strings are now part [URI-escaped](http://en.wikipedia.org/wiki/Percent-encoding) to avoid "=" sign clashes
- use [--allele_number](/help/articles/vep-output-options#opt_allele_number) to identify input alleles by their order in the VCF ALT field
- use [--total_length](/help/articles/vep-output-options#opt_total_length) to give the total length of cDNA, CDS and protein sequences
- add data from VCF INFO fields when using [custom annotations](/help/articles/vep-custom-annotations)

### New in version 72 *(June 2013)*

- Speed and stability improvements when using forking
- Filter Ensembl VEP results using [filter_vep.pl](/help/articles/filtering-vep-results)

### New in version 71 *(April 2013)*

- SIFT predictions now available for Chicken, Cow, Dog, Human, Mouse, Pig, Rat and Zebrafish

- View [summary statistics](/help/articles/vep-data-formats#stats) for Ensembl VEP runs in \[output\]\_summary.html

- Generate HTML output using `--html`

- Support for simple tab-delimited format for input of structural variant data

- Cache now contains clinical significance statuses from dbSNP for human variants

- **NOTE:** Ensembl VEP version numbers have now (from release 71) changed to match Ensembl release numbers.

### New in version 2.8 *(December 2012)*

- Easily filter out common human variants with [--filter_common](/help/articles/vep-filtering-and-qc-options#opt_filter_common)
- 1000 Genomes continental population frequencies now stored in cache files

### New in version 2.7 *(October 2012)*

- build Ensembl VEP cache files offline from GTF and FASTA files
- support for using FASTA files for sequence lookup in HGVS notations in offline/cache modes

### New in version 2.6 *(July 2012)*

- support for [structural variant](/help/articles/vep-data-formats#sv) consequences
- Sequence Ontology (SO) consequence terms now default
- script runtime 3-4x faster when using [forking](/help/articles/vep-basic-options#opt_fork)
- 1000 Genomes global MAF available in cache files
- improved memory usage

### New in version 2.5 *(May 2012)*

- SIFT and PolyPhen predictions now available for RefSeq transcripts
- retrieve cell type-specific regulatory consequences
- consequences can be retrieved based on a single individual's genotype in a VCF input file
- find overlapping structural variants
- Condel support removed from main script and moved to a plugin

### New in version 2.4 *(February 2012)*

- offline mode and new installer script make it easy to use the Ensembl VEP without the usual dependencies
- output columns configurable using the [--fields](/help/articles/vep-output-format-options#opt_fields) flag
- VCF output support expanded, can now carry all fields
- output affected exon and intron numbers with [--numbers](/help/articles/vep-output-options#opt_numbers)
- output overlapping protein domains using [--domains](/help/articles/vep-identifiers#opt_domains)
- enhanced support for LRGs
- plugins now work on variants called as intergenic

### New in version 2.3 *(December 2011)*

- add custom annotations from tabix-indexed files (BED, GFF, GTF, VCF, bigWig)
- add new functionality to the Ensembl VEP with user-written plugins
- filter input on consequence type

### New in version 2.2 *(September 2011)*

- SIFT, PolyPhen and Condel predictions and regulatory features now accessible from the [cache](/help/articles/vep-annotation-sources)
- support for calling consequences against [RefSeq](/help/articles/vep-other-information#refseq) transcripts
- variant identifiers (e.g. dbSNP rsIDs) and [HGVS notations](/help/articles/vep-other-information#hgvs) supported as input format
- variants can now be [filtered](/help/articles/vep-filtering-and-qc-options#filt) by frequency in HapMap and 1000 genomes populations
- script can be used to convert files between formats (Ensembl/VCF/Pileup/HGVS to Ensembl/VCF/Pileup)
- large amount of code moved to API modules to ensure consistency between web and script Ensembl VEP
- memory usage optimisations
- Ensembl VEP script moved to [ensembl-tools repo](https://github.com/Ensembl/ensembl-tools/tree/release/116/scripts/variant_effect_predictor)
- Added [--canonical](/help/articles/vep-identifiers#opt_canonical), [--per_gene](/help/articles/vep-filtering-and-qc-options#opt_per_gene) and [--no_intergenic](/help/articles/vep-filtering-and-qc-options#opt_no_intergenic) options

### New in version 2.1 *(June 2011)*

- ability to use local file [cache](/help/articles/vep-annotation-sources#cache) in place of or alongside connecting to an Ensembl database
- significant improvements to speed of script
- whole-genome mode now default (no disadvantage for smaller datasets)
- improved status output with progress bars
- regulatory region consequences now reinstated and improved
- modification to output file - Transcript column is now Feature, and is followed by a Feature_type column

### New in version 2.0 *(April 2011)*

- support for SIFT, PolyPhen and Condel missense predictions in human
- per-allele and compound consequence types
- support for Sequence Ontology (SO) and NCBI consequence terms
- modified output format
  - support for new output fields in Extra column
  - header section contains information on database and software versions
  - codon change shown in output
  - CDS position shown in output
  - option to output Ensembl protein identifiers
  - option to output HGVS nomenclature for variants
- support for gzipped input files
- enhanced configuration options, including the ability to read configuration from a file
- verbose output now much more useful
- whole-genome mode now more stable
- finding existing co-located variations now ~5x faster
