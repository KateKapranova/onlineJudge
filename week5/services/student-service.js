const BaseService = require('./base-service')
const StudentModel = require('../models/student')

class StudentService extends BaseService {
    model = StudentModel //for node.js v.12 a way to declare a property in node.js
}

module.exports = new StudentService()