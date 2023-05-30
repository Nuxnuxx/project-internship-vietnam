import { Router } from "express";
import { changeProduct, createProduct, deleteProduct, getProduct, getProductByCategory, getProducts } from "../handlers/product";
import { body, param } from "express-validator";
import { handleInputErrors } from "../modules/middleware";
import category from "../utils/listCategory";
import { changeCart, createCart, deleteCart, deleteProductInCart, getCart } from "../handlers/cart";
import { protect } from "../modules/authentification";

const apiRouter = Router()


/////////////
// PRODUCT //
/////////////

apiRouter.get('/products',
  getProducts
)

apiRouter.get('/products/:id',
  param('id').exists().isMongoId(),
  handleInputErrors,
  getProduct
)

apiRouter.get('/products/category/:categoryName',
  param('categoryName').exists().isIn(category),
  handleInputErrors,
  getProductByCategory
)

apiRouter.use(protect)

// Those routes need admin status

apiRouter.post('/products',
  body('name').exists().isString(),
  body('description').exists().isString(),
  body('price').exists().isFloat(),
  body('imageUrl').exists().isString(),
  body('category').exists().isString(),
  body('quantityInStock').exists().isInt(),
  handleInputErrors,
  createProduct
)

apiRouter.put('/products/:id',
  param('id').exists().isMongoId(),
  body('name').optional().isString(),
  body('description').optional().isString(),
  body('price').optional().isFloat(),
  body('imageUrl').optional().isString(),
  body('category').optional().isString(),
  body('quantityInStock').optional().isInt(),
  handleInputErrors,
  changeProduct
)

apiRouter.delete('/products/:id',
  param('id').exists().isMongoId(),
  handleInputErrors,
  deleteProduct
)

///////////
// CARTS //
///////////


apiRouter.post('/cart',
  body('productId').exists().isMongoId(),
  body('quantity').exists().isInt(),
  handleInputErrors,
  createCart
)

apiRouter.get('/cart',
  getCart
)

apiRouter.put('/cart/:productId',
  param('productId').exists().isMongoId(),
  body('quantity').exists().isInt(),
  handleInputErrors,
  changeCart
)

apiRouter.delete('/cart',
  deleteCart
)

apiRouter.delete('/cart/:productId',
  param('productId').exists().isMongoId(),
  handleInputErrors
  deleteProductInCart
)

export default apiRouter
