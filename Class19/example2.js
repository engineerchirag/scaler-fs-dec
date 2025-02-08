class Car {
    static noOfWheel = 4;
    #trackingId;
    constructor(model, color, price, tax) {
        this.model = model;
        this.color = color;
        this.price = price;
        this.tax = tax;
        this.#trackingId = 1234;
    }

    totalPrice() {
        return this.price + this.tax;
    }
}

class SuperCar extends Car{
    constructor(speed, model, color, price, tax) {
        super(model, color, price, tax);
        this.speed = speed;
    }
}

const Car1 = new SuperCar(400, 'Toyota', 'Red', 10000, 200);

// {
//     model: 'Toyota',
//     color: 'Red',
//     price: 10000,
//     tax: 200,
//     speed: 400
// }
