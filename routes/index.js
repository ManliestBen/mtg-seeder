import { Router } from 'express'
import { seedDb } from '../controllers/cards.js'
const router = Router()

// GET localhost:3000/
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' })
})

router.get('/seedDb', seedDb)



export { router }
