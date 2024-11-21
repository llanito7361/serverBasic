const {Router} = require('express')
const {getTasksHandler,
    getTaskHandler,
    postTaskHandler,
    updateTaskHandler,
    deleteTaskHandler} =require('../handlers/tasksHandlers') 

const tasksRouter = Router()

tasksRouter.get('/',getTasksHandler )

tasksRouter.get('/:id',getTaskHandler)

tasksRouter.post('/', postTaskHandler)

tasksRouter.put('/:id', updateTaskHandler)

tasksRouter.delete('/:id',deleteTaskHandler)


module.exports = tasksRouter;