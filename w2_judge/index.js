const Student = require('./student.js')
// const Submission = require('./submission.js')
const Weektask = require('./weektask.js')
const Database = require('./database.js')

kaori = new Student("Kaori","kaori@uni-potsdam.de")
kamil = new Student("Kamil","kamil@uni-potsdam.de")
kate = new Student("Kate","kate@uni-potsdam.de")

task1 = new Weektask("Recursion", new Date(2019,10,30).toLocaleDateString('en-GB'),3)
task2 = new Weektask("Dynamic Programming", new Date(2019,10,21).toLocaleDateString('en-GB'),5)

kaori.makeSubmission("recur.py",task1)
kate.makeSubmission("recursion.py",task1)
kamil.makeSubmission("hometask01.py",task1)

kaori.makeSubmission("dp.py",task2)
kate.makeSubmission("dynProg.py",task2)
kamil.makeSubmission("hometask02",task2)

Database.save("student.json", kaori)
Database.save("student.json", kamil)
Database.save("student.json", kate)

Database.save("weektask.json", task1)
Database.save("weektask.json", task2)