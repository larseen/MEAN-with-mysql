

angular.module('dbFilters', [])
    .filter('attendingFilter', function () {
        return function (status) {
                return "Not replied";
            }
    });