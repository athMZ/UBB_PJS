//Dla 30 elementowej tablicy (z alfabetem) wyświetlić po kolei co 0,5s litery przy czym jeżeli jest to samogłoska dodać przerwę 2 sekundową.

const polishAlphabet = [..."aąbcćdeęfghijklłmnńoóprsśtuwyzźż"]
const vowels = ['a', 'ą', 'e', 'ę', 'i', 'o', 'u', 'ó', 'y'];

let i = 0;
const interval = setInterval(() => {
    if (i > polishAlphabet.length) clearInterval(interval);

    console.log(polishAlphabet[i]);
    if (vowels.includes(polishAlphabet[i])) {
        setTimeout(() => { }, 2000);
    }

    i++;
}, 500);