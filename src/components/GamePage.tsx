import React, {useEffect, useState} from "react";
import {Game} from "./Game";
import {GameOverDialog} from "./GameOverDialog";
import {
    BILLS_COUNT,
    BLOWERS_MOVEMENT_PERIOD,
    BOX_HEIGHT,
    BOX_WIDTH,
    HEADER_HEIGHT,
    MAX_BLOWING_FORCE,
    MAX_GAME_TIME,
    RADIAL_BLOWERS_COUNT,
    ROTATIONAL_BLOWERS_COUNT
} from "./constants";
import {buildGame} from "../game";


const GamePage: React.FC<any> = () => {
    const [{time, highScore, gameScene}, setGameScene] = useState({
        time: 0,
        highScore: parseInt(localStorage.getItem('highScore') || '0'),
        gameScene: buildGame(
            BOX_HEIGHT,
            BOX_WIDTH, RADIAL_BLOWERS_COUNT,
            ROTATIONAL_BLOWERS_COUNT,
            BILLS_COUNT,
            BLOWERS_MOVEMENT_PERIOD,
            MAX_BLOWING_FORCE
        )
    });

    const delta = 1 / 60;
    const gameOver = time >= MAX_GAME_TIME


    useEffect(() => {
        if (gameOver) {
            const score = gameScene.caughtBills.length
            if (score > highScore) {
                localStorage.setItem('highScore', `${score}`);
            }

            return;
        }
        const interval = setTimeout(() => {
            const newTime = time + delta;
            gameScene.update(delta, newTime);
            setGameScene({time: newTime, highScore, gameScene});
        }, delta * 1000);

        return () => clearTimeout(interval);

    }, [delta, gameScene, time, gameOver, highScore]);


    return <>
        {gameOver && <GameOverDialog highScore={highScore} gameScene={gameScene}/>}
        <Game
            gameScene={gameScene}
            time={time}
            boxHeight={BOX_HEIGHT}
            boxWidth={BOX_WIDTH}
            headerHeight={HEADER_HEIGHT}
            billsCount={BILLS_COUNT}
            maxBlowingForce={MAX_BLOWING_FORCE}
            maxGameTime={MAX_GAME_TIME}
        />
    </>
};


export default GamePage;