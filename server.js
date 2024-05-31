const express = require("express");
const app = express();
const port = 3000;
const moviesRoutes = require("./app/routes/movies.js");
const path = require("path");

// serve static file
app.use("/upload", express.static(path.join(__dirname, "public/images/upload")));

//serve base url for api
app.use("/api/movies", moviesRoutes);

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
