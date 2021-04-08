import React from 'react';
import { Container, Navbar, Nav, Form, Button, Row, Col } from 'react-bootstrap';
import './Login.css';

const Login = () => {
    return (
        <Container>
            <div className="row">
                <div className="col-md-12">
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand href="/home">Book Stall</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                            <Nav >
                                <Nav.Link href="#deets">Manage Books</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>

            <Row className="login-row">
                <Col md={{ span: 6, offset: 3 }}>

                    <Form className="login-form-design  shadow">
                        <h3>If You already have an account</h3>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control id="user-email" type="email" placeholder="Enter Your Email" required />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control id="user-password" type="password" placeholder="Enter Your Password" required />
                        </Form.Group>

                        <Button variant="success" type="submit" size="lg">
                            LOGIN
                     </Button>

                        <h5 style={{ marginTop: '20px' }}>Don't have an account?</h5>
                        <a href="">Register Here..</a>
                    </Form>
                </Col>
            </Row>


            <Row className="login-row">
                <Col md={{ span: 6, offset: 3 }}>
                    <Button variant="warning" type="submit" size="lg" block>LOGIN WITH GOOGLE</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;