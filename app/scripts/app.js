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
    $urlRouterProvider.otherwise('/all');
    
    $stateProvider
        .state('all', {
            url: '/all',
            views: {
                'nav': {
                    templateUrl: 'views/nav.html'
                },
                'content': {
                    templateUrl: 'views/all.html'
                }
            }
        })
});