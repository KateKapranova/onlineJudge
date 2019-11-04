const Student = require('./models/student')
// const Submission = require('./submission.js')
const Weektask = require('./models/weektask')
// const Database = require('./database.js')
const StudentService = require('./services/student-service')
const WeektaskService = require('./services/weektask-service')

console.log("Judge System launches")

async function main(){
    const kaori = new Student("Kaori","kaori@uni-potsdam.de")
    const kamil = new Student("Kamil","kamil@uni-potsdam.de")
    const kate = new Student("Kate","kate@uni-potsdam.de")

    const task1 = new Weektask("Recursion", new Date(2019,10,30).toLocaleDateString('en-GB'),3)
    const task2 = new Weektask("Dynamic Programming", new Date(2019,10,21).toLocaleDateString('en-GB'),5)
    
    kaori.makeSubmission("recur.py",task1)
    kate.makeSubmission("recursion.py",task1)
    kamil.makeSubmission("hometask01.py",task1)

    kaori.makeSubmission("dp.py",task2)
    kate.makeSubmission("dynProg.py",task2)
    kamil.makeSubmission("hometask02",task2)

    await StudentService.add(kaori)
    await StudentService.add(kate)
    await StudentService.add(kamil)

    const students = await StudentService.findAll()

    await WeektaskService.add(task1)
    await WeektaskService.add(task2)
    
    const weektasks = await WeektaskService.findAll()

    console.log(students.map((item) => item.name))
    console.log(weektasks.map((item) => item.name))

}

main();