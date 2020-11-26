import express from 'express'
import { userRegister } from '../controllers/userControllers.js'

const router = express.Router()

router.route('/register').post(userRegister)

export default router