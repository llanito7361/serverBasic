const Sequelize = require('sequelize')
const taskModel = require('../src/models/taskModels')
const sequelize = new Sequelize(process.env.STRING_DB_CONECTION,{logging:false}) // Example for postgres

taskModel(sequelize)

// console.log(sequelize.models)

module.exports = {
    ...sequelize.models,
    conn: sequelize

}
