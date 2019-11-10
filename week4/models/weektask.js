module.exports = class Weektask{
    constructor(name, deadline,maxPoints,submissions=[],id){
        this.name = name
        this.deadline = deadline
        this.maxPoints = maxPoints
        this.submissions = submissions
        this.id=id
    }
    static create({name, deadline,maxPoints,submissions,id}){
        return new Weektask(name, deadline,maxPoints,submissions,id)
    }
}