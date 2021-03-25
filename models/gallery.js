const mongoose = require("mongoose");

// Define our Schema

const gallerySchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  width: Number,
  height: Number,
  path: String,
  attribution: {
    credit: String,
    creditURL: String,
    link: String,
  },
});

// Compile and export our model using the above Schema.

module.exports = mongoose.model("Gallery", gallerySchema);
