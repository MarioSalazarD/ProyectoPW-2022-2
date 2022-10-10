import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {NavBar, Footer, Gallery} from '../shared';
import Button from 'react-bootstrap/Button';
import './HomePage.css'




const HomePage = () => {
    return(
        <Container>
            <Row>
                <NavBar></NavBar>
            </Row>
            <Row>
                <Col >
                    <div className='body'>
                        <img src="img/msi-logo.png" className='logo' />
                        <p className='text-main'>
                        <h2>Build your PC!</h2>
                        <h4>Just for what you need</h4>

                        <Button href="#">Build for begginers</Button>
                        <div className='divider'/>
                        <Button type="submit">Advance Building</Button>{' '}
                        </p>
                    </div>

                </Col>
            </Row>
            <Row className='fixed-bottom'>
                <Col>
                    <Footer></Footer>
                </Col>
            </Row>
        </Container>
    )
}


export default HomePage