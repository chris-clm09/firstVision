'use strict';

describe('Controller: OurteamCtrl', function () {

  // load the controller's module
  beforeEach(module('firstVisionApp'));

  var OurteamCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OurteamCtrl = $controller('OurteamCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
