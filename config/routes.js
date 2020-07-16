const express = require('express')
const router = express.Router() 

const contactsController = require('../app/controllers/contactsController')


router.get('/contacts', contactsController.list)
router.post('/contacts',  contactsController.create)
router.get('/contacts/:id',  contactsController.show)
router.put('/contacts/:id',  contactsController.update)
router.delete('/contacts/:id',  contactsController.destroy) 

module.exports = router
