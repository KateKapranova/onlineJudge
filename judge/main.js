const {PythonShell} = require('python-shell')

const firstTest = PythonShell.run('./task1/testSuite.py', null, function (err,results) {
    if (err) throw err;
    console.log(results)
    if (results[0].includes("True")){
        return true
    }
    return false      
})

const secondTest = PythonShell.run('./task2/testSuite.py', null, function (err,results) {
    if (err) throw err;
    console.log(results)
    if (results[0].includes("True")){
        return true
    }
    return false      
})

const thirdTest = PythonShell.run('./task3/testSuite.py', null, function (err,results) {
    if (err) throw err;
    console.log(results)
    if (results[0].includes("True")){
        return true
    }
    return false      
})
