import './App.css';
import './abilities.css';
// import './screens/input-screen.css'
import './colors.css';

import React, { useState } from 'react';

import { WelcomeScreen } from './screens/welcome-screen';
import { PlotScreen } from './screens/plot-screen';
import { MainMenuScreen } from './screens/main-menu-screen';
import { LoadingScreen } from './screens/loading-screen';
import { IngameUi } from './screens/ingame-screen';
import { hideContentMenu } from './util/hide-context-menu';
import { OptionsMenu } from './screens/options-menu';

import debug from './data/debug-settings';
import plot from './data/plot';
import vocabulary from './data/en';

const App = () => {
  const [pageIndex, setPageIndex] = useState(debug.entryPoint || 1);

  const enterPrologue = () => {
    setPageIndex(2);
  };

  const enterMainMenu = () => {
    setPageIndex(3);
  };

  const enterLoadingScreen = () => {
    setPageIndex(4);
  };

  const enterNewGame = () => {
    setPageIndex(5);
  };

  const enterOptionsMenu = () => {
    setPageIndex(6);
  };

  const SelectMenu = (value) => {
    switch (value) {
      case 1: return <WelcomeScreen onClick={enterPrologue} vocabulary={vocabulary} />;
      case 2: return <PlotScreen plot={plot} onClick={enterMainMenu} vocabulary={vocabulary} />;
      case 3: return <MainMenuScreen startNewGame={enterLoadingScreen} enterOptionsMenu={enterOptionsMenu} vocabulary={vocabulary} />;
      case 4: return <LoadingScreen onClick={enterNewGame} vocabulary={vocabulary} />;
      case 5: return <IngameUi backToMain={enterMainMenu} vocabulary={vocabulary} />;
      case 6: return <OptionsMenu />;
      default: return null;
    }
  };

  return (
    <div className="App unselectable-text" onContextMenu={hideContentMenu}>
      <header className="App-header">
        {SelectMenu(pageIndex)}
      </header>
    </div>
  );
};

export default App;
