const fs = require('fs');
const file = 'Call of Duty  Modern Warfare 2019 2020.04.22 - 03.50.13.06.DVR.mp4' ;

const readStream = fs.createReadStream(file);
const writeStream =fs.createWriteStream('video.mp4');
let prgoress = 0;

fs.stat(file, (err, data) => {
    const total = data.size;
    
    readStream.on('data', (chunk) => {
        prgoress += chunk.length;
        console.log(Math.round((100*prgoress)/total)+'%');
    });
    
    readStream.pipe(writeStream);
    writeStream.on('finish', () => {
        console.log("yeni dosya oluşturuldu");
    })
});
