//Za pomocą modułu url zamień ścieżkę otrzymaną /nowy na /serwer1
const express = require("express");
const app = express();

app.listen(8080, () => {
    console.log("Serwer uruchomiony na porcie 8080");
    console.log("Przekierowanie z  /nowy na /serwer1");
    console.log("http://localhost:8080/nowy");
});

app.get('/nowy', (req, res) => {
    res.redirect('/serwer1');
});