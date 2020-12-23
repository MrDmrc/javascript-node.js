/*
*fsçappendFile() // dosyayı silmeden yazma işlemi yapar
*fs.writeFile()  //dosyanın içeriğini silip yazar
*/

const fs = require('fs');

fs.writeFile('file2.txt','hello world \n', (err) => {
    if(err)
        throw err;
    console.log('dosya ekleme yapıldı');    
})