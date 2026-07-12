import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext'; 

function ThemeToggleButton(){
  // צריכה של ה-Context באמצעות useContext
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      הנושא הנוכחי הוא: {theme} (לחץ להחלפה)
    </button>
  );
};

export default ThemeToggleButton;

