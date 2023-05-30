import { Router } from "express";
import { changeUser, deleteUser, getUser, login, register } from "../handlers/user";
import { body, param } from "express-validator";
import passwordOptions from "../utils/passwordStrongOption";
import { handleInputErrors } from "../modules/middleware";
import { protect } from "../modules/authentification";

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
  param('id').exists().isMongoId(),
  handleInputErrors,
  getUser
)
userRouter.put('/put/:id',
  param('id').exists().isMongoId(),
  body('email').optional().isEmail(),
  body('username').optional().isString(),
  body('password').optional().isStrongPassword(passwordOptions),
  handleInputErrors,
  changeUser
)
userRouter.delete('/delete/:id',
  param('id').exists().isMongoId(),
  handleInputErrors,
  deleteUser
)

export default userRouter
