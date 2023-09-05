---
slug: about-graphql
title: About Ensembl GraphQL service
description: Information about Ensembl's GraphQL service
tags:
  - api
  - tools
status: draft
---
# Ensembl GraphQL service

Ensembl offers access to its data via a GraphQL service, allowing you to access the data you want by tailoring the responses from the service.

## What is GraphQL?

GraphQL is a query language.  GraphQL services typically have one end point (as opposed to REST APIs which have multiple end points), and they allow you to specify exactly what data is returned to you.

For example, the following query requests the `symbol` of a particular gene based on its `stable_id`.

```json
query{
  gene(by_id: {
    genome_id: "<insert valid genome ID>",
    stable_id: "ENSG00000101384.12"})
  {
    symbol
  }
}

```
The JSON results contain only the symbol as requested.
```json
{
  "data": {
    "gene": {
      "symbol": "JAG1"
    }
  }
}
```

Additional information about GraphQL can be found on the [official GraphQL site](https://graphql.org/).

## Why is Ensembl using GraphQL?

GraphQL offers flexibility through allowing you to specify the data that are returned from each query.  This reduces superfluous data transmission and, coupled with the graph traversal inherent to GraphQL, will provide a method of exploring and extracting the elements of the connected data offered by Ensembl. The Ensembl project believes that this will be an improvement to the experience offered by REST APIs.  

Ensembl's new website also utilises the GraphQL services offered to the public, ensuring consistency of data across the project.


## Documentation
If you wish to interrogate the service and explore the documentation, a GraphQL [playground](/data/graphql) can be accessed via your browser.
