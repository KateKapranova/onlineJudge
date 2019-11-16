const mongoose = require('mongoose')

const WeektaskSchema = new mongoose.Schema({
    name: String,
    deadline: Date,
    releaseDate: Date,
    maxPoints: Number
})

const WeektaskModel = mongoose.model("Weektask", WeektaskSchema)

module.exports = WeektaskModel

// module.exports = class Weektask{
//     constructor(name, deadline,maxPoints,submissions=[],id){
//         this.name = name
//         this.deadline = deadline
//         this.maxPoints = maxPoints
//         this.submissions = submissions
//         this.id=id
//     }
//     static create({name, deadline,maxPoints,submissions,id}){
//         return new Weektask(name, deadline,maxPoints,submissions,id)
//     }
// }