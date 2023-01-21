
const express = require("express");
const { connection } = require("./config/db");
const cors = require('cors');
// const { userRoute } = require("./routes/user.routes");
const app = express();

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("welcome to home page");
});

// app.use("/user", userRoute);

app.listen(5000, async() => {
    try {
        await connection;
        console.log("connection done");
      } catch (err) {
        console.log(err);
      }
      console.log("server started on 5000");
});


