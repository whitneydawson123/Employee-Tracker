const mysql = require('mysql');


const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // {TODO: Add your MySQL password}
      password: '',
      database: 'inventory_db'
    });

db.connect(function (err){
    if(err) throw err
});

module.exports = db;