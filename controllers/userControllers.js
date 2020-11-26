import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'


export const userRegister = asyncHandler(async (req,res) =>{
    const { name, email, password } = req.body
    try {
        const userExists = await User.findOne({email})
        if(userExists){
            res.status(400)
            throw new Error('User already exists')
        }
        const user = await User.create({
            name,
            email,
            password
        })
        res.status(201).json({
            id: user._id,
            name: user.name,
            email: user.email,
        })
    } catch (error) {
        res.json({
            message: error.message
        })
    }
})

