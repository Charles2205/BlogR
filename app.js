
const  express = require('express')
const app = express()
const pageRoute = require('./routes/pageRouter')
const ejs = require('ejs')
const dotEnv = require('dotenv')
const expressLayouts = require('express-ejs-layouts')
dotEnv.config()

const port = process.env.PORT || 8901


app.set('view engine','ejs')

app.use(express.static('public'))
app.use(expressLayouts)
app.use(express.urlencoded({extended:false}))

app.use('/',pageRoute)


try {
    app.listen(port, () => console.log(`server is running on http://localhost:${port}`))
} catch (error) {
   console.log(error); 
}