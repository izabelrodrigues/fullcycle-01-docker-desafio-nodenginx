const mysql = require('mysql');
const connection = mysql.createConnection({
	host:'db',
	user:'root',
	password:'root',
	database:'nodedb'
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Connected..!');
	}
});

module.exports = connection;