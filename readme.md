# Raptor Report 

Content coming soon...

This boiler plate is a template examlpe for crating a full-stack app using authentication. It currently is set up to take users + passwords and print them to a password table. The doc's purpose is to avoid having to recreate a new project every time. 

## What it includes: 
* Sequelize models and migration for user model 
* Settings for postgresql 
* Passport and passport-local 
* Express sessions to keep user logged in from page to page
* Connect-Flash for error/success messages
* bcrypt for hashing passwords 

### User Model 
| Column Name | SQL Type | Notes |
|-------------|----------|------------------------------------| 
| id | Integer | serial primary key | 
| createdAt | Date | automatically generated | 
| createdAt | Date | automatically generated | 
| firstname | String | - | 
| lastname | String | - | 
| email | String | usernameField for login | 
| password | String | hashed with bcrypt | 
| dob | Date | - | 

> Note: Change these fields in both the model and migration files BEFORE running sequelize db:migrate 

###  Routes Supplied 

| Method | Path | Location | Purpose | 
| ------ | -------------- | ---------- | ------------------------- | 
| GET | / | index.js | Home page | 
| GET | /profile | controllers/profile.js | Profile page (authorization req) | 
| GET | /auth/login | controllers/auth.js | Login form page | 
| POST | /auth/login | controllers/auth.js | Login submission; Redirect to Profile | 
| GET | /auth/signup | controllers/auth.js | Signup form page | 
| POST | /auth/signup | controllers/auth.js | Signup submission; Redirect to Profile | 
| GET | /auth/logout | controllers/auth.js | Logout; Redirect for Home | 





























