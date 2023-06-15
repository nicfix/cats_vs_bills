import {Vector2} from "./math/Vector2";

export default class UserInputBase {

    isCatching(): boolean {
        return false;
    }

    getUserInputSpeedDelta(delta: number, time: number): Vector2 {
        return new Vector2();
    }
}


interface KeyboardEvent {
    key: string;
    isDown: boolean;
    time: number;
}

export class KeyBoardUserInput extends UserInputBase {


    private keyDownEventsMap: { [key: string]: KeyboardEvent } = {};
    private latestCatchEvent: KeyboardEvent | null = null;


    constructor() {
        super();
        window.addEventListener('keydown', (ev) => {

            if (this.keyDownEventsMap[ev.code] === undefined) {
                this.keyDownEventsMap[ev.code] = {key: ev.code, isDown: true, time: new Date().getTime()};
            }

        })
        window.addEventListener('keyup', (ev) => {
            delete this.keyDownEventsMap[ev.code]
        })
    }

    isCatching(): boolean {
        const tolerance = 200;
        const spaceEvent = this.keyDownEventsMap["Space"]

        if (spaceEvent !== undefined) {
            this.latestCatchEvent = spaceEvent;
        }

        return this.latestCatchEvent !== null && new Date().getTime() < this.latestCatchEvent.time + tolerance
    }

    getUserInputSpeedDelta(delta: number, time: number): Vector2 {
        let x = 0;
        if (this.keyDownEventsMap['KeyA'] !== undefined) {
            x -= 1;
        }
        if (this.keyDownEventsMap['KeyD'] !== undefined) {
            x += 1;
        }
        let y = 0;
        if (this.keyDownEventsMap['KeyW'] !== undefined) {
            y -= 1;
        }
        if (this.keyDownEventsMap['KeyS'] !== undefined) {
            y += 1;
        }

        const userDirection = new Vector2(x, y);
        userDirection.scale(20);
        return userDirection;
    }
}


