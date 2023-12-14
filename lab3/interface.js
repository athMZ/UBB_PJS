"use strict";
// Zdefiniuj inferfejs (warunkowy na 5) osoba i wykorzystaj go w funkcji wyświetlające dane tej osoby
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function inputPerson() {
    var person = {
        firstName: readlineSync.question("Podaj imie: ") || "error",
        lastName: readlineSync.question("Podaj nazwisko: ") || "error",
    };
    var pick = readlineSync.question("Czy chcesz podac wiek? (y/n): ");
    if (pick === "y") {
        person.age = parseInt(readlineSync.question("Podaj wiek: "));
    }
    return person;
}
function displayPerson(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName, " ").concat(person.age));
}
var person;
person = inputPerson();
displayPerson(person);
