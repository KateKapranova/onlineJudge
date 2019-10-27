//function generating a random integer
//a mockup judge system
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//help function to get a total number of points of a student instance / a weektask instance
//used in Student class for both total and average
//used in Weektask class only for average as of now
function calculateTotal(obj){
  return obj.submissions.reduce((acc,rec) => acc+rec.grade, 0)
}

function concatenator(str1,str2){
  return str1.concat("_".concat(str2))
}


module.exports = {getRandomInt,calculateTotal,concatenator};
