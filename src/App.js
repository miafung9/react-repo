import logo from './logo.svg';
import './App.css';


//jsx 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React - Modified - Finished My Feature
        </a>
      </header>
    </div>
  );
}
//Class name in camelCase to set up name
//Class is reserved keyword - react may allow us to use it
//className attribute to apply CSS style

//<label htmlFor = “name”>
//<input id = “name”/>
//</label>


export default App;
