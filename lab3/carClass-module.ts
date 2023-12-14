//8. Przerób klasy car i truck do postaci modułu – zaimportuj klasy
import { Car, Truck } from './module';

let car1 = new Car("Ford", "Mustang", 100000);
let car2 = new Car("Fiat", "Punto", 10000);
let car3 = new Car("Ferrari", "F430", 1000000);

let truck = new Truck("Volvo", "FH16", 500000, 10000);

car1.showCar();
car2.showCar();
car3.showCar();
truck.showCar();