//8. Przerób klasy car i truck do postaci modułu – zaimportuj klasy

export class Car {
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

export class Truck extends Car {

    capacity: number;

    constructor(brand: string, model: string, price: number, capacity: number) {
        super(brand, model, price);
        this.capacity = capacity;
    }

    showCar() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Price: ${this.price}, Capacity: ${this.capacity}`);
    }
}