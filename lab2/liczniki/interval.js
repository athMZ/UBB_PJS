//Za pomocą liczników wykonaj zdarzenie wyświetlania czasu, który upłynął od  startu aplikacji, co 1 sekundę

let timeStart = Date.now();

const interval = setInterval(() => {
    let timeNow = Date.now();
    let deltaT = timeNow - timeStart;
    console.log(deltaT);
}, 1000);