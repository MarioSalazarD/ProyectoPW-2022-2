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

const Detailsintelcore = () => {

    return(
        <Container fluid style={{ backgroundColor: '#343f4b', height :'61.2rem' }} >
            <Row>
                <NavBar></NavBar>
            </Row>
            <Row>
                <Col>
                {cardcars[1]}
                </Col>
                <Col>
                {carddetails[1]}
                </Col>
            </Row>
        </Container>
    )
}


export default Detailsintelcore