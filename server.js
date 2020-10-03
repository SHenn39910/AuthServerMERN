const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cars = require('cars')

// Config .env to ./config/config.env
require('dotenv').config({
    path: './config/config.env'
})
const app = express()



const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log('App listening on port ${PORT}');
});