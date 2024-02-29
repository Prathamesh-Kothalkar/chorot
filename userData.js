const express = require('express');
const jwt = require('jsonwebtoken');
const jwtPassword="12345"

const app=express();

const ALL_USERS=[
    {
        username:"Pratham123",
        password:"123"
    },
    {
        username:"someone12",
        password:"123"
    },
    {
        username:"chiku123",
        password:"123"
    }
]



function userExist(username,password){
    for(i=0;i<ALL_USERS.length;i++){
        if(ALL_USERS[i].username==username && ALL_USERS[i].password==password){
            return true;
        }
    }
    return false;
}

app.use(express.json());
app.use(globalCatches)

app.post("/signin",(req,res)=>{
    const {username,password}=req.body;
    if(!userExist(username,password)){
        res.status(404).json({
            msg:"User not Found"
        })
    }
    else{
        var token=jwt.sign({username:username},jwtPassword);
        res.send(token)
    }
})

app.get("/users", (req, res) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ msg: "Token not provided" });
    }
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username; // Extract username from decoded token
        const otherUsers = ALL_USERS.filter((user) => user.username !== username);
    return res.status(200).json({
      otherUsers,
    });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Internal Server Error" });
    }
});

function globalCatches(err,req,res,next){
    if(err){
        res.status(402).json({
            msg:"Some went gone wrong"
        })
    }
    else{
        next();
    }
}


app.listen(3000,()=>{
    console.log("Server is running...");
})