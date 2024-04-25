---
slug: roadmap
title: The Ensembl roadmap
description: Roadmap of new site and infrastructure development
---

# Ensembl roadmap

We are currently implementing a widespread refresh of the Ensembl infrastructure, which includes launching the new Ensembl website. The timeline for launching the new website is running in parallel with updates to other aspects of the Ensembl infrastructure. 

<div><img src="media/roadmap.png" style="width:950px;height:220px" /></div>

These updates ensure:
- Genome annotation and analysis is provided at ever increasing scales. 
- Improved website user experience.
- Provision of a comprehensive suite of methods to access Ensembl hosted annotation in standard formats.

## Website and tools
Our new website is being delivered in three phases of development: 

1. The beta version of the website was delivered in 2022 and provides genome browsing, viewing attributes of key entities, search, BLAST, and help.
2. Minimal Viable Product (MVP) will provide equivalent functionality to the Ensembl Rapid Release site, including variation visualisations, homologies and support for all new genomes. The Ensembl Rapid Release site will then be scheduled for retirement.
3. New website functionality reaches that of the current site. The current Ensembl sites will then receive minimal updates and will be archived in due course.

## Other infrastructure updates 
The Ensembl Perl API and publicly hosted MySQL databases currently provide programmatic access to genome annotation, but will be replaced with web-based APIs. The timeline for the retirement of our existing Perl API and public MySQL is dependent on providing access to all data freely hosted in Ensembl and will not start until data is accessible via other mechanisms.
 
We are also developing new methods for locating flat-file dumps of Ensembl data programmatically rather than relying on FTP alone. Flat-files will continue to remain accessible from our bulk download services.

During the development period of our new infrastructure, access to existing services will not be retired unless, for most use-cases, there is an equivalent service or tool available on our new infrastructure. However all existing services will be retired eventually and archived for 5 years, according to our current policy.
