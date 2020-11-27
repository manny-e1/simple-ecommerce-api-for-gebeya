import express from 'express'
import { addToCart } from '../controllers/cartControllers.js'
import protect from '../middlewares/authentication.js'

const router = express.Router()

router.route('/addToCart').post(protect, addToCart)

export default router