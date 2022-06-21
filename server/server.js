import express from "express";
import mysql from "mysql";
import cors from "cors"
import bodyParser from "body-parser";

const app = express()

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Dionisis13!",
  database: "test_app",
});


app.listen(3001, () => {
  console.log("app listening on port 3001")
})

app.get("/users/get", (req, res) => {
  const sqlSelect = "SELECT * FROM test_app.users ";

  db.query(sqlSelect,  (err, result) => {
    res.send(result);
  });
});

app.get("/emails/get", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const sqlSelect = "SELECT email FROM test_app.users ";

  db.query(sqlSelect,  (err, result) => {
    res.send(result);
  });
});

app.post("/visits/update",(req,res)=>{

})

app.post("/visits/post",(req,res)=>{
  const email = req.body.email;

  const sqlInsert =
    "INSERT INTO data(user_email,beggginer_visits,interm_visits,advanced_visits,beginner_passed,intetm_passed,advanced_passed) VALUES (?,0,0,0,0,0,0)";
  console.log('inserted')
  db.query(sqlInsert, [ email], (err, result) => {
    console.log(err);
})
})

app.patch("/visits/update",(req,res)=>{
  const email = req.body.email;
  const visit = req.body.visit;
  const sqlSelect = "UPDATE test_app.data SET "+visit+"="+visit+"+1 where user_email=?";
  db.query(sqlSelect,[ email],  (err, result) => {
    res.send(result);
  });
})

app.get("/visits/get",(req,res)=>{
  const email = req.body.email;
  const visit = req.body.visit;
  const sqlSelect = "SELECT "+visit+" FROM test_app.data where user_email=?";
  db.query(sqlSelect,[ email],  (err, result) => {
    res.send(result);
  });
})



app.get("/passed/get",(req,res)=>{
  const email = req.body.email;
  const pass = req.body.pass;
  const sqlSelect = "SELECT "+pass+" FROM test_app.data where user_email=?";
  db.query(sqlSelect,[ email],  (err, result) => {
    res.send(result);
  });
})

app.post("/accounts/get", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const sqlSelect = "SELECT email FROM test_app.users where email=? AND password=?";

  db.query(sqlSelect,[ email, password],  (err, result) => {
    res.send(result);
  });
});

app.post("/users/insert", (req, res) => {
  const fullName = req.body.fullName;
  const email = req.body.email;
  const password = req.body.password;

  const sqlInsert =
    "INSERT INTO users(full_name,email,password) VALUES (?,?,?)";
  console.log('inserted')
  db.query(sqlInsert, [fullName, email, password], (err, result) => {
    console.log(err);
  });
});