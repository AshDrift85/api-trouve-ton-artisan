const express = require('express');
const router = express.Router();
const artisanController = require('../controllers/artisanController');
const contactController = require('../controllers/contactController');

router.get('/top', artisanController.getArtisansTop);
router.get('/:id', artisanController.getArtisanById);
router.get('/', artisanController.getArtisans);
router.post('/:id/contact', contactController.envoyerContact);

module.exports = router;