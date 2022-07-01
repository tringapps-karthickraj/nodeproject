'user strict';
import mysql,{createConnection} from 'mysql';
//var mysql =mysql ;

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'mydb'
});

connection.connect(function(err: any) {
    if (err) throw err;
});

module.exports = connection;