---
title: Download and install VEP
description: Install VEP, its dependencies, caches and plugins, or run it in
  Docker, Singularity or Nextflow.
slug: vep-cli-download-and-install
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

# Download and install VEP

These instructions describe VEP release 116 (June 2026). Use matching VEP, cache and plugin releases. See the [release history](/help/articles/vep-release-history) for changes in this and earlier versions.

**On this page**

- [Download](/help/articles/download-and-install-vep#download)
- [Requirements](/help/articles/download-and-install-vep#requirements)
- [Installation](/help/articles/download-and-install-vep#installer)
- [Additional components](/help/articles/download-and-install-vep#additional)
- [Using Ensembl VEP in macOS](/help/articles/download-and-install-vep#macos)
- [Using Ensembl VEP in Windows](/help/articles/download-and-install-vep#windows)
- [Docker](/help/articles/download-and-install-vep#docker)
- [Singularity](/help/articles/download-and-install-vep#singularity)
- [Nextflow](/help/articles/download-and-install-vep#nextflow)

<span id="container"></span>

### Note

To address potential installation challenges with Ensembl VEP dependencies on newer systems, we recommend using [Docker](/help/articles/download-and-install-vep#docker) or [Singularity](/help/articles/download-and-install-vep#singularity) containers.

These containerised environments enable to access all the latest Ensembl VEP features without the hassle of installing dependencies directly on your system. Additionally, they are highly compatible with computer clusters.

<span id="download"></span>

## Download

Download ensembl-vep package (see below the different ways to download it) and then follow the [installation instructions](/help/articles/download-and-install-vep#installer).

### Using Git

### Clone the Git repository

Use git to download the ensembl-vep package:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">git clone --branch release/116 https://github.com/Ensembl/ensembl-vep.git
cd ensembl-vep
</code></pre>

### Update to a newer version

To update from a previous version:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">cd ensembl-vep
git pull
git checkout release/116
perl INSTALL.pl
</code></pre>

### Use an older version

To use an older version (this example shows how to set up release 87):

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">cd ensembl-vep
git checkout release/87
perl INSTALL.pl
</code></pre>

### Download the Zipped package file

Users without the git utility installed may download a zip file from GitHub, though we would always recommend using git if possible.

<span id="nogit"></span>

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">curl -L -O https://github.com/Ensembl/ensembl-vep/archive/release/116.zip
unzip 116.zip
cd ensembl-vep-release-116/
</code></pre>

<span id="toolsversions"></span>

### Previous versions (ensembl-tools)

Previously, Ensembl VEP was available as part of the ensembl-tools package (see the [Ensembl 87 VEP script PDF](https://github.com/Ensembl/public-plugins/blob/release/87/docs/htdocs/info/docs/tools/vep/script/VEP_script_documentation.pdf) for documentation). The following downloads are available for archival purposes.

<span id="div_toolsversions"></span>

- [Download version 87](https://github.com/Ensembl/ensembl-tools/archive/release/87.zip) (Ensembl 87)
- [Download version 86](https://github.com/Ensembl/ensembl-tools/archive/release/86.zip) (Ensembl 86)
- [Download version 85](https://github.com/Ensembl/ensembl-tools/archive/release/85.zip) (Ensembl 85)
- [Download version 84](https://github.com/Ensembl/ensembl-tools/archive/release/84.zip) (Ensembl 84)
- [Download version 83](https://github.com/Ensembl/ensembl-tools/archive/release/83.zip) (Ensembl 83)
- [Download version 82](https://github.com/Ensembl/ensembl-tools/archive/release/82.zip) (Ensembl 82)
- [Download version 81](https://github.com/Ensembl/ensembl-tools/archive/release/81.zip) (Ensembl 81)
- [Download version 80](https://github.com/Ensembl/ensembl-tools/archive/release/80.zip) (Ensembl 80)
- [Download version 79](https://github.com/Ensembl/ensembl-tools/archive/release/79.zip) (Ensembl 79)
- [Download version 78](https://github.com/Ensembl/ensembl-tools/archive/release/78.zip) (Ensembl 78)
- [Download version 77](https://github.com/Ensembl/ensembl-tools/archive/release/77.zip) (Ensembl 77)
- [Download version 76](https://github.com/Ensembl/ensembl-tools/archive/release/76.zip) (Ensembl 76)
- [Download version 75](https://github.com/Ensembl/ensembl-tools/archive/release/75.zip) (Ensembl 75)
- [Download version 74](https://github.com/Ensembl/ensembl-tools/archive/release/74.zip) (Ensembl 74)
- [Download version 73](https://github.com/Ensembl/ensembl-tools/archive/release/73.zip) (Ensembl 73)
- [Download version 72](https://github.com/Ensembl/ensembl-tools/archive/release/72.zip) (Ensembl 72)
- [Download version 71](https://github.com/Ensembl/ensembl-tools/archive/release/71.zip) (Ensembl 71)
- [Download version 2.8](https://github.com/Ensembl/ensembl-tools/archive/release/70.zip) (Ensembl 70)
- [Download version 2.7](https://github.com/Ensembl/ensembl-tools/archive/release/69.zip) (Ensembl 69)
- [Download version 2.6](https://github.com/Ensembl/ensembl-tools/archive/release/68.zip) (Ensembl 68)
- [Download version 2.5](https://github.com/Ensembl/ensembl-tools/archive/release/67.zip) (Ensembl 67)
- [Download version 2.4](https://github.com/Ensembl/ensembl-tools/archive/release/66.zip) (Ensembl 66)
- [Download version 2.3](https://github.com/Ensembl/ensembl-tools/archive/release/65.zip) (Ensembl 65)
- [Download version 2.2](https://github.com/Ensembl/ensembl-tools/archive/release/64.zip) (Ensembl 64 - ensembl-tools/scripts/variant_effect_predictor)
- [Download version 2.1](https://github.com/Ensembl/ensembl-variation/archive/release/63.zip) (Ensembl 63)
- [Download version 2.0](https://github.com/Ensembl/ensembl-variation/archive/release/62.zip) (Ensembl 62 - ensembl-variation/scripts/examples)

<span id="requirements"></span>

## Requirements

Ensembl VEP requires:

- **gcc**, **g++** and **make**
- **Perl** version **5.22** or above recommended (tested on 5.22, 5.26, 5.32, 5.34, 5.38)
- **Perl** packages:
  - [Archive::Zip](https://metacpan.org/pod/Archive::Zip)
  - [DBD::mysql](https://metacpan.org/release/DVEEDEN/DBD-mysql-4.050/view/lib/DBD/mysql.pm) (version \<=4.050)
  - [DBI](https://metacpan.org/pod/DBI)

  See [this guide](http://www.cpan.org/modules/INSTALL.html) for more information on how to install perl modules. [Additional libraries](/help/articles/download-and-install-vep#additional) can be installed for extra features and enhancements but they are not required to run Ensembl VEP in most of the use cases.

Ensembl VEP's INSTALL.pl script will install required components of Ensembl API for you, but Ensembl VEP may also be used with any pre-existing API installations you have, **provided their versions match the version of VEP you are using**.

Ensembl VEP is available in the following platforms:

- Linux (e.g., Ubuntu, Debian, Mint)
- [macOS](/help/articles/download-and-install-vep#macos)
- [Windows](/help/articles/download-and-install-vep#windows) (requires a more involved installation process)

Ensembl VEP is also available as [Docker](/help/articles/download-and-install-vep#docker) and [Singularity](/help/articles/download-and-install-vep#singularity) images, allowing to skip the complex installation steps.

<span id="installer"></span>

## Installation

Ensembl VEP's INSTALL.pl makes it easy to set up your environment for using the Ensembl VEP. It will download and configure a minimal set of the Ensembl API for use by the Ensembl VEP, and can also download [cache files](/help/articles/vep-annotation-sources#cache), [FASTA files](/help/articles/vep-annotation-sources#fasta) and [plugins](/help/articles/vep-plugins).

Run the following, and follow any prompts as they appear:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">perl INSTALL.pl
</code></pre>

[Additional non-essential components](/help/articles/download-and-install-vep#additional) and enhancements must be installed manually.

### Software components installed

- [BioPerl](https://github.com/bioperl/bioperl-live)
- [ensembl](https://github.com/Ensembl/ensembl)
- [ensembl-io](https://github.com/Ensembl/ensembl-io)
- [ensembl-variation](https://github.com/Ensembl/ensembl-variation)
- [ensembl-funcgen](https://github.com/Ensembl/ensembl-funcgen)
- [Bio::DB::HTS](https://github.com/Ensembl/Bio-DB-HTS)

If you already have the latest version of the API installed you do not need to run the installer, although it can be used to simply update your API version (with post-release patches applied), and retrieve cache and FASTA files. The installer downloads the API within the Ensembl VEP directory and will not affect any other Ensembl API installations.

The script will also attempt to install a Perl::XS module, [Bio::DB::HTS](https://github.com/Ensembl/Bio-HTS), for rapid access to bgzipped FASTA files. If this fails, you may add the --NO_HTSLIB flag when running the installer; Ensembl VEP will fall back to using Bio::DB::Fasta for this functionality ([more details](/help/articles/vep-annotation-sources#fasta)).

<span id="run_install"></span>

### Running the installer

The installer is run on the command line as follows:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">perl INSTALL.pl [options]
</code></pre>

Follow on-screen prompts and note warnings of any files which will be deleted/overwritten

You should not need to add any options, but configuration of the installer is possible with the flags below. Options can also be set by exporting **environment variables** prefixed with `VEP_` before running the installer (for instance, `export VEP_NO_HTSLIB=1` and `export VEP_DIR_PLUGINS="/plugins"`).

<span id="opt_assembly"></span>

### `--ASSEMBLY`

**Alternate:** `-y`

Assembly version to use when using `--AUTO`. Most species have only one assembly available on each software release; currently this is only required for [human on release 76](/help/articles/vep-other-information#assembly) onwards.

<span id="opt_auto"></span>

### `--AUTO`

**Alternate:** `-a`

Run installer without prompts. Use the following options to specify parts to install:

- **a** (API + Bio::DB::HTS/htslib)
- **l** (Bio::DB::HTS/htslib only)
- **c** (cache)
- **f** (FASTA)
- **p** (plugins) — Require the use of the [--PLUGINS](/help/articles/download-and-install-vep#opt_plugins) flag to list the plugin(s) to install.

e.g. for API and cache:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">perl INSTALL.pl --AUTO ac
</code></pre>

<span id="opt_cache_version"></span>

### `--CACHE_VERSION [version]`

By default the installer will download the latest version of Ensembl VEP caches and FASTA files (currently 116). You can force the script to install a different version, but there is no guarantee that a version of the API will be compatible with a different version of the cache.

<span id="opt_cachedir"></span>

### `--CACHEDIR [dir]`

**Alternate:** `-c`

By default the script will install the cache files in the ".vep" subdirectory in your home area. This option configures where cache files are installed.

The [--dir_cache](/help/articles/vep-cache-options#opt_dir_cache) flag must be passed when running Ensembl VEP if a non-default cache directory is given:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep --dir_cache [dir]
</code></pre>

<span id="opt_destdir"></span>

### `--DESTDIR [dir]`

**Alternate:** `-d`

By default the script will install the API modules in a subdirectory of the current directory named "Bio". Using this option you can configure where the Bio directory is created. If something other than the default is used, this directory must either be added to your PERL5LIB environment variable when running Ensembl VEP, or included using perl's -I flag:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">perl -I [dir] vep
</code></pre>

<span id="opt_no_htslib"></span>

### `--NO_HTSLIB`

**Alternate:** `-l`

Don't attempt to install Bio::DB::HTS/htslib

<span id="opt_no_test"></span>

### `--NO_TEST`

Don't run API tests - useful if you know a harmless failure will prevent continuation of the installer

<span id="opt_no_update"></span>

### `--NO_UPDATE`

**Alternate:** `-n`

By default the script will check for new versions or updates of Ensembl VEP. Using this option will skip this check.

<span id="opt_plugins"></span>

### `--PLUGINS`

**Alternate:** `-g`

Comma-separated list of plugins to install when using `--AUTO`. To install all available plugins, use `--PLUGINS all`.

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text"># List the available plugins:
perl INSTALL.pl -a p --PLUGINS list
# Download/install all the available plugins:
perl INSTALL.pl -a p --PLUGINS all
# Download/install a defined list of plugins, e.g.:
perl INSTALL.pl -a p --PLUGINS dbNSFP,CADD,G2P
</code></pre>

<span id="opt_pluginsdir"></span>

### `--PLUGINSDIR [dir]`

**Alternate:** `-r`

By default the script will install the plugins files in the "Plugins" subdirectory of the `--CACHEDIR` directory. This option configures where the plugins files are installed.

The [--dir_plugins](/help/articles/vep-cache-options#opt_dir_plugins) flag must be passed when running Ensembl VEP if a non-default plugins directory is given:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">./vep --dir_plugins [dir]
</code></pre>

<span id="opt_prefer_bin"></span>

### `--PREFER_BIN`

**Alternate:** `-p`

Use this if the installer fails with "out of memory" errors.

<span id="opt_species"></span>

### `--SPECIES`

**Alternate:** `-s`

Comma-separated list of species to install when using `--AUTO`. To install the RefSeq cache, add "\_refseq" to the species name, e.g. "homo_sapiens_refseq", or "\_merged" to install the merged Ensembl/RefSeq cache. Remember to use [--refseq](/help/articles/vep-cache-options#opt_refseq) or [--merged](/help/articles/vep-cache-options#opt_merged) when running the VEP with the relevant cache!

Use `all` to install data for all available species.

<span id="opt_use_https_proto"></span>

### `--USE_HTTPS_PROTO`

Download cache and FASTA file using HTTPs protocol instead of FTP. Useful for networks where FTP port is blocked by firewall.

<span id="opt_github_token"></span>

### `--GITHUBTOKEN`

Set token to use for authentication when querying GitHub API. Authenticated user have increased rate-limit. NOTE: use token with read-only access.

<span id="opt_quiet"></span>

### `--QUIET`

**Alternate:** `-q`

Don't write any status output when using `--AUTO`.

<span id="additional"></span>

## Additional components

INSTALL.pl will set up the minimum requirements Ensembl VEP. Some features and enhancements, however, require the installation of additional components. Most are perl modules that are easily installed using cpanm; see [this guide](http://www.cpan.org/modules/INSTALL.html) for more information on how to install perl modules.

Typically, you will use cpanm to install modules locally in your home directories; this shows how to set up a path for perl modules and install one there:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mkdir -p $HOME/cpanm
export PERL5LIB=$PERL5LIB:$HOME/cpanm/lib/perl5
cpanm -l $HOME/cpanm Set::IntervalTree
</code></pre>

To make the change to `PERL5LIB` permanent, it is recommended to add the `export` line to your `$HOME/.bashrc` or `$HOME/.profile`.

- Additional features
  - [JSON](http://search.cpan.org/dist/JSON/) - required to produce [JSON format output](/help/articles/vep-output-format-options#opt_json)
  - [Set::IntervalTree](http://search.cpan.org/~benbooth/Set-IntervalTree/lib/Set/IntervalTree.pm) - used to find overlaps between entities in coordinate space. Required to use [--nearest](/help/articles/vep-output-options#opt_nearest)
  - [Bio::DB::BigFile](http://search.cpan.org/~lds/Bio-BigFile-1.07/lib/Bio/DB/BigFile.pm) - required to use bigWig format [custom annotation files](/help/articles/vep-custom-annotations). See [Bio::DB::BigFile instructions](/help/articles/download-and-install-vep#bigfile).
- Speed enhancements - these modules can improve Ensembl VEP runtime
  - [PerlIO::gzip](http://search.cpan.org/~nwclark/PerlIO-gzip-0.19/gzip.pm) - marginal gains in compressed file parsing as used by the Ensembl VEP cache
  - [ensembl-xs](https://github.com/Ensembl/ensembl-xs) - provides pre-compiled replacements for frequently used routines in Ensembl VEP. Requires manual installation, see [README](https://github.com/Ensembl/ensembl-xs) for details

<span id="bigfile"></span>

### Bio::DB::BigFile

In order for Ensembl VEP to be able to access bigWig format custom annotation files, the Bio::DB::BigFile perl module is required. Installation involves downloading and compiling the [kent source tree](https://github.com/ucscGenomeBrowser/kent). The current version of the kent source tree does not work correctly with Bio::DB::BigFile, so it is necessary to install an archive version known to work (v335).

1.  Download and unpack the kent source tree

    <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">wget https://github.com/ucscGenomeBrowser/kent/archive/v335_base.tar.gz
    tar xzf v335_base.tar.gz
    </code></pre>

2.  Set up some environment variables; these are required only temporarily for this installation process

    <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">export KENT_SRC=$PWD/kent-335_base/src
    export MACHTYPE=$(uname -m)
    export CFLAGS=&quot;-fPIC -std=gnu17&quot;
    export MYSQLINC=`mysql_config --include | sed -e 's/^-I//g'`
    export MYSQLLIBS=`mysql_config --libs`
    </code></pre>

3.  Modify kent build parameters

    <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">cd $KENT_SRC/lib
    echo 'CFLAGS=&quot;-fPIC&quot; &quot;-std=gnu17&quot;' &gt; ../inc/localEnvironment.mk
    </code></pre>

4.  Build kent source

    <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">make clean &amp;&amp; make
    cd ../jkOwnLib
    make clean &amp;&amp; make
    </code></pre>

    If either of these steps fail, you may have some missing dependencies. Known common missing dependencies are libpng and libssl; these may be installed, for example, with `apt-get` on Ubuntu. If you do not have sudo access you may have to ask your sysadmin to install any missing dependencies.

    <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">sudo apt-get install libpng-dev libssl-dev
    </code></pre>

    On macOS you may use [`brew`](https://brew.sh/); the openssl libraries also need to be symbolically linked to a different path:

    <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">brew install libpng openssl
    cd /usr/local/include
    ln -s ../opt/openssl/include/openssl .
    cd -
    </code></pre>

5.  On some systems (e.g. macOS), a compiled file is placed in a path that Bio::DB::BigFile cannot find. You can correct this with:

    <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">ln -s $KENT_SRC/lib/x86_64/* $KENT_SRC/lib/
    </code></pre>

6.  We'll now use cpanm to install the perl module for Bio::DB::BigFile itself. See [above](/help/articles/download-and-install-vep#additional) for guidance on this. In this example we're going to install the module to a path within your home directory. In order to do this we must modify the paths that perl looks in to find modules by adding to the `PERL5LIB` environment module. To make this change permanent you must add the `export` line to your `$HOME/.bashrc` or `$HOME/.profile`.

    <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mkdir -p $HOME/cpanm
    export PERL5LIB=$PERL5LIB:$HOME/cpanm/lib/perl5
    cpanm -l $HOME/cpanm Bio::DB::BigFile
    </code></pre>

    If you are prompted for the path to the kent source tree, that means something didn't go right in the compilation above. Double check that `$KENT_SRC/lib/jkweb.a` exists and is not found instead at e.g. `$KENT_SRC/lib/x86_64/jkweb.a`. You may copy or link the file (and the other files in that directory) to the former path.

    <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">ln -s $KENT_SRC/lib/x86_64/* $KENT_SRC/lib/
    </code></pre>

7.  You should now be able to successfully run the appropriate test in the Ensembl VEP package:

    <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">perl -Imodules t/AnnotationSource_File_BigWig.t
    </code></pre>

<span id="macos"></span>

## Using Ensembl VEP in macOS

Installing Ensembl VEP on macOS is slightly trickier than other Linux-based systems, and will require additional dependancies. These instructions will guide you through the setup of **Perlbrew**, **Homebrew**, **MySQL** and other dependancies that will allow for a clean installation of Ensembl VEP on your macOS system.

These instructions have been tested on **macOS High Sierra (10.13)** and **macOS Sierra (10.12)**. Older versions may require additional tweaks, however we shall endeavouXcoder to keep these instructions up to date for future versions of MacOS.

<span id="apple_silicon_macs"></span>

### Installation issues with M-series Macs

We advise using the [Docker](/help/articles/download-and-install-vep#docker) or [Singularity](/help/articles/download-and-install-vep#singularity) images for Ensembl VEP if you are having issues installing Ensembl VEP in Apple Silicon (M1 upwards) Macs.

### Prerequisite Setup

List of prerequisites: **Xcode**, **GCC**, **Perlbrew**, **Cpanm**, **Homebrew**, **mysql**, **DBI**, **DBD::mysql** (version \<=4.050)

### Xcode and GCC

Ensembl VEP requires Xcode and GCC for installation purposes. Fortunately, recent versions of macOS will look for (and attempt to install if required) both of these when you run the following command:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">gcc -v
</code></pre>

### Perlbrew

We recommend using Perlbrew to install a new version of Perl on your mac, to prevent messing with the vendor perl too much. This can be done with the following command:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">curl -L http://install.perlbrew.pl | bash

echo 'source $HOME/perl5/perlbrew/etc/bashrc' &gt;&gt; ~/.bash_profile
</code></pre>

At this point, PLEASE RESTART YOUR TERMINAL WINDOW to allow for the perlbrew changes to take effect.

We recommend installing Perl version **5.26.2** to run Ensembl VEP, and installing cpanm to handle the installation of perl modules. These steps can be completed with the commands:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">perlbrew install -j 5 --as 5.26.2 --thread --64all -Duseshrplib perl-5.26.2 --notest
perlbrew switch 5.26.2
perlbrew install-cpanm
</code></pre>

### Homebrew

This package management system for macOS would make the installation of the next prerequisite (i.e. xs) easier.

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">/usr/bin/ruby -e &quot;$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)&quot;
</code></pre>

### xz

Ensembl VEP requires the installation of xz, a data-compression utility. The easiest way to install the xz package is through homebrew:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">brew install xz
</code></pre>

### MySQL

In order to connect to the Ensembl databases, a collection of MySQL related dependancies are required. Fortunately, these can be installed neatly with **Homebrew** and **Cpanm**:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">brew install mysql
cpanm DBI
cpanm DBD::mysql@4.050
</code></pre>

### Installing BioPerl

On some versions of macOS, the Ensembl VEP installer fails to cleanly install BioPerl, so a manual install will prevent issues:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">curl -O https://cpan.metacpan.org/authors/id/C/CJ/CJFIELDS/BioPerl-1.6.924.tar.gz
tar zxvf BioPerl-1.6.924.tar.gz
echo 'export PERL5LIB=${PERL5LIB}:##PATH_TO##/bioperl-1.6.924' &gt;&gt; ~/.bash_profile
</code></pre>

where *\##PATH_TO##/bioperl-1.6.924* refers to the location of the newly unzipped BioPerl directory.

### Final Dependancies

Installing the following Perl modules with cpanm will allow for full Ensembl VEP functionality:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">cpanm Test::Differences Test::Exception Test::Perl::Critic Archive::Zip PadWalker Error Devel::Cycle Role::Tiny::With Module::Build LWP List::MoreUtils

export DYLD_LIBRARY_PATH=/usr/local/mysql/lib/:$DYLD_LIBRARY_PATH
</code></pre>

### Installing Ensembl VEP

And that should be that! You should now be able to install Ensembl VEP using the installer:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">git clone https://github.com/ensembl/ensembl-vep
cd ensembl-vep
perl INSTALL.pl --NO_TEST
</code></pre>

<span id="windows"></span>

## Using Ensembl VEP in Windows

Ensembl VEP was developed as a command-line tool, and as a Perl script its natural environment is a Linux system. However, there are several ways you can use Ensembl VEP on a Windows machine.

You may also consider using Ensembl VEP's web or REST interfaces.

<span id="virtual"></span>

### Virtual machines

Using a virtual machine you can run a virtual Linux system in a window on your machine. There are two ways to do this:

1.  Use the [Ensembl virtual machine image](https://jun2026.archive.ensembl.org/info/data/virtual_machine.html)
2.  Use [Docker](/help/articles/download-and-install-vep#docker)

<span id="wperl"></span>

### Perl

If Perl is installed on Windows, Ensembl VEP can be setup. However this may require installation of dependent modules. We recommend using [Docker](/help/articles/download-and-install-vep#docker) to run Ensembl VEP on Windows.

1.  Check Perl is installed

2.  Download and unpack the [zip of the ensembl-vep package](https://github.com/Ensembl/ensembl-vep/archive/release/116.zip)

3.  Open a Command Prompt (search for Command Prompt in the Start Menu)

4.  Navigate to the directory where you unpacked the Ensembl VEP package, e.g.

    <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">cd Downloads/ensembl-vep-release-116
    </code></pre>

5.  Run INSTALL.pl with --NO_HTSLIB and --NO_TEST; you will see some warnings about the "which" command not being available (these will also appear when running Ensembl VEP and can be ignored).

    <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">perl INSTALL.pl --NO_HTSLIB --NO_TEST
    </code></pre>

<span id="docker"></span>

## Docker

[Docker](https://www.docker.com/) allows running applications in virtualised *containers*. The Ensembl VEP Docker image is available from DockerHub: [Ensembl VEP in DockerHub](https://hub.docker.com/r/ensemblorg/ensembl-vep/)

After installing [Docker](https://www.docker.com/), download the Ensembl VEP Docker image:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">docker pull ensemblorg/ensembl-vep
</code></pre>

To download cache files and other data with Ensembl VEP Docker, we recommend [mounting a directory](https://docs.docker.com/engine/tutorials/dockervolumes/) from your local (host) machine to folder `/data` from the Docker image. For instance:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mkdir $HOME/vep_data
docker run -t -i -v $HOME/vep_data:/data ensemblorg/ensembl-vep
</code></pre>

In the example above, data in `$HOME/vep_data` will be accessible by both the local machine and Ensembl VEP Docker. The Ensembl VEP API, plugins maintained by Ensembl VEP and their dependencies (e.g. Perl APIs, Bio::DB::HTS, htslib, ...) are already installed in the image.

<span id="read_write_access"></span>

### Read/Write access from the container

In some distributions (e.g. CentOS, Fedora, Red Hat Enterprise Linux) Docker daemon requires **root** privileges (i.e. needs to prefix the command with **sudo**), which might cause read/write issues to the mounted volume.

One solution is to use the option **:Z** within the Docker **-v** option (only from docker 1.7.0):

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">sudo docker run -t -i -v $HOME/vep_data:/data:Z ensemblorg/ensembl-vep
</code></pre>

An other solution is to change the read/write access of the mounted volume (`$HOME/vep_data`):

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">chmod -R a+rwx $HOME/vep_data
</code></pre>

<span id="docker_cache"></span>

### Cache and FASTA files installation

You can run the INSTALL.pl script to install the cache and FASTA files:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">docker run -t -i -v $HOME/vep_data:/data ensemblorg/ensembl-vep INSTALL.pl
</code></pre>

- You will be asked to install cache data. Type the comma-separated numbers for the species/assembly of interest and press `enter`. Your data will download and unpack; this may take a while.
- If you wish to retrieve HGVS annotations, please download the FASTA files for your species. To do this, at the next prompt type `0` and press `enter`.

The above process may also be performed in one command; for example, to set up the cache and corresponding FASTA for human GRCh38:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">docker run -t -i -v $HOME/vep_data:/data ensemblorg/ensembl-vep INSTALL.pl -a cf -s homo_sapiens -y GRCh38
</code></pre>

The installer downloads Ensembl VEP data to the mounted directory (e.g., `$HOME/vep_data`). The downloaded data will be automatically detected as long as its folder is mounted when running VEP:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">docker run -v $HOME/vep_data:/data ensemblorg/ensembl-vep vep -i examples/homo_sapiens_GRCh38.vcf --cache
</code></pre>

<span id="docker_setup"></span>

### Running Ensembl VEP with data from local folder

Here is an example on running Ensembl VEP with data from folder `$HOME/vep_data` in the local machine (provided that the cache has been downloaded to that folder):

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">docker run -v $HOME/vep_data:/data ensemblorg/ensembl-vep \
  vep --cache --offline --format vcf --vcf --force_overwrite \
      --input_file input/my_input.vcf \
      --output_file output/my_output.vcf \
      --custom file=custom/my_extra_data.bed,short_name=BED_DATA,format=bed,type=exact,coords=1 \
      --plugin NMD
</code></pre>

Please avoid using absolute paths to data as the paths inside the container differ from your local machine.

### Update from a previous version

1.  Update your Docker container

    <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">docker pull ensemblorg/ensembl-vep
    </code></pre>

2.  Update your cache

    <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text"># Install the new cache through the Ensembl VEP INSTALL.pl script (see &quot;Cache installation&quot; section above)
    docker run -t -i -v $HOME/vep_data:/data ensemblorg/ensembl-vep INSTALL.pl -a c

    # Or install the cache manually
    cd $HOME/vep_data
    curl -O https://ftp.ensembl.org/pub/release-116/variation/indexed_vep_cache/homo_sapiens_vep_116_GRCh38.tar.gz
    tar xzf homo_sapiens_vep_116_GRCh38.tar.gz
    </code></pre>

<span id="singularity"></span>

## Singularity

Due to root requirements for the Docker daemon, using the [Docker container for Ensembl VEP](https://hub.docker.com/r/ensemblorg/ensembl-vep/) is not always possible to HPC users. Singularity, an alternative containerisation tool, does not assume that you have a system where you are the root user. This has led to increased popularity in HPC contexts due to increased access rights flexibility.

After installing [Singularity](https://sylabs.io/singularity/), Ensembl VEP may be used with Singularity based on the VEP Docker image from DockerHub:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">singularity pull --name vep.sif docker://ensemblorg/ensembl-vep
</code></pre>

The following is a brief example showing how to use a directory on your local (host) machine to store cache data for VEP.

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">mkdir $HOME/vep_data
singularity exec vep.sif vep --dir $HOME/vep_data --help
</code></pre>

The Ensembl VEP API, plugins and their dependencies (e.g. Perl APIs, Bio::DB::HTS, htslib, ...) are already installed in the image.

<span id="singularity_cache"></span>

### Cache and FASTA files installation

You can run the INSTALL.pl script to install the Cache data and FASTA files. For example, to set up the cache and corresponding FASTA for human GRCh38 in your local folder `$HOME/vep_data`:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">singularity exec vep.sif INSTALL.pl -c $HOME/vep_data -a cf -s homo_sapiens -y GRCh38
</code></pre>

The installer downloads data to the specified directory (e.g., `$HOME/vep_data`). When running Ensembl VEP via Singularity, point to this directory using `--dir`:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">singularity exec vep.sif vep --dir $HOME/vep_data -i examples/homo_sapiens_GRCh38.vcf --cache
</code></pre>

<span id="singularity_setup"></span>

### Running Ensembl VEP with data from local folder

Here is an example on running Ensembl VEP with data from folder `$HOME/vep_data` in the local machine (provided that the cache has been downloaded to that folder):

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">singularity exec vep.sif \
  vep --dir $HOME/vep_data \
      --cache --offline --format vcf --vcf --force_overwrite \
      --input_file input/my_input.vcf \
      --output_file output/my_output.vcf \
      --custom file=custom/my_extra_data.bed,short_name=BED_DATA,format=bed,type=exact,coords=1 \
      --plugin NMD
</code></pre>

### Update from a previous version

1.  Update your docker container

    <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text">singularity pull --name vep.sif docker://ensemblorg/ensembl-vep
    </code></pre>

2.  Update your cache

    <pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text"># Install the new cache through the VEP INSTALL.pl script (see &quot;Cache installation&quot; section above)
    singularity exec vep.sif INSTALL.pl -c $HOME/vep_data -a c

    # Or install the cache manually
    cd $HOME/vep_data
    curl -O https://ftp.ensembl.org/pub/release-116/variation/indexed_vep_cache/homo_sapiens_vep_116_GRCh38.tar.gz
    tar xzf homo_sapiens_vep_116_GRCh38.tar.gz
    </code></pre>

<span id="nextflow"></span>

## Nextflow

We offer a [Nextflow Ensembl VEP pipeline](https://github.com/Ensembl/ensembl-vep/tree/release/116/nextflow) that aims to run Ensembl VEP using simple parallelisation. The pipeline is deployable on an individual Linux machine or on computing clusters running LSF, SLURM or other workload managers.

The process can be summarised briefly by the following steps:

- Splitting the input data into multiple files using a given number of bins
- Running Ensembl VEP on the split files in parallel
- Merging Ensembl VEP outputs into a single file

To run the pipeline in a system with [Nexflow](https://nextflow.io) installed, you will need to prepare a [**vep.ini** config file](/help/articles/vep-basic-options#opt_config). Here are some examples commands to run the Nextflow Ensembl VEP pipeline:

<pre style="width: var(--text-column-width, 450px); max-width: 100%; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere;"><code class="language-text"># Run Nextflow Ensembl VEP using local Ensembl VEP installation
# NB: Nextflow automatically downloads the GitHub repository
nextflow run Ensembl/ensembl-vep -r main \
  --input input.vcf \
  --vep_config vep.ini

# Run latest Ensembl VEP version using Docker
nextflow run Ensembl/ensembl-vep -r main \
  -profile docker \
  --input input.vcf \
  --vep_config vep.ini

# Run Ensembl VEP 116.0 using Docker
nextflow run Ensembl/ensembl-vep -r main \
  -profile docker \
  --input input.vcf \
  --vep_config vep.ini \
  --vep_version 116.0

# Run Ensembl VEP 116.0 using SLURM and Singularity
nextflow run Ensembl/ensembl-vep -r main \
  -profile slurm,singularity \
  --input input.vcf \
  --vep_config vep.ini \
  --vep_version 116.0
</code></pre>

For a full list of supported profiles, as well as more instructions on setting up and running the pipeline, please refer to the [Nextflow Ensembl VEP instructions](https://github.com/Ensembl/ensembl-vep/tree/release/116/nextflow).
