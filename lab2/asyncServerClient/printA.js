async function displayAs() {
    for (let i = 0; i < 5; i++) {
        console.log('a');

        await new Promise(resolve => setTimeout(resolve, 10));
    }
}

async function displayLoop() {
    while (true) {
        await displayAs();

        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

displayLoop();