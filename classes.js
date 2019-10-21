//The project concentrates on the development of an online submission system
// for the class "Algorithms and DS" that I am tutoring at Uni Potsdam

//IMPLEMENTED CLASSES: Student, Submission, Task

// A Student object should be recognised by the system and can submit an assignment for grading,
//see the grading of a submission and view her/his semester performance

//Weektask class is a model of a weekly programming assignment that is to be submitted
// by students. A task is graded by the judge system.
//Multiple submissions correspond to a single task.

//Submission instance is a solution to a particular weekly task submitted by a student.
//A submission should be executable py-file and it is graded by the judge system.
//Each submission is associated with a particular student, a particular task and
// and a grade. Each submission should be checked against submission deadline and file extension.

//function generating a random integer
//a mockup judge system
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class Student{
  constructor(name, email){
    this.name = name
    this.email = email
    this.submissions = []
    this.average = 0
    this.totalPoints = 0
  }
  //function to calculate a student average grade and total points for all submissions
  calculateStudentAverage(){
    this.totalPoints = calculateTotal(this)
    this.average = Number((this.totalPoints/this.submissions.length).toFixed(2))

  }

  //function to print out submission grades
  printSubmissionGrades(){
    this.submissions.forEach(printGrades)
  }
}

printGrades = (submissions) => console.log(submissions.task + ": " + submissions.grade)


//help function to get a total number of points of a student instance / a weektask instance
//used in Student class for both total and average
//used in Weektask class only for average as of now
function calculateTotal(obj){
  return obj.submissions.reduce((acc,rec) => acc+rec.grade, 0)
}

/*Attention: both Student and Weektask classes have attributes named SUBMISSIONS
It is done to increase reusability of code */

class Weektask{
  constructor(taskName,deadline){
    this.taskName = taskName
    this.deadline = deadline
    this.submissions=[]
    this.weektaskAverage=0
  }
  //function to calculate an average grade for this task across all submissions
  getWeektaskAverage(){
    this.weektaskAverage = calculateTotal(this)/this.submissions.length
    return this.weektaskAverage
  }
}


class Submission{
  constructor(student,weektask,fileName){
    this.student = student;
    this.grade = undefined;
    this.submissionTime = new Date().toLocaleDateString('en-GB');
    this.weektask = weektask;
    this.task = weektask.taskName
    this.file = fileName;
    this.comment = "";
    this.deadline = weektask.deadline;
    student.submissions.push(this)
    weektask.submissions.push(this)
  }
  //grade a submission by assigning a random int value
  //but first the function checks the formal requirements:
  //(1) file extension and (2) submission time doesn't exceed deadline
  gradeSubmission(){
    //only python files are allowed
    if (this.file.slice(-2) !== 'py'){
      this.grade = 0;
      this.student.calculateStudentAverage()
      this.comment = "Only py files are allowed!"
      return
    }
    //submission is before the deadline
    if (this.submissionTime > this.deadline){
      this.grade = 0;
      this.student.calculateStudentAverage()
      this.comment = "Submission after deadline!"
      return
    }
    //if formal requirements are met, the submission is evaluated by the judge
    //instance of Student and Weektask are updated
    this.grade = getRandomInt(6);
    this.student.calculateStudentAverage()
    this.weektask.getWeektaskAverage()

  }
}

//Create instances of weekly tasks
task1 = new Weektask("Recursion Task",new Date(2019,10,30).toLocaleDateString('en-GB'))
task2 = new Weektask("Divide and Conquer Task",new Date(2019,09,30).toLocaleDateString('en-GB'))
task3 = new Weektask("Dynamic Programming Task",new Date(2019,09,19).toLocaleDateString('en-GB'))

//Register students in the system
kamil = new Student("Kamil","kamil@uni-potsdam.de")
kate = new Student("Kate", "kate@uni-potsdam.de")
kaori = new Student("Kaori", "kaori@uni-potsdam.de")

//Instances of students
console.log("INSTANCES OF STUDENTS BEFORE SUBMISSIONS")
console.log(kamil)
console.log(kate)
console.log(kaori)
console.log('\n')

console.log("STUDENTS SUBMIT TASK 1")
kamilSubmission = new Submission(kamil, task1,"recur.py")
kamilSubmission.gradeSubmission()
kateSubmission = new Submission(kate, task1,"recursion.pdf")
kateSubmission.gradeSubmission()
kaoriSubmission = new Submission(kaori, task1,"recursion.py")
kaoriSubmission.gradeSubmission()

console.log(kamilSubmission)
console.log(kateSubmission)
console.log(kaoriSubmission)
console.log('\n')

console.log("AVERAGE GRADE FOR TASK 1")
console.log(Number((task1.getWeektaskAverage()).toFixed(1)))
console.log('\n')

console.log("STUDENT KAORI SUBMITS TASK 2")
kaoriSubmission1 = new Submission(kaori, task2,"divide.py")
kaoriSubmission1.gradeSubmission()
console.log(kaori.submissions[1])
console.log('\n')

console.log("STUDENT KAORI SUBMITS TASK 3")
kaoriSubmission2 = new Submission(kaori, task3,"dynamic.py")
kaoriSubmission2.gradeSubmission()
console.log(kaori.submissions[2])
console.log('\n')

console.log("Kaori can check the average grade of her submissions")
console.log(kaori.average)
console.log("Kaori can check the total points of her submissions")
console.log(kaori.totalPoints)
console.log('\n')

console.log("Output of the submission name and grade achieved by Kaori")
kaori.printSubmissionGrades()
