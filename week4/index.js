const express = require('express')
const BodyParser = require('body-parser')
const StudentService = require('./services/student-service')
const WeektaskService = require('./services/weektask-service')

//create a web application
const app = express()

app.set('view engine','pug')

app.use(BodyParser.json())

app.get('/', (req,res) => {
    res.sendFile(`${__dirname}/index.html`)
    res.render('index')
})

app.get('/student/all', async (req, res) =>{
    const students = await StudentService.findAll()
    res.render('students',{students:students})
})

app.get('/student/:id', async (req, res) =>{
    const id = req.params.id
    const student = await StudentService.find(id)
    res.send(student)
})

app.get('/weektask/all', async (req, res) =>{
    const weektasks = await WeektaskService.findAll()
    res.render('weektasks',{weektasks:weektasks})
})

app.get('/weektask/:id', async (req, res) =>{
    const id = req.params.id
    const weektask = await WeektaskService.find(id)
    res.send(weektask)
})

app.post('/student', async (req,res) => {
    const student = await StudentService.add(req.body)
    res.send(student)
})

app.post('/weektask', async (req,res) => {
    const task = await WeektaskService.add(req.body)
    res.send(task)
})

app.delete('/student/:id', async (req,res) => {
    await StudentService.del(req.params.id)
    res.send('ok')
})

app.delete('/weektask/:id', async (req,res) => {
    await WeektaskService.del(req.params.id)
    res.send('ok')
})

app.get('/submit/:studentId/:weektaskId', async(req,res) =>{
    res.render('submit')
})

// student can submit her homework
app.post('/submit/:studentId/:weektaskId', async (req,res) => {
    const allStudents = await StudentService.findAll()
    const allWeektasks = await WeektaskService.findAll()

    const submittingStudent = allStudents.find(p => p.id == req.params.studentId)
    const submittedWeektask = allWeektasks.find(p => p.id == req.params.weektaskId)

    const file = req.body.file
    
    submittingStudent.makeSubmission(file, submittedWeektask)
    res.send('task submitted')

    await StudentService.saveAll(allStudents)
    await WeektaskService.saveAll(allWeektasks)
})

app.listen(3000, ()=>{
    console.log("Server is listening")
})