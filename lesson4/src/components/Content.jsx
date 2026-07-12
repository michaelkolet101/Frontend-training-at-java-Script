import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function  Content() {
  // כאן אנחנו צורכים את ה-theme מתוך ה-Context
  const { theme } = useContext(ThemeContext);

  // הגדרת סגנונות לפי הנושא
  const containerStyle = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
    color: theme === 'light' ? '#000000' : '#ffffff',
    padding: '40px',
    transition: 'all 0.3s ease', // אפקט מעבר נעים
    minHeight: '100vh'
  };

  return (
    <div style={containerStyle}>
      <h1>ברוכים הבאים לאפליקציה!</h1>
      <p>כעת מצב התצוגה הוא: <strong>{theme}</strong></p>
      <p>העיצוב של הרכיב הזה משתנה באופן אוטומטי בהתאם לבחירה שלך.</p>
    </div>
  );
};

export default Content;