'use strict';

describe('Controller: RsvpCtrl', function () {

  // load the controller's module
  beforeEach(module('weddingSiteAngularApp'));

  var RsvpCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RsvpCtrl = $controller('RsvpCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RsvpCtrl.awesomeThings.length).toBe(3);
  });
});
