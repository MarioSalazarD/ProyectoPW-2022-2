import React from 'react';
import ReactDOM from 'react-dom/client';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProductCard from './Offers(h11)/OtherElements/Card';
import './Fondo.css'

import NavBar from "./Offers(h11)/OtherElements/NavBar";
import Botones from './Offers(h11)/OtherElements/Botones';


const Estrellas = () => {
    return (
        <>
        <Container className="vh-100 d-flex flex-column ">
            <Row>
                <NavBar></NavBar>
            </Row>
            <Row className="h-100">
                <Col className='body-main'>
                      <Card style={{ display: 'inline-block', height: '460px' ,width: '400px', 'margin-top': '5%',
                       'margin-left':'30%', 'margin-right':'0%', backgroundColor: '#ADC3BE', border: 'solid'}}>
                        <h1 style={{'font-size': '25px', 'textAlign': 'center', color: 'black', width:'300px' , 'margin-top': '15px', 'margin-left':'50px'}}>Thanks for your order!</h1>
                        <svg width="140" height="140" fill="currentColor" color='black' 
                        class="bi bi-controller" viewBox="-3.5 -2 21 21" className='controler' style={{'margin-top': '-1%','margin-left':'31%'}} >
                          <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                          <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                        </svg>
                        <h1 style={{display: 'inline-block' ,'font-size': '25px', color: 'black', width:'120px' , 'margin-top': '-10px', 'margin-left':'22px'}}>Rate us</h1>
                        <svg width="40" fill="currentColor" color='gold' class="bi bi-controller" viewBox="-3.5 -2 21 21"
                         className='controler' style={{'margin-top': '-7px','margin-left':'-20px'}}>
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <svg width="40" fill="currentColor" color='gold' class="bi bi-controller" viewBox="-3.5 -2 21 21"
                         className='controler' style={{'margin-top': '-7px','margin-left':'0px'}}>
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <svg width="40" fill="currentColor" color='gold' class="bi bi-controller" viewBox="-3.5 -2 21 21"
                         className='controler' style={{'margin-top': '-7px','margin-left':'0px'}}>
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <svg width="40" fill="currentColor" color='gold' class="bi bi-controller" viewBox="-3.5 -2 21 21"
                         className='controler' style={{'margin-top': '-7px','margin-left':'0px'}}>
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <svg width="40" fill="currentColor" color='gold' class="bi bi-controller" viewBox="-3.5 -2 21 21"
                         className='controler' style={{'margin-top': '-7px','margin-left':'0px'}}>
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <h1 style={{ 'font-size': '12px', color: 'black', width:'120px' , 'margin-top': '10px', 'margin-left':'22px'}}>Leave a coment</h1>
                        <textarea style={{ 'font-size': '12px', height:'150px' ,width:'350px' , 'margin-top': '10px', 'margin-left':'22px', rows:"10" , cols:"40"}} type="text" name="nombredelacaja" ></textarea>
                        <Button href="/mensaje"
                        style={{'background-color':'#571AA1', border: 'none', color: 'white',
                        padding: '5px 15px', 'text-align': 'center', 'text-decoration': 'none',
                        display: 'inline-block', 'font-size': '12px', marginLeft:'22px'}}>
                        Submit
                        </Button>

                      </Card>                      
                      
                      

                </Col>
            </Row>
            
        </Container>
        </>)



}

export default Estrellas;