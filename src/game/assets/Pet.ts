import {Vector2} from "../math/Vector2";
import {IMovable} from "../physics/IMovable";

class Pet implements IMovable {
    constructor(public position: Vector2 = new Vector2(), public speed: Vector2 = new Vector2(), public canCatch: boolean = false, public isTryingToCatch: boolean = false, public wasResetDueToWallCollision: boolean = false) {
    }
}

export default Pet;