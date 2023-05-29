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
