const express = require('express')
const router = express.Router()
const admin_controler = require('../../controller/admin')

router.get('/', admin_controler.findAll)

router.post('/', admin_controler.create)

router.post('/login', admin_controler.login)

router.get('/count', admin_controler.countDocument)

router.get('/:id', admin_controler.findById)

router.put('/:id', admin_controler.update)

router.delete('/:id', admin_controler.delete)

module.exports = router