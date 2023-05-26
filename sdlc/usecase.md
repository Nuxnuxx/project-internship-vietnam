# Use case : User Registration
    Actor : 
        - New user
    Precondition :
        - User has reached the registration page
    Postcondition :
        - User information is saved, and the user is logged into the site
    Normal Flow :
        - The user enters their email and password into the respective fields
        - The user clicks the "Register button"
        - The system validates the email and password
        - The system create a new user account with teh provided email and password
        - the system logs the user into the account and redirect to the homepage
    Alternate Flow :
        - At Step 3 if the email is already used, show error that say "email is already registered"
        - If the password is weak, the system show an error message

# Use Case : User signIn
    Actor : 
        - User with his id of connexion
    Precondition :
        - User has reached the login page
    Postcondition :
        - User is logged into the site
    Normal Flow :
        - The user enters their email and password into the 
        - The user clicks the "Signin button"
        - The system validates the email and password
        - the system logs the user into the account and redirect to the homepage
    Alternate Flow :
        - At Step 3 if the email doesnt exist, show an error message "email is not used"
        - At Step 3 if the password doesnt exist show an error message "password wrong"


# Use Case : Products by Category
    Actor : 
        - User (registered or unregistered)
    Precondition :
        - user is the website
    Postcondition : 
        - display a list of item in relation to the chosen categories
    Normal Flow : 
        - on click or hover the website display a list of available categories
        - the user click on the chosen categorie 
        - the system dsplay the list of item in relation with the categorie
    Exception :
        - no product in the categorie
    
# Use case : Add Products 
    Actor :
        - User (registered)
    Precondition :
        - On the Detail Page of a Product
        - On Product Card 
    Postcondition :
        -  Add a item to the user cart
    Normal Flow :
        - User click on the add button 
        - by default add one product
    Alternate Flow :
        - On Product Detail page, if more than one product on the selector, add the number of Product
    Exception :
        - No button if no item availible

# Use case : Delete Product
    Actor :
        - User (registered)
    Precondition :
        - On the cart Page
    Postcondition :
        - Delete the chosen quantity of item
    Normal Flow :
        - click on the minus button
