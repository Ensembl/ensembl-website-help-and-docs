---
slug: mane
title: MANE (Matched Annotation between NCBI and EBI)
description: More information about the MANE Project and MANE genes in Ensembl 
---

# MANE (Matched Annotation between NCBI and EBI)

Accurate annotation of the human genome is essential for genomics research and clinical applications. [RefSeq (NCBI)](https://www.ncbi.nlm.nih.gov/refseq/) and Ensembl/GENCODE (led by [EMBL-EBI](https://www.ebi.ac.uk)) produce independent human gene annotation. The large number of alternatively spliced transcripts and the lack of standardised default transcripts displayed across resources present challenges, especially in the clinical context. Since December 2018 we have been working together on the Matched Annotation from NCBI and EMBL-EBI (MANE) project to converge on a high-confidence, genome-wide transcript set.

This project will be carried out in two phases. Phase 1 will focus on the production and release of the MANE Select transcript set, which includes one well-supported transcript per protein-coding locus. During Phase 2, we will release the MANE Plus Clinical set to include additional transcripts required to report variants of clinical interest (“Pathogenic” or “Likely Pathogenic”) that cannot be reported using the MANE Select set.

The MANE Select and MANE Plus Clinical sets will: 1) perfectly align to the GRCh38 reference assembly, 2) include pairs of Ensembl/Gencode (ENST) and RefSeq (NM) transcripts that are 100% identical (5’UTR, CDS and 3’UTR) and 3) are highly conserved, expressed and well-supported. The MANE dataset is versioned and largely stable, only allowing updates if absolutely required.

MANE transcripts are identified using independent computational methods complemented by manual review and discussion. The methods utilise evidence of functional potential such as expression levels, evolutionary conservation, and clinical significance. Transcript ends are defined using CAGE data from the FANTOM consortium and polyA site data from conventional and next generation sequencing.

The MANE project is only being completed for human genes on GRCh38. There is no plan to retroactively add this data to our archived GRCh37 gene annotation.
