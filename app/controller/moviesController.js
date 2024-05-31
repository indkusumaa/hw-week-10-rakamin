const pool = require("../model/config.js");
const queries = require("../model/queries.js");
const fs = require("fs");

const addMovies = (req, res) => {
  const { title, genres, year } = req.body;

  // check if movies already exist in database
  pool.query(queries.checkMoviesExists, [title], (err, result) => {
    if (result.rows.length) {
      res.send("Movies data already exist");
    } else {
      const photo = req.file.path;
      console.log(photo);
      if (!photo) {
        res.status(400).send({
          status: false,
          data: "No File is Selected",
        });
      } else {
        pool.query(queries.addMovies, [title, genres, year, photo], (err, result) => {
          if (err) throw err;
          res.status(201).send("Movies data created!");
        });
      }
    }
  });
};

//update data by title
const updateMovies = (req, res) => {
  const old_title = req.params.title;
  pool.query(queries.checkMoviesExists, [old_title], (err, result) => {
    const noMoviesFound = !result.rows.length;
    const checkMoviesimg = result.rows[0].photo;
    console.log({ old_title });
    console.log({ checkMoviesimg });
    if (noMoviesFound) {
      res.send("Movies data not found");
    } else {
      const { title, genres, year } = req.body;
      const photo = req.file.path;
      // delete previous image
      if (fs.existsSync(checkMoviesimg)) {
        fs.unlinkSync(checkMoviesimg);
      }
      pool.query(queries.updateMovies, [title, genres, year, photo, old_title], (err, result) => {
        if (err) {
          throw err;
        } else {
          res.status(201).send("Movies data updated!");
        }
      });
    }
  });
};

module.exports = { addMovies, updateMovies };
