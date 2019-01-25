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
import screen from './data/screen-index';

const App = () => {
  const [pageIndex, setPageIndex] = useState(debug.entryPoint || screen.welcome);
  const SelectMenu = (value) => {
    switch (value) {
      case screen.welcome: return <WelcomeScreen onClick={() => setPageIndex(screen.intro)} vocabulary={vocabulary} />;
      case screen.intro: return <PlotScreen plot={plot} onClick={() => setPageIndex(screen.main)} vocabulary={vocabulary} />;
      case screen.main: return <MainMenuScreen startNewGame={() => setPageIndex(screen.load)} enterOptionsMenu={() => setPageIndex(screen.option)} vocabulary={vocabulary} />;
      case screen.load: return <LoadingScreen onClick={() => setPageIndex(screen.ingame)} vocabulary={vocabulary} />;
      case screen.ingame: return <IngameUi backToMain={() => setPageIndex(screen.main)} vocabulary={vocabulary} />;
      case screen.option: return <OptionsMenu />;
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
