const asenkronFonksiyon = function(sayi,callback){
    const sonuc = sayi + 2;
    callback(sonuc);
};

asenkronFonksiyon(2, function(sonuc){
    console.log(sonuc);
    asenkronFonksiyon(4,function(sonuc){
        console.log(sonuc);
        asenkronFonksiyon(6,function(sonuc){
            console.log(sonuc);
            asenkronFonksiyon(8,function(sonuc){
                console.log(sonuc);
            })
        })
    })
});