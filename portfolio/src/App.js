import './react-bootstrap';
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from './react-bootstrap/Container';
import Header from './Components/Header';
import ContactMeForm from './Components/ContactMe';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';

/**
 * 
 * @returns  
 */
export default function App() {
  //return <ButtonBox buttons={ NAMES }/>;
  return (
    <Container fluid>
      <Header />
      <AboutMe />
      <Skills />
      <ContactMeForm />
    </Container>
    );
}
