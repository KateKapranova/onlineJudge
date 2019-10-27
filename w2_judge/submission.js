const Help = require('./helpFunctions.js');


module.exports=class Submission{
  constructor(student,weektask,fileName){
    this.student = student;
    this.grade = undefined;
    this.submissionTime = new Date().toLocaleDateString('en-GB');
    this.weektask = weektask;
    this.task = weektask.taskName
    this.file = fileName;
    this.comment = "Not submitted";
    this.deadline = weektask.deadline;
    student.submissions.push(this)
    weektask.submissions.push(this)
  }
  //grade a submission by assigning a random int value
  //but first the function checks the formal requirements:
  //(1) file extension and (2) submission time doesn't exceed deadline
  gradeSubmission(student){
    //only python files are allowed
    if (this.file.slice(-2) !== 'py'){
      this.grade = 0;
      student.calculateStudentAverage()
      this.comment = "Only py files are allowed!"
      return
    }
    //submission is before the deadline
    if (this.submissionTime > this.deadline){
      this.grade = 0;
      student.calculateStudentAverage()
      this.comment = "Submission after deadline!"
      return
    }
    //if formal requirements are met, the submission is evaluated by the judge
    //instance of Student and Weektask are updated
    this.grade = Help.getRandomInt(6);
    student.calculateStudentAverage()
    this.weektask.getWeektaskAverage()
    this.comment = "Submitted and graded"

  }
}