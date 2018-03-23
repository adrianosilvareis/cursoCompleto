import angular from 'angular'
import ngRoute from 'angular-route'
import 'bootstrap'
import 'jquery'

import contato from './components/contato'

const routeDefault = $routeProvider => $routeProvider.otherwise('/')

angular
  .module('myApp', [ngRoute, contato])
  .config(routeDefault)