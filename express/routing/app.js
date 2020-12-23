const express = require('express');
const app = express();

const user = require('./routes/user');
const profile = require('./routes/profile');

app.use((req, res, next) => {
    const isLogin = false;
    if(isLogin)
        next();
    else
        res.send("Lütfen giriş yapın");
});

app.use('/user', user);
app.use('/profile', profile);


app.listen(3003, () => {
    console.log("express server çalıştı");
});