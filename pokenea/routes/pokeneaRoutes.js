// routes/pokeneaRoutes.js
const express = require('express');
const router = express.Router();
const pokeneaController = require('../controllers/pokeneaController');

router.get('/info', pokeneaController.getPokeneaInfo);
router.get('/show', pokeneaController.getPokeneaImageAndPhrase);

module.exports = router;