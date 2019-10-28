const Help = require('./helpFunctions.js')
const Student = require('./student.js')
const Weektask = require('./weektask.js')
const Submission = require('./submission.js')
const Database = require('./database.js')

/*Attention: both Student and Weektask classes have attributes named SUBMISSIONS
It is done to increase reusability of code */

//Create instances of weekly tasks
task1 = new Weektask("Recursion Task",new Date(2019,10,30).toLocaleDateString('en-GB'))
Database.save("weektasks.json", task1)
task2 = new Weektask("Divide and Conquer Task",new Date(2019,09,30).toLocaleDateString('en-GB'))
Database.save("weektasks.json", task2)
task3 = new Weektask("Dynamic Programming Task",new Date(2019,09,19).toLocaleDateString('en-GB'))
Database.save("weektasks.json", task3)

//Register students in the system
kamil = new Student("Kamil","kamil@uni-potsdam.de")
Database.save("students.json", kamil)
kate = new Student("Kate", "kate@uni-potsdam.de")
Database.save("students.json", kate)
kaori = new Student("Kaori", "kaori@uni-potsdam.de")
Database.save("students.json", kaori)

// Help.updateDatabase("weektasks")


//Instances of students
// console.log("INSTANCES OF STUDENTS BEFORE SUBMISSIONS")
// console.log(kamil)
// console.log(kate)
// console.log(kaori)
// console.log('\n')

console.log("STUDENTS SUBMIT TASK 1")
kamilSubmission = new Submission(kamil, task1,"recur.py")
Database.save("submissions.json", kamilSubmission)
kamilSubmission.gradeSubmission(kamil)
kateSubmission = new Submission(kate, task1,"recursion.pdf")
Database.save("submissions.json", kateSubmission)
kateSubmission.gradeSubmission(kate)
kaoriSubmission = new Submission(kaori, task1,"recursion.py")
Database.save("submissions.json", kaoriSubmission)
kaoriSubmission.gradeSubmission(kaori)

console.log(kamilSubmission)
console.log(kateSubmission)
console.log(kaoriSubmission)
console.log('\n')

// console.log("AVERAGE GRADE FOR TASK 1")
// console.log(Number((task1.getWeektaskAverage()).toFixed(1)))
// console.log('\n')

// console.log("STUDENT KAORI SUBMITS TASK 2")
// kaoriSubmission1 = new Submission(kaori, task2,"divide.py")
// kaoriSubmission1.gradeSubmission(kaori)
// console.log(kaori.submissions[1])
// console.log('\n')

// console.log("STUDENT KAORI SUBMITS TASK 3")
// kaoriSubmission2 = new Submission(kaori, task3,"dynamic.py")
// kaoriSubmission2.gradeSubmission(kaori)
// console.log(kaori.submissions[2])
// console.log('\n')

// console.log("Kaori can check the average grade of her submissions")
// console.log(kaori.average)
// console.log("Kaori can check the total points of her submissions")
// console.log(kaori.totalPoints)
// console.log('\n')

// console.log("Output of the submission name and grade achieved by Kaori")
// kaori.printSubmissionGrades()
