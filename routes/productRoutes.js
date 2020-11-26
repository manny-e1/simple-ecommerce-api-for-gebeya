import express from 'express'
import { postProduct, getProducts} from '../controllers/productControllers.js'
import protect from '../middlewares/authentication.js'

const router = express.Router()

router.route('/create').post(protect, postProduct)
router.route('/').get(getProducts)

export default router