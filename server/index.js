require('dotenv').config()
const express = require('express')
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env
const session = require('express-session')
const massive = require('massive')
const authCtrl = require('./controllers/authController') 


const app = express()


app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: false, 
    secret: SESSION_SECRET
}))

// ENDPOINTS
app.post('auth/login', authCtrl.login)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`Last sim will last ${SERVER_PORT} hours`))
})


