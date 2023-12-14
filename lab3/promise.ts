//9. Wykorzystaj await/promise do zaimplementowania funkcji asynchronicznej

function asyncFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Async Hello world');
        }, 3000);
    });
}

async function start() {
    console.log('Start...');

    const message = await asyncFunction();
    console.log(message);
}

start();