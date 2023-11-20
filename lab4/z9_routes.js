//Zbuduj serwer http na bazie modułu express który reaguje na 2 z 4 sposobów konfigurowania  trasy(na 5 zastosuj wszystkie sposoby konfigurowania tras).

const express = require('express');
const app = express();

console.log("Dostępne trasy: /r1, /r2, /r3, /r4");

app.get('/', (req, res) => {
    res.send("Dostępne trasy: /r1, /r2, /r3, /r4");
});

app.get('/r1', (req, res) => {
    res.send('Trasa z użyciem app.get()');
});

app.route('/r2')
    .get((req, res) => {
        res.send('Trasa z użyciem app.route()');
    });

app.all('/r3', (req, res) => {
    res.send('Trasa z użyciem app.all()');
});

// Using Express Router
const router = express.Router();
app.use('/', router);

router.get('/r4', (req, res) => {
    res.send('Trasa z użyciem Express Router');
});

app.listen(8080, () => {
    console.log("Serwer uruchomiony na porcie 8080");
});