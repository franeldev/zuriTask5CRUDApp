# ===UNDER CONSTRUCTION===

## zuriTask5CRUDApp
Create Zuri Task5 CRUD app with database &amp; no authentication using Nodejs/Express/Mongoose

### Action Map:

1. Set up the package environment and install the dependencies
- `npm init -y`
- `npm install express express-validator dotenv mongoose`
- `npm i -D nodemon`
- Update the start and server scripts in `package.json` (optional)
- Update the main path from index.js to server.js in `package.json` (optional)
2. Create a Server
3. Create a database connection locally, then, create it with a cloud (MongoDB Atlas) and connect it to MongoDB Compass
4. Test the create, update & delete result || database on postman, then test it on client browser.
5. Host to Heroku & test the hosted link || URL.
6. Map out the routes here!

### Development
Clone the repository and run `npm install` to install all the packages

Start the server by running `npm start` or `npm run server`

#### Action Map is UNDER CONSTRUCTION, please bear with me!

## Endpoints

Here's the URI/URL where api/service can be accessed by a client application
### 1. Create Data

Adds a new user to the database & get the response

| @Method  | @Route   | @Link     | @DESCRIPTION                            | 
| -------- | ------   | --------- | ------------------------                |
| `POST`   | `'/users`| `heroku`  | `request to /user to create a new user` | 

ERROR Messages
| @Data Request                                   | @Data Respone                                                                             |
| -----------------------------------             | ------------------------                                                                  |
| ```{"name": "DonJazzy", "email": "jazzyu@gmail.com", "country": "Angola"}``` | ```{"message": "Userdb validation failed: email: jazzd yu@gmail.com is not a valid email"}``` |
| ```{"name": "DonJazzy", "email": "jazzyu@gmail.com", "country": "Angola"}``` | ```{"message": "E11000 duplicate key error collection: ZuriCrudDb.userdbs index: email_1 dup key: { email: \"jazzyu@gmail.com\" }"``` |
| ```{"name": "@Don$Jazzy", "email": "hsaaa@gmail.com", "country": "Angola"}``` | ```{"message": "Userdb validation failed: name: String have to contain only alphanumeric with spaces"}"``` |

- **SUCCESS Messages {==} Status : `201 Created`**
  
- ***Data Request***
```
{
  "name": "DonJazzy",
  "email": "jazzyu@gmail.com",
  "country": "Angola"
}
```
- ***Data Respone***
```
{
    "message": "new data created",
    "data": {
        "_id": "60a2aea3a043e209ecaa75f8",
        "name": "DonJazzy",
        "email": "jazzyu@gmail.com",
        "country": "Angola",
        "__v": 0
    }
}
```
<p>&nbsp;</p>

### 2. Read Data

- **a FETCH ALL DATA**
<p>Retrieve and return all users</p>

| @Method  | @Route   | @Link     | @DESCRIPTION                            | 
| -------- | ------   | --------- | ------------------------                |
| `GET`   | `'/users`| `heroku`   | `GET request from (/users) to fetch all users` | 

**<p>ERROR Messages {==} Status : `404 Not Found`</p>**
| @URL Request                                   | @Data Respone                                                                             |
| -----------------------------------             | ------------------------                                                                  |
| ```http://localhost:9005/userss``` | ```{"message": "Cannot GET /userss"}``` |
| ```~~{"name": "DonJazzy", "email": "jazzyu@gmail.com", "country": "Angola"}~~``` | ```~~{"message": "E11000 duplicate key error collection: ZuriCrudDb.userdbs index: email_1 dup key: { email: \"jazzyu@gmail.com\" }"~~``` |

- **SUCCESS Messages {==} Status : `200 OK`**
  
- ***URL Request***
```
http://localhost:9005/users
```
- ***Data Respone***
```
{
    "data": [
        {
            "_id": "60a2aea3a043e209ecaa75f8",
            "name": "DonJazzy",
            "email": "jazzyu@gmail.com",
            "country": "Angola",
            "__v": 0
        },
        {
            "_id": "60a2d94d5f23373d44e938b7",
            "name": "Jimmy Jatt",
            "email": "flyingjet@gmail.com",
            "country": "Togo",
            "__v": 0
        }
    ]
}
```
<p>&nbsp;</p>

- **b FETCH SINGLE DATA ONLY**
<p>Retrieve and return a single user</p>

| @Method  | @Route   | @Link     | @DESCRIPTION                            | 
| -------- | ------   | --------- | ------------------------                |
| `GET`   | `'/users/:id`| `heroku`   | `GET request to /users/:id to fetch a single user` | 

**<p>ERROR Message {==} Status : `404 Not Found`</p>**
| @URL Request                                   | @Data Respone                                                                |
| -----------------------------------             | ------------------------                                                    |
| ```http://localhost:9005/users/wrongid```       | ```{"message": "data not found"}``` |

- **SUCCESS Messages {==} Status : `200 OK`**
  
- ***URL Request***
```
http://localhost:9005/users/60a2d94d5f23373d44e938b7
```
- ***Data Respone***
```
{
    "data": {
        "_id": "60a2d94d5f23373d44e938b7",
        "name": "Jimmy Jatt",
        "email": "flyingjet@gmail.com",
        "country": "Togo",
        "__v": 0
    }
}
```




{
    "data": [
        {
            "_id": "60a2aea3a043e209ecaa75f8",
            "name": "DonJazzy",
            "email": "jazzyu@gmail.com",
            "country": "Angola",
            "__v": 0
        }
    ]
}