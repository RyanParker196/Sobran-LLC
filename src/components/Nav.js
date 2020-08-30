import React from 'react'
//! TODO: finish implementing search feature
// import {Navbar, Form, FormControl, Button, Nav} from 'react-bootstrap'
import { Navbar , Nav } from 'react-bootstrap'

export default function MyNav() {
    return (
    
        <Navbar sticky="top" variant="dark">
            <Navbar.Brand href={process.env.PUBLIC_URL + '/'}>Home</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href={process.env.PUBLIC_URL + '/Investing'} >Investing</Nav.Link>
                <Nav.Link href="https://www.instagram.com/hyperdank_tesla/?hl=en" target="_blank" >Instagram</Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/jacksobran/" target="_blank" >LinkedIn</Nav.Link>
            </Nav>
            {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
            </Form> */}
        </Navbar>
    )
}