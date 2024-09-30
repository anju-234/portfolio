import React, { useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBBtn } from 'mdb-react-ui-kit';
import Typed from 'typed.js'; // Importing Typed.js


function About() {
  // Create a ref for the typed text container
  const typedTextRef = useRef(null);

  useEffect(() => {
    // Options for the Typed.js instance
    const options = {
      strings: [
        'Web Designer', 
        'Web Developer', 
        'Front End Developer', 
        'Apps Designer', 
        'Apps Developer'
      ], // Array of strings to type
      typeSpeed: 50, // Typing speed in milliseconds
      backSpeed: 30, // Backspace speed in milliseconds
      loop: true, // Loop the typing animation
    };

    // Initialize Typed.js on the ref
    const typed = new Typed(typedTextRef.current, options);

    // Cleanup function to destroy the Typed.js instance
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div>
        <Container>
          <Row>
            <Col>
              <h1
                className="text-center fw-bold"
                style={{ marginTop: '150px', marginLeft: '30px' }}
              >
                I'm <br /> Kate Winslet.
              </h1>

              {/* Typed text area */}
              <h3 className="text-center mt-4">
                <span className='text-info' ref={typedTextRef}></span> {/* This will hold the typed effect */}
              </h3>

              <div className="d-flex justify-content-center mt-4 me-2">
                <MDBBtn style={{ backgroundColor: 'blueviolet', color: 'white' }}>
                  Download CV
                </MDBBtn>
              </div>
            </Col>
            <Col>
              <img
                src="https://themewagon.github.io/proman/img/profile.png"
                alt="Profile"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default About;

