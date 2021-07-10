const Recipe = require('../../models/Recipe');
const fs = require('fs');

const deleteRecipe = async (request, h) => {
  try {
    const {id} = request.params;
    await Recipe.findOneAndDelete({'_id': id});
    const path = `./src/assets/${id}.jpg`;
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }
    return {
      status: 'success',
      message: 'Recipe Deleted Successfully',
    };
  } catch (err) {
    return h.response(err).code(500);
  }
};

module.exports = deleteRecipe;
