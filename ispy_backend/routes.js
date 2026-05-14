const express = require('express')
const { controller } = require('./controllers')

const router = express.Router()

router.get('/', controller.indexGet)

router.get('/checklist', controller.checklistGet)
router.put('/checklist', controller.checklistPut)

router.get('/test', controller.testGet)
router.post('/test', controller.testPost)
router.put('/checklist', controller.testChecklistPut)

module.exports = router