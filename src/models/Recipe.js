const mongoose = require('mongoose');
const {Schema} = mongoose;

const RecipeSchema = new Schema({
  _id: require('mongodb').ObjectID,
  namaresep: String,
  deskripsi: String,
  bahan: Array,
  caramasak: Array,
  image: String,
  iduser: require('mongodb').ObjectID,
  createdAt: Date,
  updatedAt: Date,
}, {_id: false});

module.exports = mongoose.model('Recipe', RecipeSchema);
