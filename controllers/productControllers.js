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

export const getProducts = asyncHandler( async (_,res) =>{
    try {
        const products = await Product.find()
                            .select("_id name image description price countInStock")
                            .populate('user').select("name")
        res.status(200).json(products)
    } catch (error) {
        res.status(404)
        throw new Error('Error retrieving products')
    }
    
})

export const getProductById = asyncHandler( async (req,res)=>{
    try {
        const product = await Product.findById(req.params.id).populate('user')
        const { _id, name, image, description, 
            price, countInStock, user: {name: seller} } = product
        res.status(200).json({
            id: _id,
            name,
            image,
            description,
            price,
            countInStock,
            vendor: seller
        })
    } catch (error) {
        res.status(404)
        throw new Error('Product not found')
    }
    
})