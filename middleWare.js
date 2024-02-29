const fs =require('fs')
const express = require("express")
const app=express()


app.use(express.json())

const calculateVistors= (req,res,next)=>{
    const filePath = "visit.txt";
    if (fs.existsSync(filePath)) {
        fs.readFile(filePath, "utf-8", (err, data) => {
            if (err) throw err;
            let count = parseInt(data);
            count++; 
            fs.writeFile(filePath, count.toString(), (err) => {
                if (err) throw err;
                console.log("Visitor count updated:", count);
            });
        });
    } else {
        fs.writeFile(filePath, '1', (err) => {
            if (err) throw err;
            console.log("File created. Initial visitor count: 1");
        });
    }
    next();
}


app.use(calculateVistors)//default call in every routes 



const isValid=(req,res,next)=>{
    var name = req.headers.name
    var pass=req.headers.pass
    if(name!="Prathamesh"|| pass!="pass"){
        res.status(401).json({
            msg:"User not Found"
        })
    }else{
        next()
    }
}

const isHealthy =(req,res,next)=>{
    var kidneys=req.query.n;
    if(kidneys!=1 && kidneys!=2){
        res.status(403).json({
            msg:"You are not safe or not Human"
        })
    }
    else{
        next();
    }
}

app.get("/check",isValid,isHealthy,(req,res)=>{   
    res.send(req.body.name)
})


app.listen(3000,()=>{
    console.log("Server is Started");
})