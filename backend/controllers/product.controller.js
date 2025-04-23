import mongoose from "mongoose";
import Product from "../models/product.models.js";



//creating or adding the product
export const createProduct = async (req, res) => {
  const product = req.body;

  console.log(product);

  if (!product.name || !product.image || !product.price) {
    return res
      .status(400)
      .json({ success: false, message: "please provide all fields" });
  }

  try {
    const products = await Product.create(product);

    res.status(200).json({
      success: true,
      message: "new product is created",
      data: products,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "internal server error" });
  }
};





//fetching all the products
export const getProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.status(200).json({
      success: true,
      data: allProducts,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "internal server error" });
  }
};


///updating the product

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "products are updated ",
      data: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "internal server error" });
  }
};



//deleting the products

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedData = await Product.findByIdAndDelete(id);

    res
      .status(200)
      .json({ success: true, message: "product has been deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "internal server error" });
  }
};
