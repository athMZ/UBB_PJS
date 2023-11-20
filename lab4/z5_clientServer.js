//(na 5) wykonaj komunikację pomiędzy klientem a serwerem w ramach jednej aplikacji: co 1 sekunde klient wysyła zapytanie a serwer zwraca plik json.

const http = require('http');

const data = {
    "name": "Jan",
    "surname": "Kowalski",
    "age": 30,
}

const jsonData = JSON.stringify(data);

const server = http.createServer((req, res) => {
    res.end(jsonData);
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

setInterval(() => {
    http.get('http://localhost:3000', (res) => {
        res.on('data', (data) => {
            console.log(`Received data: ${data}`);
        });
    });
}, 1000);