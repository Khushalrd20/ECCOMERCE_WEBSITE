// const express = require("express") ; // es5
import express from "express" ; //es6
import colors from "colors" ;
import dotenv from "dotenv" ;
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import cors from "cors";

dotenv.config() ; // dont need to provide path because its in root for other folder use({path :''})

const app = express() ;

//database config
connectDB();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev')); // used for debubbing and monitoring

//const colors = require("colors"); 

//routes 
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/product',productRoutes);
//api
app.get("/",(req,res)=>{
    res.send("<h1>welcome to website</h1>")
});

//port added to env because of security reason only admin can access
const PORT = process.env.PORT || 8050 ;

//listen 

app.listen(PORT ,()=>{
    console.log(`LISTENING TO PORT NO ${PORT}.`.bgGreen.white) ;
});