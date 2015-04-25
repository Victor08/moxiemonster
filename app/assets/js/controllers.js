'use strict';

/* Controllers */

var moxControllers = angular.module('moxControllers',[]);

moxControllers.controller('list', ['$scope', '$http', function($scope, $http){
    $scope.greeting = 'hey what\'s up?';
    $http.get('data/moxies.json').success(function(data){
        $scope.moxies = data;
    });
    $scope.orderProp = 'dueDate';
}]);

moxControllers.controller('detail', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.moxieId = $routeParams.moxieId;
}]);