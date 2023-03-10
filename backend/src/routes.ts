import {Router} from 'express'
import { AuthController } from './controller/authController'
import { UserController } from './controller/userController'
import { AuthMiddleware } from './middlewares/auth'

const userController = new UserController()
const authController =  new AuthController()

export const router = Router()

router.post('/create', userController.store)
router.get('/users', AuthMiddleware, userController.index)
router.post('/auth', authController.authenticate)