import {Vector2} from "../../math/Vector2";
import Box from "../../math/Box";
import {randomPositionInBox} from "../../utils";
import RadialOutWashAirBlower from "./RadialOutWashAirBlower";

export class PeriodicallyRandomlyMovingRadialOutWashAirBlower extends RadialOutWashAirBlower {

    private lastMovementTimestamp: number = 0;

    constructor(
        public position: Vector2 = new Vector2(),
        public force: number = 500,
        public movementPeriod: number,
        public boundaries: Box
    ) {
        super(position, force);
    }

    update(delta: number, time: number) {
        super.update(delta, time);

        const lastMovementDelta = time - this.lastMovementTimestamp;
        if (lastMovementDelta >= this.movementPeriod) {
            this.position = randomPositionInBox(this.boundaries);
            this.lastMovementTimestamp = time;
        }
    }
}