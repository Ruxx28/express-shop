const express = require('express')
const router = express.Router()
const order_controler = require('../../controller/order')

router.get('/count', order_controler.countDocument)

router.get('/', order_controler.findAll)

router.get('/:id', order_controler.findById)

router.post('/', order_controler.create)

router.put('/:id', order_controler.update)

router.delete('/:id', order_controler.delete)

module.exports = router