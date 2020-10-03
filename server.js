const express = require('express')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const cors = require('cors')

const app = express();

// Config .env to ./config/config.env
require('dotenv').config({
    path: './config/config.env'
});

//Use bodyParser
app.use(bodyparser.json())


// Config for only development
if(process.env.NODE_ENV === 'development'){
    app.use(cors({
        origin: process.env.CLIENT_URL
    }))

    app.use(morgan('dev'))
    //Morgan give information about each request
    //Cors it's allow to deal with react for localhost at port 3000 without any problem
} 


//Load all routes

const authRouter = require('./routes/auth.route');
const { response } = require('express');

//Use Routes
app.use('/api/', authRouter);

app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Page not found"
    })
});
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});