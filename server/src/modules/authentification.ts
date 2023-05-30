import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const comparePasswords = (password, hash) => {
  return bcrypt.compare(password, hash)
}

export const hashPassword = (password) => {
  return bcrypt.hash(password, 5)
}

export const createJWT = (user) => {
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET)

  return token
}

export const protect = (req, res, next) => {
  const bearer = req.headers.authorization

  if (!bearer) {
    res.status(401)
    res.json({ message: 'not authorized' })
    return
  }

  const [, token] = bearer.split(' ')

  if (!token) {
    res.status(401)
    res.json({ message: 'not valid token' })
    return
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET)
    req.user = user
    next()
  } catch (e) {
    res.status(401)
    res.json({ message: 'not valid token' })
    return
  }
}

export const verifyUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return res.status(403).json({ message: 'Forbidden: You can only access your own data' })
  }
  next()
}
