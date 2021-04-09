import React from 'react';
import { Container, Navbar, Nav, Form, Button, Row, Col } from 'react-bootstrap';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import firebase from 'firebase';
import 'firebase/auth';
import firebaseConfig from "./firebase.config";


/**
 * Using social media icon from fontawesome
 * install fontawesome =  npm i --save @fortawesome/fontawesome-svg-core  
 * install social icon = npm i --save @fortawesome/free-brands-svg-icons
 */

/**
 * install firebase: npm install --save firebase
 * 
 */

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {
    const handleGoogleSignin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
            console.log(result.user.email);
            
        }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });

    }


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

                    <Button onClick={handleGoogleSignin} variant="warning" type="submit" size="lg" block className="d-flex justify-content-center">
                        <FontAwesomeIcon icon={faGoogle} size="2x" />
                        <h4 className="txt-design">Login With Google</h4>
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;