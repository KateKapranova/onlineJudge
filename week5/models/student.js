const Generator = require('generate-password')
const Validator = require('validator')
const mongoose = require('mongoose')
// const SubmissionModel = require('./submission')
// const SubmissionService = require('../services/submission-service')


const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    email: {
        type: String,
        unique: true,
        minlength: 11,
        required: true,
    },
    average: Number,
    totalPoints: Number,
    password: String,
    submissions:[{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Submission',
        autopopulate: true
    }]
})

StudentSchema.plugin(require('mongoose-autopopulate'))

//arguments: name of the model and schema
const StudentModel = mongoose.model('Student', StudentSchema)

module.exports = StudentModel

// module.exports = class Student{
//     constructor(name, email,submissions=[],average=0,totalPoints=0,id){
//         this.id = id
//         this.name = name
//         this.email = email
//         this.submissions = submissions
//         this.average = average
//         this.totalPoints = totalPoints
//         // this.password = Generator.generate({length: 10,uppercase: true,numbers:true})
//     }
//     makeSubmission(file,task){
//         const newSubmission = new Submission(file,task,this.id)
//         this.submissions.push(newSubmission)
//         task.submissions.push(newSubmission)
//         this.totalPoints = this.totalPoints + newSubmission.grade
//         this.average = Number((this.totalPoints/this.submissions.length).toFixed(2))
//     }

//     static create({name, email,submissions,average,totalPoints,id}){
//         return new Student(name, email,submissions,average,totalPoints,id)
//     }
// }