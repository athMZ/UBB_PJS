//1. Napisz funkcję implementującą licznik (każde uruchomienie +1) z wykorzystaniem var i let
var count = 0;
function incrementCounter() {
    var increment = 1;
    count += increment;
    return count;
}
for (var i = 0; i < 10; i++) {
    console.log(incrementCounter());
}
