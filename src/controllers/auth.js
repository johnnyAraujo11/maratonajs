const express = require('express')

const router =express.Router()

//fazer login
router.get('/sing-in', (req, res) => {
    return res.json('Sing in')
})

//cadastro
router.get ('/sing-up', (req, res) =>{
    return res.json('Sing up.')
})

//exportar
module.exports = router