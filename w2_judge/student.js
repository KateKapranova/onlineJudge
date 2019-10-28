const Help = require('./helpFunctions.js');

let idCounter = 1;

module.exports=class Student{
  constructor(name, email){
    this.id = idCounter
    idCounter++
    this.name = name
    this.email = email
    this.submissions = []
    this.average = 0
    this.totalPoints = 0
  }
  //function to calculate a student average grade and total points for all submissions
  calculateStudentAverage(submissionId){
    this.totalPoints = Help.calculateTotal(this.id,submissionId)
    if (this.totalPoints === 0){
      this.average = 0
      return
    }
    this.average = Number((this.totalPoints/this.submissions.length).toFixed(2))

  }

  //function to print out submission grades
  printSubmissionGrades(){
    this.submissions.forEach(printGrades)
  }
}

printGrades = (submissions) => console.log(submissions.task + ": " + submissions.grade)