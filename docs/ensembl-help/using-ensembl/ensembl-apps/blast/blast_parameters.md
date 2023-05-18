---
slug: blast_parameters
title: What are the different BLAST parameters and how to use them
description: How to use the different parameters for your BLAST query and what does each parameter do
related_articles:
  - href: how_to_run_blast.md
  - href: the_different_blast_programs.md
tags:
  - blast
status: draft
---

# How to use BLAST parameters?
Clicking on the ‘Parameters” link will expand a normally collapsed section allowing access to additional parameter settings.

# A description of the different BLAST parameters
The Ensembl BLAST tool has several parameters that can affect the search sensitivity. There are some general and scoring parameters that can be modified by using the pull-down menu. A description of the individual parameters can be found below;

## Max. alignments
This parameters sets the maximum database alignments displayed for a given query. It varies from 5 to 1000 and the default is set to 100. 

## Max. scores
This is the number of database hits that are displayed. The actual number of alignments may be greater than this. It varies from 5 to 1000 and the default is set to 50

## E-Threshold
The alignments found by BLAST during a search are scored and assigned a statistical value, called the Expect Value. The E-value is the number of times an alignment as good or better than that found by BLAST would be expected to occur by chance, given the size of the database searched.  This parameter can set the number of hits reported that contain more than the Expected values selected. It varies from 1e-200 to 1000 and the default value is 10. 
A higher E-value threshold is less stringent and the BLAST default of “10” is designed to ensure that no biologically significant alignment is overlooked. For significant alignments the E-value should be close to zero.

## Statistical accuracy

## HSPs per hit
High-scoring segment pair (HSP) is a local alignment with no gaps that achieves one of the highest alignment scores in a given search. It corresponds to the matching region between the query and the database hit sequence.
The HSP distribution can be visualised on the query, which is shown as a chain of black and white boxes. Fragments of the query sequence that hit other places in the genome are shown as red boxes. Usually these fragments are small (they vary between 1-100 nt) and map to various locations. These sequences are of low complexity, such as repetitive sequences.

## Drop-off
This is the X drop-off value for final gapped alignment. If X value is high, the quality of the alignment might degrade whereas a smaller value may increase the chances of missing some alignment. This value is set to 0 by default, however it can be changed to 2, 4, 6, 8 and 10. 

## Word size 
It is the length of the seed that initiates an alignment between the query and the target sequences. It varies from 2 to 15 and the default is 11 (nucleotides) for DNA and 3 (residues) for protein.

## Match/mismatch scores
The Match/Mismatch Scores will specify the reward assigned to the exact match and penalty assigned to a mismatch. The default value is set to 2,-3.

## Gap penalties
The Gap penalties parameter specifies how gaps that are introduced in the alignment should be penalised.
There may be a need to introduce gaps into sequences in order to compensate for insertions and deletions. The gap penalty should be large enough that gaps are introduced only where needed, and the penalty for extending a gap should take into account the possibility that gaps occur over several residues at a time. 
This parameter allows you to choose from several different sets of parameters for scoring gaps. These values are set to 5,2 as default.

## Gap align
This option uses a lower threshold for generating the list of high-scoring matching words; the algorithm uses short matched regions with no insertions or deletions between them and within a certain distance of each other as the starting points for longer ungapped alignments. These joined regions are then extended using the same method as in the original BLAST.

## Filter low complexity regions
Certain sequences, such as low-complexity regions (homopolymeric runs, short-period repeats, and subtler over representation of one or a few residues) can display significant similarity when there is no significant homology. This option is used to mask or filter low complexity regions in amino acid queries in order to improve the sensitivity of sequence similarity searches performed with that sequence. 
