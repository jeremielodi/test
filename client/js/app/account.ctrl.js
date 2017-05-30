app.controller('accountCtrl', function($scope, $http) {

//the server IP
$scope.server="http://localhost:4000/";

//variable that contains the user's list
$scope.users=[];

//the function to get all users in the database
$scope.getUsers=function(){
    
        var xsrf = $.param({  });

        $http({
            url: $scope.server+'listUsers',
            method: "POST",
            data: xsrf,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(
            function(data) {
              
                if (data) {
                    //setting the user's list
                    $scope.users = data.data; 
                }

            },
            function(response) {
                 alert('error')
            });

}


$scope.printUsers=function(){
     //get the div html content
        var xsrf = $.param({  content: $('#content').html()  });

        $http({
            url: $scope.server+'print_index',
            method: "POST",
            data: xsrf,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(
            function(data) {
              
                if (data) {
                    //setting the user's list
                    
                    window.open(data.data,"pritin list","width=700,height=600");
                }

            },
            function(response) {
                 alert('error')
            });

}





//calling the function that fetch all users
$scope.getUsers();


});