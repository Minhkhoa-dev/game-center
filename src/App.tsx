import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true);
    }, []);

    return (
        <div className='container'>
            <div className={`welcome-box ${fadeIn ? "fade-in" : ""}`}>
                <h1>Welcome to Our App</h1>
                <p>Your journey starts here. Let's create something amazing together!</p>
                <button className='btn'>Get Started</button>
            </div>
        </div>
    );
}

export default App;
