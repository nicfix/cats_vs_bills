import React from "react";
import GameScene from "../game/GameScene";
import Pet from "../game/assets/Pet";

interface IGameOverDialogProps {
    gameScene: GameScene;
    highScore: number;
}

export const GameOverDialog: React.FC<IGameOverDialogProps> = ({gameScene, highScore}) => {
    const score = gameScene.caughtBills.length;

    const pet = new Pet();
    pet.isTryingToCatch = true;

    return <div style={{
        position: 'fixed',
        width: '101vw',
        height: '101vh',
        background: 'rgba(0,0,0,0.9)',
        color: 'white',
        zIndex: 999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <div
            style={{
                textAlign: 'center',
            }}
        >
            <h1>Game Over</h1>

            <h2>You collected {gameScene.caughtBills.length} bills!</h2>
            {score > highScore && <h2 style={{color: 'red'}}>New High Score</h2>}
            <button
                style={{
                    background: "green",
                    border: '2px solid white',
                    color: "white",
                    marginRight: '10px',
                    marginTop:'60px',
                    padding: '10px',
                    minWidth: '100px',
                    fontWeight: 'bold',
                    fontSize: '20pt',
                    cursor: "pointer"
                }}
                onClick={() => {
                    window.location.reload()
                }}>$ Restart $
            </button>

        </div>
    </div>
}