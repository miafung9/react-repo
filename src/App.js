import React from 'react'
// import {useState} from 'react'
// import logo from './logo.svg';
import './App.css';
import Accordion from "./components/pages/Accordion/index"
import Counter from './components/counter/Counter';
import User from './components/user/User';
import UserCard from './components/user/UserCard';
import CreateAccount from './components/authorization/CreateAccount';
// import UserCard from './components/user/UserCard';
// import SearchUser from './components/user/SearchUser';


function App() {
return (
  <div className="App">
    <Accordion/>
    <br/>
    <Counter/>
    <br/>
    <User />
    <br/>
    <CreateAccount/>
    <br/>
  
  </div>
);
  }

export default App;

