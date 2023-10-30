// Obsługa strumieni: 
//     • Wczytaj 2 pliki synchronicznie i asynchronicznie – wyświetl wyniki na ekranie, 
//     • Za pomocą strumieni wczytaj plik, 
//     • W strumieniu usuń wszystkie znaki nie będące literami i spacjami, 
//     • Dla liter zastosuj szyfr cezara, 

const fs = require("fs");

//Wczytaj 2 pliki synchronicznie i asynchronicznie – wyświetl wyniki na ekranie, 

// Asynchronous read 
fs.readFile('./Asynchronous.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
    console.log("-------------------");
});

// Synchronous read 
const data = fs.readFileSync('./Synchronous.txt');
console.log("Synchronous read: " + data.toString());
console.log("-------------------");

//Za pomocą strumieni wczytaj plik, 
const readerStream = fs.createReadStream('./sampleFile.txt');

//W strumieniu usuń wszystkie znaki nie będące literami i spacjami, 
readerStream.on('data', function (chunk) {
    const data = chunk.toString().replace(/[^a-zA-Z ]/g, "");
    console.log('\n#####################\n');

    //Dla liter zastosuj szyfr cezara, 
    const cesarOffset = 3;

    const transformedData = data
        .split('')
        .map((char) => {

            if (!/[a-zA-Z]/.test(char)) return char;

            const charCode = char.charCodeAt(0);
            const newCharCode = charCode + cesarOffset;
            return String.fromCharCode(newCharCode);
        })
        .join('');

    console.log(transformedData);

    const writerStream = fs.createWriteStream('./output.txt');
    writerStream.write(transformedData, 'UTF8');

    console.log('\n#####################\n');
});