import express from 'express';
import mongoose, { Schema } from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
const port = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL);

async function connectDB(){
    try{
        await mongoose.connect(MONGO_URL);
        console.log("connectd 🥳")
    }catch(e){
        console.error(e);
    }
}

connectDB();


const data = new Schema({
    name:String
});

const useModel = mongoose.model("new1",data);

app.get("/data",async(req,res) => {
    const userData = await useModel.find();
    res.json(userData);
})

app.use(express.json());
app.get('/',(req,res) => {
    res.send("hello deepak nice to meet you");
})

app.get("/about",(req,res) => {
    res.json({"message":"yo!"})
});

app.listen(port,() => {
    console.log(`ya ya i'm running in this port ${port}`);
});