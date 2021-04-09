import React, { useState } from 'react';
import { Container, Navbar, Nav, Form, Button, Row, Col } from 'react-bootstrap';
import './AddBook.css';
const axios = require('axios').default;



const AddBook = () => {

    //const [imageURL, setImageURL] = useState(null);

    const [bookInfo,setBookInfo] =useState({
        bookName : '',
        bookAuthor : '',
        bookPrice : ''
    })


    const handleBlur = (e) => {
        console.log(e.target.value);
        const newBookInfo ={...bookInfo};
        newBookInfo[e.target.name] = e.target.value;
        setBookInfo(newBookInfo);

    }

    const handleSave=()=>{
        console.log(bookInfo);
        const url ='http://localhost:5055/addNewBook';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookInfo)
        })
            .then(response => {
                alert("Product saved", response);

            });
       
    }



    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'f7675ca9a0ed0f2cd7c6d55c64d847b9');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {  
               const imgLink ={...bookInfo};
                imgLink.imageUrl = response.data.data.display_url;
                setBookInfo(imgLink);
                //console.log(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            })

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


            <Row className="addBook-row">
                <Col md={{ span: 6, offset: 3 }} className="addBook-form-design  shadow">
                    <h3>Add New Book</h3>
                    <Form>
                        <Form.Group>
                            <Form.Label>Book Name</Form.Label>
                            <Form.Control onBlur={handleBlur} className="form-control" id="book-name" name="bookName" type="text" placeholder="Enter Book Name" required />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Author</Form.Label>
                            <Form.Control onBlur={handleBlur} id="book-author" name="bookAuthor" type="text" placeholder="Enter Book Author" required />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Price</Form.Label>
                            <Form.Control onBlur={handleBlur} className="form-control" id="book-price" type="text" name="bookPrice" placeholder="Enter Price" required />
                        </Form.Group>

                        <Form.Group>
                            <Form.Control onBlur={handleBlur} className="form-control" type="file" id="book-image" onChange={handleImageUpload} label="Choose a photo" />
                        </Form.Group>

                        <Form.Group>
                            <Button variant="warning" onClick={handleSave} type="button">SAVE</Button>
                        </Form.Group>

                    </Form>
                </Col>
            </Row>

        </Container>
    );
};

export default AddBook;