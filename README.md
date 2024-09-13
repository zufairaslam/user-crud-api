User CRUD API
A simple RESTful API for managing users, built with Node.js, Express, and MongoDB. This API supports Create, Read, Update, and Delete operations for user management, along with JWT authentication, basic validation, error handling, pagination, and search functionality.

Features
User Management: Create, read, update, and delete users.
Authentication: Secure endpoints with JSON Web Tokens (JWT).
Validation: Validate incoming request data.
Error Handling: Gracefully handle errors and return appropriate responses.
Pagination: Retrieve users with pagination support.
Search: Search for users by name.
Stack
Node.js: JavaScript runtime for server-side code.
Express: Web framework for building the API.
MongoDB: NoSQL database for storing user data.
Mongoose: ODM for MongoDB and Node.js.
JWT: JSON Web Tokens for authentication.
Express-validator: Middleware for request validation.
Installation
Clone the Repository:

bash
Copy code
git clone https://github.com/your-username/user-crud-api.git
cd user-crud-api
Install Dependencies:

bash
Copy code
npm install
Set Up Environment Variables:

Create a .env file in the root directory and add the following variables:

bash
Copy code
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
Start the Server:

bash
Copy code
npm start
The server will run on http://localhost:5000 by default.

API Endpoints
POST /api/users/register – Register a new user
POST /api/users/login – Authenticate a user and get a token
GET /api/users – Get a list of users with optional pagination and search
PUT /api/users/:id – Update a user
DELETE /api/users/:id – Delete a user
Middleware
Authentication: Protect routes with JWT-based middleware.
Validation
User Registration: Validates name, email, and password.
User Login: Validates email and password.
Contributing
Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature/your-feature).
Create a new Pull Request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
Node.js
Express
MongoDB
Mongoose
JWT
Express-validator
