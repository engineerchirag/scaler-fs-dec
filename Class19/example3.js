function Car(model, color, price, tax) {
    this.model = model;
    this.color = color;
    this.price = price;
    this.tax = tax;
}  

Car.prototype.finalPrice = function() {
    return this.price + this.tax;
}


function SuperCar(speed, model, color, price, tax) {
    Car.call(this, model, color, price, tax);
    this.speed = speed;
}

SuperCar.prototype = Object.create(Car.prototype);

const Car1 = new SuperCar(400, 'Toyota', 'Red', 10000, 200);