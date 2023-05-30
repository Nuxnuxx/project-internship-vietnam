import { Router } from "express";
import { changeProduct, createProduct, deleteProduct, getProduct, getProductByCategory, getProducts } from "../handlers/product";

const apiRouter = Router()


apiRouter.get('/products',
  getProducts
)

apiRouter.get('/products/:id',
  getProduct
)

apiRouter.get('/products/category/:categoryName',
  getProductByCategory
)



// Those routes need admin status

apiRouter.post('/products',
  createProduct
)

apiRouter.put('/products/:id',
  changeProduct
)

apiRouter.delete('/products/:id',
  deleteProduct
)


export default apiRouter

