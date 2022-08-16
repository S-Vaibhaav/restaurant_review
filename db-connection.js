// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host:'localhost',
//     port: '3306',
//     user:'root',
//     password:'cdev',
//     database: 'restaurant_review'
// });

// connection.connect(err => {  // test out connetion and console.log error if there is one
//     if (err) throw err;
//     console.log('Connected To DB');
// }); 
// module.exports = connection;
var mysql = require('mysql');

var connection = mysql.createConnection({

    host:'dbrestaurant.cefojpvupkf7.us-east-1.rds.amazonaws.com',

    port: '3306',

    user:'rest',

    password:'tG068098',

    database: 'restaurant_review'

});


connection.connect(err => {  // test out connetion and console.log error if there is one

    if (err) throw err;

    console.log('Connected To DB');

});



var express = require('express');
var app = express();
app.route('/mysql').get(fromMYSQL);


function fromMYSQL(request, respond){

    var sql = "Select * from restaurant";
connection.query(sql, function (err,result){
    console.log(result);
})

}

app.listen(3000);
console.log("http://54.234.35.39:3000/mysql%22");
