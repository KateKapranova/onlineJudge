const fs = require('fs')

function writingUtility(data){
    var obj = {
        table: []
    }
    obj.table.push(data)
    return JSON.stringify(obj,null,2)
}

const save = function(filename, data){
    if (fileExists("./".concat(filename))===false){
        return fs.writeFileSync(filename, writingUtility(data))
    }
    var alreadyExistingData = JSON.parse(fs.readFileSync(filename, 'utf8'))
    if (alreadyExistingData.table.filter(item => item.id === data.id).length != 0){
        //if there are entries with the same id, don't write it again to DB
        return
    }
    alreadyExistingData.table.push(data)
    return fs.writeFileSync(filename, JSON.stringify(alreadyExistingData,null,2))
   
}

    

const load = function(filename){
    return JSON.parse(fs.readFileSync(filename, 'utf8'))
} 

function fileExists(filePath){
    try{
        return fs.statSync(filePath).isFile()
    }
    catch (err){
        return false
    }
}


module.exports = { save, load }