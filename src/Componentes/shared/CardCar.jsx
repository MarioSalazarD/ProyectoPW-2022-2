import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react"

const CardCar = (props) => {
    return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.item.imgsrc}/>
      <Card.Body>
      <Button variant="primary">Add to the car</Button>
      </Card.Body>
    </Card>
    )

}

export default CardCar;