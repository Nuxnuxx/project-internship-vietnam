# Detailed Design Backend

- Environment Variable
## JWT_SECRET : Secret key to decode token
## DATABASE_URL : url of connection to database

- Package 
## express (framework for api)
## bcrypt (password security)
## jwt (authentification token)
## morgan (logging for developement)
## express validator (sanitize body input)
## cors (for handling frontend on different origin)
## prisma (ORM for mongodb and other database)
## dotenv (access environment variable)
## jest (testing)
## supertest (HTTP assertions)

- Router 

## user router
## api router

- Middleware

## logging (global to api)
    - morgan in dev mode

## Only json (global to api)
    - build in express

## Url encoded extended to true (qs library parsing) (global to api)
    - build in express

## authentification

### protect
    - verify if the bearer token
    - if no bearer token at all return 401
    - split the token and the bearer name
    - if no token return 401
    - verify the token if good token pass the user id that we get from the token to the request params and next
    - if false token return 401

## body sanitize input
    - use of express validator package

### handleInputErrors
    - verify if there is error with express validator
    - if errrors return 400 + array of error
    - else go next

- Error handler

## type error
    - auth 
        - 401 unauthorized
    - input
        - 400 invalid input
    - server fault
        - 500 opps on us

- user router
    
    - Middeware :
        - protect ( GET, PUT, DELETE)

## User

### POST /user/register
    Allows a new user to register by providing their email, username, and password.
        Request body: { "email": "", "username": "", "password": "" }
        Middleware : 
            - email exist and is an email
            - username exist and is a string
            - password exist and is strong (8 character, 1 uppercase, 1 symbol)
            - handleInputErrors
        Response: { "token": "" }

### POST /user/login
    Allows an existing user to log in by providing their email and password. On successful authentication, it will return a JWT token.
        Request body: { "email": "", "password": "" }
        Middleware :
            - email exist and is an email
            - password exist and is strong (8 character, 1 uppercase, 1 symbol)
            - handleInputErrors
        Response: { "token": "" }

### GET /user/get
    Fetches the details of a specific user based on the user ID.
        Request parameters : id (provided by protect Middleware)
        Middeware :
            - protect
        Response: { "id": "", "email": "", "username": "", "createdAt": "" }

### PUT /user/put
    Updates the details of a specific user based on the user ID. The details that can be updated include email, username, and password.
        Request parameters : id (provided by protect Middleware)
        Request body: { "email": "", "username": "", "password": "" } (Optional, only the properties to be updated)
        Middleware :
            - protect
            - email optional and is an email
            - username optional and is a string
            - password optional and is strong (8 character, 1 uppercase, 1 symbol)
            - handleInputErrors
        Response: { "id": "", "email": "", "username": "", "createdAt": "" }

### DELETE /user/delete
    Deletes a specific user based on the user ID.
        Request parameters : id (provided by protect Middleware)
        Middeware :
            - protect
        Response: { "id": "", "email": "", "username": "", "createdAt": "" }

- api router

    - Middeware : 
        - protect (not for GET products, GET products/:id, GET products/category/:categoryName)

## Product

### POST /api/products
    Allows a new product to be added to the catalog.
        Request body: { "name": "", "description": "", "price": "", "imageUrl": "", "category": "", "quantityInStock": "" }
        Middleware :
            - protect
            - name exist and is a string
            - description exist and is a string
            - price exist and is a float
            - imageUrl exist and is a string
            - category exist and is a string
            - quantityInStock exist and is a int
            - handleInputErrors
        Response: { "id": "", "name": "", "description": "", "price": "", "category": "", "quantityInStock": "", "createdAt": "" }

### GET /api/products
    Retrieve all the products.
        Response: { "products": [{ "id": "", "name": "", "description": "", "price": "", "imageUrl": "", "category": "", "quantityInStock": "", "createdAt": "" }, ...] }
        
### GET /api/products/:id
    Retrieve a specific product identified by the ID.
        Path parameters: { "id": "" } (Product ID)
        Middleware:
            - id exist and is a objectID()
        Response: { "id": "", "name": "", "description": "", "price": "", "imageUrl": "", "category": "", "quantityInStock": "", "createdAt": "" }

### PUT /api/products/:id
    Update the details of a specific product identified by the ID.
        Path parameters: { "id": "" } (Product ID)
        Request body: { "name": "", "description": "", "price": "", "imageUrl": "", "category": "", "quantityInStock": "" } (Optional, only the properties to be updated)
        Middleware :
            - protect
            - id exist and is a objectID()
            - name optional and is a string
            - description optional and is a string
            - price optional and is a float
            - imageUrl optional and is a float
            - category optional and is a string
            - quantityInStock optional and is a numeric number 
            - handleInputErrors
        Response: { "id": "", "name": "", "description": "", "price": "", "imageUrl": "", "category": "", "quantityInStock": "", "createdAt": "" }

### DELETE /api/products/:id
    Deletes a specific product identified by the ID.
        Path parameters: { "id": "" } (Product ID)
        Middleware:
            - protect
            - id exist and is a objectID()
        Response: { "message": "Product deleted successfully." }

### GET /api/products/category/:categoryName
    Retrieves all the products belonging to a specific category.
        Path parameters: { "categoryName": "" } (Category Name)
        Response: { "products": [{ "id": "", "name": "", "description": "", "price": "", "imageUrl": "", "category": "", "quantityInStock": "", "createdAt": "" }, ...] }

## Cart

