const express = require("express");
const router = express.Router();
const gallery = require("../../data/gallery");

//get gallery data
router.get("/gallery", function (request, response) {
  response.json(gallery);
});

module.exports = router;
