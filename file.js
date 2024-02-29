const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", (req, res) => {
  fs.writeFile("c.txt", "Hello I am from c.txt", (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send("File Created");
    }
  });
});

app.get("/read", (req, res) => {
  fs.readFile("c.txt", "utf-8", (err, data) => {
    if (err) {
      res.send("No file exits please try another file")
    } else {
      res.send(data);
    }
  });
});

app.delete("/delete", (req, res) => {
  fs.unlink("c.txt", (err) => {
    if (err) {
      console.log(err);
    } else {
      res.sendStatus(200);
    }
  });
});

app.get("/change",(req,res)=>{
    fs.writeFile("c.txt","This contain has been changed successfully by /change",(err)=>{
        if(err){
            console.log(err)
        }
        else{
            res.status(200).json({
              'msg':"Data Sended Sucessfully"
            })
        }
    });
});

app.get('/user/:id',(req,res)=>{
  res.send(req.params.id+"...! how are you")
})

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
