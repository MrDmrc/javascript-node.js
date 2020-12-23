const http = require('http')  // import http from 'http'; for es6

const server = http.createServer((request, response) => {
    console.log("bir istekte bulunuldu");
    response.writeHead(200,{ 'content-type' :'text/html; charset=utf-8'});
    response.write("<b>merhaba</b> dünya <b>efe yavşaktır</b>\n ");
    response.write("bu ülkenin hali ne olcak aq \n gençlik bitmiş");
    response.end();
});

server.listen(3000);