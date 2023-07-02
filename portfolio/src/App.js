import './App.css';
//import {ReactComponent as Logo} from './Logo.svg';
import TessaBanner from './TessaBanner.png';
import Container from './react-bootstrap/Container';
import Card from './react-bootstrap/Card';
import Row from './react-bootstrap/Row';
import Button from './react-bootstrap/Button';
import Form from './react-bootstrap/Form';
//import Col from './react-bootstrap/Col';





//import ButtonGroup from './react-bootstrap/ButtonGroup';
//import Accordion from './react-bootstrap/Accordion';

/**
 * This method outlines the AboutMe section of my Webpage.
 * 
 * @returns 
 */
function AboutMe (){
  let bio = "A native Northern Virginian, I completed my B.A. in political science and B.S. in computer science from James Madison University (JMU) in 2022, and received the NSA Information Systems Security Professionals Certification.  While attending JMU, I assisted fellow students navigate the university’s disciplinary process while I served on the executive board of Student  Defenders. Currently, I am serving as a legal assistant at an employment law firm in Washington, D.C., where I assist prospective clients in navigating the firm’s intake process, while leveraging my background in computer science to automate processes. I am passionate about serving back in the community I grew up in and is interested in pursuing opportunities in the tech industry in the Washington, D.C. metro.";
  return (
    <Container>
      <Card className="bg-dark text-white"> 
        <Card.Header>About Me</Card.Header>
        <Card.Img variant="top" src={TessaBanner} />
        <Card.Body>
          <Card.Text>
            {bio}
          </Card.Text>
        </Card.Body>
      </Card> 
    </Container>
  );
}

/**
 * 
 * @returns 

 */
function Header() {
  return (  
    <Container>
      <Card className="bg-dark text-white"> 
        <Card.Header>PlaceHolder for Navbar</Card.Header>
      </Card> 
    </Container>
  );
}


/**
 * This method currently outlines the ContactMe method at the bottom of my webpage.
 * @returns 
 */
function ContactMe() {
  return (  
    <Container fluid>
      <Row> 
        Email
      </Row>
      <Row>
        Name
      </Row>
      <Row>
        Message
      </Row>
    </Container>);
}

/**
 * This method currently outlines the ContactMe method at the bottom of my webpage.
 * @returns 
 */
function ContactMeForm() {
  return (  
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

/**
 * 
 * @returns 
 */
/*function Experience() {
  return (
    //<div className="d-grid gap-2">
    <Row className="d-lg-row gap-2">
      <ButtonGroup size="lg" className="mb-2 gap-4">
      </ButtonGroup>
    </Row>
    //</div>
  );
}
*/


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
      <ContactMe />
      <ContactMeForm />
    </Container>
    );
}
