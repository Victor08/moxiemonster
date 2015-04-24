'use strict';

/* Controllers */

var moxControllers = angular.module('moxControllers',[]);

moxControllers.controller('listController', ['$scope', function($scope){
    $scope.greeting = 'hey what\'s up?';
    $scope.moxies = [
        {title: "become a millionaire", dueDate: "11-02-2016"},
        {title: "overcome my lazieness", dueDate: "25-06-2011"},
        {title: "achieve max sleep time", dueDate: "13-04-2020"}
    ]
}]);