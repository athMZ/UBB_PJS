//Za pomocą klienta http połącz się z dowolną stroną i wyświetl w konsoli wynik

const http = require('http');
const url = "http://kordos.com";

console.log(`Program używa modułu http do odebrania odpowiedzi ze strony ${url}`);

http.get(url, (res) => {
    let data = '';

    res.on('data', (chunk) => data += chunk);

    res.on('end', () => console.log(data));

}).on("error", (err) => console.log("Error: " + err.message));