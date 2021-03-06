import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'


export const addProduct = asyncHandler(async (req, res) => {
    const { name, image, description, price, countInStock } = req.body
    try {
        const createdProduct = await Product.create({
            vendor: req.user.id,
            name,
            image,
            description,
            price,
            countInStock
        })
        res.status(201).json(createdProduct)
    } catch (error) {
        res.status(400)
        console.log(error);
        throw new Error("Error creating product")

    }
})

export const getProducts = asyncHandler(async (req, res) => {
    try {
        const pageNumber = req.query.pageNumber ? parseInt(req.query.pageNumber) : 1
        const pagination = req.query.pagination ? parseInt(req.query.pagination) : 10

        const products = await Product.find()
            .select("_id name image description price countInStock")
            .populate('vendor', 'name')
            .skip((pageNumber - 1) * pagination)
            .limit(pagination)
        res.status(200).json(products)
    } catch (error) {
        console.log(error);
        res.status(404)
        throw new Error('Error retrieving products')
    }

})

export const getProductById = asyncHandler(async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate('vendor', 'name')
        const { _id, name, image, description,
            price, countInStock, vendor: { name: seller } } = product
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

export const deleteProduct = asyncHandler(async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id)
        res.json(deletedProduct)
    } catch (error) {
        res.status(403)
        throw new Error("error deleting product")
    }
})