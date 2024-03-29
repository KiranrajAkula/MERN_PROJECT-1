// require("dotenv").config({path:".env"})

import dotenv from 'dotenv';
import connectDB from "./db/index.js" 

dotenv.config({
    path:".env"
})

connectDB()




/** here in this approach we handled 1) async await 2) try catch 3) IIFE
(async ()=>{
    try{

        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR: ", error);
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    }catch(error){
        console.error("Error" , error);
        throw err
    }
})()
*/