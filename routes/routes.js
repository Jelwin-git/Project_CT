const path = require('path');
const express = require('express');
const router = express.Router();
const emailController = require('../controllers/controllerPaths');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'main.html'))
});

router.get('/buy', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'buys.html'))
});

router.get('/loan', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'loans.html'))
});

router.get('/sell', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'sell.html'))
});

router.get('/about-us', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'aboutUs.html'))
});

router.get('/contact-us', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'contactUs.html'))
});

router.post('/contact-us', emailController.postEmail);
module.exports = router;