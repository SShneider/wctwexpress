const router = require('express').Router()
module.exports = router

router.use('/strava', require('./strava'))
