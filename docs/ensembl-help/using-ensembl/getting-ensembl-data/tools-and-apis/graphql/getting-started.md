---
slug: accessing-graphql
title: Accessing Ensembl GraphQL services
description: How to access the GraphQL services provided by Ensembl
related_articles:
  - href: ./using-graphql.md
tags:
  - api
  - tools
status: draft
---
# Accessing Ensembl GraphQL services

The Ensembl GraphQL services can be accessed at < INSERT URL HERE >.

## Schemas and documentation
If you wish to interrogate the service and explore the documentation, [a GraphQL playground](./< INSERT URL HERE >) can be accessed via your browser.

## Genomes

The data within a GraphQL service is represented as a graph. The way in which the Ensembl data are logically grouped together is by genome.  Genomes are defined to be a collection of datasets and related annotation for a given assembly.  Some assemblies will have a new genome generated for each release whilst other assemblies will have genomes which span multiple releases.

In many of queries, there is a parameter for `genome_id`.  This identifier (a [UUID]("https://www.itu.int/ITU-T/recommendations/rec.aspx?rec=11746&lang=en")) is used to scope queries to the data belonging to a given genome.

To get a `genome_id` you will need to provide the query below a lookup `keyword`, and optionally a `release_number` (if `release_number` is left blank, it will default to the latest genomes).  

The `keyword` can be one of the following:
- [ToLID]("https://id.tol.sanger.ac.uk/") (e.g. aRanTem1)
- assembly accession id (e.g. GCA_000001405.28)
- taxon ID (e.g. 6239)
- scientific name (e.g. Triticum aestivum)
- parlance name (e.g. human)


Currently partial matches are *not* supported.

For example:
```
query {
  genomes(
    by_keyword: {
      keyword:"Triticum aestivum"
    }
  ) {
    genome_id
    assembly_accession
    scientific_name    
  }
}
```

```json
{
  "data": {
    "genomes": [
      {
        "genome_id": "a73357ab-93e7-11ec-a39d-005056b38ce3",
        "assembly_accession": "GCA_900519105.1",
        "scientific_name": "Triticum aestivum"
      }
    ]
  }
}
```

The `genome_id` can then be used in subsequent queries.  

## Examples 

### Find a Gene by a symbol

Purpose: to find the Ensembl identifier for a Gene with a specified symbol within a genome.

#### Query
Find the `genome_id`.
``` json
query {
  genomes(
    by_keyword: {
      keyword:"GCA_000001405.28"
    }
  ) {
    genome_id
  }
}
```

Use the `genome_id` in a subsequent query to look up the `stable_id` of a gene

``` json
query {
  genes_by_symbol(
    bySymbol: {
      symbol: "JAG1"
      genome_id: "<insert genome_id here>" })
        {
          stable_id
          unversioned_stable_id
          version
        }
      }
```

#### Results
```json
{
  "data": {
    "genes": [
      {
        "stable_id": "ENSG00000101384.12"
      }
    ]
  }
}
```

## Find a Gene by its Stable ID

Purpose: Find a Gene by its `stable_id` and list is `external_references`.

#### Query
Find the `genome_id`.
``` json
query {
  genomes(
    by_keyword: {
      keyword:"GCA_000001405.28"
    }
  ) {
    genome_id
  }
}
```

Find the Gene by its `stable_id` and list its external references
``` json
query{
  gene(by_id: {genome_id:"<insert genome_id here>", stable_id: "ENSG00000101384.12"})
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



### Results
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

base_url = '<base URL>'

genome_id_graphql_query = '''query{
  genomes(
    by_assembly_acc_id: {
      assembly_accession_id:"GCA_000001405.28"
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
