
services.factory('params', function() {

  var params={};

  params.serverAdress = "http://127.0.0.1:4000/"; 

  params.alert=function(){
    alert('good');
  }
  return params;

});