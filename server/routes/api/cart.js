const express = require('express')
const router = express.Router()
const cart_controler = require('../../controller/cart')

router.get('/count', cart_controler.countDocument)

router.get('/', cart_controler.findAll)

router.get('/:id', cart_controler.findById)

router.post('/', cart_controler.create)

router.put('/:id', cart_controler.update)

router.delete('/:id', cart_controler.delete)

module.exports = router