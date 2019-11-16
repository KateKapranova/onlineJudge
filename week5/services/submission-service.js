const BaseService = require('./base-service')
const SubmissionModel = require('../models/Submission')

class SubmissionService extends BaseService {
    model = SubmissionModel //for node.js v.12 a way to declare a property in node.js
}

module.exports = new SubmissionService()