import React from 'react'
//! TODO: finish implementing search feature
// import {Navbar, Form, FormControl, Button, Nav} from 'react-bootstrap'
import { Navbar , Nav } from 'react-bootstrap'
import resume from '../assets/Resume.pdf'

export default function MyNav() {
    return (
    
        <Navbar sticky="top" variant="dark">
            <Navbar.Brand href={process.env.PUBLIC_URL + '/'}>Home</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href={process.env.PUBLIC_URL + '/projects'} >Projects</Nav.Link>
                <Nav.Link href={process.env.PUBLIC_URL + '/research'} >Research</Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/ryan-parker196/" target="_blank" >LinkedIn</Nav.Link>
                <Nav.Link href={ resume } target="_blank" >Resume</Nav.Link>
            </Nav>
            {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
            </Form> */}
        </Navbar>
    )
}