//Dla 30 elementowej tablicy (z alfabetem) wyświetlić po kolei co 0,5s litery przy czym jeżeli jest to samogłoska dodać przerwę 2 sekundową.

const polishAlphabet = [..."aąbcćdeęfghijklłmnńoóprsśtuwyzźż"];
const vowels = [...'aąeęiouóy'];

function isVowel(char) {
    return vowels.includes(char);
}

let i = 0;
function displayAlphabet() {
    if (i > polishAlphabet.length)
        return;

    let letter = polishAlphabet[i];

    console.log(letter);

    if (isVowel(letter))
        setTimeout(displayAlphabet, 2000);
    else
        setTimeout(displayAlphabet, 500);

    i++;
}

displayAlphabet();