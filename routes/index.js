import { Router } from 'express'
import { seedDbCards, seedDbUsers } from '../controllers/data.js'
const router = Router()

// GET localhost:3000/
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' })
})

router.get('/seedDbCards', seedDbCards)
router.get('/seedDbUsers', seedDbUsers)


export { router }
