// location.model.js
const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: String,
  // Add other location-related fields as needed
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
