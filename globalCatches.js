const express = require('express');
const app=express();

app.use(express.json());
app.use((err,req,res,next)=>{
    if(err){
        res.status(502).json({
            msg:'Something went wrong..!'
        })
    }
    else{
        next();
    }
})
app.get('/ok/:a/',function(req,res){
    var name=req.body.name;
    var xx=req.params.a;
    var que=req.query.b;
    res.json({
        "name":name,
        "age":xx,
        "quote":que
    });
})

app.listen(3000,()=>{
    console.log("server is running...!")
})