//Zbuduj alfabet za pomocą bufora i wyświetl go w ascii i UTF-8

const alphabet = Buffer.alloc(26); //new Buffer(26) - deprecated

for (let i = 0; i < 26; i++) {
    alphabet[i] = i + 97;
}

console.log("Alphabet as ascii:");
console.log(alphabet.toString('ascii'));

console.log();

console.log("Alphabet as utf8:");
console.log(alphabet.toString('utf8'));
