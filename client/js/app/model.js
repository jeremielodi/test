
services.factory('model', function() {

  var model={};

  model.getUsers=function(server){
    
        var xsrf = $.param({  });

        $http({
            url: server+'listUsers',
            method: "POST",
            data: xsrf,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(
            function(data) {
              
                if (data) {
                    //setting the user's list
                   return  data.data; 
                }

            },
            function(response) {
                return [];
            });
  }

  return model;

});