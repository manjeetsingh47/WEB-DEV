// this file is  only used to  create server

const express=require("express");

const app=express();


//middleware so that express can read raw data
app.use(express.json());



//cretaing array to store multiple objects
const notes=[];


//Api to send data to server
app.post("/notes",(req,res)=>{
    //console.log(req.body);

    notes.push(req.body); //pushig the notes created to array notes

    res.status(201).json({  //sending response
        message:"note created successfully"
    })
})




//Api to fetch data from server
app.get("/getnotes",(req,res)=>{
    res.status(200).json({
        message:"notes fetched successfully",
        getnotes:notes
    })
})



//Api to delete data from server
app.delete("/deletenotes/:id",(req,res)=>{       //here id is dynamic(changing) so used colon to tell express and these are calld params.
    const index = req.params.id

    delete notes[index]

    res.status(200).json({
        message:"notes deleted successfully"
    })
})



//Api to update data on server
app.patch("/updatenotes/:id",(req,res)=>{
    const index=req.params.id
    const title=req.body.title
    const description=req.body.description
    

    notes[index].description=description
    notes[index].title=title


    res.status(200).json({
        message:"note updated successfully"
    })
})




//exporting this server or file to other files for use
module.exports=app;