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
import {
  Welcome, Intro, Main, Load, Ingame, Option,
} from './data/screen-index';

import debug from './data/debug-settings';
import plot from './data/plot';
import vocabulary from './data/en';

const App = () => {
  const [pageIndex, setPageIndex] = useState(debug.entryPoint || Welcome);
  const SelectMenu = (value) => {
    switch (value) {
      case Welcome: return <WelcomeScreen onClick={() => setPageIndex(Intro)} vocabulary={vocabulary} />;
      case Intro: return <PlotScreen plot={plot} onClick={() => setPageIndex(Main)} vocabulary={vocabulary} />;
      case Main: return <MainMenuScreen startNewGame={() => setPageIndex(Load)} enterOptionsMenu={() => setPageIndex(Option)} vocabulary={vocabulary} />;
      case Load: return <LoadingScreen onClick={() => setPageIndex(Ingame)} vocabulary={vocabulary} />;
      case Ingame: return <IngameUi backToMain={() => setPageIndex(Main)} vocabulary={vocabulary} />;
      case Option: return <OptionsMenu />;
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
