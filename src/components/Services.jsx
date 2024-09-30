import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



function Services() {
  return (
    <>
      <div className="container-fluid d-flex justify-content-between mt-5">
        <h1  className='ms-4 fw-bold text-black'>My Services</h1>
        <Button style={{backgroundColor:"violet", color:"white" }}>Hire Me</Button>{' '}
        </div>
         <div className="services mt-5">
            <Row>
             <Col></Col>
             <Col lg={5}>
             {/* Ist section */}
               <div className="creativedesign d-flex justify-content-between">
                <div className="  icon1">
                <i  style={{color:"darkblue"}} className="fa-solid fa-2x fa-crop-simple"></i>
                </div>
                <div className="content1">
                    <h2 className='text-black'>Creative Design</h2>
                    <h5 className='text-black'>Start from <span style={{color:"violet"}}>$199</span> </h5>
                     <p>Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.</p>
                     <br />
                </div>
               </div>
               {/* 2nd section */}
               <div className="webdesign d-flex justify-content-between">
                <div className=" icon2">
                <i style={{color:"darkblue"}} className="fa-solid fa-2x fa-code"></i>
                </div>
                <div className="content2">
                    <h2 className='text-black'>Web Design</h2>
                   <h5 className='text-black'>Start from <span style={{color:"violet"}}>$199</span></h5>
                    <p>Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.</p>
                </div>
               </div>
               </Col>
             <Col lg={5}>
              {/* 3rd section */}
              <div className="graphicdesign d-flex justify-content-between">
                <div className=" bg-icon icon3">
                <i style={{color:"darkblue"}} className="fa-solid fa-2x fa-code-branch"></i>
                </div>
                <div className="content3">
                    <h2 className='text-black'>Graphic Design</h2>
                   <h5 className='text-black' >Start from <span style={{color:"violet"}}>$199</span></h5>
                   <p>Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.</p>
                   <br />
                </div>
               </div>
               {/* 4th section */}
               <div className="UIUXdesign d-flex justify-content-between">
                <div className=" bg-icon icon4">
                <i style={{color:"darkblue"}} className="fa-solid fa-2x fa-laptop-code"></i>
                </div>
                <div className="content2">
                    <h2 className='text-black'>UI/UX Design</h2>
                     <h5 className='text-black'>Start from <span style={{color:"violet"}}>$199</span></h5>
                    <p>Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.</p>
                </div>
               </div></Col>
             <Col></Col>
            </Row>
         </div>
     
    </>
  )
}

export default Services
