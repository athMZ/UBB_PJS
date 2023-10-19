//Co jedną sekundę wyświetl pięć razy literę ‘a’ w odstępach 10 ms, 

const interval = setInterval(() => {

    let i = 0;
    const interval2 = setInterval(() => {
        console.log('a');
        i++;

        if (i === 5) clearInterval(interval2);
    }, 10);

}, 1000);