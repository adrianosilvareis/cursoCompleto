import HomeController from './home.controller'

const routeDefault = $routeProvider => (
  $routeProvider
    .when('/',{
      template:require('./home.html'),
      controller:'homeController'
    })
    .otherwise('/')
)

export default angular
  .module('myApp.home', [])
  .controller('homeController', HomeController)
  .config(routeDefault)
  .name