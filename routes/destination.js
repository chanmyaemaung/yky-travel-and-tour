const express = require('express')
const Dest = require('../models/destination')
const jsonData = require('../public/data/data.json')
const router = express.Router()
const log = console.log

router.get('/', (req, res) => {
    res.render('destination', {
        title: 'Yay Kyi Yar Travel & Tour: Search Yay Kyi Yar Myanmar Hotels, Cheap Flights, Vacations, Tours',
        navTitle: 'Yay Kyi Yar',
        company: 'Travel & Tour Co., Ltd.',
        jsonData: jsonData
    })
})

module.exports = router