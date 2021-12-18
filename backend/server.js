//1.creation server
const express = require("express");
const configDB = require("./config/configDB");
// 3.create Schema
const User = require("./models/User");

const userRouter = require("./routes/userRouter");

const app = express();

//2.Config database
configDB();
app.use(express.json())
//CRUD
//get all users
// app.get("/api/users",async(req,res) => {
//     try {
//         const users = await User.find()
//         res.send(users)
//     } catch (error) {
//         res.status(500).send(error.message)
//     }
// })
app.use("/api", userRouter);

const PORT = 4000;
app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`Server is running on port ${PORT}`)
);
