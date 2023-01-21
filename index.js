
const express = require("express");
const { connection } = require("./config/db");
const cors = require('cors');
const { userRoute } = require("./route/user.route");
const app = express();

const {cal}=require("./route/cal.route");

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("welcome to home page");
});

 app.use("/user", userRoute);


 app.post("/calculate", (req,res)=>{

    let {investment, period, interest}=req.body;

    let x=Number(investment)+Number(period)+Number(interest); 
    //console.log(req.body)  
  


        
    // F = Total Maturity Value
  let   P = Number(investment);
   let  i = Number(interest) / 100
  let   n = Number(period);

    let  f = P *(((1+i) **n)-1)/i
  let   a = P*n;

 let g= f-a


    res.send({total_maturity_value:f,Total_Investment_Amount:a, Total_Interest_Gained:g});
 });

app.listen(5000, async() => {
    try {
        await connection;
        console.log("connection done");
      } catch (err) {
        console.log(err);
      }
      console.log("server started on 5000");
});


