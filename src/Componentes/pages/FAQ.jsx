import "./FAQ.css";
import { useState } from 'react';
import React from 'react';
import { NavBar } from '../shared';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const FAQ = () => {

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
            <span className="title"> Common Questions</span>
            


        </div>
        <div className="faq">
            {dataCollection.map((item, index) => (
            

            <div key = {index} onClick={() => toggleAccordion(index)}>
                <div className="heading">
                    <h3 className={accordion === index ? "active" : ""}> {item.question}</h3>
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
        question: 'Refund Policy',
        answer: 'respuesta',

    },
    {
        question: 'Cancellation Policy',
        answer: 'respuesta',

    },
    {
        question: 'Warranty Services',
        answer: 'respuesta',

    },
    {
        question: 'Financing',
        answer: 'respuesta',

    },
    {
        question: 'How long will it take for my PC to arrive?',
        answer: 'respuesta',

    },
]

export default FAQ