import React from "react";
import {Container, Stage} from "@pixi/react";
import {PetSprite} from "./sprites/PetSprite";
import {AirBlowerSprite} from "./sprites/AirBlowerSprite";
import {BillSprite} from "./sprites/BillSprite";
import GameScene from "../game/GameScene";

import cat from './sprites/catScared.png';

import bill from './sprites/bill.png';

interface IGameProps {
    gameScene: GameScene;
    time: number;
    boxWidth: number;
    boxHeight: number;
    headerHeight: number;
    billsCount: number;
    maxBlowingForce: number;
    maxGameTime: number;
}

export const Game: React.FC<IGameProps> = ({
                                               gameScene, time,
                                               boxWidth,
                                               boxHeight,
                                               headerHeight,
                                               billsCount,
                                               maxBlowingForce,
                                               maxGameTime
                                           }) => {
    return <div style={{
        display: "flex",
        width: '100vw',
        height: '100vh',
        alignItems: 'flex-start',
        justifyContent: 'center',
        background: 'black',
    }}>
        <div style={{padding: '20px', color: 'white', display: 'flex', alignItems: 'center'}}>
            <h2>WASD to move&nbsp;</h2>
            <img alt={"a cat"} src={cat} style={{height: '40px'}}/>
        </div>
        <div style={{background: '#eef1f5', borderLeft: '3px solid white', borderRight: '3px solid white'}}>

            <div style={{
                display: "flex",
                width: `${boxWidth}px`,
                height: `${headerHeight}px`,
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'black',
                borderLeft: '5px solid black',
                borderRight: '5px solid black',

            }}>
                <div style={{marginLeft: '15px', width: '150px'}}>
                    <span style={{
                        color: 'green',
                        fontSize: '36pt',
                        fontWeight: 'bold',
                    }}>{gameScene.caughtBills.length}</span><span
                    style={{color: 'white', fontSize: '16pt'}}>/{billsCount}</span>
                </div>
                <div>
                    <Stage width={100} height={80} options={{
                        backgroundAlpha: 0,
                        antialias: true,
                    }}>
                        <Container x={0} y={0}>
                            <PetSprite pet={gameScene.pet} isStatic={true}/>
                        </Container>
                    </Stage>
                </div>
                <div style={{
                    marginRight: '15px',
                    fontSize: '36pt',
                    color: 'red',
                    textAlign: 'right',
                    fontWeight: 'bold', width: '150px'
                }}>
                    {maxGameTime - Math.round(time)}
                </div>
            </div>


            <Stage style={{

                borderLeft: '5px solid black',
                borderRight: '5px solid black',
                borderBottom: '5px solid black',

            }} width={boxWidth} height={boxHeight} options={{
                backgroundAlpha: 0,
                antialias: true,
            }}>
                <Container x={boxWidth / 2} y={boxHeight / 2}>

                    <PetSprite pet={gameScene.pet} isStatic={false}/>
                    {
                        gameScene.blowers.map(
                            blower => <AirBlowerSprite blower={blower} time={time}
                                                       max_blowing_force={maxBlowingForce}/>
                        )
                    }
                    {
                        gameScene.bills.map(
                            bill => <BillSprite bill={bill}/>
                        )
                    }
                </Container>
            </Stage>
        </div>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '20px',
            color: 'white',
            height: '95vh'
        }}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <h2>SPACE to catch&nbsp;</h2>
                <img src={bill} alt={"a bill"} style={{height: '40px'}}/>
            </div>

            <div>
                <h3>Credits</h3>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                    <div style={{width: '50px'}}><img src={bill} alt={"a bill"} style={{height: '40px'}}/></div>
                    &nbsp;by&nbsp;<a href="https://kenney.nl/assets/generic-items" target="_blank" rel="noreferrer">kenney.nl</a>
                </div>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                    <div style={{width: '50px'}}><img src={cat} alt={"a cat"} style={{height: '40px'}}/></div>
                    &nbsp;by&nbsp;<a
                    href="https://www.pngfind.com/mpng/iTTTwhT_cat-sprite-png-2d-game-cat-character-transparent/"
                    target="_blank" rel="noreferrer">pngfind</a>
                </div>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                    <div style={{width: '50px'}}><span style={{fontSize: '40px'}}>🧑‍💻</span></div>
                    &nbsp;by&nbsp; <a
                    href="https://github.com/nicfix" target="_blank" rel="noreferrer">@nicfix</a>
                </div>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                    <div style={{width: '50px'}}><span style={{fontSize: '40px'}}>🔡</span></div>
                    &nbsp;by&nbsp; <a
                    href="https://fonts.google.com/specimen/Press+Start+2P" target="_blank" rel="noreferrer">google</a>
                </div>
            </div>
        </div>
    </div>
}