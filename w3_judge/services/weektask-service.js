const BaseService = require('./base-service')
const WeektaskModel = require('../models/weektask')

class WeektaskService extends BaseService {
    constructor() {
        super(WeektaskModel, `${__dirname}/../weektask-database.json`)
    }
}

module.exports = new WeektaskService()