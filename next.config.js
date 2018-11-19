if (process.env.NODE_ENV === "development") {
  require("now-env");
}

module.exports = {
  publicRuntimeConfig: {
    // Will be available on both server and client
    ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
    ALGOLIA_API_KEY: process.env.ALGOLIA_API_KEY,
    GRAPHQL_URI: process.env.GRAPHQL_URI
  }
};
