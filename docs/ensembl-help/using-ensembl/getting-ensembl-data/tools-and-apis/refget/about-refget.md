---
slug: about-refget
title: About Ensembl refget service
description: Information about Ensembl's refget service for sequence retrieval
related_articles:
  - href: ../graphql/using-graphql.md
---

# Ensembl refget service

Retrieval of all DNA and protein sequences is supported through a dedicated deployment of the [refget protocol](https://w3id.org/ga4gh/refget). By using Ensembl's refget instance you can retrieval all sequences referred to in our GraphQL service in the `Sequence` schema's checksum field.

## What is refget?

Refget is a specification which defines a unified method to access reference sequences using an identifier system derived from the sequence itself. This identifier is normally a checksum such as hex encoded `MD5` or a scheme called [`sha512t24u`](https://samtools.github.io/hts-specs/refget.html#refget-checksum-algorithm).

Refget supports the retrieval of full length sequences, a range within a sequence and metadata concerning a sequence. All of these functions are supported through the provision of the checksum identifier. For example to retrieve the first 100 base pairs from T2T-CHM13v2.0 chromosome 1 (INSDC accession: `CP068277.2`, MD5 checksum: `e469247288ceb332aee524caec92bb22`, GA4GH identifier `sha512t24u`: `ga4gh:SQ.S9dv70MOE6RecB0OYnc32EilaGTDWca-`).

```bash
$ curl -H'Accept: text/plain' 'https://beta.ensembl.org/data/refget/sequence/e469247288ceb332aee524caec92bb22?start=0&end=100'
CACCCTAAACCCTAACCCCTAACCCTAACCCTAACCCTAACCCTAACCCTAACCCCTAAACCCTAACCCTAACCCTAACCCTAACC
```

**N.B. If you are recieving a 406 error and using a web browser to execute sequence retrieval refget URLs, try adding `accept=text/plain` to your URL parameters.**

To retrieve metadata about a sequence (such as length and other known identifiers) you can use the metadata endpoint.

```bash
$ curl -H'Accept: application/json' 'https://beta.ensembl.org/data/refget/sequence/e469247288ceb332aee524caec92bb22/,metadata'
{"metadata": {"aliases": [{"alias": "ga4gh:SQ.S9dv70MOE6RecB0OYnc32EilaGTDWca-", "naming_authority": "ga4gh"}, {"alias": "1", "naming_authority": "Ensembl"}], "length": 248387328, "md5": "e469247288ceb332aee524caec92bb22", "trunc512": "4bd76fef430e13a45e701d0e627737d848a56864c359c6be"}}
```

## Why is Ensembl using refget

Refget is an approved standard by the [Global Alliance for Genomics and Health](https://www.ga4gh.org/product/refget/). Key to the system is the identifier created from sequence content, meaning that sequence retrieval is unambigous and ensures the correct sequence is always retrieved. It is currently not possible to resolve sequences within our GraphQL service as sequence length can be variable and create non-uniform large payloads. Instead clients should choose to resolve sequences individually.

## Refget documentation

Ensembl currently implements a refget v1.0.1 compatible service. Documentation is available from GA4GH in [text format](https://github.com/samtools/hts-specs/blob/fde0b700d7d1aeb4d40cc27c820965a6f365f650/refget.md) and [OpenAPI v3.0](https://raw.githubusercontent.com/samtools/hts-specs/fde0b700d7d1aeb4d40cc27c820965a6f365f650/pub/refget-openapi.yaml) ([including visualisation](https://rest.wiki/?https://raw.githubusercontent.com/samtools/hts-specs/fde0b700d7d1aeb4d40cc27c820965a6f365f650/pub/refget-openapi.yaml)).

## Items to note about refget

### Using appropriate `Accept` content-types

Refget is particular about the content-types it is provided. When requesting a sequence you must specify `plain/text` as the content type and when accessing sequence metadata you must specify `application/json`. Some URLs will fail when clicked on within a web browser due to their automated provision of Accept content types.

### Coordinates used in refget

The refget protocol uses the `0-start, half-open` coordinate system, which is found in other formats such as BED, SAM/BAM/CRAM and utilised by the UCSC Genome Browser. This system is sometimes called 0-based. In this system you start counting sequence positions from 0. More information about this system is available from the [UCSC Genome Browser team's blog site](https://genome-blog.gi.ucsc.edu/blog/2016/12/12/the-ucsc-genome-browser-coordinate-counting-systems/).

When converting from Ensembl coordinates (1-start, fully-closed; sometimes called 1-based) you need only remove `1` from the start. The end remains the same. For example, given an Ensembl coordinate (1-based) 1:12714000**1**-127140001, this is represented as 1:12714000**0**-127140001 (0-based).

## Using our GraphQL and refget service to find and resolve a sequence

In order to find an appropriate recording using our GraphQL service, we first need to find a `genome_id` to use in subsequent queries. We are using `"GCA_000001405.29`, which represents the human assembly GRCh38.p14 (hg38).

```json
{
  genomes(by_assembly_accession_id: {assembly_accession_id: "GCA_000001405.29"}) {
    genome_id
  }
}
```

This query will return a response similar to the following.

```json
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

We can use the following GraphQL query to retrieve all known transcripts for the human BRCA2 gene using the previously retrieved `genome_id`.

```json
query {
  genes(
    by_symbol: {
      symbol: "BRCA2",
      genome_id: "a7335667-93e7-11ec-a39d-005056b38ce3"
    }
  ) {
    stable_id
    symbol
    transcripts {
      stable_id
      symbol
      metadata {
        canonical {
          value
        }
      }
      product_generating_contexts {
        product_type
        cdna {
          sequence {
            checksum
          }
        }
        cds {
          sequence {
            checksum
          }
        }
        product {
          stable_id
          sequence {
            checksum
          }
        }
      }
    }
  }
}
```

Each sequence product (cDNA, CDS and protein) refer to a checksum. The value of this field should be used verbatim with the refget service.

```json
{
  "data": {
    "genes": [
      {
        "stable_id": "ENSG00000139618.18",
        "symbol": "BRCA2",
        "transcripts": [
          {
            "stable_id": "ENST00000380152.8",
            "symbol": "BRCA2-201",
            "metadata": {
              "canonical": {
                "value": true
              }
            },
            "product_generating_contexts": [
              {
                "product_type": "Protein",
                "cdna": {
                  "sequence": {
                    "checksum": "2f8c687a656debd4c8b1b4d47747ba35"
                  }
                },
                "cds": {
                  "sequence": {
                    "checksum": "c6b5e532b5aef696e987ca55a538ae9e"
                  }
                },
                "product": {
                  "stable_id": "ENSP00000369497.3",
                  "sequence": {
                    "checksum": "92addb948c6c652abc1dcecca05f26c0"
                  }
                }
              }
            ]
          },
          ....
        ]
      }
    ]
  }
}
```

Each sequence can now be retrieved with the following URLs.

- cDNA: <https://beta.ensembl.org/data/refget/sequence/2f8c687a656debd4c8b1b4d47747ba35>
- CDS: <https://beta.ensembl.org/data/refget/sequence/c6b5e532b5aef696e987ca55a538ae9e>
- Protein: <https://beta.ensembl.org/data/refget/sequence/92addb948c6c652abc1dcecca05f26c0>

Metadata concerning each of the records can be retreived by adding a `/metadata` to each URL.

- cDNA: <https://beta.ensembl.org/data/refget/sequence/2f8c687a656debd4c8b1b4d47747ba35/metadata>
- CDS: <https://beta.ensembl.org/data/refget/sequence/c6b5e532b5aef696e987ca55a538ae9e/metadata>
- Protein: <https://beta.ensembl.org/data/refget/sequence/92addb948c6c652abc1dcecca05f26c0/metadata>

For example if we want to retrieve metadata and the sequence for `ENSP00000369497.3`.

```bash
# Get the sequence metadata
$ curl -H'Accept: application/json' 'https://beta.ensembl.org/data/refget/sequence/92addb948c6c652abc1dcecca05f26c0/metadata'
{"metadata": {"aliases": [{"alias": "ga4gh:SQ.A6rzuv6kdsuIp6gy6fykzgzyJe9NJOC9", "naming_authority": "ga4gh"}, {"alias": "ENSP00000369497.3", "naming_authority": "Ensembl"}, {"alias": "ENSP00000439902.1", "naming_authority": "Ensembl"}, {"alias": "ENSP00000505508.1", "naming_authority": "Ensembl"}, {"alias": "ENSP04860067036.1", "naming_authority": "Ensembl"}, {"alias": "ENSP04860067038.1", "naming_authority": "Ensembl"}, {"alias": "ENSP04860067039.1", "naming_authority": "Ensembl"}, {"alias": "ENSP04955055377.1", "naming_authority": "Ensembl"}, {"alias": "ENSP04955055381.1", "naming_authority": "Ensembl"}, {"alias": "ENSP04955055385.1", "naming_authority": "Ensembl"}, {"alias": "ENSP04975021650.1", "naming_authority": "Ensembl"}, {"alias": "ENSP04975021652.1", "naming_authority": "Ensembl"}, {"alias": "ENSP04975021653.1", "naming_authority": "Ensembl"}, {"alias": "ENSP05180035422.1", "naming_authority": "Ensembl"}, {"alias": "ENSP05180035424.1", "naming_authority": "Ensembl"}, {"alias": "ENSP05180035425.1", "naming_authority": "Ensembl"}, {"alias": "ENSP05215035821.1", "naming_authority": "Ensembl"}, {"alias": "ENSP05215035825.1", "naming_authority": "Ensembl"}, {"alias": "ENSP05215035827.1", "naming_authority": "Ensembl"}], "length": 3418, "md5": "92addb948c6c652abc1dcecca05f26c0", "trunc512": "03aaf3bafea476cb88a7a832e9fca4ce0cf225ef4d24e0bd"}}

# Pipe into wc and count characters to confirm length
$ curl -s -H'Accept: text/plain' 'https://beta.ensembl.org/data/refget/sequence/92addb948c6c652abc1dcecca05f26c0' | wc -c
    3418

# Retreiving the first 10 residues of the sequence
$ curl -s -H'Accept: text/plain' 'https://beta.ensembl.org/data/refget/sequence/92addb948c6c652abc1dcecca05f26c0?start=0&end=10'
MPIGSKERPT
```

## Why metadata mentions multiple aliases for Ensembl sequences rather than just one

The refget system effectively creates a non-redundant database of sequences. If the same sequence of characters appear in the same order they will result in the same checksum identifier being generated irrespective of molecule type (nucleotides versus amino acid residues). In the example of BRCA2 the same protein sequence is found 18 other times.

## Code examples

### Simple Python refget client

The following is a simple pair of functions which will retrieve both sequence and metadata for a given checksum identifier.

```python
import requests

def resolve_sequence(checksum, refget_url=refget_url, start=None, end=None):
    url = f"{refget_url}/sequence/{checksum}"
    params = {}
    if start:
        params["start"] = start
    if end:
        params["end"] = end
    r = requests.get(url, headers={"Accept": "text/plain"}, params=params)
    r.raise_for_status()
    return r.text

def resolve_metadata(checksum, refget_url=refget_url):
    url = f"{refget_url}/sequence/{checksum}/metadata"
    r = requests.get(url, headers={"Accept": "application/json"})
    r.raise_for_status()
    return r.json
```

### Example script

This example Python script shows how sequences can be accessed using GraphQL and refget. The script relies on the following modules.

- `gql['all']`
- `requests`
- `refget`

```python
from gql import Client, gql
from gql.transport.aiohttp import AIOHTTPTransport
import requests
import refget

# Default endpoint
ensembl_graphql = "https://beta.ensembl.org/data/graphql"
ensembl_refget = "https://beta.ensembl.org/data/refget"

# If set to true we will use the requests version
# to communicate with refget. Otherwise we use
# the python refget client library
use_requests_refget = True

# Select your transport with a defined url endpoint
transport = AIOHTTPTransport(url=ensembl_graphql)

# Create a GraphQL client using the defined transport
client = Client(transport=transport, fetch_schema_from_transport=True)


def get_genome_id(gca):
    genome_id_graphql_query = gql(
        """query GetGenomeID($assembly_accession_id: String!) {
    genomes(
      by_assembly_accession_id: {
        assembly_accession_id: $assembly_accession_id
      }) 
    {
      genome_id
    }
  }"""
    )

    genome_id_result = client.execute(
        genome_id_graphql_query, variable_values={"assembly_accession_id": gca}
    )
    return genome_id_result["genomes"][0]["genome_id"]


def get_transcripts(symbol, genome_id):
    # Gene query for all transcripts associated with a gene symbol
    gene_query = gql(
        """
      query GetTranscriptSequences($symbol: String!, $genome_id: String!) {
        genes(
          by_symbol: {symbol: $symbol, genome_id: $genome_id}
        ) {
          stable_id
          unversioned_stable_id
          version
          symbol
          transcripts {
            stable_id
            symbol
            type
            metadata {
              mane {
                value
              }
              canonical {
                value
              }
            }
            product_generating_contexts {
              product_type
              cdna {
                sequence {
                  checksum
                }
              }
              cds {
                sequence {
                  checksum
                }
              }
              product_type
              product {
                stable_id
                sequence {
                  checksum
                }
              }
            }
          }
        }
      }
  """
    )
    result = client.execute(
        gene_query, variable_values={"genome_id": genome_id, "symbol": symbol}
    )
    return result


def resolve_sequence(checksum, refget_url=ensembl_refget, start=None, end=None):
    url = f"{refget_url}/sequence/{checksum}"
    params = {}
    if start:
        params["start"] = start
    if end:
        params["end"] = end
    r = requests.get(url, headers={"Accept": "text/plain"}, params=params)
    r.raise_for_status()
    return r.text


def refget_client_resolve_sequence(checksum, refget_url=ensembl_refget, start=None, end=None):
    rgc = refget.RefGetClient(f"{refget_url}/sequence/")
    sequence = rgc.refget(checksum, start=start, end=end)
    return sequence


gca = "GCA_000001405.29"
gene_symbol = "BRCA2"

genome_id = get_genome_id(gca)
genes = get_transcripts(symbol=gene_symbol, genome_id=genome_id)

for gene in genes["genes"]:
    for transcript in gene["transcripts"]:
        if transcript["metadata"]["canonical"]:
            for pgc in transcript["product_generating_contexts"]:
                for type in ("cdna", "cds", "product"):
                    checksum = pgc[type]["sequence"]["checksum"]
                    if use_requests_refget:
                        seq = resolve_sequence(checksum)
                    else:
                        seq = refget_client_resolve_sequence(checksum)
                    stable_id = transcript["stable_id"]
                    if "stable_id" in pgc[type]:
                        stable_id = pgc[type]["stable_id"]
                    print(
                        f"{stable_id}\t{type}\tlength:{len(seq)}\tretrieved_checksum:{checksum}"
                    )

```
