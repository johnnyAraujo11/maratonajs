const express = require('express')
const bcrypt = require('bcrypt')
const {Account} = require('../models')

const router =express.Router()
const saltRounds = 10

//fazer login
router.get('/sign-in', (req, res) => {
    return res.json('Sing in')
})

//cadastro
router.get ('/sign-up', async (req, res) =>{
    //pegando email e senha 
    const {email, password} = req.body

    //encontrar itens repetidos no banco de dados nesse caso email
    const account = await Account.findOne({where: {email}})
    if(account){
        return res.json('Account already exists(a conta já existe)')
    }
    //const email = "johnny@gmail.com"
    //const password = '123456'

    //criptografar a senha
    const hash = bcrypt.hashSync(password, saltRounds)
    const newAccount = await Account.create({email, password: hash})
    return res.json(newAccount)
})

//exportar
module.exports = router