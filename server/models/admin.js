const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema =new Schema({
  name:{
    type:String,
    require:true
  },
  email:{
    type:String,
  },
  contactNo:{
    type: String,
    // unique: true
  },
  rollNo:{
    type:String,
    require:true,
    unique: true
  },
  position:{
    type: String
  },
  date:{
    type:Date,
    default:Date.now
  }
})
const Admin = mongoose.model("admin",UserSchema);
module.exports=Admin;
