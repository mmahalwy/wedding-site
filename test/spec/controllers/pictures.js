'use strict';

describe('Controller: PicturesCtrl', function () {

  // load the controller's module
  beforeEach(module('weddingSiteAngularApp'));

  var PicturesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PicturesCtrl = $controller('PicturesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PicturesCtrl.awesomeThings.length).toBe(3);
  });
});
