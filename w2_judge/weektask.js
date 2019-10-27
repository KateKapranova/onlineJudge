const Help = require('./helpFunctions.js');

module.exports = class Weektask{
  constructor(taskName,deadline){
    this.taskName = taskName
    this.deadline = deadline
    this.submissions=[]
    this.weektaskAverage=0
  }
  //function to calculate an average grade for this task across all submissions
  getWeektaskAverage(){
    this.weektaskAverage = Number((Help.calculateTotal(this)/this.submissions.length).toFixed(2))
    return this.weektaskAverage
  }
}
