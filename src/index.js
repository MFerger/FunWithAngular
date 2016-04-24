import angular from 'angular'
import 'angular-ui-router'
import configHome from './pages/home/';
import configAbout from './pages/about/about.js';


angular.module('app', ['ui.router'])
  .config(
    ($stateProvider, $urlRouterProvider, $locationProvider) => {

      require('./style/main.scss')

      $stateProvider
        .state('/', configHome())
        .state('/about', configAbout());

      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
    }
  );
// same
//var angular = require('angular')
