const express= require("express");
const mongoose = require("mongoose");
const app = express();
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/blogsDB");
const blog_obj=require("./model/model.js");
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));

app.get("/", async(req,res)=>{
    const data = await blog_obj.find({})
    res.render("show.ejs", {bdata:data})
})

app.get("/addnew",(req,res)=>{
    res.render("index.ejs")
})



app.post("/save",(req,res)=>{
    const data = new blog_obj(req.body);
    data.save();
    res.send("Data saved ... ")
})

app.listen(3000);


