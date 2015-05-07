
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/moxieMonsternpm', function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

var moxies = require('./routes/moxies');
var routes = require('./routes/index');
app.use('/', routes);
app.use('/moxies', moxies);

var moxieApp = angular.module('moxies',['ngRoute', 'moxControllers', 'moxFilters' ]);
   /* .config(['$routeProvider', function($routeProvider){
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
    }]);*/
