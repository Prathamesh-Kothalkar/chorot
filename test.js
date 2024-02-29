const jwt = require('jsonwebtoken');
const jwtPassword="123456"

// token = jwt.sign({username:"Prathamesh"},jwtPassword);
// console.log(token)
try{
verfiy=jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlByYXRoYW1lc2giLCJpYXQiOjE3MDg5MTY2Njh9.k8WkeOUyTzV593mHrnkR7RJLiMVyou02L0M9nlwxeQ4",jwtPassword);
decode=verfiy.username;
console.log(decode)
}catch(err){
    console.log("An error is occured");
}