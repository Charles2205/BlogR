const  express = require('express')
const pageRoute = require('./routes/pageRouter')
const ejs = require('ejs')
const dotEnv = require('dotenv')
const expressLayouts = require('express-ejs-layouts')
const sequel = require('./database/dbConnect')

dotEnv.config()

const port = process.env.PORT || 8901

const app = express()
app.set('view engine','ejs')

app.use(express.static(__dirname + '/public'));
app.use(expressLayouts)
app.use(express.urlencoded({extended:false}))

app.use('/',pageRoute)


const  startServer = async()=>{
    try {
        await sequel.authenticate()
        app.listen(port,()=>{
            console.log(`Server is running on http://localhost:${port}`)
        });
    } catch (error) {
        console.log(error)
    }
}

startServer()