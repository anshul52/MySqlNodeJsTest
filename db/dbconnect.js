const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});
connection.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("db connected");
  }
});

module.exports = connection;

// connection.connect(function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("connected");
//     connection.query(
//       "SELECT * FROM nodedbtest",
//       function (error, results, fields) {
//         if (error) {
//           console.log(error);
//         } else {
//           console.log("The solution is: ", fields);
//         }
//       }
//     );
//   }
// });
