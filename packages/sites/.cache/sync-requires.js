const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/slindauer/Development/gatsby-micro-frontend/packages/sites/.cache/dev-404-page.js"))),
  "component---gatsby-theme-1-src-pages-app-dashboard-js": hot(preferDefault(require("/Users/slindauer/Development/gatsby-micro-frontend/packages/gatsby-theme-1/src/pages/app/dashboard.js"))),
  "component---gatsby-theme-1-src-pages-components-one-js": hot(preferDefault(require("/Users/slindauer/Development/gatsby-micro-frontend/packages/gatsby-theme-1/src/pages/components/one.js"))),
  "component---gatsby-theme-2-src-pages-app-account-index-js": hot(preferDefault(require("/Users/slindauer/Development/gatsby-micro-frontend/packages/gatsby-theme-2/src/pages/app/account/index.js"))),
  "component---gatsby-theme-2-src-pages-app-account-profile-js": hot(preferDefault(require("/Users/slindauer/Development/gatsby-micro-frontend/packages/gatsby-theme-2/src/pages/app/account/profile.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/slindauer/Development/gatsby-micro-frontend/packages/sites/src/pages/index.js")))
}

