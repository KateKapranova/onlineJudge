const Chalk = require('chalk')

//function generating a random integer
//a mockup judge system
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//help function to get a total number of points of a student instance / a weektask instance
//used in Student class for both total and average
//used in Weektask class only for average as of now
function calculateTotal(studentId, submissionId){
  const soughtObject = findObject("students", studentId)
  
  if (soughtObject != false){
    //now add the calculated grade to the student total
    let totalSum = soughtObject.totalPoints
    const newGrade = findObject("submissions", submissionId)
    if (newGrade != false){
      return totalSum + newGrade.grade
    }
    else{
      console.log(Chalk.bgBlue("this submission object doesn't exist in DB"))
    }

  }
  else{
    console.log(Chalk.bgBlue("this student object doesn't exist in DB"))
    return soughtObject.totalPoints
  }
  
}

function concatenator(str1,str2){
  return str1.concat("_".concat(str2))
}

function updateDatabase(filename){
  var fs = require('fs')
  var filename = `./${filename}.json`
  var file = require(filename)

  file.table.map((item) => item.taskName = "test value")

  fs.writeFile(filename, JSON.stringify(file,null,2), function (err) {
    if (err){
      return console.log(err)
    } 
    return JSON.stringify(file,null,2)
    
  })
}

//in this case filename is just "students" not "students.json" as it should be!!!
function findObject(filename,idToken){
  var filename = `./${filename}.json`
  var file = require(filename)
  
  var soughtObject = file.table.filter((item) => item.id === idToken)
  soughtObject = Object.assign({}, soughtObject)
  soughtObject = soughtObject
  
  if (soughtObject != {}){
    return soughtObject
  }
  console.log(Chalk.bgBlue("The sought object is not in database"))
  return false
  
}




module.exports = {getRandomInt,calculateTotal,concatenator,updateDatabase,findObject};
