const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    
   
       inputs:{
        type:Object,
       }
    ,
},{
    timestamps:true,
});


module.exports = mongoose.models.blog || mongoose.model('blog', blogSchema);