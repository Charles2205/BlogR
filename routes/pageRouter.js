const {Router} = require('express')
const {home,about,getBlog, contact,createBlog} = require('../controllers/pageController')

const app = Router()

app.get('/', home)
app.get('/about',about)
app.get('/blog',getBlog)
app.post('/blog',createBlog)
app.get('/contact',contact)
app.get('/testimony',contact)



module.exports= app