import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'
import categoryRoutes from './routes/categoryRoute.js'
import productRoutes from './routes/productRoutes.js'
import cors from 'cors';
import path from 'path';
import {fileURLToPath} from 'url';
// configure env
dotenv.config()

// database config
connectDB();
// esmodule6
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const app=express();
const port= process.env.PORT || 8080;

// middleware
app.use(cors()); 
app.use(express.json());
app.use(morgan('dev'));


// build 
app.use(express.static(path.join(__dirname, './client/build')));
// routes 
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/product',productRoutes);
// rest objects--> for create a rest api
// rest api

// initial route
app.use("*", function(req,res){
res.sendFile(path.join(__dirname,'./client/build/index.html'));
})

app.listen(port,()=>{
 console.log('listening on port '+port);
})
