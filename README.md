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

Resources:
JWT & Refresh Tokens

JWT.io introduction — understand the token structure first
Hasura blog on refresh token rotation — the best practical writeup on rotation + reuse detection

Google OAuth

Google Identity: Verify ID tokens — backend verification approach
Google Cloud Console — where you set up your OAuth credentials

Express + MongoDB

Mongoose docs — schemas, models, TTL indexes
express-rate-limit — dead simple rate limiting

Axios Interceptor (the tricky part)

Axios interceptors docs
Search: "Axios refresh token interceptor 401 retry" — read 2-3 implementations before writing your own

Security fundamentals

OWASP Auth Cheat Sheet — good reference to keep open while building
