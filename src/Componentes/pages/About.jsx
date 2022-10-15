import "./About.css";
import { useState } from 'react';
import React from 'react';
import { NavBar } from '../shared';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const About = () => {

    return(
<Container>
<Row>
<NavBar> </NavBar>
</Row >

<Row className="medio" > 
<h1 className="titulo"> CHECKOUT OUR LATEST BUILD AND MAKE IT YOUR OWN!</h1>

<div/>

<img className="pc" src="/img/pc.png"  />
<h2 className="titulo2" >OUR MISSION IS TO BUILD GAMING PCs AT THE BEST PRICE WITHOUT CUTTING CORNERS </h2>
</Row>

<Row className="abajo">
<Button className="botonConstruir" href="#">Let's Build</Button>
</Row>

</Container>


        
    )
    
    
}

export default About