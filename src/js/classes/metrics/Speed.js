import UnitOfSpeed from '../../enums/UnitOfSpeed.js'

class Speed {

    constructor(speed, unitOfSpeed) {
        this.speed = speed;
        this.unitOfSpeed = unitOfSpeed;
    }

    toString() {
        return (this.speed + ' ' + this.unitOfSpeed);
    }
    
}

export default Speed;