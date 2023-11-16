//Za pomocą modułu querystring przeanalizuj stronę /witaj?imie=xxxxx&nazwisko=yyyyyy i  jako odpowiedź zwróć: witaj xxxxxx yyyyyy
const express = require('express');
const app = express();

app.listen(8080, () => {
    console.log("Serwer uruchomiony na porcie 8080");
    console.log("Przekierowanie odpowiedź na request /witaj?imie=xxxxx&nazwisko=yyyyyy");
    console.log("http://localhost:8080/witaj?imie=Jan&nazwisko=Kowalski");
});

app.get('/witaj', (req, res) => {
    const imie = req.query.imie;
    const nazwisko = req.query.nazwisko;
    res.send(`Witaj ${imie} ${nazwisko}!`);
});