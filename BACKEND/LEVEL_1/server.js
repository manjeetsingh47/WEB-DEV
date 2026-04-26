const express=require("express");

//creationg instance of  server
const app=express();


//request and response
app.get("/",(req,res)=>{
    res.send("Hello World");
})
//to access data from frontend we use req.
//to send any data from backend we use res.


app.get("/about",(req,res)=>{
    res.send("About Page");
})

//starting server
app.listen(3000,()=>{
    console.log("server is running");
});



/*HTTP METHODS:-

    1.GET:- Use to fetch data from server.

    2.POST:- to send data on server.

    3.PATCH:- to change or update data already present on server,

    4.DELETE:- to delete data that is alredy on server.

    */