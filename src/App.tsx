import React, {useEffect, useState} from 'react';
import './App.css';
import GamePage from "./components/GamePage";

function App() {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, [])

    return (
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
    );
}

export default App;
