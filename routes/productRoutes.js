import express from 'express'
import { postProduct, getProducts, getProductById, deleteProduct} from '../controllers/productControllers.js'
import protect from '../middlewares/authentication.js'

const router = express.Router()

router.route('/create').post(protect, postProduct)
router.route('/').get(protect, getProducts)
router.route('/:id').get(protect, getProductById)
router.route('/delete/:id').delete(protect, deleteProduct)

export default router