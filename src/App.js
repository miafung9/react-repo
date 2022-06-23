import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Accordion from "./components/pages/Accordion/index"
import LinkContainer from './components/navigation/navbar/LinkContainer';
import Counter from './components/counter/Counter';
import User from './components/user/User';
//jsx 
function App() {
  // const [hideLink, setHideLink] = useState(false)

//  const hideLinkHandler = () => {
//   setHideLink(!hideLink)

 
 
  return (
    <div className="App">
      <Accordion/>
      <Counter/>
      <User />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         
        </p>
        { !hideLink ? <LinkContainer/> : null}
        <br />
        <button onClick = {hideLinkHandler}>{hideLink ? "Hide Links" : "Show Links"}</button>
      </header> */}
    </div>
  );
    }

export default App;