### POST /api/carts
    Create a new cart for a user with a specific product and its quantity.
        Request body: { "userId": "", "productId": "", "quantity": "" }
        Middeware : 
            - protect
            - userId exist and is objectID()
            - productId exist and is a numeric number
            - quantity exist and is a numeric number
            - handleInputErrors
        Response: { "id": "", "userId": "", "productId": "", "priceAtThisTime": "", "quantity": "" }

### GET /api/carts
    Retrieves the cart of a specific user.
        Request parameters : id (provided by protect Middleware)
        Middleware:
            - protect
        Response: { "items": [{ "productId": "", "quantity": "" }] }

### PUT /api/carts/:productId
    Updates the quantity of a specific product in a user's cart.
        Path parameters: { "productId": "" }
        Request parameters : id (provided by protect Middleware)
        Request body: { "quantity" : "" } 
        Middeware :
            - protect
            - productId exist and is a objectID()
            - quantity exist and is a numeric number
            - handleInputErrors
        Response: { "id": "", "userId": "", "items": [{ "productId": "", "quantity": "" }, ...] }

### DELETE /api/carts/:productId
    Removes a specific product from a user's cart.
        Request parameters : id (provided by protect Middleware)
        Path parameters: { "productId": "" } (Product ID)
        Middleware:
            - productId exist and is a objectID()
            - handleInputErrors
        Response: { "id": "", "userId": "", "items": [{ "productId": "", "quantity": "" }, ...] }

### DELETE /api/carts
    Remove the cart from the user
        Request parameters : id (provided by protect Middleware)
        Response: { "id": "", "userId": "", "items": [{ "productId": "", "quantity": "" }, ...] }

## Order

### POST /api/orders
    Place a new order for a user.
        Request parameters : id (provided by protect Middleware)
        Response: { "id": "", "createdAt": "", "userId": "", "totalCost": "", "orderStatus": "" }

### GET /api/orders
    Retrieves all the orders of a specific user.
        Request parameters : id (provided by protect Middleware)
        Response: { "orders": [{ "id": "", "createdAt": "", "userId": "", "totalCost": "", "orderStatus": "" }, ...] }

### GET /api/orders/:orderId
    Retrieve a specific order along with its items.
        Path parameters: { "orderId": "" } (Order ID)
        Middleware:
            - orderId exist and is a objectID()
        Response: { "id": "", "createdAt": "", "userId": "", "totalCost": "", "orderStatus": "", "orderItems": [{ "id": "", "orderId": "", "productId": "", "quantity": "", "price": "" }, ...] }
        
### PUT /api/orders/:orderId
    Update the status of a specific order.
        Path parameters: { "orderId": "" } (Order ID)
        Request body: { "orderStatus": "" } (One of "PLACED", "SHIPPED", "DELIVERED")
        Middeware : 
            - orderStatus exist and is one of PLACED, SHIPPED, DELIVERED
            - handleInputErrors
            Response: { "id": "", "createdAt": "", "userId": "", "totalCost": "", "orderStatus": "" }


# Test Plan

## Unit Testing

### User Registration - POST /user/register
        Test with all required parameters provided correctly.
        Test with each parameter missing or invalid to ensure error handling is working properly.
        Test with existing user data to make sure it handles duplicates correctly.

### User Login - POST /user/login
        Test with a valid email and password.
        Test with invalid email or password.
        Test with a non-existent user.

### Get User Details - GET /user/:id
        Test with a valid user id.
        Test with an invalid or non-existent user id.

### Update User Details - PUT /user/:id
        Test with valid and invalid parameters.
        Test with a non-existent user id.

### Delete User - DELETE /user/:id
        Test with a valid user id.
        Test with a non-existent user id.

### Add Product - POST /api/products
        Test with all required parameters provided correctly.
        Test with each parameter missing or invalid.

### Get Products - GET /api/products
        Test after adding several products to ensure all are being returned.

### Get Specific Product - GET /api/products/:id
        Test with a valid product id.
        Test with a non-existent product id.

### Update Product - PUT /api/products/:id
        Test with valid and invalid parameters.
        Test with a non-existent product id.

### Delete Product - DELETE /api/products/:id
        Test with a valid product id.
        Test with a non-existent product id.

### Create Cart - POST /api/carts
        Test with all required parameters provided correctly.
        Test with each parameter missing or invalid.

### Get Cart - GET /api/carts/:userId
        Test with a valid user id.
        Test with a non-existent user id.

### Update Cart - PUT /api/carts/:userId/:productId
        Test with valid and invalid quantity.
        Test with non-existent user id or product id.

### Delete Product from Cart - DELETE /api/carts/:userId/:productId
        Test with valid user id and product id.
        Test with non-existent user id or product id.

### Place Order - POST /api/orders
        Test with a valid user id.
        Test with a non-existent user id.

### Get Orders - GET /api/orders/:userId
        Test with a valid user id.
        Test with a non-existent user id.

### Get Specific Order - GET /api/orders/:orderId
        Test with a valid order id.
        Test with a non-existent order id.

### Update Order Status - PUT /api/orders/:orderId
        Test with valid order status.
        Test with invalid order status.
        Test with non-existent order id.

## Integration Testing

### User Registration and Login
        Register a new user and use the returned token to authenticate a request to get the user's details.
        Verify that the details returned match those provided during registration.

### Product Creation and Retrieval
        Create a new product and use its id to retrieve it. 
        Verify that the details match those provided during creation.

### Cart Creation and Management
        Register a new user, create a new product, add the product to the user's cart.
        then retrieve the cart and verify that it contains the correct product.

### Order Placement and Retrieval
        Register a new user, create a new product, add the product to the user's cart, place an order, 
        then retrieve the order and verify that it contains the correct details.
