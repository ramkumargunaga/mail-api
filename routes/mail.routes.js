const express = require('express')
const {querymail} = require('../controller/mail.controller,')


let router = express.Router()

router.post("/sendmail",querymail)

module.exports= router