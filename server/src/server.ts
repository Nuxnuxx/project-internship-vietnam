import express from 'express'
import morgan from 'morgan'
import userRouter from './router/userRouter'


const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/user', userRouter)

app.use((err, req, res, next) => {
  if (err.type === 'auth'){
    res.status(401).json({meesage: 'unauthorized'})
  } else if (err.type === 'input') {
    res.status(400).json({meesage: 'invalid input'})
  } else {
    res.status(500).json({meesage: 'oops, that on us'})
  }
})

export default app
