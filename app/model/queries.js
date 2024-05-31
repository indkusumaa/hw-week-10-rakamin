const checkMoviesExists = "SELECT * FROM movies m WHERE m.title = $1";
const addMovies = "INSERT INTO movies (title, genres, year, photo) VALUES ($1, $2, $3, $4)";
const getMoviesbyTitle = "SELECT * FROM movies WHERE title = $1";
const updateMovies = "UPDATE movies SET title = $1, genres = $2, year = $3, photo = $4 WHERE title = $5";

module.exports = { checkMoviesExists, addMovies, getMoviesbyTitle, updateMovies };
