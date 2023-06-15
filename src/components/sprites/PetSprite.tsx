import React from "react";
import cat from "./cat.png";
import catJustAte from "./catJustAte.png";
import catTryingToEat from "./catTryingToEat.png";
import {Sprite} from "@pixi/react";
import Pet from "../../game/assets/Pet";
import cashSound from "../../audio/cash.mp3";
import boingSound from "../../audio/boing.mp3";

interface IPetSpriteProps {
    pet: Pet;
    isStatic: boolean;
}



export const PetSprite: React.FC<IPetSpriteProps> = ({pet, isStatic = false}) => {
    let catSprite = cat;

    if (pet.isTryingToCatch) {
        if (pet.canCatch) {
            catSprite = catJustAte;
            if (!isStatic) {
                const eatAudio = new Audio(cashSound);
                eatAudio.volume = 0.3;
                eatAudio.play();
            }
        } else {
            catSprite = catTryingToEat;
        }
    }

    if (pet.wasResetDueToWallCollision && !isStatic) {
        const boingAudio = new Audio(boingSound);
        boingAudio.volume = 0.2;
        boingAudio.play();
        pet.wasResetDueToWallCollision = false;
    }

    if (isStatic) {
        return <Sprite
            scale={[-1 * Math.sign(pet.speed.x) * 0.7, 0.7]}
            anchor={0.5}
            image={catSprite}
            position={[50, 40]}
        />
    }

    return <Sprite
        scale={[-1 * Math.sign(pet.speed.x) * 0.8, 0.8]}
        anchor={0.5}
        image={catSprite}
        position={[pet.position.x, pet.position.y]}
    />
}