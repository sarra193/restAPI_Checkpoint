// require express
const express = require("express");
//init express
const app = express();
//require the db
const connectDB = require("./config/connectDB");

//require expressRouter
const router = express.Router();
//require User Schema
const User=require("./models/User")

//4.parse data
app.use(express.json())



// 3.create four routes


//api http://localhost:5000/
//       GET :  RETURN ALL USERS 

app.use("/user",
      router.get("/", (req, res) => {
            User.find()
                  .then((Users) => res.send(Users))
                  .catch((err) => console.log(err))
      })
);



//api http://localhost:5000/
//              POST :  ADD A NEW USER TO THE DATABASE 

app.use("/user",
      router.post("/", (req, res) => {
            const newUser = new User({ ...req.body });
            newUser.save()
                  .then((Users) => res.send(Users))
                  .catch((err) => console.log(err))
      })
);


//api http://localhost:5000/
//       PUT : EDIT A USER BY ID 
app.use("/user",
      router.put("/:_id", (req, res) => {
            let { _id } = req.params;
            User.findByIdAndUpdate({_id},{$set:{...req.body}})
                  .then(() => res.send("users has been updated"))
                  .catch((err) => console.log(err))
      })
);


//api http://localhost:5000/
//       DELETE : REMOVE A USER BY ID 

app.use("/user",
      router.delete("/:_id", (req, res) => {
            let { _id } = req.params;
            User.findByIdAndDelete({_id})
                  .then(() => res.send("users has been deleted"))
                  .catch((err) => console.log(err))
      })
);






//2.connect to database
connectDB();

//1. create server

//port of the server
const port = process.env.PORT || 5000;

app.listen(port, (err) => {
      err?console.log(err):console.log(` server connect on http://localhost:${port}`)
})