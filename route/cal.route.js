const express = require("express");


const router = express.Router();

router.get("/", (req, res)=>{
  
  return  res.send("YOu are in calcultor")


})

module.exports={router};