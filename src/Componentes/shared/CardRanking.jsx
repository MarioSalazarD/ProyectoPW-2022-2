import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';



const CardRanking = (props) => {
    
  const { id, title, srcimg, description } = props;
  return(
    <Card style={{ width: '60rem', 'margin-left': '2rem', 'margin-bottom': '0.5em' }}>
    <Row className="g-0">
    <Col md={4}>   
        <Card.Img style={{width: '5rem', 'margin-left': '10rem'}} variant="top" src={ srcimg } />
    </Col> 
    <Col md={8}>
        <Card.Body>
        <Card.Title style={{ width: '70rem', 'margin-left': '2rem', 'text-align': 'left'}} > {title} </Card.Title>
        <Card.Title style={{ width: '70rem', 'margin-left': '2rem', 'text-align': 'left' }}>{description}</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    </Col>
    </Row>
  </Card>
  );
  


}



export default CardRanking