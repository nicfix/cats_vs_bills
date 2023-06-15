import {Vector2} from "../math/Vector2";
import {IMovable} from "../physics/IMovable";


export default class Bill implements IMovable {
    constructor(public position: Vector2 = new Vector2(), public speed: Vector2 = new Vector2()) {
    }
}