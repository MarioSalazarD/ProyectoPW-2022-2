import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Fondo.css'

import NavBar from "./Background/NavBar";

const Home10 = () => {
    return (
        <>
        <Container className="vh-100 d-flex flex-column ">
            <Row>
                <NavBar></NavBar>
            </Row>
            <Row className="h-100">
                <Col className='body-main'>
                      <h1 className='letra'>¿What do you need?</h1> 

                      <Col className='sep'>
                      <Button href="#" className='boton1'>Back</Button>
                      <div className='divider'/>
                      <Button href="#" className='boton2'>Next</Button>
                      </Col>

                </Col>
            </Row>
            
        </Container>
        </>)

}

export default Home10;