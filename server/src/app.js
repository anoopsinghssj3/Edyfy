import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

let dataSizeLimit = "16kb";

app.use(express.json({limit: dataSizeLimit})); //to handle json data within the size limit
app.use(express.urlencoded({extended:true, limit: dataSizeLimit})); //to handle url data
app.use(express.static("public")); //to use static files stored in public folder

//routes import
import adminRouter from "./routes/admin.routes.js"

//routes declaration 
app.use("/api/v1/admin", adminRouter)
app.use("/", (req, res)=>{
    res.send("Defaul API working")
})

export default app;