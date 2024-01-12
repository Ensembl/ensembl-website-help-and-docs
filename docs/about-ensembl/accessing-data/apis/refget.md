---
slug: about-refget
title: About Ensembl RefGet service
description: Information about Ensembl's Refget service
---
# Ensembl refget service

## What is refget?

Refget is a Global Alliance for Genomics and Health (GA4GH) standard which enables access to reference genomic sequences using a checksum to unambiguously identify data. More information about the standard can be found on the [Refget API Specification site](https://samtools.github.io/hts-specs/refget.html), but here is an example of its usage with curl:

```bash
curl -H'Accept: text/plain' "https://beta.ensembl.org/data/refget/sequence/17dab79b963ccd8e7377cef59a54fe1c?start=32315085&end=32315185"

AAGCTTTTGTAAGATCGGCTCGCTTTGGGGAACAGGTCTTGAGAGAACATCCCTTTTAAGGTCAGAACAAAGGTATTTCATAGGTCCCAGGTCGTGTCCC%
```

In the example above, the reference sequence identified by the checksum `17dab79b963ccd8e7377cef59a54fe1c` and the data between the genomic coordinates (1-based) 32315086 and 32315185 (100bp) is returned.

### Locations and coordinates in refget

The refget protocol uses the `0-start, half-open` coordinate system, which is found in other formats such as BED, SAM/BAM/CRAM and utilised by the UCSC Genome Browser. This system is sometimes called 0-based. In this system you start counting sequence positions from 0. More information about this system is available from the [UCSC Genome Browser team's blog site](https://genome-blog.gi.ucsc.edu/blog/2016/12/12/the-ucsc-genome-browser-coordinate-counting-systems/).

### Retriving metadata about a sequence

Refget supports the retrieval of metadata for a sequence by adding `/metadata` to your URL. Below is an example of fetching metadata for the reference sequence identified by the checksum `17dab79b963ccd8e7377cef59a54fe1c`.

```bash
curl -H'Accept: application/json' "https://beta.ensembl.org/data/refget/sequence/17dab79b963ccd8e7377cef59a54fe1c/metadata"

{"metadata": {"aliases": [{"alias": "ga4gh:SQ.0qw_sn8Cl7OmMTFlukjFD2DUejW0T80Y", "naming_authority": "ga4gh"}, {"alias": "13", "naming_authority": "Ensembl"}], "length": 114364328, "md5": "17dab79b963ccd8e7377cef59a54fe1c", "trunc512": "d2ac3fb27f0297b3a6313165ba48c50f60d47a35b44fcd18"}}
```

We can see this sequence is 114,364,328bp long is known as `ga4gh:SQ.0qw_sn8Cl7OmMTFlukjFD2DUejW0T80Y`, `17dab79b963ccd8e7377cef59a54fe1c` and `13`.

## Accessing Ensembl's refget service

The Ensembl refget service can be accessed at [beta.ensembl.org/data/refget/](https://beta.ensembl.org/data/refget/).

## Related publications

[Refget: standardized access to reference sequences](https://academic.oup.com/bioinformatics/article/38/1/299/6321456)
