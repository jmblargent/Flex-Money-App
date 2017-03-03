
//This is used for the SQL db access
//I got this off of http://sirlagz.net/2011/07/02/connecting-to-sql-server-with-javascript/
/*var objConnection = new AvtiveXObject("adodb.connection");
var strConn = "driver={sql server};
				server=server1;
				database=db1;
				uid=username;
				password=password";
objConnection.Open(strConn);

var rs = new ActiveXObject("ADODB.Recordset");
var strQuery = "SELECT * FROM users WHERE username = 'user1'";
rs.Open(strQuery, objConnection);

rs.MoveFirst;
while(!rs.eof) {
	//stuff
	rs.movenext;
}*/

//I believe that the var rs will have the data
//This will be where the html is updated

document.getElementById("balance").innerHTML = "Placeholder Balance"; //balance from db
document.getElementById("meals").innerHTML = "Placeholder meal number"; //meals from db
document.getElementById("munchmoney").innerHTML = "Placeholder munchmoney"; //munchmoney from db

//need to write logic for determining meal plan or munch money
//then need to hid elements that aren't needed