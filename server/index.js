import express from "express"; 
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const app = express(); 
const dbUrl = process.env.DbUrl; 

app.listen(3000, ()=> {
    console.log("Server is up and running"); 
})
 
app.get('/', (req, res) => {
    res.send("Hello from express server")

})

mongoose.connect(dbUrl)
.then(()=> console.log("Server has successfully connected to MongoDB Atlas"))
.catch((error)=>{
    console.error("Express server was unable to connect to MongoDB Atlas");
})

