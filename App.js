const express = require("express");
const data = require("./Data");
const rateLimit=require("express-rate-limit");
const app=express()

const limit=rateLimit({
    max:1,
    windowMs:7000

})

app.get("/",limit,(req,res)=>{

    res.send({

        status:"success",
        data:data
    })
  
})

app.listen(7000,()=>{console.log("server running on port 7000")})