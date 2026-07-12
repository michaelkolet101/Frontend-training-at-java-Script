import React from "react";

import { ThemeProvider } from './components/ThemeProvider';
import ThemeToggleButton from './components/ThemeToggleButton';
import MainContent from './components/Content';

export function App() {
  

  return (
    <div> 
      <ThemeProvider>
      <div className="App">
        <h1>האפליקציה שלי</h1>
        <ThemeToggleButton />
        <MainContent />
      </div>
    </ThemeProvider>
      
    </div>
    );
}
