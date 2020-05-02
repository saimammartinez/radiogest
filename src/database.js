const mongoose = require('mongoose')

const { MONGO_HOST } = process.env


mongoose.connect(MONGO_HOST ,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db=>console.log('Base de datos está conectada'))
.catch(err=>console.log(err))