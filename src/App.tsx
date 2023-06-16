import React, {useEffect, useState} from 'react';
import './App.css';
import GamePage from "./components/GamePage";
import {init} from "console-ban";

//@ts-ignore
window.isFiddlingWithTheConsole = false;
init({
    callback: () => {
        document.dispatchEvent(new Event('consoleFiddling'));
        //@ts-ignore
        window.isFiddlingWithTheConsole = true;
        console.error("You are fiddling with the console, Shame on you!");
    }
});

// @ts-ignore
function AntiConsole({children}) {
    //@ts-ignore
    const [isFiddlingWithTheConsole, setIsFiddlingWithTheConsole] = useState(window.isFiddlingWithTheConsole);
    useEffect(() => {
        document.addEventListener('consoleFiddling', () => {
            setIsFiddlingWithTheConsole(true);

        });
    })

    if (isFiddlingWithTheConsole) {
        return <div
            style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                height: '100vh', width: '100vws',
                paddingLeft: '100px',
                paddingRight: '100px',
                flexDirection: 'column'
            }}
        >
            <h2>You are fiddling with the console!</h2>
            <h1 style={{color: 'red'}}>Shame on you!</h1>
        </div>
    }

    return <>{children}</>
}


function App() {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, [])

    return (
        <AntiConsole>
            <div>
                {isLoading ? <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100vw',
                        height: '100vh',
                        background: 'rgb(0,0,0)',
                        color: 'white'
                    }}>
                    <h1>Loading..</h1>
                </div> : <GamePage/>}
            </div>
        </AntiConsole>
    );
}

export default App;
