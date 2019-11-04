module.exports = class Weektask{
    constructor(name, deadline,points,submissions=[],id){
        this.name = name
        this.deadline = deadline
        this.maxPoints = points
        this.submissions = submissions
        this.id=id
    }
    static create({name, deadline,points,submissions,id}){
        return new Weektask(name, deadline,points,submissions,id)
    }
}