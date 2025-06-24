---
slug: community-genome-annotation
title: Community genome annotation
description: Requirements for community annotations to be imported into Ensembl.
---

Ensembl collaborates with a range of global genome assembly and annotation initiatives. We recognise that contributors to these efforts may be producing high-quality annotations they wish to see represented in Ensembl. If you would like to submit such annotations, please follow the instructions below.

# Community annotation formatting

While we encourage users, collaborators, and data providers to submit their assembly annotations to [INSDC](https://www.insdc.org/about-insdc/), we understand that this process can sometimes take longer than expected, potentially delaying the availability of the genome on our site. To help mitigate such delays, we may accept GFF3 annotation files submitted directly to us, provided the assembly is already publicly available in INSDC.

Please note that importing annotations directly incurs a higher processing cost compared to retrieving them from INSDC, so such requests will be evaluated on a case-by-case basis. Priority will be given to annotations for key species not yet represented in Ensembl, particularly those from underrepresented genera, or for assemblies that are part of collaborative projects involving Ensembl.

To facilitate the process, we have prepared a brief protocol to help ensure submitted GFF3 files are valid and meet our requirements.

## Preparing your GFF3 file for submission

First and foremost, it is important the file must be in valid GFF3 format ([specifications](https://github.com/The-Sequence-Ontology/Specifications/blob/master/gff3.md)). This can be checked by up loading the file to the [GFF3 Validator](https://genometools.org/cgi-bin/gff3validator.cgi) from “GenomeTools” and clicking on `Validate this file!`. Run it at least once without the `tidy` box ticked to check what the issues are. You can then attempt to validate it again with the `tidy` option checked. Note that if your GFF3 file is larger than the specified limit in the site, you will need to download the tool ([installation instructions](https://github.com/genometools/genometools/blob/master/README.md)) and run it on your computer with the command:

```bash
gt gff3validator <file.gff3>
```

And, if you want to use the `tidy` option, we recommend the following command:

```bash
gt gff3 -tidy -sort -retainids <file.gff3>
```

Note that there is also the option to install this tool via conda running the command:

```bash
conda install genometools-genometools
```

Once the GFF3 file has been validated, the next step is to make the chromosome and scaffold names as well as the sequences used match the ones present in the corresponding assembly in INSDC (listed in the sequence report file, e.g. [GCA_032118995.1](https://ftp.ncbi.nlm.nih.gov/genomes/all/GCA/032/118/995/GCA_032118995.1_ASM3211899v1/GCA_032118995.1_ASM3211899v1_assembly_report.txt)). We use the names provided by INSDC as the main IDs to align ourselves with INSDC, but the initially submitted names will also be available in Ensembl. There is no need to provide the sequences for those since we will use the ones provided by INSDC/RefSeq.

Finally, make sure each protein coding mRNA produces exactly one translation, i.e. all CDS lines for the same transcript have the same CDS ID. For instance, here is how the GFF3 file section for GENEID_000001_p1 would look like:

```text
scaffold_name source_name gene  1     1000  . - . ID=GENEID_000001
scaffold_name source_name mRNA  1     1000  . - . ID=GENEID_000001_t1;Parent=GENEID_000001
scaffold_name source_name exon  1      400  . - . ID=GENEID_000001_t1-E1;Parent=GENEID_000001_t1
scaffold_name source_name exon  600   1000  . - . ID=GENEID_000001_t1-E2;Parent=GENEID_000001_t1
scaffold_name source_name CDS   100    400  . - 2 ID=GENEID_000001_p1;Parent=GENEID_000001_t1
scaffold_name source_name CDS   600    900  . - 0 ID=GENEID_000001_p1;Parent=GENEID_000001_t1
```

Additionally, if some protein sequences contain sequence edits (e.g. selenocysteines, etc.) then the provider will also need to supply a separate sequence FASTA file corresponding to those proteins (using the same IDs as the CDSs in the GFF3 file).

> Note: *Bear in mind that any handed over GFF3 files that have not passed this validation process will be returned to the provider and the genome will be postponed by at least one release.*

## Submitting your GFF3 file to Ensembl

To have your annotation considered for inclusion in Ensembl, please contact helpdesk.ensembl.org with information about the project your genome is associated with, the importance of including your genome in Ensembl and your validated and formatted GFF3 file.