'use strict';

describe('Controller: AppointmentsCtrl', function () {

  // load the controller's module
  beforeEach(module('dbApp'));

  var AppointmentsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppointmentsCtrl = $controller('AppointmentsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
