const addRecipe = require('../handlers/recipes/add-recipe');
const deleteRecipe = require('../handlers/recipes/delete-recipe');
const editRecipeById = require('../handlers/recipes/edit-recipe-by-id');
const getAllRecipes = require('../handlers/recipes/get-all-recipes');
const getNewestRecipes = require('../handlers/recipes/get-newest-recipes');
const getRecipeImage = require('../handlers/recipes/get-recipe-image');
const recipesByUser = require('../handlers/recipes/recipes-by-user');

const recipeRoute = [
  {
    method: 'POST',
    path: '/recipe',
    options: {
      payload: {
        multipart: true,
      },
    },
    handler: addRecipe,
  },
  {
    method: 'GET',
    path: '/recipes',
    handler: getAllRecipes,
  },
  {
    method: 'GET',
    path: '/recipes/newest',
    handler: getNewestRecipes,
  },
  {
    method: 'GET',
    path: '/recipes/user/{id}',
    handler: recipesByUser,
  },
  {
    method: 'GET',
    path: '/recipe/images/{id}',
    handler: getRecipeImage,
  },
  {
    method: 'DELETE',
    path: '/recipe/{id}',
    handler: deleteRecipe,
  },
  {
    method: 'PUT',
    path: '/recipe/{id}',
    options: {
      payload: {
        multipart: true,
      },
    },
    handler: editRecipeById,
  },
];

module.exports = recipeRoute;
