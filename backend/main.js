const express = require('express')
require('./models/db')
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const AuthRoute = require('./routes/Authentication')
const NotesRoute = require('./routes/NotesRoutes')
const SearchRoute = require('./routes/SearchRoutes')

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello yash!')
})

app.use(bodyParser.json())
app.use(cors())
app.use('/auth', AuthRoute)
app.use('/notes', NotesRoute)
app.use('/search', SearchRoute)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
