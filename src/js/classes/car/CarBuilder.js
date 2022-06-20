import Speed from '../metrics/Speed';
import Car from './Car';

class CarBuilder {

    reset() {
        this.car = new Car();
    }

    constructor () {
        this.reset();
    }

    setType(type) {
        this.car.type = type;
    }

    setSpeed(speed) {
        this.car.speed = speed;
    }

    setColor(color) {
        this.car.color = color;
    }

    setId(id){
        this.car.id = id;
    }

    getCar() {
        return this.car;
    }

}

export default CarBuilder;