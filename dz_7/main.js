class Cars {
    constructor(model, color, wheels) {
        this.model = model;
        this.color = color;
        this.wheels = wheels;
    }

    start() {
        console.log('Машина заведена');
    }
}

class SportsCar extends Cars {
    constructor(model, color, wheels, topSpeed) {
        super(model, color, wheels);
        this.topSpeed = topSpeed;
    }
}

class Truck extends Cars {
    constructor(model, color, wheels, loadCapacity) {
        super(model, color, wheels);
        this.loadCapacity = loadCapacity;
    }
}

class ElectricCar extends Cars {
    constructor(model, color, wheels, batteryCapacity) {
        super(model, color, wheels);
        this.batteryCapacity = batteryCapacity;
    }
}

const sportsCar = new SportsCar('Ferrari', 'Red', 4, 350);
const truck = new Truck('Volvo', 'Blue', 6, 10000);
const electricCar = new ElectricCar('Tesla', 'White', 4, '100 kWh');

sportsCar.start();
truck.start();
electricCar.start();



function setLight(color) {
    const lights = document.querySelectorAll('.light');
    lights.forEach(light => light.classList.remove('active'));

    const messageElement = document.querySelector('.message');
    let message = '';

    if (color.toLowerCase() === 'красный') {
        document.querySelector('.red').classList.add('active');
        message = 'СТОП';
    } else if (color.toLowerCase() === 'желтый') {
        document.querySelector('.yellow').classList.add('active');
        message = 'ЖДИ';
    } else if (color.toLowerCase() === 'зеленый') {
        document.querySelector('.green').classList.add('active');
        message = 'ИДИ';
    } else {
        message = 'Некорректный цвет';
    }

    messageElement.textContent = message;
}

const color = prompt('Введите цвет (Красный, Желтый или Зеленый):');
setLight(color);
