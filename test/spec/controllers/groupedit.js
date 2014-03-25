'use strict';

describe('Controller: GroupeditCtrl', function () {

  // load the controller's module
  beforeEach(module('dbApp'));

  var GroupeditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GroupeditCtrl = $controller('GroupeditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
