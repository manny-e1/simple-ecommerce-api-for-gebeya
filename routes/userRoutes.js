import express from 'express'
import { userRegister, userLogin, getUsers, getUserById } from '../controllers/userControllers.js'
import protect from '../middlewares/authentication.js'

const router = express.Router()

router.route('/register').post(protect, userRegister)
router.route('/login').post(userLogin)
router.route('/all').get(protect, getUsers)
router.route('/:id').get(protect, getUserById)

export default router