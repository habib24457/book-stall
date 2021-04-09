import React,{useState,useEffect} from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import { Container, Row, Col, Navbar, Nav, InputGroup, FormControl,Button,Card } from 'react-bootstrap';

const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5055/books')
        .then(response=>response.json())
        .then(data=>setBooks(data));
    },[])
    console.log(books);


    return (
        <Container>
            <Row>
                <Col>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                        <Navbar.Brand href="/home">Book Stall</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                            <Nav >
                                <Nav.Link href="/addBook">Add Books</Nav.Link>
                                <Nav.Link href="#deets">About</Nav.Link>
                                <Nav.Link href="#deets">Contact</Nav.Link>

                                <Link to="/login">
                                    <Button variant="warning">Login</Button>
                                </Link>
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

            <Row className="justify-content-center home-design">
                
                    {
                        books.map(book =>

                            <div>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={book.imageUrl} />
                            <Card.Body>
                              <Card.Title>{book.bookName}</Card.Title>
                              <Card.Text>Author:{book.bookAuthor}</Card.Text>
                              <Card.Text>Price:{book.bookPrice}$</Card.Text>
                              <Button variant="warning">Buy Now</Button>
                            </Card.Body>
                             </Card>  
                          </div>
                                                      
                          )
                    }
            </Row>           
        </Container >
    );
};

export default Home;