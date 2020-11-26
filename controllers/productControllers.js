import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'


export const postProduct = asyncHandler( async (req,res) => {
    const { name, image, description, price, countInStock } = req.body
    try {
        const createdProduct = await Product.create({
            user: req.user,
            name,
            image,
            description,
            price,
            countInStock
        }).populate('user')
        res.status(201).json(createdProduct)
    } catch (error) {
        res.status(400)
        throw new Error("Error creating product")

    }
})

