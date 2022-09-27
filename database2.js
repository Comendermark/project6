var mysql = require('mysql')
var express = require('express');
var app = express();
var con = mysql.createConnection({
    host: '10.11.90.15',
    port:'3306',
    password:'Study1111%', // Replace with your host name
    user: 'study',      // Replace with your database username
    Schema: 'my_node',      // Replace with your database password
    table: 'files' // // Replace with your database Name
});


var Data;
// con.connect(function(err) {
//     if (err) throw err;
//     con.query(`SELECT * from my_node.files`, function(err,result,fields){
//         if(err)throw err;
//         console.log(result)
//     })
// });



var PORT = 3009;

app.listen(PORT, function() {
    console.log('http://localhost:' + PORT );
});

app.get('/scp', function(req, res) {
    con.query('SELECT * FROM my_node.files ORDER BY id ', function (err, rows) {
        // console.log(rows);
        // console.log("AAA: ");
        // console.log (__dirname + '/views/datatable.ejs')
        // Data2 = rows
        console.log("BBB: ")
        console.log(rows);

        res.send(rows);

    });
})