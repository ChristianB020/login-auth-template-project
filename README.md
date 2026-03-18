Project Overview

This is a full-stack notes application built with React, Node.js, Express, and MongoDB, focused on secure authentication and modern session management.

The application uses JWT-based authentication with short-lived access tokens and rotating refresh tokens, along with Google OAuth login. Users can create, read, update, and delete personal notes, and enhance them using an AI-powered endpoint.

Authentication Features

Email/password signup and login

JWT access tokens (15-minute expiry)

Refresh tokens with:

Rotation

Reuse detection

7-day expiry

Refresh tokens stored in HttpOnly cookies

Google OAuth login (backend ID token verification)

Secure logout with token revocation

Protected routes on frontend and backend

Rate-limited authentication endpoints

Core Features

User-scoped Notes CRUD (Create, Read, Update, Delete)

AI-powered endpoint to enhance or improve notes

Persistent authentication with automatic token refresh

Axios interceptor for handling expired tokens and retrying requests

Tech Stack
Frontend

React

Axios (with interceptors)

Backend

Node.js

Express

Database

MongoDB

Mongoose

Authentication and Security

jsonwebtoken

bcrypt

Google Auth Library

express-rate-limit

AI Integration

OpenAI API or Claude API (called from backend only)

Key Concepts Implemented

JWT authentication flow

Refresh token rotation and reuse detection

HttpOnly cookie-based session handling

OAuth 2.0 with Google Sign-In

Secure API design with protected routes

Token refresh handling using Axios interceptors