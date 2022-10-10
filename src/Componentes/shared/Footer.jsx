import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const Footer = () => {
    return(
        <Container>
            <Row>
                <Col>
                    <h3>Sign up to our newsletter for the lastest PC news.</h3>
                    <form>
                        <input type="Email" placeholder='Put your Email' />
                        <Button variant="primary">Subscribe</Button>{' '}
                    </form> 
                </Col>
                <Col md="auto">
                    <div>
                        <li>Build Your pc</li>
                        <li>Why Redux</li>
                        <li>Support</li>
                    </div>
                </Col>
                <Col md="auto">
                    <div>
                        <li>Good</li>
                        <li>Better</li>
                        <li>Best</li>
                    </div>
                </Col>
                <Col md="auto">
                    <div>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Refund Policy</li>
                    </div>
                </Col>
            </Row>
            <Row>
                <div>a</div>
            </Row>
            <Row>
                <Col>
                    <div>Copyright 2022 Build Redux. All Rights Recerved</div>
                </Col>
            </Row>
            
        </Container>
    )
}

export default Footer;