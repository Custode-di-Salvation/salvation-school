// Feed JSON leggero delle news, stesso formato/scopo del search.json del Salvation Herald:
// pensato per essere letto da fetch() esterni (es. il widget del forum), non dal sito stesso.
exports.data = {
  permalink: "/search.json",
  eleventyExcludeFromCollections: true,
};

exports.render = function (data) {
  const items = (data.collections.news || []).map((post) => ({
    title: post.data.title,
    url: post.url,
    date: post.date.toISOString(),
    category: post.data.category || null,
  }));
  return JSON.stringify(items, null, 2);
};
