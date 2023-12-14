// Zdefiniuj inferfejs (warunkowy na 5) osoba i wykorzystaj go w funkcji wyświetlające dane tej osoby

import * as readlineSync from 'readline-sync';

interface Person {
    firstName: string;
    lastName: string;
    age?: number;
}

function inputPerson(): Person {
    let person: Person = {
        firstName: readlineSync.question("Podaj imie: ") || "error",
        lastName: readlineSync.question("Podaj nazwisko: ") || "error",
    };

    let pick = readlineSync.question("Czy chcesz podac wiek? (y/n): ");
    if (pick === "y") {
        person.age = parseInt(readlineSync.question("Podaj wiek: "));
    }

    return person;
}

function displayPerson(person: Person) {
    console.log(`${person.firstName} ${person.lastName} ${person.age}`);
}

let person: Person;
person = inputPerson();
displayPerson(person);