// import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function Contact() {
  return (
    <>
      <Container className='d-flex flex-column align-items-center'>
        {/* Contact Section Heading */}
        <h3 style={{color:"darkblue"}} className="mb-4">
          <i className="fa-regular fa-comment"></i> Contact Us
        </h3>
        
        {/* Contact Form */}
        <Form className='w-50'>
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label style={{color:"darkblue"}}>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Name"
              className="input"
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label style={{color:"darkblue"}}>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your Email"
              className="input"
            />
          </Form.Group>

          <Form.Group controlId="formMessage" className="mb-3">
            <Form.Label style={{color:"darkblue"}}>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Enter your message"
              className="input"
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="input d-flex " style={{marginLeft:"180px"}}>
            Send
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default Contact;
