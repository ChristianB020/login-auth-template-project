Goals:

Email/password signup and login
JWT access tokens (15 min expiry)
Refresh tokens with rotation and reuse detection (7 day expiry)
HttpOnly cookies for refresh token storage
Google OAuth login
Protected routes on both frontend and backend
Logout with token revocation
Basic rate limiting on auth routes
Notes CRUD scoped to authenticated user
AI endpoint to enhance/improve a note


Stack:

Frontend: React, Axios (with interceptor)
Backend: Node, Express
Database: MongoDB, Mongoose
Auth: jsonwebtoken, bcrypt, Google Auth Library
AI: Claude or OpenAI API (called from backend only)
