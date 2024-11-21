const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
   return sequelize.define('Task',{
        title: {
            type : DataTypes.STRING,
            allowNull: false
        },
        completed:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },{timestamps: false})
}