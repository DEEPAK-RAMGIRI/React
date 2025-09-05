import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const Port = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL);
async function connectDB(){
    try{
        await mongoose.connect(MONGO_URL);
        console.log("connected");
    }catch(e){
        console.log(e);
    }
}
connectDB();

app.get('/' ,(req,res) => {
    res.send("Connected")
});

const userSchema = new mongoose.Schema({
    name : {type : String , required: true},
    age :{type: Number}
});

const user = mongoose.model("new1",userSchema);

app.get("/data", async(req,res) => {
    const data = await user.find({},{_id:0});
    res.json(data);
})

app.listen(Port,() => {
    console.log(`ya ya i'm running in this port ${Port}`);
});




