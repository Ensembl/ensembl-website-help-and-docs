---
slug: accessing-graphql
title: Accessing Ensembl GraphQL services
description: How to access the GraphQL services provided by Ensembl
related_articles:
  - href: ./using-graphql.md
---
# Accessing Ensembl GraphQL services

The Ensembl GraphQL services can be accessed here:[https://beta.ensembl.org/data/graphql](https://beta.ensembl.org/data/graphql).

## Schemas and documentation
If you wish to interrogate the service and explore the documentation, [a GraphQL playground](/data/graphql) can be accessed via your browser.

## Genomes

The data within a GraphQL service is represented as a graph. The way in which the Ensembl data are logically grouped together is by genome.  Genomes are defined to be a collection of datasets and related annotation for a given assembly.  Some assemblies will have a new genome generated for each release whilst other assemblies will have genomes which span multiple releases.

In many of queries, there is a parameter for `genome_id`.  This identifier (a [UUID](https://www.itu.int/ITU-T/recommendations/rec.aspx?rec=11746&lang=en)) is used to scope queries to the data belonging to a given genome.

To get a `genome_id` you will need to provide the query below a lookup `keyword`, and optionally a `release_number` (if `release_number` is left blank, it will default to the latest genomes).  

The `keyword` can be one of the following:
- [ToLID](https://id.tol.sanger.ac.uk/) (e.g. aRanTem1)
- Assembly accession id (e.g. GCA_000001405.28)
- Taxon ID (e.g. 6239)
- Scientific name (e.g. Triticum aestivum)
- Parlance name (e.g. human)


Currently partial matches are *not* supported.

For example:

#### Query
```
query {
  genomes(
    by_keyword: {
      scientific_name:"Triticum aestivum",
    }
  ) {
    genome_id
    assembly_accession
    scientific_name
    release_number
  }
}
```

#### Response
```
{
  "data": {
    "genomes": [
      {
        "genome_id": "ae794660-8751-41cc-8883-b2fcdc7a74e8",
        "assembly_accession": "GCA_903995565.1",
        "scientific_name": "Triticum aestivum",
        "release_number": 110.1
      },
      ...
    ]
  }
}
```

The `genome_id` can then be used in subsequent queries.  

## Examples 

## Find a Gene by a symbol

Purpose: Find the Ensembl identifier for a Gene with a specified symbol within a genome.

First we need to find the `genome_id`:

It can be done either by searching using `by_keyword` (as explained above) or `by_assembly_accession_id`.

#### Query
```
query {
  genomes(
    by_keyword: {
      assembly_accession_id:"GCA_000001405.29"
    }
  ) {
    genome_id
  }
}
```

#### Response
```json
{
  "data": {
    "genomes": [
      {
        "genome_id": "2b5fb047-5992-4dfb-b2fa-1fb4e18d1abb"
      }
    ]
  }
}
```

Use the `genome_id` in a subsequent query to look up the `stable_id` of a gene

#### Query
```
query {
  genes(
    by_symbol: {
      symbol: "JAG1"
      genome_id: "2b5fb047-5992-4dfb-b2fa-1fb4e18d1abb" 
    }
  ) 
  {
    stable_id
    unversioned_stable_id
    version
  }
}
```

#### Response
```json
{
  "data": {
    "genes": [
      {
        "stable_id": "ENSG00000101384.12",
        "unversioned_stable_id": "ENSG00000101384",
        "version": 12
      }
    ]
  }
}
```

## Find a Gene by its Stable ID

Purpose: Find a Gene by its `stable_id` and list its `external_references`.

Find the `genome_id`.

#### Query
```
query {
  genomes(
    by_keyword: {
      assembly_accession_id:"GCA_000001405.29"
    }
  ) {
    genome_id
  }
}
```

#### Response
```json
{
  "data": {
    "genomes": [
      {
        "genome_id": "2b5fb047-5992-4dfb-b2fa-1fb4e18d1abb"
      }
    ]
  }
}
```

Find the Gene by its `stable_id` and list its external references

#### Query
```
query{
  gene(by_id: {genome_id:"2b5fb047-5992-4dfb-b2fa-1fb4e18d1abb", stable_id: "ENSG00000101384.12"})
  {
    symbol
    external_references{
      name
      accession_id
      url
    }
  }
}
```

#### Response
NB: Results reduced for readability.
``` json
{
  "data": {
    "gene": {
      "symbol": "JAG1",
      "external_references": [
        {
          "name": "JAG1",
          "accession_id": "182",
          "url": "https://www.ncbi.nlm.nih.gov/gene/182"
        },
        {
          "name": "JAG1",
          "accession_id": "HGNC:6188",
          "url": "https://www.genenames.org/data/gene-symbol-report/#!/hgnc_id/HGNC:6188"
        },
        {
          "name": "JAGGED 1; JAG1 [*601920]",
          "accession_id": "601920",
          "url": "https://omim.org/entry/601920"
        },
        ...
      ]
    }
  }
}
```

## Example script

This example Python script shows how data can be accessed using GraphQL.

``` python
import requests
import json

base_url = 'https://beta.ensembl.org/data/graphql'

genome_id_graphql_query = '''query{
  genomes(
    by_assembly_accession_id: {
      assembly_accession_id:"GCA_000001405.29"
    }) 
  {
    genome_id
  }
}'''

reqs = requests.post(base_url, json={'query': genome_id_graphql_query})
genomes = json.loads(reqs.text)['data']['genomes']

for genome in genomes:
    genome_id = genome['genome_id']

    gene_graphql_query = f'''query{{
        genes(by_symbol: {{
            genome_id:"{genome_id}", 
            symbol: "JAG1"}})
        {{
            stable_id
            transcripts {{
                stable_id
                }}
            }}
        }}'''

    genes = requests.post(base_url, json={'query': gene_graphql_query})
    print(genes.text)
```
