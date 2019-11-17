const BaseService = require('./base-service')
const StudentModel = require('../models/student')
const SubmissionModel = require('../models/submission')
const SubmissionService = require('./submission-service')


class StudentService extends BaseService {
    model = StudentModel //for node.js v.12 a way to declare a property in node.js

    async makeSubmission(student,submittedFile,task){
        let newSubmission = new SubmissionModel({
            file: submittedFile,
            taskId: task.id,
            studentId: student.id,
            submissionTime: new Date(),
            maxPoints: task.maxPoints,
            grade: 0,
            comment: ""
        })
        
        newSubmission.startJudgeRoutine(submittedFile) 
        await SubmissionService.add(newSubmission) 

        if (student.submissions.length == 0){
            student.totalPoints = newSubmission.grade
            student.average = newSubmission.grade
        }
        else if (student.submissions.length > 0){
            student.totalPoints = student.totalPoints + newSubmission.grade
            student.average = Number((student.totalPoints/student.submissions.length).toFixed(2))
        }
                         
        student.submissions.push(newSubmission)
        task.submissions.push(newSubmission)

        await student.save()
        await task.save()
    }
}

module.exports = new StudentService()