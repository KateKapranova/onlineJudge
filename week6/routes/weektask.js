const express = require('express')
const router = express.Router()

const WeektaskService = require('../services/weektask-service')

router.get('/all', async (req, res) =>{
    const weektasks = await WeektaskService.findAll()
    res.render('weektask',{items:weektasks})
})

router.get('/all/json', async (req, res) =>{
    const weektasks = await WeektaskService.findAll()
    res.send(weektasks)
})

router.get('/:id', async (req, res) =>{
    const id = req.params.id
    const weektask = await WeektaskService.find(id)
    if (!weektask) res.status(404)
    res.render('data', {data: weektask})
    
})

router.get('/:id/json', async (req, res) =>{
    const id = req.params.id
    const weektask = await WeektaskService.find(id)
    if (!weektask) res.status(404)
    res.send(weektask)
})

router.post('/', async (req,res) => {
    const task = await WeektaskService.add(req.body)
    res.send(task)
})

router.delete('/:id', async (req,res) => {
    await WeektaskService.del(req.params.id)
    res.send('ok')
})

router.delete('/all/delete', async (req,res) => {
    await WeektaskService.delAll()
    res.send('deleted')
})

module.exports = router