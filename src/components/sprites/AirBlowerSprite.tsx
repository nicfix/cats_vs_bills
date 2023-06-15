import AirBlower from "../../game/assets/blowers/AirBlower";
import React from "react";
import {Sprite} from "@pixi/react";
import circleImg from "./circle.png";


interface IAirBlowerSpriteProps {
    blower: AirBlower;
    time: number
    max_blowing_force: number
}


export const AirBlowerSprite: React.FC<IAirBlowerSpriteProps> = ({blower, time, max_blowing_force}) => {
    const currentForce = 0.4 * blower.force / max_blowing_force * (time % 1);


    return <Sprite
        scale={[currentForce, currentForce]}
        anchor={0.5}
        image={circleImg}
        position={[blower.position.x, blower.position.y]}
        alpha={0.05}
    />
};