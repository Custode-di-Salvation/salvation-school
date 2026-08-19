const pluginRss = require("@11ty/eleventy-plugin-rss").rssPlugin;

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  // Copia le cartelle statiche nella build finale
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/js");

  // Formatta le date in italiano leggibile, es. "19 agosto 2026"
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("it-IT", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  });

  // Collezione degli avvisi/notizie della scuola, dal più recente al più vecchio
  eleventyConfig.addCollection("news", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/news/*.md").sort((a, b) => b.date - a.date);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
