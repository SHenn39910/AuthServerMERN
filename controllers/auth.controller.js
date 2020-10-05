const User = require('../models/auth.model')
const expressJwt = require('express-jwt')
const = require('lodash')
const { OAuth2Client } = require('google-auth-library')
const fetch = require('node-fetch')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
//Custom error handler to get useful error from database errors
const {errorHandler} = require('../helpers/dbErrorHandling')
// I will use for send email sendgrid you can use nodemaile also
const sgMail = require('@sendgrid/mail')

exports.registerController = (req, res) => {
   const {name, email, password} = req.body
   const errors = validationResult(req)
}