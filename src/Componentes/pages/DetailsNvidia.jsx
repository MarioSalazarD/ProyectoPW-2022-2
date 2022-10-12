import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CardCar, CardDetails, NavBar } from '../shared';
import dataCardsDetails from '../../dataCardsDetails'

const cardcars = dataCardsDetails.map(item => {return(
    <CardCar
    key = {item.id}
    item = {item}
    />
  )})

const carddetails = dataCardsDetails.map(item => {return(
    <CardDetails
    key = {item.id}
    item = {item}
    />
  )})

const DetailsNvidia = () => {

    return(
        <Container>
            <Row>
                <NavBar></NavBar>
            </Row>
            <Row>
                <Col>
                {cardcars[0]}
                </Col>
                <Col>
                {carddetails[0]}
                </Col>
            </Row>
        </Container>
    )
}


export default DetailsNvidia