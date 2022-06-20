import CarType from "../enums/CarType"
import UnitOfSpeed from "../enums/UnitOfSpeed";
import Speed from "./metrics/Speed";

class Director {

    makeRandomCar (builder) {
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }

        function getRandomKey(obj) {
            return Object.values(obj)[getRandomInt(Object.keys(obj).length)];
        }
        
        builder.reset();
        builder.setType(getRandomKey(CarType));
        builder.setColor('#' + Math.floor(Math.random()*16777215).toString(16));

        var speed = new Speed(getRandomInt(200), getRandomKey(UnitOfSpeed));
        builder.setSpeed(speed);

        return builder.getCar();
    }
    
}

export default Director