import ContatoController from './contato.controller'
import configRoute from './contato.config'

export default angular
  .module('myApp.contato', ['ngRoute'])
  .controller('ContatoController', ContatoController)
  .config(configRoute)
  .name