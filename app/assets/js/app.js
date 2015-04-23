var moxieApp = angular.module('moxies',['moxControllers', 'ngRoute'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when(
            '/', {
                templateUrl: '/moxies.html',
                controller: 'moxControllers'
            }
        );
    }]);
