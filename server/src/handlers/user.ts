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

    if (!user) {
      return res.status(500).json({ message: 'User not created'})
    }

    const token = createJWT(user.id)
    res.json({ token })
  } catch (error) {
    console.error(error)
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

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    const isValid = await comparePasswords(req.body.password, user.password)

    if (!isValid) {
      res.status(401)
      res.json({ message: 'invalid password' })
    }

    const token = createJWT(user.id)
    res.json({ token })
  } catch (error) {
    console.error(error)
    error.type = 'input'
    next(error)
  }
}

export const getUser = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },
    })

    res.json({ user })
  } catch (error) {
    console.error(error)
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
        id: req.user.id,
      },
      data: updateData,
    })

    res.json({ user })
  } catch (error) {
    console.error(error)
    error.type = 'input'
    next(error)
  }
}

export const deleteUser = async (req, res, next) => {
  try {
    const user = await prisma.user.delete({
      where: {
        id: req.user.id,
      },
    })

    res.json({ user })
  } catch (error) {
    error.type = 'input'
    next(error)
  }
}
