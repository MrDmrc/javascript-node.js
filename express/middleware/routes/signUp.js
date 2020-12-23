const express = require('express');
const router = express.Router();

router.get('/signUp', (req, res) => {
    res.send("sigUp nsayfası");
});

router.post('/signUp', (req, res) => {
    res.send("signUp sayfası (POST METHOD)");
});

module.exports = router;