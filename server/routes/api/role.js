const express = require('express')
const router = express.Router()
const role_controler = require('../../controller/role')

router.get('/count', role_controler.countDocument)

router.get('/', role_controler.findAll)

router.get('/:id', role_controler.findById)

router.post('/', role_controler.create)

router.put('/:id', role_controler.update)

router.delete('/:id', role_controler.delete)

module.exports = router