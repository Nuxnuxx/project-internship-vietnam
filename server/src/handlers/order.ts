import prisma from '../db'

export const createOrder = async (req, res, next) => {
  try {
    const cartItems = await prisma.cartItem.findMany({
      where: {
        userId: req.user.id,
      },
    })

    if (!cartItems || cartItems.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' })
    }

    const totalCost = cartItems.reduce(
      (acc, item) => acc + item.priceAtThisTime * item.quantity,
      0,
    )

    const order = await prisma.order.create({
      data: {
        user: {
          connect: { id: req.user.id },
        },
        totalCost: totalCost,
        items: {
          create: cartItems.map((item) => ({
            product: { connect: { id: item.productId } },
            quantity: item.quantity,
            price: item.priceAtThisTime,
          })),
        },
      },
    })

    await prisma.cartItem.deleteMany({
      where: {
        userId: req.user.id,
      },
    })

    res.json({ order })
  } catch (error) {
    console.log(error)
    error.type = 'input'
    next(error)
  }
}

export const getOrders = async (req, res) => {
  const orders = await prisma.order.findMany({
    where: {
      userId: req.user.id,
    },
  })

  res.json({ orders })
}

export const changeOrder = async (req, res, next) => {
  try {
    const order = await prisma.order.update({
      where: {
        id: req.params.orderId,
      },
      data: {
        orderStatus: req.body.orderStatus,
      },
    })

    if (!order) {
      return res.status(404).json({ message: 'order not found' })
    }

    res.json({ order })
  } catch (error) {
    console.error(error)
    error.type = 'input'
    next(error)
  }
}

export const getOrderById = async (req, res, next) => {
  try {
    const order = await prisma.order.findUnique({
      where: {
        id: req.params.orderId,
      },
      include: {
        items: true,
      },
    })

    if (!order) {
      return res.status(404).json({ message: 'Order not found' })
    }

    res.json({ order })
  } catch (error) {
    console.error(error)
    error.type = 'input'
    next(error)
  }
}
