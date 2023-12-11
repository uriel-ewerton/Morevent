//import jwt from "jsonwebtoken";
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "!etamoT9",
  database: "morevent",
});

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser);

app.post("/signup", (req, res) => {
  const q =
    "INSERT INTO `morevent`.`usuarios`(`nome`,`email`,`senha`) VALUES (?)";
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return res.json({ Error: "Error hashing the password" });
    const values = [req.body.name, req.body.email, hash];
    db.query(q, [values], (err, result) => {
      if (err) return res.json({ Error: "Error inserting data on db" });
      return res.json({ Status: "Succes" });
    });
  });
});

app.post("/login", (req, res) => {
  const q = "SELECT * FROM usuarios WHERE email = ?";
  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.json({ Error: "Error login in server" });
    if (data.length > 0) {
      bcrypt.compare(
        req.body.password.toString(),
        data[0].password,
        (err, response) => {
          if (err) return res.json({ Error: "Problem with hash" });
          if (response) {
            return res.json({ Status: "Succes" });
          } else {
            return res.json({ Error: "Password not matched" });
          }
        }
      );
    } else {
      return res.json({ Error: "No email in the list" });
    }
  });
});

app.listen(8800, () => {
  console.log("Ta rodano...");
});
