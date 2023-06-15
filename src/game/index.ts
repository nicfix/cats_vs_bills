import Box from "./math/Box";
import {Vector2} from "./math/Vector2";
import {
    PeriodicallyRandomlyMovingRadialOutWashAirBlower
} from "./assets/blowers/PeriodicallyRandomlyMovingRadialOutWashAirBlower";
import {randomPositionBetweenCircles, randomPositionInBox} from "./utils";
import {PeriodicallyRandomlyMovingRotationalAirBlower} from "./assets/blowers/PeriodicallyRandomlyMovingRotationalAirBlower";
import Bill from "./assets/Bill";
import GameScene from "./GameScene";
import Pet from "./assets/Pet";
import {KeyBoardUserInput} from "./UserInput";

export const buildGame = (
    boxHeight: number,
    boxWidth: number,
    radialBlowersCount: number,
    rotationalBlowersCount: number,
    billsCount: number,
    blowersMovementPeriod: number,
    maxBlowingForce: number,
) => {

    // The box containing the game elements
    const box = new Box(
        new Vector2(-boxWidth / 2, -boxHeight / 2),
        new Vector2(boxWidth / 2, boxHeight / 2)
    )

    // The box where air blowers can be spawn
    // slightly smaller to allow some "border movement"
    const airBlowersBox = new Box(
        new Vector2(-boxWidth / 2, -boxHeight / 2),
        new Vector2(boxWidth / 2, boxHeight / 2)
    )

    // The air blowers array
    const blowers = [];

    // Generating radial blowers (radial linear force field)
    for (let i = 0; i < radialBlowersCount; i++) {
        blowers.push(new PeriodicallyRandomlyMovingRadialOutWashAirBlower(
            randomPositionInBox(
                airBlowersBox
            ),
            Math.random() * maxBlowingForce,
            blowersMovementPeriod,
            airBlowersBox
        ))
    }

    // Generating rotational blowers
    for (let i = 0; i < rotationalBlowersCount; i++) {
        blowers.push(new PeriodicallyRandomlyMovingRotationalAirBlower(
            randomPositionBetweenCircles(
                400, 600
            ),
            Math.random() * maxBlowingForce * 2,
            blowersMovementPeriod,
            airBlowersBox
        ))
    }

    // The bills array
    const bills = [];
    for (let i = 0; i < billsCount; i++) {
        bills.push(new Bill(
            randomPositionInBox(box),
            new Vector2()
        ))
    }

    // Pass it all to the GameScene
    return new GameScene(
        box,
        new Pet(),
        blowers,
        new KeyBoardUserInput(),
        bills
    )
}