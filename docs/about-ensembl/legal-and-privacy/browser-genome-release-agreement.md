---
slug: browser-genome-release-agreement
title: Browser genome release agreement
description: Minimum requirements for display of genomic data, agreed between Ensembl, NCBI and UCSC
---

# Browser genome release agreement

## Purpose

The purpose of this document is to establish a common set of minimum requirements for public display of genome data by the Ensembl, NCBI and UCSC browsers/annotation groups. This is a follow up document to informal discussions held at the Biology of Genomes meeting at Cold Spring Harbor, NY in May of 2008.

## Background
Previously, the only agreement among the major browsers was to display the same set of reference coordinates for the human genome reference assembly. This has largely extended to other organisms as well, but issues remain that can lead to differences in the data provided by the browsers. The issue that likely causes the largest number of problems is the annotation and display of genome assembly data prior to deposition of the genome assembly to the International Nucleotide Sequence Database Collaboration (INSDC), commonly referred to as DDBJ/EMBL/GenBank. The most common problems are (in increasing order of severity):

### Inconsistent sequence identifiers amongst browsers.

Inconsistent sequence identifiers increase the level of difficulty when trying to exchange annotation sets. This has been apparent as NCBI and Ensembl have tried to exchange gene model datasets for organisms other than human and mouse. Of note, all browsers get these two assemblies from a single source.

### Inconsistent assembly identifiers amongst browsers.

Inconsistent assembly identifiers make it difficult for users to know which coordinate system is being displayed, regardless of the data source.

### Different sequence data amongst browsers.

Upon deposition of the data to the INSDC, quality control exercises will often uncover problems with the assembly that is initially submitted. In many cases, the submitter is interested in correcting these errors but the corrections may not get propagated to any browser that has already picked up the data. An addendum to this item is the inconsistent handling of unplaced sequences. Some groups choose to concatenate these sequences into a pseudo molecule, while others leave these as independent sequences. The inconsistent use of sequence identifiers increases the difficulty of mapping annotations amongst sources.

### Some assemblies not ever submitted to INSDC.

Once assemblies get picked up, annotated and displayed in a browser, the initial sequencing and assembly group may have little incentive to submit this assembly to the INSDC. For example, the Xenopus tropicalis assembly has been 'available' since August, 2005 but has never been submitted to the INSDC.

## Agreement

Beginning in the spring of 2009, with the release of the Genome Reference Consortium Human Build 37 release Ensembl, NCBI and UCSC agree that:

### Data will be displayed only after it has been released by the INSDC.

Practical applications:

* This document deals solely with the deposition of the genome assembly (contigs + scaffolds). Submission of annotation is not a requirement for public display of genome assembly data in any of the browsers.
* It is anticipated that most genome assemblies will be able to be deposited to the INSDC. However, in the event that a genome assembly does not meet the INSDC criteria for submission, the genome browsers will be free to show this data. It is anticipated that the browsers will work together to provide a consistent view of the assembly and its identifiers.
* Assembly submitters can use the Hold Until Publication (HUP) mode of submission. Once the assembly is accessioned, even if it has a HUP status, the submitter can distribute the assembly to any third party browser/annotation group. However, the data for these assemblies should not be made public by the browsers until the HUP status has been removed and the assembly data are public in the INSDC.

### The sequence identifiers used in the browser and publicly distributed via FTP should be correlated with the INSDC records.

Practical application:

* Browsers can use alternate sequence identifiers but it should be clear how these identifiers map to the INSDC record. Ideally, this will have a minimal disruption on dataflow but still provide a framework for easy data exchange between the various groups. This implies that the starting AGP files should use the INSDC accession.version to identify all of the objects and components describing the assembly. For a reminder of AGP definitions, please see the [specification](http://www.ncbi.nlm.nih.gov/projects/genome/assembly/agp/AGP_Specification.shtml).

### All browsers will refer to any given assembly by the same name, preferably a submitter approved name. This should be collected at the time of assembly submission and guidance should be given to the submitted group in terms of selecting an appropriate name.

Practical applications:

* There are several assemblies submitted that have no real submitter approved name. In these cases, every effort should be made by the browsers to reconcile the names/assemblies so that it is clear to users what data is being supplied at each browser and that data exchange between the browsers/annotation groups is facilitated.
* Browser-specific assembly names are permitted only as an adjunct to the official, submitter-approved name, not as a replacement for the official name.

The terms of this document are not meant to be retroactive, and data currently displayed in any of the browsers that do not meet these criteria do not need to be removed. However, we should endeavor to begin bringing all genome assembly data into compliance moving forward.

