// File : config/routes.js -->

module.exports = function (app) {

    //Controllers++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var usercontroller = require('../controllers/account.js'); 

    //Routes+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    app.post('/listUsers', usercontroller.findUsers);
    app.post('/print_index',usercontroller.print);
}