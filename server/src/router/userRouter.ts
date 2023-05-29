import { Router } from "express";
import { changeUser, deleteUser, getUser, login, register } from "../handlers/user";
import { body } from "express-validator";
import passwordOptions from "../utils/passwordStrongOption";
import { handleInputErrors } from "../modules/middleware";

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
userRouter.get('/get/:id',
  getUser
)
userRouter.put('/put/:id',
  body('email').optional().isEmail(),
  body('username').optional().isString(),
  body('password').optional().isStrongPassword(passwordOptions),
  handleInputErrors,
  changeUser
)
userRouter.delete('/delete/:id',
  deleteUser
)



export default userRouter
