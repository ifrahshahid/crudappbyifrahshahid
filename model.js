const mongoose=require ("mongoose");
const blogsc = mongoose.Schema({
    title:String,
    content:String,
    blog_cat:String,
    author:String
})

module.exports = mongoose.model("Blog", blogsc);
