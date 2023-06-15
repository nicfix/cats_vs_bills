import {IWithPosition} from "../../physics/IWithPosition";
import {Vector2} from "../../math/Vector2";
import AirBlower from "./AirBlower";

export default class RadialOutWashAirBlower extends AirBlower {

    getSpeedDeltaOnTarget(target: IWithPosition, delta: number, time: number): Vector2 {
        const diff = target.position.diff(this.position);
        const distance = diff.module();
        const speedDelta = diff.normalized();
        const scale = this.force / (distance > 1 / 1000000 ? distance : 1 / 1000000);
        speedDelta.scale(scale);
        return speedDelta;
    }

    update(delta: number, time: number) {

    }

}


