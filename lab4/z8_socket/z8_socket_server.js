//Za pomocą gniazda (moduł net) prześlij informacje pomiędzy klientem i serwerem
const net = require('net');

const server = net.createServer((client) => {

    console.log('Nawiązano połączenie');
    client.on('data', (data) => {
        console.log(`Klient wysłał: ${data.toString()}`);
    });
    client.on('end', () => {
        console.log('Klient rozłączony');
    });

    client.write('Witaj client!');
});

server.listen(8107, () => {
    console.log('Serwer nasłuchuje na połączenie...');
});