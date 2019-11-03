module.exports = class Weektask{
    constructor(name, deadline,points,submissions=[]){
        this.name = name
        this.deadline = deadline
        this.maxPoints = points
        this.submissions = submissions
    }
}