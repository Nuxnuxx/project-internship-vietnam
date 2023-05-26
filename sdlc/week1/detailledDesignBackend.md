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
    - custom sanitizer for verifiying if id is objectId (use of mongo + express validator package)

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

- API endpoint

## Router User

### POST /user/register
    Allows a new user to register by providing their email, username, and password.
        Request body: { "email": "", "username": "", "password": "" }
        Middleware : 
            - email exist and is an email
            - username exist and is a string
            - password exist and is strong (8 character, 1 uppercase, 1 symbol)
            - handleInputErrors
        Response: { "token": "" }

        Algorithm : registerNewUser(req,res,next)
        try {
            const user = createUser(
                email,
                username,
                hashedPassword
                select : id
            )

            const token = createToken(user.id, 
            expire : 30day
            )
            return token
        } catch (Error) {
            Error.type = 'input'
            next(e)
        }

### POST /user/login
    Allows an existing user to log in by providing their email and password. On successful authentication, it will return a JWT token.
        Request body: { "email": "", "password": "" }
        Middleware :
            - email exist and is an email
            - password exist and is strong (8 character, 1 uppercase, 1 symbol)
            - handleInputErrors
        Response: { "token": "" }

        Algorithm : loginUser(req,res)
        const user = find(
            email
            select : id
        )
        const isValid = comparePassword(req.password, user.password)

        if (!isValid)
            return 401 + "impossible to connect"
        
        const token = createToken(user)
        return token

### GET /user/:id
    Fetches the details of a specific user based on the user ID.
        Path parameters: { "id": "" } (User ID)
        Response: { "id": "", "email": "", "username": "", "createdAt": "" }

### PUT /user/:id
    Updates the details of a specific user based on the user ID. The details that can be updated include email, username, and password.
        Path parameters: { "id": "" } (User ID)
        Request body: { "email": "", "username": "", "password": "" } (Optional, only the properties to be updated)
        Middleware :
            - email exist and is an email
            - username exist and is a string
            - password exist and is strong (8 character, 1 uppercase, 1 symbol)
            - handleInputErrors
        Response: { "id": "", "email": "", "username": "", "createdAt": "" }

### DELETE /user/:id
    Deletes a specific user based on the user ID.
        Path parameters: { "id": "" } (User ID)
        Response: { "message": "User deleted successfully." }

- api router

    - Middeware : 
        - protect

## Product

### POST /api/products
    Allows a new product to be added to the catalog.
        Request body: { "name": "", "description": "", "price": "", "category": "", "quantityInStock": "" }
        Middleware :
            - name exist and is a string
            - description exist and is a string
            - price exist and is a float
            - category exist and is a numeric number 
            - quantityInStock exist and is a numeric number 
            - handleInputErrors
        Response: { "id": "", "name": "", "description": "", "price": "", "category": "", "quantityInStock": "", "createdAt": "" }

### GET /api/products
    Retrieve all the products.
        Response: { "products": [{ "id": "", "name": "", "description": "", "price": "", "category": "", "quantityInStock": "", "createdAt": "" }, ...] }
        
### GET /api/products/:id
    Retrieve a specific product identified by the ID.
        Path parameters: { "id": "" } (Product ID)
        Response: { "id": "", "name": "", "description": "", "price": "", "category": "", "quantityInStock": "", "createdAt": "" }

### PUT /api/products/:id
    Update the details of a specific product identified by the ID.
        Path parameters: { "id": "" } (Product ID)
        Request body: { "name": "", "description": "", "price": "", "category": "", "quantityInStock": "" } (Optional, only the properties to be updated)
        Middleware :
            - name optional and is a string
            - description optional and is a string
            - price optional and is a float
            - category optional and is a numeric number 
            - quantityInStock optional and is a numeric number 
            - handleInputErrors
        Response: { "id": "", "name": "", "description": "", "price": "", "category": "", "quantityInStock": "", "createdAt": "" }

### DELETE /api/products/:id
    Deletes a specific product identified by the ID.
        Path parameters: { "id": "" } (Product ID)
        Response: { "message": "Product deleted successfully." }

### GET /api/products/category/:categoryId
    Retrieves all the products belonging to a specific category.
        Path parameters: { "categoryId": "" } (Category ID)
        Response: { "products": [{ "id": "", "name": "", "description": "", "price": "", "category": "", "quantityInStock": "", "createdAt": "" }, ...] }

## Cart

### POST /api/carts
    Create a new cart for a user with a specific product and its quantity.
        Request body: { "userId": "", "productId": "", "quantity": "" }
        Middeware : 
            - userId exist and is objectID()
            - productId exista and is a numeric number
            - quantity exist and is a numeric number
            - handleInputErrors
        Response: { "id": "", "userId": "", "items": [{ "productId": "", "quantity": "" }, ...] }

### GET /api/carts/:userId
    Retrieves the cart of a specific user.
        Path parameters: { "userId": "" } (User ID)
        Response: { "id": "", "userId": "", "items": [{ "productId": "", "quantity": "" }, ...] }

### PUT /api/carts/:userId/:productId
    Updates the quantity of a specific product in a user's cart.
        Path parameters: { "userId": "", "productId": "" } (User ID)
        Request body: { "quantity" : "" } 
        Middeware :
            - quantity exist and is a numeric number
            - handleInputErrors
        Response: { "id": "", "userId": "", "items": [{ "productId": "", "quantity": "" }, ...] }

### DELETE /api/carts/:userId/:productId
    Removes a specific product from a user's cart.
        Path parameters: { "userId": "", "productId": "" } (User ID, Product ID)
        Response: { "message": "Product removed from cart successfully." } (This will remove a specific product from the items list in the cart)

## Order

### POST /api/orders
    Place a new order for a user.
        Request body: { "userId": "" }
        Middeware : 
            - userId exist and is objectID()
            - handleInputErrors
        Response: { "id": "", "createdAt": "", "userId": "", "totalCost": "", "orderStatus": "" }

### GET /api/orders/:userId
    Retrieves all the orders of a specific user.
        Path parameters: { "userId": "" } (User ID)
        Response: { "orders": [{ "id": "", "createdAt": "", "userId": "", "totalCost": "", "orderStatus": "" }, ...] }

### GET /api/orders/:orderId
    Retrieve a specific order along with its items.
        Path parameters: { "orderId": "" } (Order ID)
        Response: { "id": "", "createdAt": "", "userId": "", "totalCost": "", "orderStatus": "", "orderItems": [{ "id": "", "orderId": "", "productId": "", "quantity": "", "price": "" }, ...] }
        
### PUT /api/orders/:orderId
    Update the status of a specific order.
        Path parameters: { "orderId": "" } (Order ID)
        Request body: { "orderStatus": "" } (One of "PLACED", "SHIPPED", "DELIVERED")
        Middeware : 
            - orderStatus exist and is one of PLACED, SHIPPED, DELIVERED
            - handleInputErrors
            Response: { "id": "", "createdAt": "", "userId": "", "totalCost": "", "orderStatus": "" }
