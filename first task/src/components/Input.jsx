import React from "react";
import useState from "react";

function Input() {
  const [inputValue, setInputValue] = React.useState("");


  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <h1>Input</h1>
      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={handleChange}
      />

      <p>Input value: {inputValue}</p>
    </div>
  );
}

export default Input;