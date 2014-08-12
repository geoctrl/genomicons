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
        .state('icons', {
            url: '/icons',
            abstract: true,
            views: {
                'nav': {
                    templateUrl: 'views/nav.html'
                },
                'content': {
                    templateUrl: 'views/icons.html'
                }
            }
        })
        .state('icons.all', {
            url: '/all',
            views: {
                'icons': {
                    templateUrl: 'views/icons/all.html'
                }
            }
        })
        .state('icons.science', {
            url: '/science-health',
            views: {
                'icons': {
                    templateUrl: 'views/icons/science-health.html'
                }
            }
        })
        .state('icons.application', {
            url: '/application',
            views: {
                'icons': {
                    templateUrl: 'views/icons/application.html'
                }
            }
        })
});