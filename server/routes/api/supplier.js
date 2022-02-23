const express = require('express')
const router = express.Router()
const supplier_controler = require('../../controller/supplier')

router.get('/count', supplier_controler.countDocument)

router.get('/', supplier_controler.findAll)

router.get('/:id', supplier_controler.findById)

router.post('/', supplier_controler.create)

router.put('/:id', supplier_controler.update)

router.delete('/:id', supplier_controler.delete)

module.exports = router