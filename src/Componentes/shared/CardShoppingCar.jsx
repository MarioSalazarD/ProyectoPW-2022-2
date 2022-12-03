import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react"
import TrashCar from './TrashCar';

const CardShoppingCar = (props) =>
{
    const {title, imgsrc, price } = props;
    return(
      <Card style={{ width: '70rem', height : '8rem','margin-left' :'35rem', 'margin-bottom': '.7em' }}>
      <Row className="g-0">
      <Col md={3}>   
          <Card.Img style={{width: '7rem', 'margin-left': '5rem', height: '7rem', marginTop : '.4rem'}} variant="top" src={ imgsrc } />
      </Col> 
      <Col md={5}>
          <Card.Body>
          <Card.Title style={{ fontSize: '14px',width: '50rem', 'margin-left': '.5rem', 'marginTop': '2rem'}} > {title} </Card.Title>

      </Card.Body>
      </Col>
      <Col md={2}>
          <Card.Body>
          <Card.Title style={{ width: '70rem',  'margin-left': '4rem', 'marginTop': '2rem', fontSize: '13px'}} > {price} </Card.Title>
      </Card.Body>
      </Col>
      <Col md={2}>
          <Card.Body>
          <Card.Title style={{marginLeft :'3rem', marginTop: '1.5rem'}}> <Button variant="light"><TrashCar></TrashCar></Button> </Card.Title>
        </Card.Body>
      </Col>
      </Row>
    </Card>
    );
}

export default CardShoppingCar