const express = require('express')
const mysql = require('mysql2')
const MC = require('express-myconnection')
const rutas = require('./rutas')
const cors = require('cors')

const app = express()
app.set('port', process.env.PORT || 5000)
const opcionesDb = {
    host:'localhost',
    port: 3306,
    user: 'root',
    password:'Panconqueso@1',
    database:'discos',
    
}
//MIDDLEWARES

app.use(MC(mysql,opcionesDb,'single'))
app.use(express.json())
app.use(cors())

app.get('/' , (req,res)=>{
    res.send('Bienvenido')
})

app.use('/api',rutas)

app.listen(app.get('port'), ()=>{
    console.log('Servidor iniciado en puerto ' + app.get('port'))
})
