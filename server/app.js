require('dotenv').config()

// Database
require('./configs/mongoose.config')

// Debugger
require('./configs/debugger.config')

// App
const express = require('express')
const app = express()

// Configs
require('./configs/middleware.config')(app)
require('./configs/passportVetHospital.config')(app)
require('./configs/passportClient.config')(app)
require('./configs/views.configs')(app)
require('./configs/locals.config')(app)
app.use((req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
    })

// Base URLS
// app.use('/api', require('./routes/auth.routes'))
// app.use('/api', require('./routes/auth.vetHospital.routes'))
app.use('/api', require('./routes/citeHospital.routes'))
app.use('/api', require('./routes/pet.routes'))
app.use('/api', require('./routes/queryClient.routes'))

// app.use('/api/files', require('./routes/files.routes'))






module.exports = app