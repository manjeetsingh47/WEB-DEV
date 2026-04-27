//  this file is used connect server to database

const mongoose=require("mongoose")


async function connectDB(){
    await mongoose.connect("mongodb+srv://yt:7AWXp8E4DlzJruq2@cluster0.dfdcjxq.mongodb.net/halley")

    console.log("connected to DB")
}

module.exports=connectDB