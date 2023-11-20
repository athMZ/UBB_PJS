const net = require('net');

const client = net.connect({ port: 8107, host: 'localhost' }, () => {
    console.log('Nawiązanie poł. z serwerem...');
    client.write('Client sent some data...');
});

client.on('data', (data) => {
    console.log(data.toString());
    client.end();
});

client.on('end', (data) => {
    console.log('klient został rozłączony');
});
