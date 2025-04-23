import express from 'express'
import {connectDB} from './config/db.js'
import dotenv from "dotenv";
dotenv.config();
import productRoutes from './routes/product.routes.js'


connectDB()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/api',productRoutes)




app.listen(3000 , ()=>
{
    console.log("server is running")
})