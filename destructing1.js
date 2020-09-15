const degerler = {
    deger1: 'deger4',
    deger2: 'deger5',
    deger3: {
        isim : 'mehmet'
    }
};

const {deger3:{isim:name}} = degerler;
console.log(name);