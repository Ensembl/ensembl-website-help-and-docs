# Videos

- [How to create a Help video](#how-to-create-a-help-video)
- [How to add videos to documentation](#how-to-add-videos-to-documentation)

## How to create a Help video

### Scaling
* Create Camtasia file at 1280 x 720 px
* Open browser at 1280 x 720 px
* Record video using Camtasia
* Place recording in Camtasia time line
* Shrink video to fit into frame

### Highlighting
* Use zooming to show parts of the screen at full pixel:pixel scale
* Use Camtasia arrow drawing to draw labels then add label afterwards
* Arrow in #D90000 (rgb 217,0,0)
* Add labels at 72 px Caveat bold #D90000 (rgb 217,0,0)

### Intros
* Add intros, either data intro or how to, depending on type of video
* Extend out top bar so that it lasts the length of the video
* Change label in intro and top bar

### Subtitles

* In YouTube enable Closed captioning.
* Go into Closed captioning and *Duplicate and edit* the Automatic closed captioning.
* Go through and fix any errors.

## How to add videos to documentation

### Option 1: Add a link to the file with video data

- Add a yaml file in a folder that makes the most sense (e.g. `media` folder or `videos` folder in the same folder as your article) - IMPORTANT: use the 3-letter extension: `yml`, not `yaml`.
- Make sure the video yaml file has the following fields:
  - `type` - always set to "video"
  - `title` — title of the video
  - `description` — description of the video
  - `youtube_id` — video id copied from a youtube url (**note:** only the id, not the full url)
- Add the `related_videos` field to the frontmatter of your documentation file. The `related_videos` field should contain a yaml list with a path to your video. For instructions on how to write such a path, see the [metadata instructions](metadata.md).

```yml
type: Video
title: Select a species or assembly
description: How to select a species, strain or assembly.
youtube_id: v6HKpja5t1M
```

Using this option will allow us to extract the video and to display it side by side with the body of the article, in a way shown in [this design](https://xd.adobe.com/view/d64fc883-dc95-4d08-63a3-483f9c772ec1-a07e/screen/690c281b-e3ad-4c8f-9566-2b6745ea0fee?fullscreen).

### Option 2: Embedding the video within an article
You can add a video inside the body of your article by copying its embed code from youtube and adding it in the body of your article, like so:

```
Here is my first paragraph, right before the video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/C2g37X_uMok" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Here is my second paragraph, right after the video.
```

