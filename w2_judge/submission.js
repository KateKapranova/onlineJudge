const Help = require('./helpFunctions.js');


module.exports=class Submission{
  constructor(student,weektask,fileName){
    this.id = Help.concatenator(weektask.id.toString(), student.id.toString())
    //it's kind of too wasteful to have the whole student object as one of the properties
    //ideally I would wanna use an id or a reference to this object
    this.student = student;
    this.grade = 0;
    this.submissionTime = new Date().toLocaleDateString('en-GB');
    //the same concern as with a student object
    this.weektask = weektask;
    // this.task = weektask.taskName
    this.file = fileName;
    this.comment = "Not submitted";
    this.deadline = weektask.deadline;
    //changed code to avoid circular dependencies: now not the whole object is pushed, but only an id
    student.submissions.push(this.id)
    weektask.submissions.push(this.id)
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
    student.calculateStudentAverage(this.id)
    this.weektask.getWeektaskAverage()
    this.comment = "Submitted and graded"

  }
}