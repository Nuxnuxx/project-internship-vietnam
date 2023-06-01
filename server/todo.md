# TODO

## Setup 
    - Setup typscript DONE
    - Setup prettier DONE
    - Setup eslint DONE
    - Setup database and prisma DONE

## Server
    - initiate the server and install the necessary package for it DONE
    - initiate simple middleware (logging, only json, url encoded) DONE
    - create folder structure for (handlers, router, module and database) DONE


## global middleware 

    - protect DONE
    - handleInputError DONE

## Error handler DONE

## User Router

    - declare router endpoint DONE
    - handler
        - register DONE
        - login DONE
        - update DONE
        - delete DONE
    - middleware
        - built in middleware DONE
        - params middleware DONE
        - verifyUser

## Product routes
    
    - declare endpoint DONE
    - handler DONE
    - middleware
        - built in middleware DONE
        - params middleware DONE

## Carts routes

    - declare endpoint DONE
    - handler DONE
    - middleware
        - built in middleware DONE
        - params middleware DONE

## Order routes

    - declare endpoint DONE
    - handler DONE
    - middleware
        - built in middleware DONE
        - params middleware DONE

## Unit Testing

## Integration Testing

### User Registration - POST /user/register
        Test with all required parameters provided correctly DONE
        Test with each parameter missing or invalid to ensure error handling is working properly DONE
        Test with existing user data to make sure it handles duplicates correctly DONE

### User Login - POST /user/login
        Test with a valid email and password DONE
        Test with invalid email or password DONE
        Test with a non-existent user DONE

### Get User Details - GET /user
        Test with a valid user id DONE
        Test with an invalid or non-existent user id DONE

### Update User Details - PUT /user/:id
        Test with valid and invalid parameters
        Test with a non-existent user id

