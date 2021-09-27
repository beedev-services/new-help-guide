# Help Guide

## What is the app?
This app is a compilation of hints, tips, and tricks regarding web development.  A guide for a web developer of any skill level.

## What is currently live and working?
Currently at https://navyladyveteran.com is the current build in the master branch. It is also currently using the api listed below.

## What is still needed?
A few things are still desired for this app.

### 1) General User form:
This is a form where a visitor of the site who might have a tip to add can submit their tip in a form.

1. No log in for this form should be required.
2. User should be able to select from the available topics or types of guide to help organize tips
3. User should enter their email address, and at least a 1st name so that if there are questions on the tip provided a follow up email could be sent.
4. Delivery of the user submitted tip for now will be adding to the database. (email sent to admin and user on future release)
5. API link for database is `/api/newtips` (database created routes not)

### 2) Admin side:
Right now all tips are added directly on the backend.  The addition of a Admin side of the site to allow admin users to add the tips is needed

1. API link for database is `/api/tips` This is where the tips are added
2. Admin dashboard where Admin can see submitted tips by general users
3. Form to add tips.
4. Admin pages should be behind a Private Route
5. No register of user at this time
6. Login / Logout buttons for Admin
7. API for login `/api/auth/login`

## API base URL
https://beedev-services-help-guide-api.herokuapp.com

1. Documentation for API is being created and will be found directly on the base url.
2. Database tables are created, routes are still being added.

## Rules
1. Do not push to master branch
2. Create your own branch and create a pull request
3. Do not merge any pull requests.

# Questions?
Please feel free to reach out to Melissa Longenberger (owner):
1. melissa@beedev-services.com 
2. Slack Channel = https://join.slack.com/t/beedev-workspace/shared_invite/zt-w8zrxgiu-G4jRerfz0JcboaX~qdnDvg

## Run app
1. Clone repo
2. Create your own branch
3. npm install
4. npm start



