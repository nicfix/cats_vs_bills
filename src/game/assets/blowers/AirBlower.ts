import {Vector2} from "../../math/Vector2";
import {IWithPosition} from "../../physics/IWithPosition";


export default class AirBlower implements IWithPosition {
    constructor(public position: Vector2 = new Vector2(), public force: number = 500) {
    }

    getSpeedDeltaOnTarget(target: IWithPosition, delta: number, time: number): Vector2 {
        return new Vector2();
    }

    update(delta: number, time: number) {

    }
}


