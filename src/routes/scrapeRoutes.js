const express = require('express');
const router = express.Router();

const { obtenerDatos } = require('../controllers/scrapeController');

router.get('/scrape', obtenerDatos);

module.exports = router;