# College Management System

A simple RESTful API for managing students in a college system, built using Node.js, Express, postgreSQL, and Sequelize, with JWT-based authentication and full Docker support.

# Features 
 - User login with JWT authentication
 - Protected CRUD routes for students
 - PostgreSQL database with Sequelize ORM
 - Secure password hashing with `bcrypt`
 - Dockerized with `docker-compose`

 # Tech Stack
 - Node.js
 - Express.js
 - PostgreSQL
 - Sequelize ORM
- JSON Web Tokens (JWT)
- Docker & Docker Compose

# Project Structure

college-management-api/
├── models/
│   ├── index.js
│   ├── user.model.js
│   └── student.model.js
├── routes/
│   ├── auth.routes.js
│   └── student.routes.js
├── middleware/
│   └── auth.middleware.js
├── .env
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── package.json
├── seed.js
├── server.js
└── README.md

#API Endpoints
Authorization header:
    Authorization: Bearer <your_token>

Authentication:
    POST /api/login

Student Endpoints:
    - GET /api/students         //Get all student
    - POST /api/students        //create new student
    - PUT /api/students/:id      //update student by ID
    - DELETE /api/students/:id   //Delete student by ID


# Author 
    Sonu Giri
