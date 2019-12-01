module.exports = class Service {
  //without parameters it will find all instances of a model
  async findAll() {
    return this.model.find()
  }

  async add(item) {
    return this.model.create(item)
  }

  async del(itemId) {
    return this.model.deleteMany({ _id: itemId })
  }

  async delAll(){
    return this.model.deleteMany({})
  }

  async delByName(itemName){
    return this.model.deleteMany( { name : itemName } )
  }

  async find(itemId) {
    return this.model.findById(itemId)
  }
}
