import express from 'express'
import { postProduct} from '../controllers/productControllers.js'
import protect from '../middlewares/authentication.js'

const router = express.Router()

router.route('/create').post(protect, postProduct)

export default router