const {Task} = require('../db')

const getTasks = async ( ) =>{
    const allTasks = await Task.findAll()
    // console.log('tareaController',allTasks)
return allTasks
}

const getTarea = async (id) => {
    const singleTask = await Task.findAll({where:{id}})
    return singleTask
}
const createTarea =  async (title) =>{
    const newTarea = await Task.create({title})
    return newTarea
} 

const deleteTarea = async (id) =>{
    const tareaBorrada = await Task.findByPk(id)
    tareaBorrada.destroy()
}
module.exports = {
    getTasks,
    getTarea,
    createTarea,
    deleteTarea
}
