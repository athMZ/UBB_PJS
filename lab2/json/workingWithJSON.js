/*
Praca z plikami JSON: 
    • Stworzyć bazę danych(3 osoby) w zmiennej opartej o strukturę JSON. 
    (zmienna tekstowy) 
    • Skonwertować  tekstowy na obiekt(JSON.parse), 
    • Wyświetlić osoby w pętli, 
    • Dodać osobę, 
    • Zamienić na ciąg znaków i wyświetlić.
*/

const peopleDB = `[{"name":"Jan","lastName":"Kowalski"},{"name":"Adam","lastName":"Nowak"},{"name":"Anna","lastName":"Kowalska"}]`;
const parsedDB = JSON.parse(peopleDB);

parsedDB.forEach(person => {
    console.log(person);
});

parsedDB.push({ name: 'Mikołaj', lastName: 'Zuziak' });

const dbAsString = JSON.stringify(parsedDB);
console.log(dbAsString);