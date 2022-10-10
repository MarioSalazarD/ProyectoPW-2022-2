import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const HomePage = () => {
    return(
        <Container>
            <Row>
                <Col>
                    <h1>Este es el header</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>este es el body</h3>
                </Col>
            </Row>
        </Container>
    )
}


export default HomePage