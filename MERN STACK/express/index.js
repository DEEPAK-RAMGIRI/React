import express from 'express'
const app = express();
const port = 3000;

app.use(express.json());
app.get('/',(req,res) => {
    res.send("hello deepak nice to meet you");
})

app.get("/about",(req,res) => {
    res.json({"message":"yo!"})
})
app.listen(port,() => {
    console.log(`ya ya i'm running in this port ${port}`);
})