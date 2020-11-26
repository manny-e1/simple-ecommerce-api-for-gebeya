import express from 'express'
import { postProduct, getProducts, getProductById} from '../controllers/productControllers.js'
import protect from '../middlewares/authentication.js'

const router = express.Router()

router.route('/create').post(protect, postProduct)
router.route('/').get(protect, getProducts)
router.route('/:id').get(protect, getProductById)

export default router