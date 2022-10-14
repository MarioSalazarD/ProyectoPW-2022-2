import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';



const CardMenuSH = (props) => {
    
  const { id, title, href } = props;
  return(
    <Card style={{ width: '30rem', 'margin-left': '2rem', 'margin-bottom': '0.5rem' }}>
    <Row className="g-0"> 
    <Col md={8}>
    <Card.Body>
       <Button href = {href} style={{ width: '10rem', 'margin-left': '2rem', 'background-color': 'white', 'color':'black', 'border':'0', 'font-size': '12px' }} > <b>{title}</b> </Button>

    </Card.Body>
    </Col>
    </Row>
  </Card>
  );
  


}



export default CardMenuSH