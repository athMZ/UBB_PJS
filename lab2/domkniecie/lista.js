class List {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    displayItems() {
        process.nextTick(() => {

            console.log('List contents:');
            this.items.forEach((item) => {
                console.log(`> ${item}`);
            });

        });
    }
}

const myList = new List();
myList.addItem('Element nr 1');
myList.addItem('Element nr 2');
myList.addItem('Element nr 3');
myList.addItem('Element nr 4');
myList.addItem('Mikołaj Zuziak');

myList.displayItems();