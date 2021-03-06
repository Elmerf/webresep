const loginUser = require('../handlers/users/login-user');
const registerUser = require('../handlers/users/register-user');
const editUser = require('../handlers/users/edit-user');
const specifiedUserById = require('../handlers/users/specified-user');

const userRoute = [
  {
    method: 'GET',
    path: '/',
    handler: () => ({
      status: 'success',
      message: 'Welcome to webresep-api',
    }),
  },
  {
    method: 'POST',
    path: '/user',
    handler: registerUser,
  },
  {
    method: 'GET',
    path: '/user',
    handler: loginUser,
  },
  {
    method: 'GET',
    path: '/user/{id}',
    handler: specifiedUserById,
  },
  {
    method: 'PUT',
    path: '/user/{id}',
    handler: editUser,
  },
];

module.exports = userRoute;
