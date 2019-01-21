# simple-ui
Simple UI made with React

This simple UI will be extended shortly. It will contain React components for single .svg icons as well as for whole menus.
Switching between menus will be done as seen below:
```javascript
const App = () => {
  const [pageIndex, setPageIndex] = useState(1);

  const enterPrologue = () => {
    setPageIndex(2);
  }
  
  const SelectMenu = (value) => {
    switch (value) {
      case 1: return <WelcomeScreen onClick={enterPrologue} />;
      // ...
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
```

