const express = require('express')
const path = require('path')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const jsonData = require('../public/data/data.json')
const bodyParser = require('body-parser')
const expressSanitizer = require('express-sanitizer')
const log = console.log
const expressLayouts = require('express-ejs-layouts')
const passport = require('passport')
const flash = require('connect-flash')
const session = require('express-session')
// Init app
const app = express()


// Model Config
require('../models/posts')

// DB Config
const db = require('../configs/keys').mongoURI

// Connect to MongoDB
mongoose.connect(db, {
        useNewUrlParser: true
    })
    .then(() => log('MongoDB Connection Succeded...'))
    .catch(err => log(err))


// View engine setup
app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'ejs')

// Set public folder
app.use(express.static(path.join(__dirname, '../public')))

// Body Parser middleware
app.use(express.urlencoded({
    extended: true
}))

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())

// Mount express-sanitizer middleware here
app.use(methodOverride('_method'))
app.use(expressSanitizer())

// Express session
app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

// Set routes
const index = require('../routes/index')
const destination = require('../routes/destination')
const team = require('../routes/team')
const gallery = require('../routes/gallery')
const blog = require('../routes/blog')
const contact = require('../routes/contact')
const about = require('../routes/about')
const login = require('../routes/login')
const register = require('../routes/register')


// Middleware
app.use('/', index)
app.use('/destination', destination)
app.use('/team', team)
app.use('/gallery', gallery)
app.use('/blog', blog)
app.use('/contact', contact)
app.use('/about', about)
app.use('/login', login)
app.use('/register', register)

// catch error handleing
app.use((req, res) => {
    res.status(404).render('404', {
        title: 'Yay Kyi Yar Travel & Tour: Search Yay Kyi Yar Myanmar Hotels, Cheap Flights, Vacations, Tours',
        navTitle: 'Yay Kyi Yar',
        company: 'Travel & Tour Co., Ltd.',
        jsonData: jsonData
    })
})

// Start the server
const port = process.env.PORT || 9999
app.listen(port, () => {
    log(`Server is running on port >>> ${port} <<<<`)
})