import React from "react";
import {Sprite} from "@pixi/react";
import billImg from "./bill.png";
import Bill from "../../game/assets/Bill";

interface IBillSpriteProps {
    bill: Bill;
}

export const BillSprite: React.FC<IBillSpriteProps> = ({bill}) => {
    return <Sprite
        scale={[0.4, 0.4]}
        anchor={0.5}
        image={billImg}
        position={[bill.position.x, bill.position.y]}
    />;
}