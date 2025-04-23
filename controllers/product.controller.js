import mongoose from "mongoose";
import Product from "../models/product.models.js";



export const createProduct = async (req , res)=>
{

    const { name , price , image } = req.body

    console.log(req.body)

    // if(!product.name || !product.image || !product.price)
    // {
    //     return res.status(400).json({ success : false ,  message : "please provide all fields"})
    // }

    try {

        const product = await Product.create({ name , price , image })
        

        res.status(200).json({success : true , message : "new product is created" , data : product})
        

        
    } catch (error) {

        res.status(500).json({success : false , message : "internal server error"})
         

    }
}

