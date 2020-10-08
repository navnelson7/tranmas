import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Barra = () => {
    return ( 
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Tranmas</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav.Link href="#home">Home</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
     );
}
 
export default Barra;