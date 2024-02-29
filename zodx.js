const express = require('express');
const zod = require('zod');
const app=express();

const dataSchema=zod.object({
    name:zod.string(),
    pass:zod.string().min(6),
    email:zod.string().email()
})

const globalCatches=(err,req,res,next)=>{
    if(err){
        res.status(502).json({
            msg:'Something went wrong..!'
        })
    }
    else{
        next();
    }
}


app.use(express.json());
app.use(globalCatches)

app.get("/test",(req,res)=>{
  let isValid=dataSchema.safeParse(req.body);
  if(isValid.success){
    res.send("Success")
  }else{
    res.status(412).json({
        msg:"Invalid data"
    })
  }
})

app.listen(3000,()=>{
    console.log("Server is Starting")
})