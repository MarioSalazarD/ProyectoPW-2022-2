import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {NavBar} from '../shared';
import CardShoppingCar from '../shared/CardShoppingCar';
import dataCardsDetails from '../../dataCardsDetails';

const Shopingcar = () => {

    return(
        <Container fluid style={{ backgroundColor: '#343f4b', height :'61.2rem' }} >
            <Row>
                <NavBar></NavBar>
            </Row>
            <Row>
                <Col>
                <h1 style={{color:'white', fontSize: '25px', marginLeft: '35rem', marginTop: '7rem'}}>Shopping car items <Button as="input" type="submit" value="Checkout" style={{ backgroundColor : '#c25be9', 'margin-top': '3rem', width : '12rem', borderColor : '#c25be9' , borderRadius : '4px', 'marginLeft': '35rem', 'marginBottom': '1rem'}}/></h1>
                <CardShoppingCar    {...dataCardsDetails[0]}></CardShoppingCar>
                <CardShoppingCar {...dataCardsDetails[1]}></CardShoppingCar>
                <CardShoppingCar {...dataCardsDetails[2]}></CardShoppingCar>
                <CardShoppingCar {...dataCardsDetails[3]}></CardShoppingCar>
                <CardShoppingCar {...dataCardsDetails[4]}></CardShoppingCar>
                <CardShoppingCar {...dataCardsDetails[5]}></CardShoppingCar>
                </Col>
            </Row>
        </Container>
    )
}


export default Shopingcar