"use strict";
//8. Przerób klasy car i truck do postaci modułu – zaimportuj klasy
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Truck = exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    Car.prototype.showCar = function () {
        console.log("Brand: ".concat(this.brand, ", Model: ").concat(this.model, ", Price: ").concat(this.price));
    };
    return Car;
}());
exports.Car = Car;
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(brand, model, price, capacity) {
        var _this = _super.call(this, brand, model, price) || this;
        _this.capacity = capacity;
        return _this;
    }
    Truck.prototype.showCar = function () {
        console.log("Brand: ".concat(this.brand, ", Model: ").concat(this.model, ", Price: ").concat(this.price, ", Capacity: ").concat(this.capacity));
    };
    return Truck;
}(Car));
exports.Truck = Truck;
