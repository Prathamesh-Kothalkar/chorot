const { name } = require("ejs")


arr=[1,2,3,4,5]

var sq=arr.map((n)=>{
    if(n%2==0){
        return n
    }
})

names=["Prathamesh","Pro","Aditya","Gaurav","Ravi"]

// var pnames=names.filter((str)=>{
//     if(str[0]=="P"){
//         return str
//     }
// })

var pnames=names.map((str)=>{
    if(str[0]=="P"){
        return str;
    }
})

var fsq=arr.filter((n)=>{
    if(n%2==0){
        return n;
    } 
})


console.log(pnames)