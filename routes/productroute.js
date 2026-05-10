const express = require('express');
const router = express.Router();
const Product = require('../models/product')

//get products
router.get("/", async(req, res) => {
    try{
        const products = await Product.find();
        res.send(products);
    } catch(error){
        res.send(error.message);
    }
});

//get product
router.get("/:id", async(req, res) => {
    try{
        const product = await Product.findById(req.params.id);
        if(!product) return res.status(404).json({ message: "Post not found" });
        res.send(product);
    } catch(error){
        res.send(error.message);
    }
})

//create product
router.post("/", async(req, res) => {
   try{
     const newProduct = await Product.create(req.body);
     res.send(newProduct);
   } catch(error){
    res.send(error.message)
   }
});

//update product 
router.put("/:id", async(req, res) => {
    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,
        req.body,
        {new: true}
    )
       if(!updatedProduct) return res.status(404).json({ message: "Post not found" });
       res.send(updatedProduct);
    } catch(error) {
        console.log(error.message);
        
    }
});


//delete product
router.delete("/:id", async(req, res) => {
    try{
     const deleted =await Product.findByIdAndDelete(req.params.id);
     if(!deleted)  return res.status(404).json({ message: "Post not found" });
        res.send("deleted")
    } catch(error){
        res.send(error.message);
    }
})
module.exports = router;

// {
//   "name": "Gaming Laptop",
//   "description": "High performance laptop",
//   "price": 1500,
//   "stock": 10
// }