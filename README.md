Express MongoDB CRUD API

A simple REST API built with Node.js, Express, and MongoDB that supports full CRUD operations for Posts and Products.

Features
Create, Read, Update, Delete (CRUD) for Posts
Create, Read, Update, Delete (CRUD) for Products
MongoDB integration using Mongoose
RESTful API structure
JSON request/response handling

Tech Stack
Node.js
Express.js
MongoDB
Mongoose
Nodemon

project/
│
├── config/
│   └── db.js
├── models/
│   ├── post.js
│   └── product.js
├── routes/
│   ├── postroutes.js
│   └── productroute.js
├── server.js
├── package.json

API Endpoints

Posts
GET / → Get all posts
GET /:id → Get single post
POST / → Create post
PUT /:id → Update post
DELETE /:id → Delete post

Products
GET / → Get all products
GET /:id → Get single product
POST / → Create product
PUT /:id → Update product
DELETE /:id → Delete product

