---
slug: regulatory-annotation
title: Regulatory annotation
description: Overview of Ensembl’s regulatory annotation
---

# Regulatory annotation

Ensembl provides computational annotation of regulatory features across the genome. Our work focuses on species of key importance to biomedical and agricultural research. We currently provide regulatory annotation for human and mouse, and major livestock and aquaculture species. Our supported species can be viewed at <https://regulation.ensembl.org/>.

The different types of regulatory features annotated include:

- Promoters
- Enhancers
- Open chromatin regions (regions with insufficient evidence to classify as a promoter or enhancer)
- CTCF binding sites

Regulatory feature annotation is based on functional genomics primary data. Scaffold features are first called from open chromatin assays, DNase-seq and ATAC-seq. These base features are classified as promoters or enhancers using gene annotation and histone ChIP-seq data. CTCF binding sites are derived from CTCF ChIP-seq peaks that are supported by a CTCF binding motif.

More details on the process can be found [here](https://regulation.ensembl.org/help/).

Regulatory annotation is available as a track in the [Genome browser app](/genome-browser).

