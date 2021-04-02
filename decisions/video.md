# Video article

A video article is a yaml-formatted file with the metadata about a video.

## File extension:
Use the 3-letter extension: `yml`, not `yaml`.

## Fields

| Field       | Optional | Semantics                         |
|-------------|----------|-------------------------------------|
| type        | no       |  Always set to string `video`; signals the purpose of the file
| title       | no       | Title of the video (as will be presented to search crawlers)
| description | no       | Brief summary of the video (as will be presented to search crawlers)
| youtube_id  | no       | Unique identifier of this video on youtube


## Example

```yml
type: Video
title: Select a species or assembly
description: How to select a species, strain or assembly.
youtube_id: v6HKpja5t1M
```
