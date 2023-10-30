async function displayElapsedTime() {
    let startTime = Date.now();
    while (true) {
        let elapsedTime = Date.now() - startTime;
        console.log(`Elapsed time: ${elapsedTime} ms`);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

displayElapsedTime();