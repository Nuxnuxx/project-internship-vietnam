import prisma from '../db'
import { User } from '@prisma/client'
import {
  comparePasswords,
  createJWT,
  hashPassword,
} from '../modules/authentification'

export const register = async (req, res, next) => {
  try {
    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        username: req.body.username,
        password: await hashPassword(req.body.password),
      },
      select: {
        id: true,
      },
    })

    const token = createJWT(user)
    res.json({ token })
  } catch (error) {
    error.type = 'input'
    next(error)
  }
}

export const login = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: req.body.email,
      },
    })

    const isValid = await comparePasswords(req.body.password, user.password)
    console.log(user, isValid)

    if (!isValid) {
      res.status(401)
      res.json({ message: 'invalid password' })
    }

    const token = createJWT(user.id)
    res.json({ token })
  } catch (error) {
    error.type = 'input'
    next(error)
  }
}

export const getUser = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.params.id,
      },
    })

    res.json({ user })
  } catch (error) {
    error.type = 'input'
    next(error)
  }
}

export const changeUser = async (req, res, next) => {
  try {
  const { email, username, password } = req.body
  const updateData: Partial<User> = {}

  if (email) {
    updateData.email = email
  }

  if (username) {
    updateData.username = username
  }

  if (password) {
    updateData.password = password
  }

  const user = await prisma.user.update({
    where: {
      id: req.params.id,
    },
    data: updateData,
  })

  res.json({ user })
  } catch (error) {
    error.type = 'input'
    next(error)
  }
}

export const deleteUser = async (req, res, next) => {
  try {
    const user = await prisma.user.delete({
      where: {
        id: req.params.id,
      },
    })

    res.json({ user })
  } catch (error) {
    error.type = 'input'
    next(error)
  }
}
