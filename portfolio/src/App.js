//import logo from './logo.svg';
//<img src={logo} className="App-logo" alt="logo" />
import React, { useState } from 'react';
import ButtonBox from "./Components/Buttonbox";
import Button from "./Components/Button";
import './App.css';

const btnValues = ["Educational Background","Work Experience"];

function App() {
  return (
    <div className="header">
      <ButtonBox> {btnValues.flat().map((btn, i) => { return ();}
      </ButtonBox>
      
    </div>
  );
}

export default App;
