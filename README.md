# Upgraded Chainsaw (REST API)
koa + mongo (mongoose)

This is the test environment for using with mongo db layer 

There are few middlewares: 
- /employees
- /employees/:id

# How to install
1. ```yarn```
2. make sure that you have running mongodb on port 27017, else you can define another port in the config/index.js
3. ```yarn start```

# Guide
You can use postman or something else to send the requests.
 
Body should be urlencoded format or json.

Name of mongodb collection is `upgraded-chainsaw`. It can be generated automatically after first launch.

## (GET) All employees
URL:
`http://127.0.0.1:3001/api/employees`

## (GET) Employee by ID
URL:
`http://127.0.0.1:3333/api/employees/:id`
