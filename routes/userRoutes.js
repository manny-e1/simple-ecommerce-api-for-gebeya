import express from 'express'
import { userRegister, userLogin, getUsers, getUserById, updateUser, deleteUser } from '../controllers/userControllers.js'
import protect from '../middlewares/authentication.js'

const router = express.Router()

router.route('/register').post(protect, userRegister)
router.route('/login').post(userLogin)
router.route('/').get(protect, getUsers)
router.route('/:id').get(protect, getUserById).delete(protect, deleteUser)
router.route('/update').put(protect,updateUser)

export default router