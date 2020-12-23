const express = require('express');
const router = express.Router();

// helpers
const isLogin = require('../helper/isLogin')

router.get('/', isLogin , (req, res) => {
    res.send("profil sayfası");
});


module.exports = router;