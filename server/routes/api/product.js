const express = require('express')
const router = express.Router()
const product_controler = require('../../controller/product')

router.get('/count', product_controler.countDocument)

router.get('/', product_controler.findAll)

router.get('/:id', product_controler.findById)

router.post('/', product_controler.create)

router.put('/:id', product_controler.update)

router.delete('/:id', product_controler.delete)

module.exports = router