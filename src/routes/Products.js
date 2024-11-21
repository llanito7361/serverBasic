const express = require('express')
const path = require('path')
const fs  = require('fs')

const productsRouter = express.Router()

productsRouter.get('/',(req,res)=>{
    const filePath = path.join(__dirname,'../data/products.json')
    fs.readFile(filePath,'utf8',(err,data)=>{
        if (err) {
            console.error('Error reading products.json:', err);
            return res.status(500).json({ error: 'Error reading product data' });
        }
        res.send(JSON.parse(data))
    })
        // res.status(200).send('estas en /products soy himncha de boca vamo bokita')
        // chequear en pi uso del .use en los handlers
    })

module.exports = productsRouter