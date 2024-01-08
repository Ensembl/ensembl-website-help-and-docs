---
slug: accessing-refget
title: Accessing Ensembl's refget services
description: How to access the refget service provided by Ensemb
related_articles:
  - href: ../../../../about-ensembl/accessing-data/apis/refget.md
---
# Accessing Ensembl's refget service

The Ensembl refget service can be accessed at [beta.ensembl.org/data/refget/](https://beta.ensembl.org/data/refget/).

## About the standard
Refget's official documentation site can be found [here](https://samtools.github.io/hts-specs/refget.html).  It provides detailed information about how to interact with implementations of the standard and in the interest of maintaining consistency, this will not be duplicated here.  However, a brief example of how to access sequence data in an Ensembl specific context is provided below.

## Accessing sequence data for features in Ensembl

The ["Getting started with Graphql"](../tools-and-apis/graphql/using-graphql.md) and ["Using Graphql"](../tools-and-apis/graphql/using-graphql.md) pages cover how to access data through Ensembl GraphQL service and the example below assumes that this service is being used.

The main steps involved are:
* Obtain a `genome_id` for the genome (assembly + annotation) of interest


```
query {
  genomes(
    by_assembly_accession_id: {assembly_accession_id: "GCA_000001405.29"})
  {
    genome_id
  }
}
```

returns: 
```
{
  "data": {
    "genomes": [
      {
        "genome_id": "a7335667-93e7-11ec-a39d-005056b38ce3"
      }
    ]
  }
}
```

* In the context of the genome, find the checksum for a feature's (gene, transcript etc.) region, and its start and end coordinates via `slice`

```
query {
  genes(
    by_symbol: {genome_id: "a7335667-93e7-11ec-a39d-005056b38ce3", symbol: "JAG1"}
  ) {
    slice{
      region{
        sequence{
          checksum
        }
      }
      location{
        start
        end
      }
    }
  
  }
}
```

returns: 
```
{
  "data": {
    "genes": [
      {
        "slice": {
          "region": {
            "sequence": {
              "checksum": "b18e6c531b0bd70e949a7fc20859cb01"
            }
          },
          "location": {
            "start": 10637684,
            "end": 10673999
          }
        }
      }
    ]
  }
}
```

* Use the information from the previous step to query refget (Curl for clarity)

```
curl -H'Accept: text/plain' "https://beta.ensembl.org/data/refget/sequence/b18e6c531b0bd70e949a7fc20859cb01?start=10637684&end=10673999"

```

returns: 
```
GCCATTAATCCAGTGGTGTTTATT ... CCCGGAGAGCCCGTCT% 
```

