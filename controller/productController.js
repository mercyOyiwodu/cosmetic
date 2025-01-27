const products = require('../models/products'); 
const {v4: uuid} = require('uuid');

exports.createProduct = async (req, res) => {
    try {
            const data = {
                id: uuid(),
                productName: req.body.productName,
                productAmount: req.body.productAmount,
                productEmail: req.body.productEmail,
                isAvailable: req.body.isAvailable
            }
            console.log(data);
            
        const createProduct = await products.create(data);
        
        res.status(201).json({ message: "New store created successfully",data: data });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}
