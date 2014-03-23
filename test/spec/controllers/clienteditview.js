'use strict';

describe('Controller: ClienteditviewCtrl', function () {

  // load the controller's module
  beforeEach(module('dbApp'));

  var ClienteditviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClienteditviewCtrl = $controller('ClienteditviewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
