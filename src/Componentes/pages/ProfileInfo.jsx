import './ProfileInfo.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {NavBar , Country, SideBar} from '../shared';

const ProfileInfo = () => {
    return(
        <Container fluid style={{height :'61.2rem' , margin : '0px'}} >
            <Row>
                <NavBar></NavBar>
            </Row>
            <Row>
                <Col lg="3">
                <SideBar></SideBar>
                </Col>
                <Col lg="2" className ="Default" style={{ marginTop: '14rem', height : '52rem' , width: '15rem', marginLeft: '23rem'}}> 
                <h6><strong style={{ fontSize: '13px' }}>Default</strong></h6>
                <p>Ed Va <br/> United States</p>
                </Col >
                <Col className = "Form" style={{ marginTop: '14rem', height : '52rem' , marginRight : '30rem'}}>
                    <Form>
                    <Row className="mb-3" >
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
                        <Form.Label>Apartment, suit, etc</Form.Label>
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
                        <Button as="input" type="submit" value="Update Info" style={{ backgroundColor : '#c25be9', 'margin-top': '3rem', width : '12rem', borderColor : '#c25be9' , borderRadius : '4px',boxShadow : '2px 4px 5px 0px rgba(0,0,0,0.13)'}}/>{' '}
                        <Button variant="link" style={ {'margin-top': '4rem', color : ' #757985' , 'text-decoration': 'none'}}>Cancel</Button>
                    </Form>
                </Col>
            </Row>


        </Container>
        
    )
}

export default ProfileInfo