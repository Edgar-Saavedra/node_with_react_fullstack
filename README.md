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

