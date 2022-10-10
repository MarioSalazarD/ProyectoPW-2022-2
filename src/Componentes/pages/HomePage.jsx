import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {NavBar, Footer} from '../shared';



const HomePage = () => {
    return(
        <Container>
            <Row>
                <NavBar></NavBar>
            </Row>
            <Row>
                <Col>
                a
                s
                s
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