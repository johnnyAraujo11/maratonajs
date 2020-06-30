const express = require('express');
//configurando o banco de dados
const db = require('./models')

const authController = require('./controllers/auth')

const app =  express();

app.use('/auth', authController)

app.get('/', (req, res) => {
    return res.json('API running...');
})

//antes de iniciar o servidor
db.sequelize.sync().then(()=> {
    app.listen(3001, () => {
    console.log('Listening on port 3001')
    })
})
/*
app.listen(3001, ()=>{
    console.log('Listening on port 3001 ');
})*/