const asenkronFonksiyon = (sayi) =>{
    return new Promise((resolve,reject) => {
        if (sayi==4)
            resolve("her şey yolunda");
        else
            reject("bir sorun var ");
    })
};

asenkronFonksiyon(5)
    .then((data) => {
        console.log(data);
        return 1;
    })
    .then ((data)=>{
        console.log(data);
        return 2;
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((Error)=>{  //reject olduğunda thenleri atlayıp dire buraya geliyo
        console.log(Error);
    });

    
