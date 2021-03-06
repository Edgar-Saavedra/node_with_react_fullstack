## Stack
This is the general stack and what each technology does.

- **Backend**:
  - MongoDB for database
  - Express Framework for application
    - We build an Express API to take requests and talks to mongodb and returning data from our API to the frontend
  - Node.js: the base language and enviroment (javascript)

- **Front-end**:
  - React.js for building dynamic components and HTML
    - All requests talking through AJAX and JSON
    - our react application will not talk directly to mongo db
  - Redux: a library for react js to create single page applications.
  - CSS: for styling our site.
- **Extra**
  - OAUTH : for authenticating with goolge
  - Stripe : for taking credit cards

  https://github.com/nvm-sh/nvm

## git
`git commit -am "message"`

## To create new project
`$ npm init`
`npm install --save express`

## Node
- javascript runtime, used to execute code outside browser
- js usually in browsers
- can use javascript outside browser

## Express
- uses node.js
- collection of functions to help making apps

## HTTP Requests Flow
- server listenst to traffic on a port.
- port is where app is served on computer
- we configure to listen to traffic on a specific port
- node takes http requests and sends to express
- express makes our life easier
- express handles requests.
- express creates route handlers for handling different requests

## Heroku Deployment
- Dynamic Port Binding
  - Heroku listens to specific port
  - heroku will tell us which port we need to listen to.
  - "you have to listen to incoming traffic on this port"
  - setup really easy
- Specify Specific Node Enviroment
  Heroku uses:
  ```
  "engines" {
      "node": "8.8.1",
      "npm": "5.0.3"
    },
  ```
  Heroku automatically trys to run `start` script:
  ```
  "scripts": {
    "start": "node index.js"
  },
  ```
- Make sure to have a `.gitignore` file

- Create git repo
  `git init`

- Install heroku cli
  `brew tap heroku/brew && brew install heroku`
  `heoroku -v`

`heroku login`
`heorku create`
  - first the location of app on heroku
    `https://glacial-basin-14905.herokuapp.com/`
  - second link deployment target
    `https://git.heroku.com/glacial-basin-14905.git`
    `git remote add heroku https://git.heroku.com/glacial-basin-14905.git`

#to run heroku build
`git push -f heroku`

# OAUTH

- we send user to google with our APP ID
- user will let the user know
- user approves
- google redirects to app, something like `auth/google/callback?code=456`
  - the code parameter, will let us use the code to make a follow up request to google
  - "we are sure they granted us permission, we wanna exchange this code for info"
- We get user details
- set user ID in cookie and keep them logged in
- User is logged in
- we can loggin

# Passport JS
- handles a lot of OAuth
- kinda of a black box
- ### you always install base passport module
- ### Passport Strategies, always install at least 1
  - A strategy is a different module to integrate/authenticate with a different service

`npm install --save passport`
`npm install --save passport-google-oauth20`

OAuth20 is short for 2.0

```
Jared Hanson, the maintainer of the Passport libraries has updated passport-google-oauth20 to address the Google+ API shutdown, as well posting about it on Medium:

 https://medium.com/passportjs/google-api-shutdown-330c3b47e3df
```

## We need to sign up with google OAUTH API

## steps to create a new Google Project
1. Go to the Google Project Dashboard:
   `https://console.cloud.google.com`
2. Click the "Create Project" button
3. Name the project and click the "Create" button
4. Click the menu button, Select "APIs & Services", then "OAuth Consent Screen"
5. Select `External` and click the "Create" button
6. Fill out "Application Name", scroll to the bottom and click the "Save" button. No other info should be filled out in the `consent screen` at this time.
7. Click "Credentials" in the sidebar and then click the `"Create Credentials"` button
9. Select Credentials/`OAuth Client ID`
10. Select `Web Application` and fill out the "Authorized JavaScript Origins" and "Authorized redirect URI" and click the "Create" button.

Authorized JavaScript Origins:

`http://localhost:5000`

Authorized redirect URI

`http://localhost:5000/auth/google/callback`

```
Note! Google has made a number of changes to the OAuth credential's restrictions, and no longer allows wildcards in the redirect URI field. If you follow along with the upcoming video lecture you will get this error: Invalid Redirect: cannot contain a wildcard (*)

Since the main goal of using http://localhost:5000/* was to show the redirect error a few lectures later, we entered the correct redirect as shown above since this is what it will be changed to anyway.
```
11. Copy your Client ID and Client Secret in a safe place so you can use it in your application in a future lecture. (ID and Secret were redacted from the screenshot)

### After Setting up Google App
save `client secret`

Securly store the secret

### HTTP

- http requests, stateless, http inherently has no way to identity or share info between requests
- sends back unique identifying piece of info, cookie, token whatever "token"
- token - my proof I logged into the application
- we make follow up request and include to server
- we use cookie based authentication. Hey please log me in. After user goes through Oauth, we generate identifying piece of info.
  - we include a header
  - header will have property 'Set-Cookie: 'aasdf''
    - browser will store cookie into its memory
    - cookies managed by browser
    - we use cookie authentication cuz its elegant and reasonable.
    - we dont need to care the cookie.

### EMAIL PASS WORD FLOW
- sign up with email and passwordd
 - we keep record
- user signs out
- user comes back and attempts login
  - We compare email/password combos
  - we give user the cooki and we
    do everything with HTTP flow.

### OAUTH FLOW:
  - A user signs up. They go through Oauth flow
  - our server receives google info (we console log)
  - signs out
  - we exchange code for profile
  - we pick consistant piece of info form the profile. "Is this one piece of your profile identical to what you had earlier?"
  - Look at profile ...
    - we use the users id
      - user signs up
      - take google id
      - we sign them in.
      - we take id compare to original and confirm
      - we are making assumption the id wont change
  - We will use user ID to help login user

### OAUTH FLOW 2.0:
  - User comes to server with profile
  - server will take profile, we create new record in DB (Mongo)
  - Create new User record
  - Come back to server, of existing user.
  - Send cookie to user, cookie will identify user.
  - Logout:
    - unset the cookie
    - If log back in check record exists.
    - Set cookie etc.

### Full flow
- User comes to our server with Google profile
- "Sign me up"
- Cool new user, we create new record in our DB with ID has come and signed up.
- send cookie back to browser
- user logs out. We Unset/expire the cookie.
- signs in again, we check to see our users
- we set cookie again, saying you are the user.
- before we create any record for a user, we check to see if the user exists.