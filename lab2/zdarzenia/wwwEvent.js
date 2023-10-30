//Napisać program, który generuje zdarzenie w przypadku otrzymania żądania do serwera www

const events = require('events');
const http = require('http');

let eventEmitter = new events.EventEmitter();

eventEmitter.on('request', () => {
    console.log('Request received');
});


//open http://127.0.0.1:8080/ in browser to test

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    eventEmitter.emit('request');
    res.end('Request received\n');
}).listen(8080);
