'use strict';

/* Controllers */

var moxControllers = angular.module('moxControllers',[]);

moxControllers.controller('listController', ['$scope', function($scope){
    $scope.greeting = 'hey what\'s up?';
}]);