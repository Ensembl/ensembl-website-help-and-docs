---
slug: ftp-download
title: Downloading data from the Ensembl FTP
description: Information on where to access whole-genome data and annotation for download
---

# Accessing and downloading data from the Ensembl FTP

The new Ensembl FTP is hosted at EMBL-EBI: [`https://ftp.ebi.ac.uk/pub/ensemblorganisms/`](https://ftp.ebi.ac.uk/pub/ensemblorganisms/). 

You may download data via a browser from the FTP site, using [rsync](https://rsync.samba.org/) via the command line, or using file transfer systems such as [Globus](​​https://www.globus.org/). 


The main starting points for assembly data are `/pub/ensemblorganisms/GCA/` and `/pub/ensemblorganisms/GCF/`. To facilitate storage and download all files are [GNU Zip](https://directory.fsf.org/wiki/Gzip) compressed. These are either in the `.gz` or `.bgz` format, depending on the file type.


For rapid bulk download of files, the Ensembl FTP site is available as an end point in the [Globus File System](https://www.globus.org/). In order to access the data you need to sign up for an account with Globus, install the Globus Connect Personal software and set up a personal endpoint to download the data. The Ensembl data is hosted at the EMBL-EBI end point called "EMBL-EBI Public Data". Data from the Ensembl FTP site can then be found under the `/pub/ensemblorganisms/`. You can also [access the target directory directly from here](https://app.globus.org/file-manager?origin_id=47772002-3e5b-4fd3-b97c-18cee38d6df2&origin_path=%2Fpub%2Fensemblorganisms%2F).


The top level directory [/pub/ensemblorganisms/](https://ftp.ebi.ac.uk/pub/ensemblorganisms/README.new_ftp_structure.md) contains a [README](https://ftp.ebi.ac.uk/pub/ensemblorganisms/README.new_ftp_structure.md) which explains directory structure and available file formats.

To make data easier to search, the FTP also includes a [JSON manifest file](https://ftp.ebi.ac.uk/pub/ensemblorganisms/species.new_ftp_structure.json) listing available content.
## Overview of directory structure

Data on the Ensembl FTP is organised by assembly accession. This structure is intended to support a growing number of species and assembly datasets in a clearer and more maintainable way, using the assembly accession naming conventions described by the [European Nucleotide Archive (ENA)](https://www.ebi.ac.uk/ena/browser/home).

Assembly accessions are split into directory blocks. For example, the human GRCh38 assembly accession `GCA_000001405.29` maps to:

```
https://ftp.ebi.ac.uk/pub/ensemblorganisms/GCA/000/001/405/29/
```

This directory pattern is consistent with accession-based FTP layouts used elsewhere, including the [National Center for Biotechnology Information (NCBI)](https://ftp.ncbi.nlm.nih.gov/genomes/all/GCA/).

Each assembly directory contains one or more annotation provider directories which are named `ensembl/` or `community/`, depending on the source of the genebuild for that genome. This is followed by an annotation release date directory marking the time this genebuild was produced.

Subject to data availability, each annotation date directory includes 
`geneset/`, `genome/`, `homology/` and `variation/` directories. 




## Files on the FTP

Files on the Ensembl FTP are grouped by data type within each assembly. The exact content can vary between assemblies and providers.

| Data type | Description |
|---|---|
| Genome sequence  | Files in `<path>/genome/` include whole-genome sequence data such as `hardmasked.fa.bgz`, `softmasked.fa.bgz` and `unmasked.fa.bgz`. |
| Gene annotation  | Files in `<path>/geneset/` include annotations and related sequence files such as `genes.gff3.bgz`, `genes.gtf.bgz`, `genes.embl.gz`, `cdna.fa.bgz` and `pep.fa.bgz`. |
| Cross-references  | The `xref.tsv.gz` file within `<path>/geneset/` provide identifier mappings in the `geneset` directory. |
| Homology  | Files in `<path>/homology/<release>/` provide homology data in TSV format. |
| Variation  | Files in `<path>/variation/<release>/` provide variation data in VCF, where available. |
| Checksums  | `md5sum.txt` files are provided for file integrity checking. |



## Example file paths

Assembly root:

```
https://ftp.ebi.ac.uk/pub/ensemblorganisms/GCA/000/001/405/29/
```

Genome FASTA:

```
https://ftp.ebi.ac.uk/pub/ensemblorganisms/GCA/000/001/405/29/ensembl/2023_03/genome/softmasked.fa.bgz
```

Gene annotation GFF3:

```
https://ftp.ebi.ac.uk/pub/ensemblorganisms/GCA/000/001/405/29/ensembl/2023_03/geneset/genes.gff3.gz
```

Protein FASTA:

```
https://ftp.ebi.ac.uk/pub/ensemblorganisms/GCA/000/001/405/29/ensembl/2023_03/geneset/pep.fa.bgz
```

Homology TSV:

```
https://ftp.ebi.ac.uk/pub/ensemblorganisms/GCA/000/001/405/29/ensembl/2023_03/homology/2023_10_18/homology.tsv.gz
```

Indexed GFF3 (used for tools like Ensembl Variant Effect Predictor):

```
https://ftp.ebi.ac.uk/pub/ensemblorganisms/GCA/000/001/405/29/ensembl/2023_03/geneset/genes.gff3.bgz
```





