import './HomePage.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {NavBar, Footer} from '../shared';
import Button from 'react-bootstrap/Button';



const HomePage = () => {
    return(
        <Container className="vh-100 d-flex flex-column ">
            <Row>
                <NavBar></NavBar>
            </Row>
            <Row className="h-100">
                <Col className='body-main'>
                        <img src="img/msi-logo.png" className='logo' alt = "logo"/>
                        <p className='text-main'>
                        <h2>Build your PC!</h2>
                        <h4>Just for what you need</h4>

                        <Button href="#">Build for begginers</Button>
                        <div className='divider'/>
                        <Button type="submit">Advance Building</Button>{' '}
                        </p>

                </Col>
            </Row>
            <Row>
                <Col>
                    <Footer></Footer>
                </Col>
            </Row>
        </Container>
    )
}


export default HomePage