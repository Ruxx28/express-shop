const express = require('express')
const router = express.Router()
const upload_controler = require('../../controller/upload')

router.get('/count', upload_controler.countDocument)

router.get('/', upload_controler.findAll)

router.get('/:id', upload_controler.findById)

router.post('/', upload_controler.create)

router.put('/:id', upload_controler.update)

router.delete('/:id', upload_controler.delete)

module.exports = router