import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';



const CardShoppingHistory = (props) => {
    
  const { id, title, srcimg, description, date1 } = props;
  return(
    <Card style={{ width: '100rem', 'margin-left': '2rem', 'margin-bottom': '0.5rem' }}>
    <Row className="g-0">
    <Col md={4}>   
        <Card.Img style={{width: '5rem', 'margin-left': '10rem'}} variant="top" src={ srcimg } />
    </Col> 
    <Col md={8}>
        <Card.Body>
        <Card.Title style={{ width: '70rem', 'margin-left': '2rem' }} > {title} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{description}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;{date1}</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    </Col>
    </Row>
  </Card>
  );
  


}



export default CardShoppingHistory