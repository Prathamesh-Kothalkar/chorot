const express = require("express")
const app = express();

app.get("/hospital", (req, res) => {

    var user = req.headers.name;
    var pass = req.headers.pass;
    var kidney = req.query.n;

    if (user == "Prathamesh" && pass == "pass") {
        if (kidney == 1 || kidney == 2) {
            res.status(200).json({
                msg: "You are fine"
            })
            return
        }
        else{
            res.status(400).json({
                msg:"You are not Human"
            })
        }

    }
    else{
        res.status(400).json({
            msg:"Invalid user"
        })
    }

})

app.listen(3000,()=>{
    console.log("Server Started at 3000")
})