const mongoose = require("mongoose");
// const { unique } = require("next/dist/build/utils");
const { Schema } = mongoose;
const UserSchema =new Schema({
  name:{
    type:String,
    require:true
  },
  email:{
    type:String,
    unique: true
  },
  secondaryEmail:{
    type:String,
  },
  rollNo:{
    type:String,
    require:true,
    unique: true
  },
  contactNo:{
    type: String,
    unique: true
  },
  block:{
    type: String
  },
  department:{
    type: String
  },
  roomNo:{
    type:Number,
  },
  belongs:{
    type:String,
  },
  date:{
    type:Date,
    default:Date.now
  }
})
const Student = mongoose.model("student",UserSchema);
module.exports=Student;
