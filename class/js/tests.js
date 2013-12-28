test( "hello test", function() {
	ok( 1 == "1", "Passed!" );
});
test("Object Literal Test", function () {
    expect(2);
    var expected = 'Vehicle: 2000 Ford Fusion';
    var actual = car1.getInfo();
    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
    var expected = 'Vehicle: 2010 BMW Z4';
    var actual = car2.getInfo();
    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
});
test("Create Instances Test Using Factory Pattern", function () {
    expect(2);
    var car1 = getVehicle(2000, 'Ford', 'Fusion');
    var car2 = getVehicle(2010, 'BMW', 'Z4');
    var expected = 'Vehicle: 2000 Ford Fusion';
    var actual = car1.getInfo();
    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
    var expected = 'Vehicle: 2010 BMW Z4';
    var actual = car2.getInfo();
    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
});
// test("Instance Test Using Prototype", function () {
//     expect(2);
//     var car1 = new Vehicle(2000, 'Ford', 'Fusion');
//     var car2 = new Vehicle(2010, 'BMW', 'Z4');
//     var expected = 'Vehicle: 2000 Ford Fusion';
//     var actual = car1.getInfo();
//     equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
//     var expected = 'Vehicle: 2010 BMW Z4';
//     var actual = car2.getInfo();
//     equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
// });
// test("Instance Test Using Prototype and getters", function () {
//     expect(4);
//     var car1 = new Vehicle(2000, 'Ford', 'Fusion');
//     var car2 = new Vehicle(2010, 'BMW', 'Z4');
//     var expected = 'Vehicle: 2000 Ford Fusion';
//     var actual = car1.getInfo();
//     equal(actual, expected, 'Expected value: ' + expected +
//         '  Actual value: ' + actual);
//     var expected = 'Vehicle: 2010 BMW Z4';
//     var actual = car2.getInfo();
//     equal(actual, expected, 'Expected value: ' + expected +
//         '  Actual value: ' + actual);
//     Vehicle.prototype.getInfo = function () {
//         return 'Car Year: ' + this.getYear()
//             + ' Make: ' + this.getMake()
//             + ' Model: ' + this.getModel();
//     };
//     var expected = 'Car Year: 2000 Make: Ford Model: Fusion';
//     var actual = car1.getInfo();
//     equal(actual, expected, 'Expected value: ' + expected +
//         '  Actual value: ' + actual);
//     var expected = 'Car Year: 2010 Make: BMW Model: Z4';
//     var actual = car2.getInfo();
//     equal(actual, expected, 'Expected value: ' + expected +
//         '  Actual value: ' + actual);
// });
test('Vehicle Inheritance Test', function () {
    expect(2);
    var v = new Vehicle(2012, 'Toyota', 'Rav4');
    var actual = v.getInfo();
    var expected = '2012 Toyota Rav4';
        equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
    var actual = v.startEngine();
    var expected = 'Vroom';
    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
});
test('Car Inheritance Test', function () {
    expect(6);
    var c = new Car(2012, 'Toyota', 'Rav4');
    var actual = c.year;
    var expected = 2012;
    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
    var actual = c.make;
    var expected = 'Toyota';
    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
    var actual = c.model;
    var expected = 'Rav4';
    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
    var actual = c.wheelQuantity;
    var expected = 4;
    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
    var actual = c.getInfo();
    var expected = 'Vehicle Type: Car 2012 Toyota Rav4';
    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
    var actual = c.startEngine();
    var expected = 'Vroom';
    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
});

test('Boat Inheritance Test', function () {
    expect(6);
    var b = new Boat(1994, 'Sea Ray', 'Signature 200');
    var actual = b.year;
    var expected = 1994;
    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
    var actual = b.make;
    var expected = 'Sea Ray';
    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
    var actual = b.model;
    var expected = 'Signature 200';
    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
    var actual = b.propellerBladeQuantity;
    var expected = 3;
    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
    var actual = b.getInfo();
    var expected = 'Vehicle Type: Boat 1994 Sea Ray Signature 200';
    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
    var actual = b.startEngine();
    var expected = 'Vroom';
    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
});