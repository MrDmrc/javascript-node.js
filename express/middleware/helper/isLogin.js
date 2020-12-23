const isLogin = (req, res, next) => {
    const isLogin = true;

    if(isLogin)
        next();
    else 
        res.send("lütfen giriş yapın.");

};

module.exports = isLogin; 