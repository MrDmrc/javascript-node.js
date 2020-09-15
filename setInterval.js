var x =1 ;

var interval = setInterval (function () {
    if (x == 5)
        clearInterval(interval);

    console.log(x + " cevapsız arama ");
    x++;
},1000
)