var car1 = {
    year: 2000,
    make: 'Ford',
    model: 'Fusion',
    getInfo: function () {
        return 'Vehicle: ' + this.year + ' ' + this.make + ' ' + this.model;
    }
};

var car2 = {
    year: 2010,
    make: 'BMW',
    model: 'Z4',
    getInfo: function () {
        return 'Vehicle: ' + this.year + ' ' + this.make + ' ' + this.model;
    }
};

function getVehicle(theYear, theMake, theModel) {
    var vehicle = new Object();
    vehicle.year = theYear;
    vehicle.make = theMake;
    vehicle.model = theModel;
    vehicle.getInfo = function () {
        return 'Vehicle: ' + this.year + ' ' + this.make + ' ' + this.model;
    };
    return vehicle;
}
// function Vehicle(theYear, theMake, theModel) {
//     var year = theYear;
//     var make = theMake;
//     var model = theModel;
//     this.getYear = function () { 
//         return year; 
//     };
//     this.getMake = function () { 
//         return make; 
//     };
//     this.getModel = function () { 
//         return model; 
//     };
// }
// Vehicle.prototype.getInfo = function () {
//     return 'Vehicle: ' + this.getYear() + ' ' + this.getMake() + ' ' + this.getModel();
// }
var Vehicle = (function () {
    function Vehicle(year, make, model) {
        this.year = year;
        this.make = make;
        this.model = model;
    }
    Vehicle.prototype.getInfo = function () {
        return this.year + ' ' + this.make + ' ' + this.model;
    };
    Vehicle.prototype.startEngine = function () {
        return 'Vroom';
    };
    return Vehicle;
})();
var Car = (function (parent) {
    Car.prototype = new Vehicle();
    Car.prototype.constructor = Car;
    function Car(year, make, model) {
        parent.call(this, year, make, model);
        this.wheelQuantity = 4;
    }
    Car.prototype.getInfo = function () {
        return 'Vehicle Type: Car ' + parent.prototype.getInfo.call(this);
    };
    return Car;
})(Vehicle);
var Boat = (function (parent) {
    Boat.prototype = new Vehicle();
    Boat.prototype.constructor = Boat;
    function Boat(year, make, model) {
        parent.call(this, year, make, model);
        this.propellerBladeQuantity = 3;
    }
    Boat.prototype.getInfo = function () {
        return 'Vehicle Type: Boat ' + parent.prototype.getInfo.call(this);
    };
    return Boat;
})(Vehicle);