import express from "express";
import axios from "axios";


const app = express();
const port = 3000;
app.use(express.static("./public"));

app.listen(3000, ()=>{
    console.log(`Server listening on port ${port}`)
})

app.get("/", async (req,res)=>{
    const result = await axios.get("https://official-joke-api.appspot.com/jokes/random");
    res.render("index.ejs", {setup: result.data.setup, punchline: result.data.punchline})
})
