const express = require('express')
const rutas = express.Router()

rutas.get('/',(req,res)=>{
req.getConnection((err,con)=>{
    if (err) return res.send(err)

    con.query('SELECT * FROM new_table',(err,rows)=>{
        if (err) return res.send(err)

        res.json(rows)
    })
}) 
})
module.exports = rutas

rutas.post('/',(req,res)=>{
    req.getConnection((err,con)=>{
        if (err) return res.send(err)
        
         
        con.query('INSERT INTO new_table SET ?', [req.body] ,(err,rows)=>{
            if (err) return res.send(err)
    
            res.send(`El disco fue registrado!`)
        }) 
    }) 
    })

rutas.delete('/:id',(req,res)=>{
    req.getConnection((err,con)=>{
        if (err) return res.send(err)
        
            
        con.query('DELETE FROM new_table WHERE id=?', [req.params.id] ,(err,rows)=>{
            if (err) return res.send(err)
    
            res.send(`El disco fue eliminado!`)
        }) 
    }) 
    })

rutas.put('/:id',(req,res)=>{
    req.getConnection((err,con)=>{
        if (err) return res.send(err)
        
            
        con.query('UPDATE new_table set ? where id = ?', [req.body , req.params.id] ,(err,rows)=>{
            if (err) return res.send(err)
    
        }) 
    }) 
    })

    