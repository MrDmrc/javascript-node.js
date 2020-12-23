const fs =require('fs');
/*
fs.readFile('file.txt', (error, data) => {
    if(error)
        console.log(error);
    console.log(data.toString());
    console.log("dosya okuma işlemi bitti");
});*/

//senkton ile normali arasındaki fark sıralı çalıştırma yine 
//senkron olmazsa okuma işlemi bitmeden diğer işlemi gerçekleştiri ama 
//senkron olursa bitmeden gerçekleştiremez

const fileDosyasi = fs.readFileSync('file.txt');
console.log(fileDosyasi.toString());
console.log("dosya okuma bitti");