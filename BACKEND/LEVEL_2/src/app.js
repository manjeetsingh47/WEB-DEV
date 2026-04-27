// this file is  only used to  create server

const express=require("express");
const noteModel=require("./models/note.model")


const app=express();
app.use(express.json());


app.post("/notes",async(req,res)=>{
    const data=req.body

    await noteModel.create({
        title:data.title,
        description:data.description
    })
    

    res.status(201).json({
        message:"Note created "
    })
})




app.get("/getnotes",async(req,res)=>{
    
    const notes=await noteModel.find()   //find      return array of objects
                                        //findOne     return objects which satisfy given condition

    res.status(200).json({
        message:"notes fetched successfully",
        notes:notes
    })
})




app.delete("/deletenotes/:id",async(req,res)=>{
    const id=req.params.id

    await noteModel.findOneAndDelete({
        _id:id
    })

    res.status(200).json({
        message:"node deleted successfully"
    })
})




app.patch("/updatenotes/:id",async(req,res)=>{
    const id=req.params.id

    const title=req.body.title
    const description=req.body.description

    await noteModel.findOneAndUpdate({
        _id:id 
        },
    {
        title:title,
        description:description
    })


    res.status(200).json({
        message:"note updates successfully"
    })
})





module.exports=app