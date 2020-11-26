import express from 'express'
import { postProduct, getProducts, getProductById} from '../controllers/productControllers.js'
import protect from '../middlewares/authentication.js'

const router = express.Router()

router.route('/create').post(protect, postProduct)
router.route('/').get(getProducts)
router.route('/:id').get(getProductById)

export default router