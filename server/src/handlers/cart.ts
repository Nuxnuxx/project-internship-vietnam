import prisma from '../db'

export const createCart = async (req, res, next) => {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: req.body.productId,
      },
      select: {
        id: true,
        price: true,
      },
    })

    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }

    const cartItem = await prisma.cartItem.create({
      data: {
        userId: req.user.id,
        productId: product.id,
        priceAtThisTime: product.price,
        quantity: req.body.quantity,
      },
    })

    if (!cartItem) {
      return res.status(500).json({ message: 'Failed to create cart item' })
    }

    const cart = await prisma.user.update({
      where: {
        id: req.user.id,
      },
      data: {
        cart: {
          connect: {
            id: cartItem.id,
          },
        },
      },
    })

    res.json({ cart })
  } catch (error) {
    console.log(error)
    error.type = 'input'
    next(error)
  }
}

export const getCart = async (req, res) => {
  const cart = await prisma.user.findUnique({
    where: {
      id: req.user.id
    },
    include: {
      cart: true
    },
  })

  res.json({ cart })
}

export const changeCart = async (req, res) => {
}

export const deleteCart = async (req, res) => {}

export const getCartByCategory = async (req, res) => {}
