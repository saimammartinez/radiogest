const mongoose = require('mongoose')

const { MONGO_HOST, MONGO_DB } = process.env


mongoose.connect(MONGO_HOST+MONGO_DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db=>console.log('Base de datos está conectada'))
.catch(err=>console.log(err))