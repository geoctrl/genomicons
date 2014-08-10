'use strict';

/**
 * @ngdoc overview
 * @name genomiconsApp
 * @description
 * # genomiconsApp
 *
 * Main module of the application.
 */
var genomiconsApp = angular
  .module('genomiconsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ]);

genomiconsApp
  .config(function ($stateProvider, $urlRouterProvider) {
    asdfasdfasdf
    $urlRouterProvider.otherwise('/icon/all');
    
    $stateProvider
      .state('icon', {
        url: '/icon',
        abstract: true,
        views: {
          'nav': {
            templateUrl: 'views/nav.html'
          }
        }
      })
      .state('icon.all', {
        url: '/all',
        views: {
          'content': {
            templateUrl: 'views/all.html'
          }
        }
      })
  });
