require("dotenv").config();
const app =require("./app")
const connectDB = require("./db/db")

connectDB()



app.listen(3000,(req,res)=>{
    console.log("server is running")
})