const express = require('express')
const bcrypt = require('bcrypt')
const {Account} = require('../models')

const router =express.Router()
const saltRounds = 10

//fazer login
router.get('/sing-in', (req, res) => {
    return res.json('Sing in')
})

//cadastro
router.get ('/sing-up', async (req, res) =>{
    const email = "johnny@gmail.com"
    const password = '123456'

    const hash = bcrypt.hashSync(password, saltRounds)
    console.log(hash)
    const result = await Account.create({email, password: hash})
    return res.json(result)
})

//exportar
module.exports = router