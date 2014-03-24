'use strict';

describe('Controller: CreateappointmentCtrl', function () {

  // load the controller's module
  beforeEach(module('dbApp'));

  var CreateappointmentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateappointmentCtrl = $controller('CreateappointmentCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
