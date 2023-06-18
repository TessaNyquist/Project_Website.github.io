
import './App.css';
//import {ReactComponent as Logo} from './Logo.svg';
import TessaBanner from './TessaBanner.png';
import Container from './react-bootstrap/Container';
//import Image from './react-bootstrap/Image';
import Figure from './react-bootstrap/Figure';
import Row from './react-bootstrap/Row';
import Col from './react-bootstrap/Col';


function AboutMe (){
  let bio = "A native Northern Virginian, I completed my B.A. in political science and B.S. in computer science from James Madison University (JMU) in 2022, and received the NSA Information Systems Security Professionals Certification.  While attending JMU, I assisted fellow students navigate the university’s disciplinary process while I served on the executive board of Student  Defenders. Currently, I am serving as a legal assistant at an employment law firm in Washington, D.C., where I assist prospective clients in navigating the firm’s intake process, while leveraging my background in computer science to automate processes. I am passionate about serving back in the community I grew up in and is interested in pursuing opportunities in the tech industry in the Washington, D.C. metro.";
  return (
    <Container>
      <Row> About Me</Row>
      <Figure>
        <Figure.Image 
          src={TessaBanner} 
          alt="TessaNyquist"
        />
        <Figure.Caption>
          {bio}
        </Figure.Caption>
      </Figure>
    </Container>
  );
}

//const NAMES = [{Text: "Education"}, {text: "Work Experience"}];
function Header() {
  return (  
    <Container>
      <Row>
        <Col>Header </Col>
      </Row>
    </Container>);
}


export default function App() {
  //return <ButtonBox buttons={ NAMES }/>;
  return (
    <Container>
      <Header />
      <AboutMe />
    </Container>
    );
}
