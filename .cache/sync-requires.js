const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/syukrie/gatsby-london/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/syukrie/gatsby-london/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/syukrie/gatsby-london/src/pages/about.js"))),
  "component---src-pages-elements-js": hot(preferDefault(require("/home/syukrie/gatsby-london/src/pages/elements.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/syukrie/gatsby-london/src/pages/index.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/home/syukrie/gatsby-london/src/templates/blog-post.js")))
}

