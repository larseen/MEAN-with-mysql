'use strict';

describe('Controller: GroupinfoCtrl', function () {

  // load the controller's module
  beforeEach(module('dbApp'));

  var GroupinfoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GroupinfoCtrl = $controller('GroupinfoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
