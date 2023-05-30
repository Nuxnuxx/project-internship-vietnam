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

        // Check if the cart item already exists for this user and product
    let cartItem = await prisma.cartItem.findFirst({
      where: {
        userId: req.user.id,
        productId: product.id,
      },
    })

    if (cartItem) {
      // If cart item exists, update its quantity
      cartItem = await prisma.cartItem.update({
        where: {
          id: cartItem.id,
        },
        data: {
          quantity: {
            increment: req.body.quantity,
          },
        },
      })
    } else {
      // If cart item does not exist, create a new one
      cartItem = await prisma.cartItem.create({
        data: {
          userId: req.user.id,
          productId: product.id,
          priceAtThisTime: product.price,
          quantity: req.body.quantity,
        },
      })
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

  const result = cart.cart
  res.json({ result })
}

export const changeCart = async (req, res) => {
}

export const deleteCart = async (req, res) => {}

export const getCartByCategory = async (req, res) => {}
