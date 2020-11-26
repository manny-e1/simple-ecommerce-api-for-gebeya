import express from 'express'
import { userRegister, userLogin, getUsers, getUserById, updateUser, deleteUser } from '../controllers/userControllers.js'
import protect from '../middlewares/authentication.js'

const router = express.Router()

router.route('/register').post(protect, userRegister)
router.route('/login').post(userLogin)
router.route('/all').get(protect, getUsers)
router.route('/:id').get(protect, getUserById)
router.route('/update').put(protect,updateUser)
router.route('/delete/:id').delete(protect, deleteUser)

export default router