import express from 'express'
import morgan from 'morgan'
import userRouter from './router/userRouter'


const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {

  res.json({'message' : 'hello first route'})
  return res
})

app.use('/user', userRouter)

export default app
