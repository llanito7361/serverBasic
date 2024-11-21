const express = require('express')
const productsRouter = require('./Products')
const tasksRouter = require('./tasks')

const mainRouter = express.Router()

mainRouter.get('/',(req,res)=>{
    res.status(200).send('estas en /')
})

mainRouter.use('/products', productsRouter )

mainRouter.use('/tasks', tasksRouter)

module.exports = mainRouter

