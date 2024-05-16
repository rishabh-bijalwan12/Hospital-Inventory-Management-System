const mongoose=require("mongoose");

const URI="mongodb+srv://mernsample:Tug11uKXBjlER9HI@cluster0.jgbjwzi.mongodb.net/medical?retryWrites=true&w=majority&appName=Cluster0"

const connectDb=async()=>{
    try {
        mongoose.connect(URI);
        console.log("Db connect Sucessfull");
    } catch (error) {
        console.log("Db cnnnection failed");
    }
};

module.exports=connectDb;