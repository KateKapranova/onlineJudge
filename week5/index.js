const express = require('express')
const BodyParser = require('body-parser')

const studentRouter = require('./routes/student')
const weektaskRouter = require('./routes/weektask')

require('./mongo-connection')

//create a web application
const app = express()

app.locals.moment = require('moment')

app.set('view engine','pug')
app.use(BodyParser.json())

app.use('/student', studentRouter)
app.use('/weektask', weektaskRouter)

app.get('/', (req,res) => {
    res.render('index')
})

app.listen(3000, ()=>{
    console.log("Server is listening")
})