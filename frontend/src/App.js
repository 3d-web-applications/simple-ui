import './App.css';
import './abilities.css';
// import './screens/input-screen.css'
import './colors.css';

import React from 'react';
import { useState } from 'react';

import { WelcomeScreen } from './screens/welcome-screen';
import { PlotScreen } from './screens/plot-screen';
import { MainMenuScreen } from './screens/main-menu-screen';
import { LoadingScreen } from './screens/loading-screen';
import { IngameUi } from './screens/ingame-screen';

import plot from './data/plot';

const App = () => {
  const [pageIndex, setPageIndex] = useState(1);

  const enterPrologue = () => {
    setPageIndex(2);
  }

  const enterMainMenu = () => {
    setPageIndex(3);
  }

  const enterLoadingScreen = () => {
    setPageIndex(4);
  }

  const enterNewGame = () => {
    setPageIndex(5);
  }

  const SelectMenu = (value) => {
    switch (value) {
      case 1: return <WelcomeScreen onClick={enterPrologue} />;
      case 2: return <PlotScreen plot={plot} onClick={enterMainMenu} />;
      case 3: return <MainMenuScreen startNewGame={enterLoadingScreen} />;
      case 4: return <LoadingScreen onClick={enterNewGame} />;
      case 5: return <IngameUi backToMain={enterMainMenu}/>;
      default: return null;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {SelectMenu(pageIndex)}
      </header>
    </div>
  );
}

export default App;