const express = require('express')
const router = express.Router()
const webhost_controler = require('../../controller/webhost')

router.get('/count', webhost_controler.countDocument)

router.get('/', webhost_controler.findAll)

router.get('/:id', webhost_controler.findById)

router.post('/', webhost_controler.create)

router.put('/:id', webhost_controler.update)

router.delete('/:id', webhost_controler.delete)

module.exports = router