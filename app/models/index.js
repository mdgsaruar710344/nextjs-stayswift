import mongoose, { Schema } from "mongoose";

const usersSchema= new Schema({
        name:{
          type:String,
          required:true
        },
        email:{
          type:String,
          required:true,
          unique:true
        },
        password:{
          type:String,
          required:true
        },
        image:{
          type:String,
          required:false
        },
});

export const usersModel= mongoose.models.users ?? mongoose.model("users",usersSchema);