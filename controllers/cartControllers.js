import asyncHandler from 'express-async-handler'
import Cart from '../models/cartModel.js'

export const addToCart = asyncHandler( async (req,res) => {
    try {
        const cart = await Cart.find()
        if (cart && cart.buyer === req.user){

        }
    } catch (error) {
        
    }
})