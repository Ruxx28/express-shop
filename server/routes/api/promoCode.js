const express = require('express')
const router = express.Router()
const promoCode_controler = require('../../controller/promoCode')

router.get('/count', promoCode_controler.countDocument)

router.get('/', promoCode_controler.findAll)

router.get('/:id', promoCode_controler.findById)

router.post('/', promoCode_controler.create)

router.put('/:id', promoCode_controler.update)

router.delete('/:id', promoCode_controler.delete)

module.exports = router