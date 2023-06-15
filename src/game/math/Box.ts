import {Vector2} from "./Vector2";

export default class Box {
    constructor(public topLeft: Vector2, public bottomRight: Vector2) {
    }

    get width() {
        return Math.abs(this.bottomRight.x - this.topLeft.x);
    }

    get height() {
        return Math.abs(this.bottomRight.y - this.topLeft.y);
    }
}