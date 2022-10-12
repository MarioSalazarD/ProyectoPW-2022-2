import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react"
import "./details.css"

const CardCar = (props) => {
    return (
    <Card style={{ width: '24rem', 'margin-left': '30rem', 'margin-top': '13.5rem'}}>
      <Card.Img style={{ padding: '2rem' }} variant="top" src={props.item.imgsrc}/>
      <Card.Body>
      <Button className = "button" variant="primary">Add to the car</Button>
      </Card.Body>
    </Card>
    )

}

export default CardCar;