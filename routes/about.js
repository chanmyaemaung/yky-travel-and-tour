require('dotenv').config()
const express = require('express')
const log = console.log
const jsonData = require('../public/data/data.json')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        await res.render('about', {
            title: 'Yay Kyi Yar Travel & Tour: Search Yay Kyi Yar Myanmar Hotels, Cheap Flights, Vacations, Tours',
            navTitle: 'Yay Kyi Yar',
            company: 'Travel & Tour Co., Ltd.',
            jsonData: jsonData
        })
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router