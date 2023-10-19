//Za pomocą liczników wykonaj zdarzenie wyświetlania czasu, który upłynął od  startu aplikacji, co 1 sekundę

let timeStart = Date.now();

console.log(`Time at program start: ${timeStart}`);

const interval = setInterval(() => {
    let timeNow = Date.now();
    let timeElapsed = timeNow - timeStart;
    console.log(`Time elapsed: ${timeElapsed} ms`);
}, 1000);