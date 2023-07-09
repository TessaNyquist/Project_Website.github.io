import '../react-bootstrap';
import Container from '../react-bootstrap/Container';
import Card from '../react-bootstrap/Card';


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

  export default Header;