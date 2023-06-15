import {PeriodicallyRandomlyMovingRadialOutWashAirBlower} from "./PeriodicallyRandomlyMovingRadialOutWashAirBlower";
import {IWithPosition} from "../../physics/IWithPosition";
import {Vector2} from "../../math/Vector2";

export class PeriodicallyRandomlyMovingRotationalAirBlower extends PeriodicallyRandomlyMovingRadialOutWashAirBlower {

    getSpeedDeltaOnTarget(target: IWithPosition, delta: number, time: number): Vector2 {
        const diff = target.position.diff(this.position);
        const distance = diff.module();
        const rotationalDiff = new Vector2(diff.y, diff.x);
        const speedDelta = rotationalDiff.normalized();
        const scale = this.force / (distance > 1 / 1000000 ? distance : 1 / 1000000);
        speedDelta.scale(scale);
        return speedDelta;
    }
}