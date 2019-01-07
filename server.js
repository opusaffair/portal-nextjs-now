const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const createServer = () => {
  const server = express();
  server.get("/events/:slug", (req, res) => {
    const actualPage = "/events";
    const queryParams = { slug: req.params.slug };
    app.render(req, res, actualPage, queryParams);
  });
  server.get("*", (req, res) => {
    if (process.env.LAMBDA) {
      let host = req.headers.host;
      if (host.indexOf("amazonaws.com") != -1) {
        let assetPrefix = "https://" + host;
        // needs to match the stages defined in `serverless.yml`
        let stage = process.env.STAGE;
        assetPrefix += `/${stage}`;
        app.setAssetPrefix(assetPrefix);
      }
    }
    handle(req, res);
  });

  return server;
};

const server = createServer();

if (!process.env.LAMBDA) {
  app.prepare().then(() => {
    server.listen(port, err => {
      if (err) throw err;
      console.log(`Ready on http://localhost:${port}`);
    });
  });
}

exports.app = app;
exports.server = server;
