---
slug: about-refget
title: About Ensembl RefGet service
description: Information about Ensembl's Refget service
---
# Ensembl refget service

## What is refget?

Refget is a Global Alliance for Genomics and Health (GA4GH) standard which enables access to reference genomic sequences using a checksum to unambiguously identify data.  More information about the standard can be found on the [Refget API Specification site](https://samtools.github.io/hts-specs/refget.html), but here is an example of its usage with Curl:


```
curl -H'Accept: text/plain' "https://beta.ensembl.org/data/refget/sequence/17dab79b963ccd8e7377cef59a54fe1c?start=32315086&end=32315186"

AGCTTTTGTAAGATCGGCTCGCTTTGGGGAACAGGTCTTGAGAGAACATCCCTTTTAAGGTCAGAACAAAGGTATTTCATAGGTCCCAGGTCGTGTCCCG%      
```
In the example above, the reference sequence identified by the checksum `17dab79b963ccd8e7377cef59a54fe1c` and the data between coordinates 32315086 and 32315186 is returned.

## Accessing Ensembl's refget service

The Ensembl refget service can be accessed at [beta.ensembl.org/data/refget/](https://beta.ensembl.org/data/refget/).


## Related publications

[Refget: standardized access to reference sequences](https://academic.oup.com/bioinformatics/article/38/1/299/6321456)
