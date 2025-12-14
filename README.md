# Instagram Mini Clone

Full-stack Instagram mini clone built with React, Node.js, Express, and SQLite. Features JWT authentication, posts, likes, comments, follow/unfollow system, and a personalized feed.

# Project Overview

This project is a mini Instagram-like application developed using Node.js, Express, SQLite, and React.
It supports user authentication, posts, likes, comments, follow/unfollow functionality, and a personalized feed.

The project fulfills all frontend and backend requirements as specified in the assignment.

## Tech Stack

### Backend

#### 1) Node.js
#### 2) Express.js
#### 3) SQLite (Database)
#### 4) JWT (Authentication)
#### 5) bcryptjs (Password hashing)

### Frontend

#### 1) React 
#### 2) React Router
#### 3) Axios
#### 4) HTML, CSS


# Prerequisites

### Ensure the following are installed on your system:

#### Node.js
#### npm (Comes With Node.js)

```bash
  node -v
  npm -v
```

# How to Run the Project
## Step 1: Run Backend Server
### 1. Open terminal
### 2. Navigate to backend folder:
```bash
  cd instagram-mini-clone/backend
  ```
### 3. Install dependencies:
```bash
npm install 
```
### 4. Start backend server:
```bash
node src/server.js  
```
#### Backend will start at:
```bash
http://localhost:5000  
```
## Step 2: Run Frontend (React)
### 1. Open a new terminal
### 2. Naviagte to frontend folder:
```bash
cd instagram-mini-clone/frontend  
```
### 3. Install dependencies:
```bash
npm install  
```
### 4. Start React app:
```bash
npm start  
```
#### Frondend will run at:
```bash
http://localhost:3000
```

# How to Use the application
## 1. Register
#### * URL: 
```bash
http://localhost:3000/register  
```
#### * Create a new account

## 2. Login
#### * URL:
```bash
http://localhost:3000/login
```
#### * Login using registered credentials

## 3. Create Post
#### * URL: 
```bash
http://localhost:3000/create
```
#### * Add image URL and caption

## 4. View Feed
#### * Home page shows posts from followed users

## 5. View Profile 
#### * URL format:
#### * URL: 
```bash
http://localhost:3000/profile/user/<user_id>
```
## 6. Like & Comment
#### * Click o a post to view details
#### * Add comments dynamically


# Authentication
### 1. JWT token is generated pn login
### 2. Token is stored in localstorage
### 3. Protected routes prevent unauthorized access


# Features Implemented

## Backend
### 1. User authentication (JWT)
### 2. Password hashing
### 3. CRUD operations
### 4. Follow / Unfollow system 
### 5. Likes and comments
### 6. Feed based on followed users
### 7. Relational database schema

## Frontend
### 1. Login & Signup pages
### 2. Protected routes
### 3. Home Feed
### 4. Create post page
### 5. Profile page
### 6. Post detail page 
### 7. Axios API integration
### 8. Responsive UI
##### Check Installation:

