import express from 'express'
import { addToCart, getCarts, deleteCart, removeProductFromCart, getCartById } from '../controllers/cartControllers.js'
import protect from '../middlewares/authentication.js'

const router = express.Router()

router.route('/addToCart').post(protect, addToCart)
router.route('/').get(protect, getCarts)
router.route('/:id').get(protect, getCartById)
router.route('/delete/:id').delete(protect, deleteCart)
router.route('/removeproductfromcart/:id').put(protect, removeProductFromCart)

export default router