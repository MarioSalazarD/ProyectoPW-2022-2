import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react"


const CardCar = (props) => {
    return (
    <Card style={{ width: '33rem', 'margin-left': '44rem', 'margin-top': '16rem' , backgroundColor : '#5a6978'}}>
      <Card.Img style={{ padding: '2rem', paddingBottom : '.5rem'}} variant="top" src={props.item.imgsrc}/>
      <Card.Body>
      <Button className = "button" variant="primary" style={{ backgroundColor : '#c25be9', width : '12rem', borderColor : '#c25be9' , borderRadius : '4px', marginLeft : '5rem', marginBottom : '1rem'}}>Add to the car</Button>
      </Card.Body>
    </Card>
    )

}

export default CardCar;