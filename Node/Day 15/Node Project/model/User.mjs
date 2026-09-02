import mongooes, { Types } from "mongoose";

const UserSchema=new mongooes.Schema({
    name:{
        type:String,
        require:true
    },

    email:{
        type:String,
        require:true,
        unique: true
    },

    password:{
        type:String,
        require :true,
        
    },
   
  
},
{
    timestamps: true,
  });

const user = mongooes.model("User", UserSchema);

export default user;
