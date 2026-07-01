import React from 'react';
import useState from 'react';


function Counter(props) {

    const [count, setCount] = React.useState(0);

    function handleClick() {

        // alert('Button clicked!');
        setCount(count + 1);
    }
    
    return (
        <div>
            <h1>Counter of {props.name}</h1>
            <button onClick={handleClick}>Click me!</button>
            <p>Count: {count}</p>
        </div>
    );
}
export default Counter;
