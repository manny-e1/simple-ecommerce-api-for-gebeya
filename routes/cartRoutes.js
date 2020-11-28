import express from 'express'
import { addToCart, getCarts, deleteCart, removeProductFromCart, getCartById } from '../controllers/cartControllers.js'
import protect from '../middlewares/authentication.js'

const router = express.Router()

router.route('/').post(protect, addToCart).get(protect, getCarts)
router.route('/:id').get(protect, getCartById).delete(protect, deleteCart)
router.route('/removeproductfromcart/:id').put(protect, removeProductFromCart)

export default router