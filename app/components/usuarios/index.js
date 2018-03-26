import usersController from 'users.controller'
import configRoute from 'users.config'

export default angular
  .module('myApp.users')
  .config(configRoute)
  .controller('usersController', usersController)
  .name