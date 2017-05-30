//User controller
 var wkhtmltopdf = require('wkhtmltopdf');
    var fs=require("fs");

function user() {
    data = {};
    tomodel = {};
    model = require('../models/user_model');
}

user.prototype.constructor = user;
 
  
//Function to list all users
user.prototype.findUsers = function(req, res) {

    tomodel = { ID: req.body.ID }
    data.title = "Partener's List";
    model.findAll(tomodel, function(err, rows) {
        data.rows = rows;
        if (rows) {
            res.send(rows);
        } else {
            res.send("[]"); //not found
        }

    });
}



user.prototype.print=function(req, res){
   
   try{
        var fileName="index_printed.pdf";

        var server="http://localhost:4000/";
        
        var html="<html><header><title>printing</title> "+
        "<meta charset='utf-8'/> <link href='"+server+"css/style.css' rel='stylesheet'/></header><body>";

        var params=JSON.parse(JSON.stringify(req.body));
        html+=params.content;

        html+="</body></hml>";

        wkhtmltopdf(html).pipe(fs.createWriteStream('repport/'+fileName));

        res.send(fileName);


   }catch(ex){
      res.send("");
   }

   //wkhtmltopdf('http://localhost:4000/index.html', { pageSize: 'letter' })
  //.pipe(res);
  
   //wkhtmltopdf('http://localhost:4000/index.html', { pageSize: 'letter' })
  //.pipe(fs.createWriteStream('index_printed.pdf'));
  
  //res.send()
}
module.exports = new user();