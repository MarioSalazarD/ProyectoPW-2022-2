import './HomePage.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {NavBar, Footer} from '../shared';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import Email from '../../api/Email.js'

const HomePage = () => {
    const [show, setShow] = useState(false);
    const [correo, setCorreo] = useState("")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const logInOnclick = async () => {
            const email = await Email.sendEmail(correo);
            
    }
    

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

                        <Button href="/recomend">Build for begginers</Button>
                        <div className='divider'/>
                        <Button href='/ranking-pc' variant="primary">Advance Building</Button>{' '}
                        <div className='divider'/>
                        <Button variant="primary" onClick={handleShow}>New User</Button>{' '}
                        </p>
                        

                </Col>
            </Row>
            <Modal centered animation={false} show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Subscribe to our NewsLetter!!!!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                value={correo}
                                onChange={(evt) => setCorreo(evt.target.value)}
                                autoFocus
                                />
                            </Form.Group>
                            </Form>
                            <h4> Recive alert about new content, reviews an more!!!! </h4>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                        Close
                        </Button>
                        <Button variant="primary"onClick={logInOnclick}>
                          Save Changes
                        </Button>
                        </Modal.Footer>
                </Modal>
            <Row>
                <Col>
                    <Footer></Footer>
                </Col>
            </Row>
        </Container>
    )
}




export default HomePage