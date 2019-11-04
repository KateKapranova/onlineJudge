const Submission = require('./submission')
const Generator = require('generate-password')

module.exports = class Student{
    constructor(name, email,submissions=[],average=0,totalPoints=0,id){
        this.id = id
        this.name = name
        this.email = email
        this.submissions = submissions
        this.average = average
        this.totalPoints = totalPoints
        this.password = Generator.generate({length: 10,uppercase: true,numbers:true})
    }
    makeSubmission(file,task){
        const newSubmission = new Submission(file,task,this.id)
        this.submissions.push(newSubmission)
        task.submissions.push(newSubmission)
        this.totalPoints = this.totalPoints + newSubmission.grade
        this.average = Number((this.totalPoints/this.submissions.length).toFixed(2))
    }

    static create({name, email,submissions,average,totalPoints,id}){
        return new Student(name, email,submissions,average,totalPoints,id)
    }
}