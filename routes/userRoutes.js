import express from 'express'
import { userRegister, userLogin } from '../controllers/userControllers.js'
import protect from '../middlewares/authentication.js'

const router = express.Router()

router.route('/register').post(protect, userRegister)
router.route('/login').post(userLogin)

export default router