import React from 'react';
import useState from 'react';

function Toggel() {

    const [isOn, setIsOn] = React.useState(false);

    function handleClick() {
        setIsOn(!isOn);
    }   
    return (
        <div>
            <h1>Toggle</h1>
            <button onClick={handleClick}> {isOn ? 'ON' : 'OFF'} </button>
        </div>
    )
}

export default Toggel