"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var module_1 = require("./module");
var car1 = new module_1.Car("Ford", "Mustang", 100000);
var car2 = new module_1.Car("Fiat", "Punto", 10000);
var car3 = new module_1.Car("Ferrari", "F430", 1000000);
var truck = new module_1.Truck("Volvo", "FH16", 500000, 10000);
car1.showCar();
car2.showCar();
car3.showCar();
truck.showCar();