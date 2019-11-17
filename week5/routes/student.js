const express = require('express')
const router = express.Router()

const StudentService = require('../services/student-service')
const WeektaskService = require('../services/weektask-service')


router.get('/all', async (req, res) =>{
    const students = await StudentService.findAll()
    res.render('list',{items:students})
})

router.get('/:id', async (req, res) =>{
    const student = await StudentService.find(req.params.id)
    res.render('data', {data: student})
})

router.post('/', async (req,res) => {
    const student = await StudentService.add(req.body)
    res.send(student)
})

router.delete('/:id', async (req,res) => {
    await StudentService.del(req.params.id)
    res.send('ok')
})

// student can submit her homework
router.post('/:studentId/submit/:weektaskId', async (req,res) => {
    const student = await StudentService.find(req.params.studentId)
    //console.log(student.name)
    const task = await WeektaskService.find(req.params.weektaskId)
    //console.log(task.name)
    file = req.body.file
    //const newSubmission=await SubmissionService.add({file:file, taskId: taskId,})
    await StudentService.makeSubmission(student, file, task)
    res.send("submitted")
})

module.exports = router