import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import userRouter from './router/userRouter'
import apiRouter from './router/apiRouter'

const app = express()

app.use(morgan('dev'))
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173',
  }),
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/user', userRouter)
app.use('/api', apiRouter)

app.use((err, req, res, next) => {
  if (err.type === 'auth') {
    res.status(401).json({ errors: 'unauthorized' })
  } else if (err.type === 'input') {
    res.status(409).json({ errors: 'invalid input' })
  } else {
    res.status(500).json({ errors: 'oops, that on us' })
  }
})

export default app
