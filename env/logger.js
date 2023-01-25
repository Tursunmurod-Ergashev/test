const mongoose=require("mongoose")
const mySchema=new mongoose.Schema({
    name:String,
    age:Number,
    email:String
});
module.exports=nameSchema=mongoose.model("nameSchema",mySchema)