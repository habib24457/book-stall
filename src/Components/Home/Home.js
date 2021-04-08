import React from 'react';
import './Home.css';
import { Container, Row, Col, Navbar, Nav, InputGroup, FormControl,Button } from 'react-bootstrap';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand href="/home">Book Stall</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                            <Nav >
                                <Nav.Link href="/addBook">Add Books</Nav.Link>
                                <Nav.Link href="#deets">About</Nav.Link>
                                <Nav.Link href="#deets">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>

            <Row>
                <Col md={{ span: 6, offset: 3 }} className="search-design">
                    <InputGroup>
                        <FormControl
                            placeholder="Enter Book Name"
                            aria-label="Search For Books"
                            aria-describedby="basic-addon2"
                        />

                        <InputGroup.Append>
                            <Button variant="outline-secondary">Search</Button>
                        </InputGroup.Append>
                        </InputGroup>
                </Col>
            </Row>

            <Row>
                <Col>
                <h1>Here will be the books....</h1>
                </Col>
            </Row>           
        </Container >
    );
};

export default Home;