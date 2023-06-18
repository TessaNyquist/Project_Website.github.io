//import logo from './logo.svg';
//<img src={logo} className="App-logo" alt="logo" />
//import React, { useState } from 'react';
//import ButtonBox from "./Components/Buttonbox";
//import Button from "./Components/Button";
//import Navbar from "./Components/ContainerInsideExample";
import './App.css';

/*function Button ({value}) {
  return (
  <button> 
    {value} 
  </button>);
}
*/

/*function ButtonBox ({ buttons}) {
  //buttons.forEach( <Button value={text} /> );  
  return (
    <title> Portfolio </title>
  );
}
*/

function AboutMe (){
  let bio = "A native Northern Virginian, I completed my B.A. in political science and B.S. in computer science from James Madison University (JMU) in 2022, and received the NSA Information Systems Security Professionals Certification.  While attending JMU, I assisted fellow students navigate the university’s disciplinary process while I served on the executive board of Student  Defenders. Currently, I am serving as a legal assistant at an employment law firm in Washington, D.C., where I assist prospective clients in navigating the firm’s intake process, while leveraging my background in computer science to automate processes. I am passionate about serving back in the community I grew up in and is interested in pursuing opportunities in the tech industry in the Washington, D.C. metro.";
  return (
    <div>
      <h2> About Me</h2>

      <p>{bio}</p>
    </div>
  );
  //  <h2 style={{ fontFamily: '"Times New Roman", Times' }}> 
  //  <img class="w3-image" src="Images/Tessa-Banner.png"width="1500" height="800">
  //  <p>A native Northern Virginian, I completed my B.A. in political science and B.S. in computer science from James Madison University (JMU) in 2022, and received the NSA Information Systems Security Professionals Certification. While attending JMU, I assisted fellow students navigate the university’s disciplinary process while I served on the executive board of Student Defenders. Currently, I am serving as a legal assistant at an employment law firm in Washington, D.C., where I assist prospective clients in navigating the firm’s intake process, while leveraging my background in computer science to automate processes. I am passionate about serving back in the community I grew up in and is interested in pursuing opportunities in the tech industry in the Washington, D.C. metro.  </p>
  //);
}

//const NAMES = [{Text: "Education"}, {text: "Work Experience"}];

export default function App() {
  //return <ButtonBox buttons={ NAMES }/>;
  return <AboutMe />;
}
