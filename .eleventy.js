const util = require('util');

module.exports = function(config) {
  config.addLayoutAlias('default', 'layouts/default.njk');
  config.addLayoutAlias('with_video', 'layouts/with_video.njk');

  config.addPassthroughCopy('eleventy-site/css');
  config.addPassthroughCopy('images');

  return {
    dir: {
      input: "./eleventy-site",
      output: "./_site",
      templateFormats : ["njk", "11ty.js"],
    }
  };
};


/*

  // watch for changes in css files (to re-run the postcss pipeline)
  config.addWatchTarget("css/*.css");

  // Add support for yaml files as data source
  config.addDataExtension("yaml", contents => yaml.safeLoad(contents));

  // Filter to debug data passed to templates.
  // Use {{ obj | dump }} to inspect stringified content of the object dumped on the page
  config.addFilter('dump', obj => {
    return util.inspect(obj);
  });


  // Add aliases (aliases are in relation to the _includes folder)
  // Aliases to layouts
  config.addLayoutAlias('projects', 'layouts/projects.njk');
  config.addLayoutAlias('default', 'layouts/default.njk');

  // Add contents of the _projects folder to the projects collection
  config.addCollection("projects", (collection) => collection.getFilteredByGlob("_projects/*.html"));

  // Copy files and folders unchanged to output folder
  config.addPassthroughCopy("img");
  config.addPassthroughCopy("CNAME");
  config.addPassthroughCopy(".nojekyll");

  return {
    dir: {
      output: "./_site",
      templateFormats : ["njk", "md", "11ty.js"],
    }
  };
*/
