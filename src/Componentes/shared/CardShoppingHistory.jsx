import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';



const CardShoppingHistory = (props) => {
    
  const { id, title, srcimg, description, date1 } = props;
  return(
/*
    <div className="row " >
    <div className="col-lg-3" >
      <h2 className="kind">Nate Gentile</h2>
      <div className="row" id="influencer">
      <img src={nate} alt="horse" className="influencer"  />
        VIDEO
        </div>
        */


    <Card style={{ width: '67rem', 'margin-left': '2rem', 'margin-bottom': '0.5rem' }}>
    <Row className="g-0">
    <Col md={4}>   
        <Card.Img style={{width: '5rem', 'margin-left': '10rem'}} variant="top" src={ srcimg } />
    </Col> 
    <Col md={8}>
        <Card.Body>
        <Card.Title style={{ width: '70rem', 'margin-left': '2rem', 'text-align': 'left' }} > {title} </Card.Title>
        <Card.Title style={{ width: '70rem', 'margin-left': '2rem', 'text-align': 'left' }} > {description} </Card.Title>        
        <Card.Title style={{ width: '70rem', 'margin-left': '2rem', 'text-align': 'left' }} > {date1}</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    </Col>
    </Row>
  </Card>
  );
  


}



export default CardShoppingHistory