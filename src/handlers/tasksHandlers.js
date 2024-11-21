const { getTasks,getTarea,createTarea,deleteTarea } = require("../controllers/tasksControllers")

async function getTasksHandler  (req,res){
   try {
    const Tareas = await getTasks()
    // console.log('tareasHandler',Tareas)
    res.status(200).send(Tareas)
   } catch (error) {
    res.status(500).send(error.message)
   }
}
async function getTaskHandler  (req,res){
    const {id}= req.params;
    try {
    const Tarea = await getTarea(id)
        res.status(200).send(Tarea)
    } catch (error) {
        res.status(501).send(error.message)
    }
}
async function postTaskHandler  (req,res){
    const {title} = req.body;
    try {
        const newTarea = await createTarea(title)
        res.status(200).json({Tarea:newTarea,message: 'created successfully'})
    } catch (error) {
        res.status(200).send(error.message)
    }
}
async function updateTaskHandler  (req,res){
    res.status(200).send('asd')
}
async function deleteTaskHandler  (req,res){
    const {id} = req.params;
    try {
        const TareaDeleteada = await deleteTarea(id)
        res.status(200).send(`tarea de id:${id} borrada`)
    } catch (error) {
        res.status(504).send(error.message)
    }
}

module.exports = {
    getTasksHandler,
getTaskHandler,
postTaskHandler,
updateTaskHandler,
deleteTaskHandler,
}