const express = require("express");
const router = express.Router();
const controller = require("../controller/moviesController.js");
const multer = require("../model/middleware.js");

router.post("/upload", multer.upload.single("photo"), controller.addMovies);
router.put("/upload/:title", multer.upload.single("photo"), controller.updateMovies);

module.exports = router;
