//2. Napisz funkcję ze zmienną liczbą atrybutów(operator ...).Wynikiem funkcji jest suma parametrów
function sum() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (a, b) { return a + b; }, 0);
}
console.log(sum(1)); // 1
console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(1, 2, 3, 4, 5, 6)); // 21
console.log(sum(9, 2, 4, 5, 1, 14)); // 35
