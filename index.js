require('dotenv').config()
const {conn} = require('./src/db')
const app = require('./src/app')
const PORT = 3000

conn.sync({alter:true}).then(()=>{
    app.listen(PORT,()=>{
        console.log('server on port ',PORT)
    })
})



