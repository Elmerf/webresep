const Recipe = require('../../models/Recipe');
const fs = require('fs');

const handleRecipeUpload = (payload, id) => {
  return new Promise((resolve, reject) => {
    let {
      namaresep,
      deskripsi,
      bahan,
      caramasak,
      image,
    } = payload;
    const updatedAt = new Date().toISOString();
    if (image !== undefined) {
      const imagePath = `./src/assets/${id}.jpg`;
      const imageBuffer = Buffer.from(image, 'base64');
      fs.writeFile(imagePath, imageBuffer, (err) => {
        if (err) {
          reject(err);
        }
        bahan = JSON.parse(bahan);
        caramasak = JSON.parse(caramasak);
        console.log(id);
        Recipe.findOneAndUpdate({'_id': id}, {
          namaresep,
          deskripsi,
          bahan,
          caramasak,
          updatedAt,
        }).exec();
        resolve({message: 'Recipe Edited succesfully!'});
      });
    } else {
      Recipe.findOneAndUpdate({'_id': id}, {
        namaresep,
        deskripsi,
        bahan,
        caramasak,
        updatedAt,
      }).exec();
      resolve({message: 'Recipe Edited succesfully!'});
    }
  });
};

const editRecipeById = async (request, h) => {
  try {
    const {id} = request.params;
    const {
      payload,
    } = request;
    const result = await handleRecipeUpload(payload, id);
    return result;
  } catch (err) {
    return h.response(err).code(500);
  }
};

module.exports = editRecipeById;
