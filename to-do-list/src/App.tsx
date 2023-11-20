import { useState } from 'react';
import './App.css';
import { ThemeContext } from './providers/ThemeProvider';
import { MainPage } from './components/mainPage/MainPage';
import React from 'react';

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={ {theme, setTheme} }>
      <React.Fragment>
        <MainPage/>
      </React.Fragment>
    </ThemeContext.Provider>
  );
}

export default App;
