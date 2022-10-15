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
<h1  style={{marginLeft:'-0px' , color:'black'}} className="titulo"> CHECKOUT OUR LATEST BUILD AND MAKE IT YOUR OWN!</h1>

<div/>

<img style={{marginLeft:'0px', marginTop:'200px' }} className="pc" src="https://cdn.originpc.com/img/pdp/gaming/desktops/genesis/case-7000d-airflow.png"  />
<div style={{marginLeft:'100px', marginTop:'-25 0px' }}>
<h2  className="titulo2" >OUR MISSION IS TO BUILD GAMING PCs AT THE BEST PRICE WITHOUT CUTTING CORNERS </h2>
</div>
</Row>



</Container>


        
    )
    
    
}

export default About