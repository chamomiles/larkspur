const express        = require( 'express')
const mongoose       = require( 'mongoose')
const dotenv         = require( 'dotenv')
const morgan         = require( 'morgan')
const {engine}       = require( 'express-handlebars')
const methodOverride = require( 'method-override')
const passport       = require( 'passport')
const session        = require( 'express-session')
const MongoStore     = require( 'connect-mongo')
const connectDB      = require( './config/db')

// Load config
dotenv.config({ path: './config/config.env' })

// Passport config
require('./config/passport')

connectDB()

const app = express()

// Body Parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Method Override
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        const method = req.body._method
        delete req.body._method
        return method
    }
}))

// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Handlebars
app.engine('.hbs', engine({
    defaultLayout: 'main', 
    extname: '.hbs'
}))
app.set('view engine', '.hbs')
app.set('views', './views')

// Sessions
app.use(session({
    secret: 'trackpad nutria',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl:process.env.MONGO_URI,
        mongooseConnection: mongoose.connection})
}))

// Passport middleware
app.use(passport.initialize())
app.use(passport   .session())

// Static folder
app.use(express.static('public'))

// Routes
app.use(     '/', require('./routes/index'))
app.use( '/auth', require( './routes/auth'))
app.use('/words', require('./routes/words'))

const PORT = process.env.PORT || 3000

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)