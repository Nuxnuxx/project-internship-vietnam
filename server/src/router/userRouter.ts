import { Router } from "express";
import { changeUser, deleteUser, getUser, login, register } from "../handlers/user";
import { body, param } from "express-validator";
import passwordOptions from "../utils/passwordStrongOption";
import { handleInputErrors } from "../modules/middleware";
import { protect, verifyUser } from "../modules/authentification";

const userRouter = Router()

userRouter.post('/register', 
  body('email').exists().isEmail(),
  body('username').exists().isString(),
  body('password').exists().isStrongPassword(passwordOptions),
  handleInputErrors,
  register
)
userRouter.post('/login',
  body('email').exists().isEmail(),
  body('password').exists().isStrongPassword(passwordOptions),
  handleInputErrors,
  login
)

userRouter.use(protect)

userRouter.get('/get',
  getUser
)
userRouter.put('/put',
  body('email').optional().isEmail(),
  body('username').optional().isString(),
  body('password').optional().isStrongPassword(passwordOptions),
  handleInputErrors,
  changeUser
)
userRouter.delete('/delete',
  deleteUser
)

export default userRouter
