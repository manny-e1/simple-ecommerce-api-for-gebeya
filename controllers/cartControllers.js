import asyncHandler from 'express-async-handler'
import Cart from '../models/cartModel.js'
import Product from '../models/productModel.js';

export const addToCart = asyncHandler( async (req,res) => {
    const { products } = req.body
        const userCart = await Cart.findOne({
            buyer: req.user.id
        }).populate({
            path: 'products',
            populate: {
              path: 'product',
              model: 'Product',
              select: "name price countInStock description image",
              populate: {
                path: 'vendor',
                model: 'User',
                select: "name email"
              },
            },
          })
        if (!userCart){
            const newCart = await Cart.create({
                buyer: req.user.id,
                products 
            })
            res.status(201).json(newCart)
        }
        
        userCart.products.forEach(cartProducts => {
            products.forEach( async prod => {
                if (!(cartProducts.product.id == prod.product)) {
                    cartProducts.push(prod)
                }
                    if (cartProducts.product.countInStock >= (cartProducts.quantity + prod.quantity)){
                        cartProducts.quantity += prod.quantity
                    }
                    await userCart.save()
           
                
            })
        })
        res.status(200).json(userCart)
    
})
