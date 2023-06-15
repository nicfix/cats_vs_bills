import {Vector2} from "./math/Vector2";
import Box from "./math/Box";

export function randomIntFromInterval(min: number, max: number): number { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function randomPositionInBox(box: Box): Vector2 {
    return new Vector2(randomIntFromInterval(box.topLeft.x, box.bottomRight.x), randomIntFromInterval(box.topLeft.y, box.bottomRight.y))
}

export function randomPositionBetweenCircles(innerRadius: number, outerRadius: number, center: Vector2 = new Vector2()): Vector2 {
    const randomRadius = randomIntFromInterval(innerRadius, outerRadius);
    const randomAngle = Math.random() * 2 * Math.PI;
    const relativePos = new Vector2(randomRadius * Math.cos(randomAngle), randomRadius * Math.sin(randomAngle));
    return relativePos.sum(center);
}