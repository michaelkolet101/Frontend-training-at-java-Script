
import React from 'react';
import useState from 'react';

function ToggleText() {
    const [isToggled, setIsToggled] = React.useState(false);

    function handleClick() {
        setIsToggled(!isToggled);
    }

    let status = isToggled ? 'Text is visible' : 'Text is hidden';

    return (
        <div>
            <h1>Toggle Text</h1>
            <button onClick={handleClick}>{status} Text </button>
            {isToggled && <p>הכיתוב נעלם בליצת כפתור</p>}
        </div>
    );
}

export default ToggleText;