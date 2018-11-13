const express = require("express");
const next = require("next");
require("dotenv").config();

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/events", (req, res) => {
      app.render(req, res, "/");
    });

    server.get("/events/:slug", (req, res) => {
      const actualPage = "/events";
      const queryParams = { slug: req.params.slug };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log(`Ready on port 3000`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
