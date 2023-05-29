import { Router } from "express";
import { changeUser, deleteUser, getUser, login, register } from "../handlers/user";

const userRouter = Router()

userRouter.post('/register', 
  register
)
userRouter.post('/login',
  login
)
userRouter.get('/get/:id',
  getUser
)
userRouter.put('/put/:id',
  changeUser
)
userRouter.delete('/delete/:id',
  deleteUser
)



export default userRouter
