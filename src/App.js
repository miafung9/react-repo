import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Link from './components/Link'
import LinkContainer from './components/LinkContainer';

//jsx 
function App() {
  const [hideLink, setHideLink] = useState(false)

 const hideLinkHandler = () => {
  setHideLink(!hideLink)

 }
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        { !hideLink ? <LinkContainer/> : null}
        <br />
        <button onClick = {hideLinkHandler}>{hideLink ? "Hide Links" : "Show Links"}</button>
      </header>
    </div>
  );
}

export default App;
