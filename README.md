# Project: Create an "Order Tracking" application
 
## Application purpose
To amplify the productivity of customer service representatives (CSR). You will create an application that allows CSRs to create and modify both customers and their orders, search a product catalog against which orders can be created, and manage the functional lifecycle of all orders.

## Tech stack
* Backend (API):
    - Express/Node.js
    - Sequelize
* Frontend:
    - React with axios
    - Wireframing: [Figma](https://www.figma.com/) is recommended
* Backend (Database):
    - MySQL
* CI/CD:
    - Github actions will be used for CI/CD pipelines
* Deployment: Heroku for both front-end and API
 
## Order lifecycle
* Customer calls in an order
* CSR adds Customer if not existing
* CSR edits Customer as needed
* CSR creates an Order
* Add Product(s)
    - Check if available
    - Add if so
* CSR informs shipping to assemble and ship the Order
* Shipping collects Products in Order
* Conditional at any point prior to shipping: Customer calls in to modify existing Order
* Order is shipped
* Order arrives
* Shipping agent informs CSR
* Order is closed

## Business constraints (Understand how these affect the Order lifecycle)
* Can't add a Product if none available
* Can't modify an Order that has been shipped
* Can't close out an Order without confirmation that Order arrived as expected

## Business objects
* Customers
    - id (PK)
    - first_name
    - middle_name
    - last_name
    - phone
    - email
    - customer_notes
    - address_id (FK)
* Orders
    - id (PK)
    - customer_id (FK)
    - order_status (**Draft/Open/Finalized/Preparing to ship/Ready for shipping/Shipped/Delivered/Closed**)
    - datetime_order_placed
    - total_order_price
    - order_notes
* Products
    - id (PK)
    - product_SKU
    - product_price
    - product_name
    - product_quantity
    - product_description
* Addresses
    - id (PK)
    - address_line_1
    - address_line_2
    - city
    - state
    - zip

The above listing of data fields is not necessarily comprehensive. You'll also observe that a real database schema is only hinted at. This is not a prescriptive data model, and it's a fact of software development that data models change over time; that's why there is an entire art of schema migrations. One thing clearly lacking from the above is a means by which to link together the customers, orders, and products.

## Application requirements
### CSRs need to be able to
* Perform CRUD operations for Orders, including the ability to interactively add products from the Product catalog to an order that is in progress
* There must be the ability to save an Order as a draft
* Tie the order to a Customer
* Browse the product catalog (as a CSR adds or removes products from an order, the product count needs to be updated)
* Browse the customer database
* Track and change the shipping status of the order

## API starting point
| Method | URLs | Actions |
| :---   | :--- |    :--- |
|  GET  |  api/customers  |  Get all customers  |
|  GET  |  api/customers/:id  |  Get specific customer  |
|  POST  |  api/customers  |  Create new customer  |
|  PUT  |  api/customers/:id  |  Modify existing customer  |
|  DELETE  |  api/customers/:id  |  Remove customer (data compliance/right to be forgotten)  |
|  GET  |  api/orders  |  Get all orders  |
|  GET  |  api/orders/:id  |  Get specific order  |
|  POST  |  api/orders  |  Create new order (think about how to differentiate between draft and live orders)  |
|  PUT  |  api/orders/:id  |  Modify existing order  |
|  DELETE  |  api/orders/:id  |  Delete a draft order (shouldn't allow for deletion of live orders)  |
|  GET  |  api/products  |  Get all products  |
|  GET  |  api/products/:id  |  Get specific product  |
|  PUT  |  api/products/:id  |  Increment/Decrement product inventory  |
 
