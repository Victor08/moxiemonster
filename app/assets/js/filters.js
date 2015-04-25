angular.module('moxFilters',[]).filter('testFilter', function(){
    return function(input){
        return input ? 'i will win' : 'i will win anyway';
    };
});
