const {MongoClient} = require("mongoose"); 
require("dotenv").config({path: ".env"})

async function dbConnection {
    const dbUrl = process.env.dbUrl
    const client = new MongoClient
    
    try{
    

    

    }catch(error){
        console.log("Error within DB connection: " + error)
    }


}