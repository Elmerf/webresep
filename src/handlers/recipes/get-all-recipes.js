const Recipe = require('../../models/Recipe');

const getAllRecipes = async (request, h) => {
  try {
    const {q} = request.query;
    let result;
    if (q !== undefined) {
      result = await Recipe.find(
          {
            namaresep:
              {
                $regex: '.*' + q + '.*',
                $options: 'i',
              },
          }).sort({createdAt: -1});
    } else result = await Recipe.find({}).sort({createdAt: -1});
    return result;
  } catch (err) {
    return h.response(err).code(500);
  }
};

module.exports = getAllRecipes;
