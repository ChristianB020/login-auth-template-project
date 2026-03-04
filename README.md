**Project: Proper Auth System (JWT + Refresh + Google)**

Goal

	Build production-style authentication with:
	Email/password signup/login
	JWT access token (short-lived)
	Refresh token (long-lived)
	HttpOnly cookies
	Google OAuth login
	Protected routes
	Logout
	Basic rate limiting

**Overall Architecture**
	Frontend (React)
	Login / Signup
	Google login
	Protected dashboard
	Calls API with credentials: "include"
	Backend (Express)
	Auth routes
	JWT issuing
	Cookie handling
	Google ID token verification
	Protected middleware
	Refresh flow
	Database
	User table
	Refresh token storage (recommended)
