const express = require("express");
const app = express();
const db = require("./db/dbconnect");
app.use(express.json());

app.get("/", (req, res) => {
  db.query("SELECT * FROM nodedbtest", (error, results, fields) => {
    res.send(results);
  });
});

//user api
app.post("/user", async (req, res) => {
  const data = req.body;
  const { name, email } = req.body;
  try {
    // Check if email already exists
    // const [existingUser] = await db.query(
    //   "SELECT * FROM nodedbtest WHERE email = ?",
    //   [email]
    // );

    // if (existingUser.length > 0) {
    //   return res.status(409).json({ message: "Email already exists" });
    // }

    db.query(
      "INSERT INTO nodedbtest (name, email) VALUES (?, ?)",
      [name, email],
      (error, results, fields) => {
        if (error) {
          console.log(error);
        } else {
          res.status(201).json({
            message: "User created successfully",
            //   userId: rows.insertId,
            results,
          });
        }
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Database error" });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
