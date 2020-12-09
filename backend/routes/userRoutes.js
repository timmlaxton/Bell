import express from 'express'
const router = express.Router()
import { authUser, registerUser } from '../controllers/userController.js'
import {protect} from '../middleware/authMiddlesware.js'

router.route('/').post(registerUser)
router.post('/login', authUser)



export default router