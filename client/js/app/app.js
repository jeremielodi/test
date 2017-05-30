var app = angular.module('appTest', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){

$routeProvider
         .when("/",{
            title:"list",
            templateUrl: "templates/userList.html"
        
    }
         )



}]);