---
slug: error-messages
title: I have an error message - what can I do?
description: How to resolve different error messages commonly encountered in BLAST
related_articles:
  - href: how_to_run_blast.md
  - href: the_different_blast_programs.md
  - href: blast_parameters.md
  - href: blast_results_table.md
  - href: download_blast_results.md
tags:
  - blast
status: draft
---

# Blast error messages

## Sequence input error messages

Sequence input errors are indicated in 3 ways, with
* a red exclamation mark on the bar above the sequence boxes.
* a red exclamation mark above the box with the offending sequence.
* a red keyline around the box with the offending sequence.

![BLAST error message](blast_error_message.png)

Error messages are the red exclamation mark(s) and red key lines are displayed when mistakes are made in sequence input .

## Reasons for error messages

Error messages will show for a variety of reasons when a sequence is entered into the Blast interface.

### Sequence format

The blast sequence input box will only accept sequences (nucleotide or amino acid) in a FASTA or plain text format.

If the input sequence is not in the correct format an error message will be displayed.

If the sequence you have submitted is not in a FASTA or plain text format an error message will be displayed and you will need to change your sequence format to  FASTA or plain text.

### Length of sequence
The blast sequence input box will only accept sequences (nucleotide or amino acid) over 5 bases long.

If the input sequence under 5 bases an error message will be displayed.

If the sequence you have submitted is less than 5 bases long an error message will be displayed and you will need to increase the length of your sequence.

### Special characters

The blast sequence input box will not accept sequences (nucleotide or amino acid) that contain special characters.

If the input sequence contains special characters an error message will be displayed.

If the sequence you have submitted contains special characters an error message will be displayed and you will need to remove the special characters from your sequence.

### Sequence types and blast programs

The sequence input interface will only accept the type of sequence required for the  Blast program selected.

For example if Blastn is the selected program the sequence input interface will accept multiple nucleotide sequences. However if a protein sequence is uploaded amongst the nucleotide sequences an error message will be displayed.

If a sequence you have submitted is incompatible with the Blast program you have selected an error message will be displayed around the incompatible sequence and you will need to delete the sequence.

## Blast program error messages

### Submission failed 
The entire submission has failed.

### Run failed 
A single job within the entire submission has failed ie a Blastn running a single sequence against a single species has failed.

