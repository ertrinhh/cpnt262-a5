const express = require("express");
const router = express.Router();
const gallery = require("../../seeds/gallery");

//get gallery data
router.get("/gallery", function (request, response) {
  response.json(gallery);
});

module.exports = router;
