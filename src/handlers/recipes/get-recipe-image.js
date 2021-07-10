const Recipe = require('../../models/Recipe');
const fs = require('fs');

const getRecipeImage = async (request, h) => {
  try {
    const {id} = request.params;
    const result = await Recipe.findOne({'_id': id}, 'namaresep').exec();
    const path = `./src/assets/${result._id}.jpg`;
    if (fs.existsSync(path)) {
      return h.file(path);
    }
    return h.file('./src/assets/logo.jpg');
  } catch (err) {
    return h.response(err).code(500);
  }
};

module.exports = getRecipeImage;
