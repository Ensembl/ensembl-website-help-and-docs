---
slug: using-graphql
title: Accessing Ensembl GraphQL service
description: How to access the GraphQL services provided by Ensembl
related_articles:
tags:
  - api
  - tools
status: draft
---
# Using the Ensembl GraphQL service

The Ensembl GraphQL service can be used to access information about Genes, Transcripts, Assemblies and associated Metadata held by Ensembl.  

The followings sections provide example queries to return commonly accessed data.  These can be expanded and adapted to meet your own needs.

## Stability

The Ensembl GraphQL service is currently only available to the public as a beta service.  We cannot guarantee that breaking changes will not be deployed.  Due to this, we encourage you explore the service (and give us feedback on what functionality you would like to see included in future releases), but do not advise you to build anything which requires stability with it until we announce a stable release.

## Versioning

If you want to check the version of the API, you can do so with this query:

``` json
query{
  version{
    api{
      major
      minor
      patch
    }
  }
}
```

The query above will provide data about the major, minor and patch versions of the service.

``` json
{
  "data": {
    "version": {
      "api": {
        "major": "0",
        "minor": "1",
        "patch": "0-beta"
      }
    }
  }
}
```

While the service is in beta, please assume that any change could potentially be a breaking change.  However, when we move out of beta, we will use semantic versioning (i.e. major.minor.patch).  Those version numbers can be interpreted as:-
- major version change: This is a breaking change
- minor version change: This is a non-breaking change
- patch version change: This is a non-breaking change, but one we did not expect to make

## Authentication

Currently the Ensembl GraphQL service does not require authentication.

## Error messages and status codes
Unlike REST, GraphQL is more restricted with the HTTP codes it returns.  For example, if an object cannot be found, then a 200 response is returned (rather than a 404 for example).  To help make it clearer, additional information is returned in the response:

```json
{
  "data": {
    "genes_by_symbol": null
  },
  "errors": [
    {
      "message": "Failed to find gene with ids: symbol=BRCA22, genome_id=...",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": [
        "genes_by_symbol"
      ],
      "extensions": {
        "code": "GENE_NOT_FOUND",
        "symbol": "BRCA22",
        "genome_id": "..."
      }
    }
  ]
}
```
If there is an issue which makes the service unavailable, then a 500 range status code will be returned.

If malformed queries are submitted to the Ensembl GraphQL Service, the errors returned will be structured like this:
``` json
{
  "error": {
    "errors": [
      {
        "message": "Unknown argument 'not_the_right_argument' on field 'Query.gene'.",
        "locations": [
          {
            "line": 2,
            "column": 8
          }
        ]
      }
    ]
  }
}
```
