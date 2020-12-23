const fs = require('fs');
const http = require('http');
const { request } = require('https');
const server = http.createServer((request, response) => {
    response.writeHead(200,{ 'content-type' :'text/html; charset=utf-8'});
});

server.on('request', (req, res) => {

    /*fs.readFile('file.txt', (err, data) => {
        if (err)
            throw err;
        
        res.end(data);
    });*/

    const readStream = fs.createReadStream('file.txt');
    readStream.pipe(res);
});

server.listen(3000);