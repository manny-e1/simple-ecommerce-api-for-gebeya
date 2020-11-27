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

export const getCarts = asyncHandler ( async (req,res) => {
    try {
        const cartArray = []
        let cartProductsArray = []
        const carts = await Cart.find().populate({
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
        carts.forEach(async prod => {
            prod.products.forEach(async (item) =>{
                cartProductsArray.push({
                    product: item.product,
                    quantity: item.quantity,
                    subTotalPrice: item.product.price * item.quantity
                }) 
                
            })
            console.log(cartProductsArray);
        })
        let totalPrice = 0
        cartProductsArray.forEach(prod =>     
            totalPrice += prod.subTotalPrice )
        
        carts.forEach(cart => {
            cartArray.push({
                id:cart._id,
                buyer: cart.buyer,
                products: cartProductsArray,
                totalPrice
            })
        })
        res.status(200).json(cartArray)
    } catch (error) {
        console.log(error);
        throw new Error("Error getting carts")
    }
})

export const deleteCart = asyncHandler (async (req,res) => {
    try {
        const deletedCart = await Cart.findByIdAndDelete(req.params.id)
    res.json(deletedCart)
    } catch (error) {
        throw new Error("Error deleting cart")
    }
    
})

