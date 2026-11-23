---
title: VEP plugins
description: Install, run and write Perl plugins to extend, filter and
  manipulate VEP output.
slug: vep-cli-plugins
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

# VEP plugins

Find available plugins, their dependencies and examples in the [plugin catalogue](/help/articles/vep-plugin-catalogue).

**On this page**

- [How it works](/help/articles/vep-plugins#plugins_how)
- [Functionality](/help/articles/vep-plugins#plugins_functionality)
- [Filtering using plugins](/help/articles/vep-plugins#plugins_filter)
- [Using plugins](/help/articles/vep-plugins#plugins_use)
- [Intergenic variants](/help/articles/vep-plugins#plugins_intergenic)

You can use plugin modules written in Perl to **extend, filter and manipulate** the Ensembl VEP output.

To use plugins:

- Install them using the [Ensembl VEP installer script](/help/articles/vep-download-and-install#installer). You can quickly check installed plugins by running:
  - <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">perl INSTALL.pl -a p -g list
    </code></pre>
- Use Ensembl VEP in [Docker](/help/articles/vep-download-and-install#docker) and [Singularity](/help/articles/vep-download-and-install#singularity). The plugins and their dependencies are available in the [Docker image](https://hub.docker.com/r/ensemblorg/ensembl-vep).

<span id="plugins_how"></span>

## How it works

Plugins are run once Ensembl VEP has finished its analysis for each line of the output, but before anything is printed to the output file.

When each plugin is called (using the *run* method) it is passed two data structures to use in its analysis; the first is a data structure containing all the data for the current line, and the second is a reference to a variation API object that represents the combination of a variant allele and an overlapping or nearby genomic feature (such as a transcript or regulatory region).

This object provides access to all the relevant API objects that may be useful for further analysis by the plugin (such as the current VariationFeature and Transcript). Please refer to the [Ensembl Variation API documentation](https://jun2026.archive.ensembl.org/info/docs/Doxygen/variation-api/index.html) for more details.

<span id="plugins_functionality"></span>

## Functionality

We expect that most plugins will simply add information to the last column of the output file, the "Extra" column, and the plugin system assumes this in various places, but plugins are also free to alter the output line as desired.

The only hard requirement for a plugin to work with Ensembl VEP is that it implements a number of required methods (such as *new* which should create and return an instance of this plugin, *get_header_info* which should return descriptions of the type of data this plugin produces to be included in Ensembl VEP output's header, and *run* which should actually perform the logic of the plugin).

To make development of plugins easier, we suggest that users use the [Bio::EnsEMBL::Variation::Utils::BaseVepPlugin](https://jun2026.archive.ensembl.org/info/docs/Doxygen/variation-api/classBio_1_1EnsEMBL_1_1Variation_1_1Utils_1_1BaseVepPlugin.html) module as their base class, which provides default implementations of all the necessary methods which can be overridden as required. Please refer to the documentation in this module for details of all required methods and for a simple example of a plugin implementation.

<span id="plugins_filter"></span>

## Filtering using plugins

A common use for plugins will be to filter the output in some way (for example to limit output lines to missense variants) and so we provide a simple mechanism to support this.

The *run* method of a plugin is assumed to return a reference to a hash containing information to be included in the output, and if a plugin should not add any data to a particular line it should return an empty hashref. If a plugin should instead filter a line and exclude it from the output, it should return *undef* from its *run* method, this also means that no further plugins will be run on the line.

If you are developing a filter plugin, we suggest that you use the [Bio::EnsEMBL::Variation::Utils::BaseVepFilterPlugin](https://jun2026.archive.ensembl.org/info/docs/Doxygen/variation-api/classBio_1_1EnsEMBL_1_1Variation_1_1Utils_1_1BaseVepFilterPlugin.html) as your base class and then you need only override the *include_line* method to return true if you want to include this line, and false otherwise. Again, please refer to the documentation in this module for more details and an example implementation of a missense filter.

<span id="plugins_use"></span>

## Using plugins

In order to run a plugin you need to include the plugin module in Perl's library path somehow; by default Ensembl VEP includes the *~/.vep/Plugins* directory in the path, so this is a convenient place to store plugins, but you are also able to include modules by any other means (e.g using the *$PERL5LIB* environment variable in Unix-like systems). You can then run a plugin using the [--plugin](/help/articles/vep-options-annotation#opt_plugin) command line option, passing the name of the plugin module as the argument.

For example, if your plugin is in a module called *MyPlugin.pm*, stored in *~/.vep/Plugins*, you can run it with a command line like:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i input.vcf --plugin MyPlugin
</code></pre>

You can pass arguments to the plugin's 'new' method by including them after the plugin name on the command line, separated by commas, e.g.:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep -i input.vcf --plugin MyPlugin,1,FOO
</code></pre>

If your plugin inherits from BaseVepPlugin, you can then retrieve these parameters as a list from the *params* method.

You can run multiple plugins by supplying multiple [--plugin](/help/articles/vep-options-annotation#opt_plugin) arguments. Plugins are run serially in the order in which they are specified on the command line, so they can be run as a pipeline, with, for example, a later plugin filtering output based on the results from an earlier plugin. Note though that the first plugin to filter a line 'wins', and any later plugins won't get run on a filtered line.

<span id="nv_species"></span>

### Plugin warnings

By default, an Ensembl VEP run does not fail even when a plugin raises warnings or compilation errors. To avoid this, please use the [--safe](/help/articles/vep-options-basic#opt_safe) flag. This is particularly useful to ensure plugins run properly when using Ensembl VEP in pipelines.

<span id="plugins_intergenic"></span>

## Intergenic variants

When a variant falls in an intergenic region, it will usually not have any consequence types called, and hence will not have any associated VariationFeatureOverlap objects. In this special case, Ensembl VEP creates a new VariationFeatureOverlap that overlaps a feature of type "Intergenic".

To force your plugin to handle these, you must add "Intergenic" to the feature types that it will recognize; you do this by writing your own feature_types sub-routine:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">sub feature_types {
    return ['Transcript', 'Intergenic'];
}
</code></pre>

This will cause your plugin to handle any variation features that overlap transcripts or intergenic regions. To also include any regulatory features, you should use the generic type "Feature":

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">sub feature_types {
    return ['Feature', 'Intergenic'];
}
</code></pre>
