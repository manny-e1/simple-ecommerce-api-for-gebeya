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
            products.forEach(async prod => {
                if (!(cartProducts.product.id == prod.product)) {
                    userCart.products.push(prod)
                }
                    if (cartProducts.product.countInStock < (cartProducts.quantity + prod.quantity)){
                        res.json({
                            error: "there isn't enough product in stock"
                        })
                    }
                    cartProducts.quantity += prod.quantity
                    await userCart.save()
           
                
            })
        })
        res.status(200).json(userCart)
    
})

export const getCarts = asyncHandler ( async (_,res) => {
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
        carts.forEach(prod => {
            prod.products.forEach((item) =>{
                cartProductsArray.push({
                    id: item.id,
                    product: item.product,
                    quantity: item.quantity,
                    subTotalPrice: item.product.price * item.quantity
                }) 
                
            })
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



export const getCartById = asyncHandler ( async (req,res) => {
    try {
        const cart = await Cart.findById(req.params.id)
        .select(" id buyer products")
        .populate({
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
        res.status(200).json({
            cart,
            subTotalPrice: cart.products.forEach(item => item.product.price * item.quantity)
        })
    } catch (error) {
        console.log(error);
        throw new Error("cart not found")
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

export const removeProductFromCart =  asyncHandler (async (req,res) => {
    try {
        const userCart = await Cart.findOne({
            buyer: req.user.id
        })
        const productIndex = userCart.products.findIndex(
            products => {console.log(products.id)
                 return products.id == req.params.id}
          );
        if (productIndex === -1) {
            throw new Error('product not found in the cart')
        }

        userCart.products.splice(productIndex, 1);
        await userCart.save();
        res.json(userCart)
    } catch (error) {
        console.log(error);
        throw new Error("Error removing cart")
    }
    
})