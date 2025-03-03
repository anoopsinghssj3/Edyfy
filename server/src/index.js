import dotenv from "dotenv";
import connectDb from "./db/dbConnection.js";
import app from "./app.js";

dotenv.config({
    path: '../env'
})

const port = process.env.PORT || 8000;

connectDb()
.then(()=>{
    app.on("error", (err)=>{
        console.error("ERROR:", err);
        throw err
    });

    app.listen(port, ()=>{
        console.log("Server is running at port", port);
    });
})
.catch((e)=>{
    console.log("Mongo connection failed", e);
})