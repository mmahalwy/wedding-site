'use strict';

/**
 * @ngdoc function
 * @name weddingSiteAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weddingSiteAngularApp
 */
angular.module('weddingSiteAngularApp')
  .controller('MainCtrl', function ($timeout) {
    $timeout(function() {
      $('.opening-image .overlay').addClass('active');
    }, 500);

    $('.hello-picture-container').hover(function() {
      $(this).addClass('active');
    }, function() {
      $(this).removeClass('active');
    });
  });
