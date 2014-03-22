'use strict';

describe('Controller: DatabaseCtrl', function () {

  // load the controller's module
  beforeEach(module('dbApp'));

  var DatabaseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DatabaseCtrl = $controller('DatabaseCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
