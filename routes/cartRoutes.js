import express from 'express'
import { addToCart, getCarts, deleteCart} from '../controllers/cartControllers.js'
import protect from '../middlewares/authentication.js'

const router = express.Router()

router.route('/addToCart').post(protect, addToCart)
router.route('/').get(protect, getCarts)
router.route('/delete/:id').delete(protect, deleteCart)

export default router