import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'


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

export const userLogin = asyncHandler(async (req,res) =>{
    const {email,password} = req.body
    const user = await User.findOne({email})
    if (user && (await user.matchPassword(password))){
        res.json({
            id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(
                user._id,
                ),
        })
    }else{
        res.status(401)
        throw new Error('Invalid Email or Password')
    }
})


export const getUsers = asyncHandler(async (req,res) =>{
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(404)
        throw new Error('Error retriving users!')
    }
})

export const getUserById = asyncHandler(async (req,res) =>{
    try {
        const {id} = req.params
        const user = await User.findById(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(404)
        throw new Error('User not found!')
    }
})

export const updateUser = asyncHandler(async (req,res) =>{
    try {
        const user = await User.findById(req.user.id)
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        if(req.body.password){
            user.password = req.body.password
        }
        const updatedUser = await user.save()
        res.status(200).json({
            id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
        })
    } catch (error) {
        res.json(error)
    }
})

export const deleteUser = asyncHandler(async (req,res) =>{
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id)
        res.json(deletedUser)
    } catch (error) {
            res.json(error)
    }
})