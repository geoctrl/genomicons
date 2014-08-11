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
        'ngTouch',
        'ui.router'
    ]);

genomiconsApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        .state('home', {
            url: '/home',
            views: {
                'nav': {
                    templateUrl: 'views/nav.html'
                },
                'content': {
                    templateUrl: 'views/home.html'
                }
            }
        })
});