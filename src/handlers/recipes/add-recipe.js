const Recipe = require('../../models/Recipe');
const mongoose = require('mongoose');
const fs = require('fs');

const handleRecipeUpload = (payload) => {
  return new Promise((resolve, reject) => {
    let {
      namaresep,
      deskripsi,
      bahan,
      caramasak,
      image,
      iduser,
    } = payload;
    const id = new mongoose.Types.ObjectId().toHexString();
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;
    const imagePath = `./src/assets/${id}.jpg`;
    const imageBuffer = Buffer.from(image, 'base64');
    fs.writeFile(imagePath, imageBuffer, (err) => {
      if (err) {
        reject(err);
      }
      bahan = JSON.parse(bahan);
      caramasak = JSON.parse(caramasak);
      const recipe = new Recipe({
        _id: id,
        namaresep,
        deskripsi,
        bahan,
        caramasak,
        image: `http://localhost:3000/recipe/images/${id}`,
        iduser,
        createdAt,
        updatedAt,
      });
      recipe.save();
      resolve({message: 'Recipe added succesfully!'});
    });
  });
};

const addRecipe = async (request, h) => {
  try {
    const {
      payload,
    } = request;
    let result;
    if (payload.image !== undefined) {
      result = await handleRecipeUpload(payload);
      return result;
    } else {
      const id = new mongoose.Types.ObjectId().toHexString();
      const createdAt = new Date().toISOString();
      const updatedAt = createdAt;
      const bahan = JSON.parse(payload.bahan);
      const caramasak = JSON.parse(payload.caramasak);
      result = new Recipe({
        _id: id,
        namaresep: payload.namaresep,
        deskripsi: payload.deskripsi,
        bahan,
        caramasak,
        image: `http://localhost:3000/recipe/images/${id}`,
        iduser: payload.iduser,
        createdAt,
        updatedAt,
      });
      result.save();
      return h.response({message: 'Recipe added succesfully!'});
    }
  } catch (err) {
    return h.response(err).code(500);
  }
};

module.exports = addRecipe;
