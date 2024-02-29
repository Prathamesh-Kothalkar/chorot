const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:bvBSmAb6o15AInRw@cluster0.oopo9qg.mongodb.net/test")

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    }
})

 const user=mongoose.model("data",UserSchema)

 //if its special file export user 

 async function create(name,email){
    const User=new user({
        name:name,
        email:email
     })
    const res=await User.save();
    console.log(res._id);
}

 async function del(username){
    const success=await user.deleteMany({name:username});
    console.log(success.deletedCount)
 }

 
// create("Prathamesh","pkotha@gmail.com")
// create("Ravi","rotha@gmail.com")
// create("Adi","adipadi@gmail.com")
// create("Prathamesh","pkotha@gmail.com")
del("Prathamesh")



