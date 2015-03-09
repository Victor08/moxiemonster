'use strict';

/* Controllers */

var moxControllers = angular.module('moxControllers',[]);

moxControllers.controller('list', ['$scope', function($scope){
    $scope.greeting = 'hey what\'s up?';
}]);