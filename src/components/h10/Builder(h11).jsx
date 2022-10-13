import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Fondo.css'

import NavBar from "./Background/NavBar";

const Builder = () => {
    return (
        <>
        <Container className="vh-100 d-flex flex-column ">
            <Row>
                <NavBar></NavBar>
            </Row>
            <Row className="h-100">
                <Col className='body-main'>
                      <h1 className='letra'>Your optimized build!</h1> 
                      
                      <Col className='sep'>
                      <Button href="#" 
                      style={{'background-color':'white', border: 'none', color: 'black',
                      padding: '8px 50px', 'text-align': 'center', 'text-decoration': 'none',
                      display: 'inline-block', 'font-size': '16px'}}>
                      Back</Button>
                      <div className='divider'/>
                      <Button href="#"
                      style={{'background-color':'purple', border: 'none', color: 'white',
                      padding: '8px 50px', 'text-align': 'center', 'text-decoration': 'none',
                      display: 'inline-block', 'font-size': '16px'}}>
                      Next</Button>
                      </Col>
                      

                </Col>
            </Row>
            
        </Container>
        </>)



}

export default Builder;