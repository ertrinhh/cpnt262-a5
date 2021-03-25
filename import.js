const mongoose = require("./_connection.js");

// Import seed data
const dbSeed = require(`./seeds/gallery.js`);

// Define model
const Gallery = require(`./models/gallery.js`);

Gallery.insertMany(dbSeed, function (error, gallery) {
  console.log("Data import completed.");
  mongoose.connection.close();
});
