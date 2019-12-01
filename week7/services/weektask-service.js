const BaseService = require('./base-service')
const WeektaskModel = require('../models/weektask')

class WeektaskService extends BaseService {
    model = WeektaskModel
}

module.exports = new WeektaskService()