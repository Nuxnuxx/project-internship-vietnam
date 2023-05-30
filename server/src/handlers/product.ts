import { Product } from '@prisma/client'
import prisma from '../db'

export const createProduct = async (req, res, next) => {
  try {
  const product = await prisma.product.create({
    data: {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      imageUrl: req.body.imageUrl,
      category: req.body.category,
      quantityInStock: req.body.quantityInStock,
    },
  })

  res.json({ product })
  } catch (error) {
    error.type = 'input'
    next(error)
  }
}

export const getProducts = async (req, res) => {
  const products = await prisma.product.findMany()

  res.json({ products })
}

export const getProduct = async (req, res) => {
  const product = await prisma.product.findUnique({
    where: {
      id: req.params.id,
    },
  })

  res.json({ product })
}

export const changeProduct = async (req, res) => {
  const { name, description, price, imageUrl, category, quantityInStock } =
    req.body
  const updateData: Partial<Product> = {}

  if (name) {
    updateData.name = name
  }

  if (description) {
    updateData.description = description
  }

  if (price) {
    updateData.price = price
  }

  if (imageUrl) {
    updateData.imageUrl = imageUrl
  }
  if (category) {
    updateData.category = category
  }

  if (quantityInStock) {
    updateData.quantityInStock = quantityInStock
  }

  const product = await prisma.product.update({
    where: {
      id: req.params.id,
    },
    data: updateData,
  })

  res.json({ product })
}

export const deleteProduct = async (req, res) => {
  const product = await prisma.product.delete({
    where: {
      id: req.params.id
    }
  })

  res.json({ product })
}

export const getProductByCategory = async (req, res) => {
  const products = await prisma.product.findMany({
    where:{
      category: req.params.category
    }
  })

  res.json({ products })
}
