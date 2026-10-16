import mongooes from "mongoose"

const userSchema=new mongooes.Schema({
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
    role:{
        type:String,
        default:"user"
    }
})

const User=mongooes.model("User",userSchema)
export default User;
