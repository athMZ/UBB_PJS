//Zaimplementuj serwer w uwierzytelnianiem HTTPS z funkcjonalnością z 2 stronami /stara /nowa
const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
const app = express();

const options = {
    host: '127.0.0.1',
    key: fs.readFileSync('./ssl/privateKey.key'),
    cert: fs.readFileSync('./ssl/certificate.crt')
};

http.createServer(app).listen(80);
https.createServer(options, app).listen(443);

app.get('/', function (req, res) {
    res.send('<html><head><title>Zdecyduj się!</title><meta charset="UTF-8"></head>' + '<h1>Zdecyduj się!</h1><p>Wypierz stronę: <ul><li>/stara</li><li>/nowa</li></ul></p>');
    res.end('</body></html>');
});

app.get('/stara', function (req, res) {
    res.send('<html><head><title>Stara strona</title><meta charset="UTF-8"></head>' + '<h1>To jest strona stara!</h1> <a href="https://sjp.pwn.pl/slowniki/stara.html">Stara - definicja</a>');
    res.end('</body></html>');
});

app.get('/nowa', function (req, res) {
    res.send('<html><head><title>Nowa strona</title><meta charset="UTF-8"></head>' + '<h1>To jest strona nowa!</h1><a href="https://sjp.pwn.pl/slowniki/nowa.html">Nowa - definicja</a>');
    res.end('</body></html>');
});