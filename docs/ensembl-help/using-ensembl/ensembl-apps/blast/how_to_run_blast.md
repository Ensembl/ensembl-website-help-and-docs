---
slug: how-to-run-blast
title: How to run BLAST
description: How to run BLAST queries
related_articles:
  - href: blast_parameters.md
  - href: the_different_blast_programs.md
  - href: error_messages.md
  - href: blast_results_table.md
  - href: download_blast_results.md
tags:
  - blast
status: draft
---

# How to run BLAST

BLAST is a sequence similarity search tool that can be used for both DNA and proteins. 

## Selecting BLAST database and program

The target databases available for similarity searches are: genomic sequence (softmasked), genomic sequence, transcripts and proteins. Click on the ‘Database’ dropdown menu and choose from these options. 

The relevant BLAST programs are selected automatically and displayed in the *Program* drop-down menu when the target database is selected and the Nucleotide or Protein option is selected above the sequence text box. The BLAST programs have pre-configured parameters, which you can view and change by clicking on the ‘Parameters’ option.

## Entering a query sequence

Paste the query sequence into the text box (the suggested format is FASTA) or upload a sequence file.
 
Up to 50 sequences can be added by clicking on ‘Add another sequence’.

![The BLAST submission page](media/BLAST.png)

## Select target species

You can select the species you want to run your sequence against by clicking on ‘Select species’ on the right hand side.

## Submitting your BLAST query

You can give a name or description to this BLAST query in the ‘Submission name’ (optional) field. Once your parameters are set, click RUN to start the search.

## What does the results view show

The submissions page will show the jobs that are currently running or recently completed. Jobs are divided into two lists: ‘Unviewed Jobs’ and ‘Jobs list’. A submission ID is assigned to each submission and additional information is provided, including the date and time of submission. If you navigate away from the BLAST interface, the status of the query is indicated by the BLAST icon in the top panel changing from red to green to prompt you that it has successfully completed.

You can view the results by clicking on the Results button or you can download the results by clicking on the blue Download icon. A submission in the ‘Unviewed jobs’ list, when viewed, is transferred to the ‘Jobs list’ for future reference. Results are available for 7 days and queries can be rerun for 28 days.

## What does the result table show

The results page shows summary results for each sequence submitted with a graphical display of hits on the query sequence. A table of results for each combination of sequences and target database can be found by clicking on the drop down icon next to the species and genome assembly name.

![BLAST results page](media/Blast_results.png)

The results table lists the sequence similarity hits in order of E-value, but can be customised to reorder the table based on the different columns by clicking on the arrow next to each column heading. You can customise all rows, or select specific hits, by clicking on the box in the first column of each row.
