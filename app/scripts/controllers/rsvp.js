'use strict';

/**
 * @ngdoc function
 * @name weddingSiteAngularApp.controller:RsvpCtrl
 * @description
 * # RsvpCtrl
 * Controller of the weddingSiteAngularApp
 */
angular.module('weddingSiteAngularApp')
  .controller('RsvpCtrl', function ($scope, $timeout) {
    $scope.form = {
      EMAIL: '',
      NAME: '',
      PARTYNUM: 1,
      ATTENDING: 'Yes'
    };

    $scope.submit = function() {
      $.ajax({
        type: 'GET',
        url: 'http://layanandmohamed.us11.list-manage.com/subscribe/post-json?u=5b062633b51bad1608f575879&amp;id=b109f6c88b&c=?',
        data: $scope.form,
        dataType    : 'json',
        contentType: "application/json; charset=utf-8",
        error       : function(err) { alert("Could not connect to the registration server. Please try again later."); },
        success     : function(data) {
          console.log(data)
          if (data.result === "success") {
            $scope.success = data.msg;

          } else {
            $scope.errors = [data.msg];

            $timeout(function() {
              $scope.errors = $scope.success = null;
            }, 5000);
          }

          $scope.$apply();
        }
      });

      $.ajax({
        type: 'POST',
        url: 'https://docs.google.com/forms/d/1Y8cbOINuN7nl5zMLmtR3SIsgy0hvwkM5JwzRFNB3DLk/formResponse',
        data: {
          'entry.1560765921': $scope.form.EMAIL,
          'entry.1373268520': $scope.form.NAME,
          'entry.1932090429': $scope.form.PARTYNUM,
          'entry.743652574': $scope.form.ATTENDING
        },
        dataType: 'json',
        success: function(data) {
          console.log(data);
        }
      });
    };
  });
