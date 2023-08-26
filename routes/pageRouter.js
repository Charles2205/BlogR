const {Router} = require('express')
const {home,about,getBlog} = require('../controllers/pageController')

const app = Router()

app.get('/',home)
app.get('/about',about)
app.get('/blog',getBlog)



module.exports= app