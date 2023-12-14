//5. Zdefiniuj klasę car, oraz 3 obiekty będące jej instancjami
//6. Dodaj do klasy konstruktor oraz funkcję wyświetlającą opis obiektu
//7. Zdefiniuj klasę truck dziedzicząca z klasy car. Skorzystaj z operatora super

class Car {
    brand: string;
    model: string;
    price: number;

    constructor(brand: string, model: string, price: number) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }

    showCar() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Price: ${this.price}`);
    }
}

class Truck extends Car {

    capacity: number;

    constructor(brand: string, model: string, price: number, capacity: number) {
        super(brand, model, price);
        this.capacity = capacity;
    }

    showCar() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Price: ${this.price}, Capacity: ${this.capacity}`);
    }
}

let car1 = new Car("Ford", "Mustang", 100000);
let car2 = new Car("Fiat", "Punto", 10000);
let car3 = new Car("Ferrari", "F430", 1000000);

let truck = new Truck("Volvo", "FH16", 500000, 10000);

car1.showCar();
car2.showCar();
car3.showCar();
truck.showCar();