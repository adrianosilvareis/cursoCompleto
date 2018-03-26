import angular from 'angular'
import ngRoute from 'angular-route'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'jquery'

import contato from './components/contato'
import home from './components/home'
import diretivas from './directives'
import interceptors from './interceptors'
import services from './services'

angular
  .module('myApp', [ngRoute, interceptors, services ,diretivas, contato, home])