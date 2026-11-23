---
title: Filtering VEP results
description: Use filter_vep to select variants and annotations with expressions,
  comparisons and lists.
slug: vep-cli-filtering-results
related_articles:
  - href: getting-started.md
  - href: tutorial.md
  - href: download-and-install.md
  - href: running-vep.md
  - href: options/basic.md
  - href: options/cache.md
  - href: options/annotation.md
  - href: options/output-format.md
  - href: options/output.md
  - href: options/identifiers.md
  - href: options/existing-variants.md
  - href: options/filtering.md
  - href: options/database.md
  - href: data-formats.md
  - href: annotation-sources.md
  - href: filtering-results.md
  - href: custom-annotations.md
  - href: plugins.md
  - href: plugin-catalogue.md
  - href: examples-and-use-cases.md
  - href: other-information.md
  - href: faq.md
  - href: release-history.md
---

<span id="top"></span>

# Filtering VEP results

**On this page**

- [Running filter_vep](/help/articles/vep-filtering-results#filter_run)
- [Options](/help/articles/vep-filtering-results#filter_opt)
- [Writing filters](/help/articles/vep-filtering-results#filter_write)
- [Operators](/help/articles/vep-filtering-results#filter_op)

The Ensembl VEP package includes a tool, filter_vep, to filter results files on a variety of attributes.

It operates on standard, tab-delimited or VCF formatted output (NB only VCF output produced by Ensembl VEP or in the same format can be used).

<span id="filter_run"></span>

## Running filter_vep

Run as follows:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i in.vcf -o out.txt -cache -everything
./filter_vep -i out.txt -o out_filtered.txt -filter &quot;[filter_text]&quot;
</code></pre>

filter_vep can also read from STDIN and write to STDOUT, and so may be used in a UNIX pipe:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i in.vcf -o stdout -cache -check_existing | ./filter_vep -filter &quot;not Existing_variation&quot; -o out.txt
</code></pre>

The above command removes known variants from the output

<span id="filter_opt"></span>

## Options

### `--help`

**Alternate:** `-h`

Print usage message and exit

### `--input_file [file]`

**Alternate:** `-i`

Specify the input file (i.e. the Ensembl VEP results file). If no input file is specified, filter_vep will attempt to read from STDIN. Input may be gzipped - to read a gzipped file use `--gz`

### `--format [format]`

Specify input file format:

- **tab** (i.e. the Ensembl VEP results file)
- **vcf**

### `--output_file [file]`

**Alternate:** `-o`

Specify the output file to write to. If no output file is specified, the filter_vep will write to STDOUT

### `--force_overwrite`

Force an output file of the same name to be overwritten

### `--filter [filters]`

**Alternate:** `-f`

Add filter (see below). Multiple `--filter` flags may be used, and are treated as logical ANDs, i.e. all filters must pass for a line to be printed

<span id="opt_softfilter"></span>

### `--soft_filter`

Variants not passing given filters will be flagged in the FILTER column of the VCF file, and will not be removed from output.

### `--list`

**Alternate:** `-l`

List allowed fields from the input file

### `--count`

**Alternate:** `-c`

Print only a count of matched lines

### `--only_matched`

In VCF files, the CSQ field that contains the consequence data will often contain more than one "block" of consequence data, where each block corresponds to a variant/feature overlap. Using `--only_matched` will remove blocks that do not pass the filters. By default, filter_vep prints out the entire VCF line if any of the blocks pass the filters.

### `--vcf_info_field [key]`

With VCF input files, by default filter_vep expects to find Ensembl VEP annotations encoded in the CSQ INFO key; Ensembl VEP itself can be configured to write to a different key (with the equivalent [--vcf_info_field](/help/articles/vep-options-output#opt_vcf_info_field) flag).

Use this flag to change the INFO key Ensembl VEP expects to decode: e.g. use the command "`--vcf_info_field ANN`" if the Ensembl VEP annotations are stored in the INFO key "ANN".

### `--ontology`

**Alternate:** `-y`

Use [Sequence Ontology](http://www.sequenceontology.org/) to match consequence terms. Use with operator "is" to match against all child terms of your value. e.g. "Consequence is coding_sequence_variant" will match missense_variant, synonymous_variant etc. Requires database connection; defaults to connecting to ensembldb.ensembl.org. Use `--host`, `--port`, `--user`, `--password`, `--version` as per `vep` to change connection parameters.

<span id="filter_write"></span>

## Writing filters

Filter strings consist of three components **that must be separated by whitespace**:

1.  **Field** : A field name from the Ensembl VEP results file. This can be any field in the "main" columns of the output, or any in the "Extra" final column. For VCF files, this is any field defined in the "##INFO=\<ID=CSQ" header. You can list available fields using --list. Field names are not case sensitive, and you may use the first few characters of a field name if they resolve uniquely to one field name.
2.  **Operator** : The operator defines the comparison carried out.
3.  **Value** : The value to which the content of the field is compared. May be prefixed with "#" to represent the value of another field.

Examples:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text"># match entries where Feature (Transcript) is &quot;ENST00000307301&quot;
--filter &quot;Feature is ENST00000307301&quot;

# match entries where Protein_position is less than 10
--filter &quot;Protein_position &lt; 10&quot;

# match entries where Consequence contains &quot;stream&quot; (this will match upstream and downstream)
--filter &quot;Consequence matches stream&quot;
</code></pre>

For certain fields you may only be interested in whether a value exists for that field; in this case the operator and value can be left out:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text"># filter for MANE transcripts
--filter &quot;MANE&quot;

# match entries where the gene symbol is defined
--filter &quot;SYMBOL&quot;
</code></pre>

The value component may be another field; to represent this, prefix the name of the field to be used as a value with "#":

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text"># match entries where AFR_AF is greater than EUR_AF
--filter &quot;AFR_AF &gt; #EUR_AF&quot;
</code></pre>

Filter strings can be linked together by the logical operators "or" and "and", and inverted by prefixing with "not":

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text"># filter for missense variants in CCDS transcripts where the variant falls in a protein domain
--filter &quot;Consequence is missense_variant and CCDS and DOMAINS&quot;

# find variants where the allele frequency is greater than 10% in either AFR or EUR populations
--filter &quot;AFR_AF &gt; 0.1 or EUR_AF &gt; 0.1&quot;

# filter out known variants
--filter &quot;not Existing_variation&quot;
</code></pre>

Filter logic may be constrained using parentheses, to any arbitrary level:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text"># find variants with AF &gt; 0.1 in AFR or EUR but not EAS or SAS
--filter &quot;(AFR_AF &gt; 0.1 or EUR_AF &gt; 0.1) and (EAS_AF &lt; 0.1 and SAS_AF &lt; 0.1)&quot;
</code></pre>

Note that for numeric fields, such as the \*AF allele frequency fields, filter_vep does not consider the absence of a value for that field as equivalent to a 0 value. For example, if you wish to find rare variants by finding those where the allele frequency is less than 1% **or** absent, you should use the following:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">--filter &quot;AF &lt; 0.01 or not AF&quot;
</code></pre>

You can use regex to do pattern match. For example, using [--sift b](/help/articles/vep-options-output#opt_sift) in Ensembl VEP gives field value that has both string and number and looks like "tolerated(0.46)". To match on the string part, you can do the following:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text"># match string part
--filter &quot;SIFT match tolerated&quot;
</code></pre>

For the Consequence field it is possible to use the [Sequence Ontology](http://www.sequenceontology.org/) to match terms ontologically; for example, to match all coding consequences (e.g. missense_variant, synonymous_variant):

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">--ontology --filter &quot;Consequence is coding_sequence_variant&quot;
</code></pre>

<span id="filter_op"></span>

## Operators

- **is** (synonyms: = , eq) : Match exactly

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text"># get only transcript consequences
  --filter &quot;Feature_type is Transcript&quot;
  </code></pre>

- **!=** (synonym: ne) : Does not match exactly

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text"># filter out tolerated SIFT predictions
  --filter &quot;SIFT != tolerated&quot;
  </code></pre>

- **match** (synonyms: matches , re , regex) : Match string using regular expression. You may include any regular expression notation, e.g. "\d" for any numerical character

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text"># match stop_gained, stop_lost and stop_retained
  --filter &quot;Consequence match stop&quot;
  </code></pre>

- **\<** (synonym: lt) : Less than. Note an absent value is not considered to be equivalent to 0.

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text"># find SIFT scores less than 0.1
  --filter &quot;SIFT &lt; 0.1&quot;
  </code></pre>

- **\>** (synonym: gt) : Greater than

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text"># find variants not in the first exon
  --filter &quot;Exon &gt; 1&quot;
  </code></pre>

- **\<=** (synonym: lte) : Less than or equal to. Note an absent value is not considered to be equivalent to 0.

- **\>=** (synonym: gte) : Greater than or equal to

- **exists** (synonyms: ex , defined) : Field is defined - equivalent to using no operator and value

- **in** : Find in list or file. Value may be either a comma-separated list or a file containing values on separate lines. Each list item is compared using the "is" operator.

  <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text"># find variants in a list of gene names
  --filter &quot;SYMBOL in BRCA1,BRCA2&quot;

  # filter using a file of MotifFeatures
  --filter &quot;Feature in /data/files/motifs_list.txt&quot;
  </code></pre>
