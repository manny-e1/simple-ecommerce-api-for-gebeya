import express from 'express'
import { addToCart, getCarts } from '../controllers/cartControllers.js'
import protect from '../middlewares/authentication.js'

const router = express.Router()

router.route('/addToCart').post(protect, addToCart)
router.route('/').get(protect, getCarts)

export default router