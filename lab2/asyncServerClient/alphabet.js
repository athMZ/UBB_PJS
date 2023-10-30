const polishAlphabet = [..."aąbcćdeęfghijklłmnńoóprsśtuwyzźż"]
const vowels = [...'aąeęiouóy'];

function isVowel(letter) {
    return vowels.includes(letter);
}

async function displayLetters() {
    for (let i = 0; i < polishAlphabet.length; i++) {
        console.log(polishAlphabet[i]);

        if (isVowel(polishAlphabet[i]))
            await new Promise(resolve => setTimeout(resolve, 2000));
        else
            await new Promise(resolve => setTimeout(resolve, 500));
    }
}

displayLetters();