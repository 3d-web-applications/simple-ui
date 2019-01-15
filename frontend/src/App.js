import './App.css';
import React from 'react';
import Progress from 'react-progressbar';

const App = () => {
    return (
      <div className="App">
        <header className="App-header">
          <Progress completed={60}/>
          <p>
            The UI is coming soon.
          </p>
        </header>
      </div>
    );
}

export default App;