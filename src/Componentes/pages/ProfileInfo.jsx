import './ProfileInfo.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {NavBar , Country} from '../shared';

const ProfileInfo = () => {
    return(
        <Container>
            <Row>
                <NavBar></NavBar>
            </Row>
            <Row>
                <Col xs lg="3">
                INSERTAR MENÚ LATERAL
                </Col>
                <Col md="auto" xs lg="2" className ="Default" > 
                <h6><strong>Default</strong></h6>
                <p>Ed Va <br/> United States</p>
                </Col >
                <Col className = "Form">
                    <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>
                    </Row>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type = "text" placeholder="Enter address"/>
                        </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridAparmaent">
                        <Form.Label>Aparmaent, suit, etc</Form.Label>
                        <Form.Control type="text" placeholder="Aparmaent, suit, etc" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="Ejm: Perú" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Country/Region</Form.Label>
                        <Country></Country>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCPostal">
                        <Form.Label>Postal/zip code</Form.Label>
                        <Form.Control type="text" placeholder="Ejm: 46700" />
                        </Form.Group>
                    </Row>
                        <Form.Group className="mb-3" controlId="formGridPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type = "text" placeholder="Enter your phone"/>
                        </Form.Group>
                        <Button as="input" type="submit" value="Update Info"/>{' '}
                        <Button variant="link">Cancel</Button>
                    </Form>
                </Col>
            </Row>


        </Container>
        
    )
}

export default ProfileInfo