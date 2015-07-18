'use strict';

/**
 * @ngdoc overview
 * @name weddingSiteAngularApp
 * @description
 * # weddingSiteAngularApp
 *
 * Main module of the application.
 */
angular
  .module('weddingSiteAngularApp', [
    'ngAnimate',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/rsvp', {
        templateUrl: 'views/rsvp.html',
        controller: 'RsvpCtrl',
        controllerAs: 'rsvp'
      })
      .when('/event', {
        templateUrl: 'views/event.html',
        controller: 'EventCtrl',
        controllerAs: 'event'
      })
      .when('/pictures', {
        templateUrl: 'views/pictures.html',
        controller: 'PicturesCtrl',
        controllerAs: 'pictures'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
