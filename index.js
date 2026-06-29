const express = require("express");
const mongoose = require("mongoose");
const dotenv =require("dotenv");
dotenv.config();
const Student = require("./models/Student");
const { Server } = require("node:http");

const app =express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("MONGODB CONNECTED");

})
.catch((err)=>{
    console.log("Unable to Connect DB",err);
});

app.post("/api/students", async (req,res)=>{
    try{
       const student = await Student.create(req.body);
       res.json({
        message: "Record Saved",
        data: student
       });
    }
    catch(err) {
        console.log("unable to store data",err);
    }
});

app.get("/api/students", async (req, res)=>{
    try{
        const students =await student.find();
        res.json({
            message:"ALL records",
            data:students
        });
    }
    catch (err){
        console.log("Record nhi mil rha hai",err);
    }
})


const PORT =process.env.PORT || 5001;

app.listen(PORT, ()=>{
    console.log("server connected at"+PORT); 
})