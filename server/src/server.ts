import express from 'express'


const app = express()

app.get('/', (req, res) => {

  res.json({'message' : 'hello first route'})
  return res
})

export default app
