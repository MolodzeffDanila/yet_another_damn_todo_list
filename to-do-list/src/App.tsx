import { useState } from 'react';
import './App.css';
import { ThemeContext } from './providers/ThemeProvider';
import { MainPage } from './components/mainPage/MainPage';

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={ {theme, setTheme} }>
      <MainPage></MainPage>
    </ThemeContext.Provider>
  );
}

export default App;
