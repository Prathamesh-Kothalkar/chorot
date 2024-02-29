const express = require('express');
const cors=require("cors")
const zod=express('zod')
const app=express()



app.use(cors())
app.use(express.json())
app.use(globalErr)



app.get("/sum",(req,res)=>{
    const numA=parseInt(req.query.a);
    const numB=parseInt(req.query.b);

    sum=numA+numB;
    res.send(sum.toString())
    
})

function globalErr(err,req,res,next){
    if(err){
        res.send("Something went wrong")
    }
    else{
        next()
    }
}

app.listen(3000,()=>{console.log("Server is Starting....!")})