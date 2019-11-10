const BaseService = require('./base-service')
const StudentModel = require('../models/student')

class StudentService extends BaseService {
    constructor() {
        super(StudentModel, `${__dirname}/../student-database.json`)
    }
}

module.exports = new StudentService()