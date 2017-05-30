
var app = angular.module('appTest', ['ngRoute','services']);

var services = angular.module('services', []);

app.config(['$routeProvider', function($routeProvider){

$routeProvider
         .when("/",{
            title:"list",
            templateUrl: "templates/userList.html"
        
    }
         )



}]);