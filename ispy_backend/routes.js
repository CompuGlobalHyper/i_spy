import express from 'express'
import controller from 'controllers.js'

const router = express.Router()

router.get('/', controller.indexGet)

export default router