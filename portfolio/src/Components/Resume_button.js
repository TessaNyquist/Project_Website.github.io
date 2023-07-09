//import ButtonGroup from "../react-bootstrap/ButtonGroup";
//import React from "react";
import Button from "../react-bootstrap/Button";
import Container from '../react-bootstrap/Container';
//<button class="btn"><i class="fa fa-download"></i> Download Resumè </button>

function ResumeButton() {
    return(
        <Container>
        <h3>Download Resumè </h3>    
            <Button variant="outline-dark">
                Dark outline Button
            </Button>
        </Container>
    );
}

export default ResumeButton;