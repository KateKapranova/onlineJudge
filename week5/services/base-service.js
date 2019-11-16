module.exports = class Service {
  //without parameters it will find all instances of a model
  async findAll() {
    return this.model.find()
  }

  async add(item) {
    return this.model.create(item)
  }

  async  del(itemId) {
    return this.model.deleteOne({ _id: itemId })
  }

  async find(itemId) {
    return this.model.findById(itemId)
  }
}
