const express = require('express')
const router = express.Router()
const category_controler = require('../../controller/category')

router.get('/count', category_controler.countDocument)

router.get('/', category_controler.findAll)

router.get('/:id', category_controler.findById)

router.post('/', category_controler.create)

router.put('/:id', category_controler.update)

router.delete('/:id', category_controler.delete)

module.exports = router