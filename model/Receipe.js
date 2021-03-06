const mongoose = require('mongoose');

const receipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 6,
    max: 225
  },
  description: {
    type: String,
    required: true,
    min: 6
  },
  ingredient: {
    type: [String],
    required: true
  },
  beforeYouCook: {
    type: [String],
    required: true
  },
  cookingDirections: {
    type: [String],
    required: true
  },
  tools : {
    type: [String],
    required: false
  },
  imageUrl: {
    type: String,
    required: true,
    min: 6
  }
});

module.exports = mongoose.model('Receipe', receipeSchema);