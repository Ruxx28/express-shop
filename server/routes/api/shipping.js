const express = require('express')
const router = express.Router()
const shipping_controler = require('../../controller/shipping')

router.get('/count', shipping_controler.countDocument)

router.get('/', shipping_controler.findAll)

router.get('/:id', shipping_controler.findById)

router.post('/', shipping_controler.create)

router.put('/:id', shipping_controler.update)

router.delete('/:id', shipping_controler.delete)

module.exports = router