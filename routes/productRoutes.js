import express from 'express'
import { addProduct, getProducts, getProductById, deleteProduct} from '../controllers/productControllers.js'
import protect from '../middlewares/authentication.js'

const router = express.Router()

router.route('/').post(protect, addProduct).get(protect, getProducts)
router.route('/:id').get(protect, getProductById).delete(protect, deleteProduct)

export default router