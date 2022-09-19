const mongoose = require("mongoose");


async function dbConnect() {
   

    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },()=>{
        console.log("db connected successfully");
    });

   
}

export default dbConnect;

