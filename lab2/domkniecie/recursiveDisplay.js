function display(items, index = 0) {
    if (index >= items.length) return;

    process.nextTick(() => {
        console.log(`> ${items[index]}`);
        display(items, index + 1);
    });
}

const sampleTab = ['Mikołaj', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'Zuziak'];

display(sampleTab);