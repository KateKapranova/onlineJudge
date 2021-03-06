const mongoose = require('mongoose')

const SubmissionSchema = new mongoose.Schema({
    file: String,
    taskId: String,
    studentId: String,
    submissionTime:Date,
    maxPoints: Number,
    grade: 0,
    comment:""
})

SubmissionSchema.methods.startJudgeRoutine = function(file){
    //only python files are allowed
    if (file.slice(-2) !== 'py'){
        this.comment = "Only py files are allowed!"
        this.grade = 0
        return
    }
    //check if submission is before the deadline
    if (this.submissionTime > this.deadline){
        this.comment = "Submission after deadline!"
        this.grade = 0
        return
    }

    //if formal requirements are met, the submission is evaluated by the judge
    this.comment = "Submitted and graded"
    this.grade=getRandomInt(this.maxPoints)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

const SubmissionModel = mongoose.model("Submission", SubmissionSchema)

module.exports = SubmissionModel


// module.exports = class Submission{
//     constructor(file,task,studentId, submissionTime = new Date().toLocaleDateString('en-GB')){
//         this.file = file
//         this.task = task.name
//         this.maxPoints = task.maxPoints
//         this.studentId = studentId
//         this.submissionTime = submissionTime
//         this.grade = this.startJudgeRoutine(file)
//     }
//     //at the moment judge routine is implemented as a Submission class function
//     startJudgeRoutine(file){
//         //only python files are allowed
//         if (file.slice(-2) !== 'py'){
//             this.comment = "Only py files are allowed!"
//             return 0
//         }
//         //check if submission is before the deadline
//         if (this.submissionTime > this.deadline){
//             this.comment = "Submission after deadline!"
//             return 0
//         }

//         //if formal requirements are met, the submission is evaluated by the judge
//         this.comment = "Submitted and graded"
//         return getRandomInt(this.maxPoints)

//     }
   
// }

