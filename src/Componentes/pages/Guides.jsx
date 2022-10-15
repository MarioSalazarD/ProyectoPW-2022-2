import "./Guides.css";
import { useState } from 'react';
import React from 'react';
import { NavBar } from '../shared';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Guides = () => {

    const [accordion, setActiveAccordion] = useState(-1);

    function toggleAccordion(index)  {

        setActiveAccordion(index);
    }



    return(



        <Container>
<Row>
    <NavBar></NavBar>
</Row>

    <Row>
    <div className="titulo"> 
            <span className="title"> Support Guides</span>
            


        </div>
        <div className="faq">
            {dataCollection.map((item, index) => (
            

            <div key = {index} onClick={() => toggleAccordion(index)}>
                <div className="heading">
                    <h3 className={accordion === index ? "active" : ""}> {item.imagen}{item.question}</h3>
                </div>
                <div>
                    {accordion === index ? (
                    <>
                    <span className="verticle">-</span>
                    </>
                    ) : 
                     (
                     <>
                     <span className="verticle">+</span>
                     
                     </>
                     )}
                    
                </div>
                <div>
                    <p className={accordion === index ? "active" : "inactive"}>{item.answer}</p>
                </div>
            </div>
            ))}
        </div>
    </Row>
</Container>
    )

}

const dataCollection = [
    {
        imagen:  <img className="system" src='/img/system.png'/> ,
        question: 'Build Redux Quick Start Guide',
        answer: 'respuesta',

    },
    {
        imagen:  <img className="system" src='/img/system.png'/> ,
        question: 'System Overview',
        answer: 'respuesta',

    },
    {
        imagen:  <img className="gear" src='/img/gear.png'/> ,
        question: 'Troubleshooting-Display',
        answer: 'respuesta',

    },
    {
        imagen:  <img className="disc" src='/img/disc.png'/> ,
        question: 'Reseating Guide-Memory',
        answer: 'respuesta',

    },
    {
        imagen:  <img className="disc" src='/img/disc.png'/> ,
        question: 'Reseating Guide - Graphics Card',
        answer: 'respuesta',

    },

    {
        imagen:  <img className="ruler" src='/img/ruler.png'/> ,
        question: 'Realigment Guide- Rear I/O',
        answer: 'guia'
    }
]


export default Guides