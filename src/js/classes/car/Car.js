import Speed from '../metrics/Speed';
import CarType from "../../enums/CarType";

class Car {
    
    constructor () {
        this.type = CarType.Electrical;
        this.speed = new Speed();
        this.color = 'White';
    }

    getSpeed () {
        return this.speed.toString();
    }

}

export default Car;