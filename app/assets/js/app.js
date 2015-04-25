var moxieApp = angular.module('moxies',['ngRoute', 'moxControllers', 'moxFilters' ])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/moxies', {
                templateUrl: 'moxies.html',
                controller: 'list'
            })
            .when('/moxie/:moxieId', {
                templateUrl: 'moxieDetail.html',
                controller: 'detail'
            })
            .otherwise({
                redirectTo: '/moxies'
            });
    }]);
