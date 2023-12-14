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
//5. Zdefiniuj klasę car, oraz 3 obiekty będące jej instancjami
//6. Dodaj do klasy konstruktor oraz funkcję wyświetlającą op
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
//7. Zdefiniuj klasę truck dziedzicząca z klasy car. Skorzystaj z operatora super
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
var car1 = new Car("Ford", "Mustang", 100000);
var car2 = new Car("Fiat", "Punto", 10000);
var car3 = new Car("Ferrari", "F430", 1000000);
var truck = new Truck("Volvo", "FH16", 500000, 10000);
car1.showCar();
car2.showCar();
car3.showCar();
truck.showCar();
