//Zaimplementuj serwer http obsługujący 2 strony / nowa i / stara z różnymi treściami(użyj funkcji write oraz end)

const http = require('http');

console.log("Serwer uruchomiony na porcie 8080");
console.log("Zobacz strony:");
console.log("http://localhost:8080/stara");
console.log("http://localhost:8080/nowa");

function writePageHtml(res, title, contents) {
    res.write(`<html><head><title>${title}</title><meta charset="UTF-8"></head>`);
    res.write(contents);
    res.end('</body></html>');
}

http.createServer(function (req, res) {

    const url = req.url;

    res.setHeader('Content-Type', 'text-html');
    res.writeHead(200);

    switch (url) {
        case '/nowa':
            writePageHtml(res, 'Strona nowa', '<h1>To jest strona nowa!</h1><a href="https://sjp.pwn.pl/slowniki/nowa.html">Nowa - definicja</a>')
            break;

        case '/stara':
            writePageHtml(res, 'Strona stara', '<h1>To jest strona stara!</h1> <a href="https://sjp.pwn.pl/slowniki/stara.html">Stara - definicja</a>')

            break;

        default:
            writePageHtml(res, 'Zdecyduj się!', '<h1>Zdecyduj się!</h1><p>Wypierz stronę: <ul><li>/stara</li><li>/nowa</li></ul></p>')
            break;
    }

}).listen(8080);

