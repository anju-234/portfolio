import React from 'react'
import Button from 'react-bootstrap/Button';
import CountUp from 'react-countup';//use react-countup

function Aboutme() {
  return (
    <>
     <div className="row mt-5 ms-3 ">
        <div className="about1-section col-sm-6 "> 
            <div className="heading-content d-flex justify-content-between">
                <h1 style={{fontSize:"50px"}} className='fw-bold text-black '>15Years</h1>
                <h3 className='text-black fs-3' > of working experience as a web designer & developer</h3>
               </div>
           <p className='mt-3 fs-5 '>Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>
           <ul className='fs-5' type="none">
            <li> <i style={{color:"darkblue"}} class="fa-regular fa-circle-check "></i> Afordable Prices</li>
            <li> <i style={{color:"darkblue"}} class="fa-regular fa-circle-check"></i> High Quality Product</li>
            <li> <i style={{color:"darkblue"}} class="fa-regular fa-circle-check"></i> On Time Project Delivery </li>
           </ul>
           <Button className='mt-3 ms-3 ' style={{backgroundColor:"darkblue", color:"white",width:"160px", height:"50px"}}>Read More</Button>{' '}
        </div>
        <div className="about2-section col-sm-6  ">
            <div className="image-section d-flex justify-content-between">
            <img width="290px" src="https://themewagon.github.io/proman/img/about-1.jpg" alt="" />
            <img width="290px" src="https://themewagon.github.io/proman/img/about-2.jpg" alt="" />
            </div>
            <h6 className='mt-3 text-black fs-5'>Happy Clients  &nbsp;&nbsp;<span className='fs-2' style={{color:"darkblue"}}> <CountUp end={1234} duration={3} /></span></h6>
            <p className='fs-5'>Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam amet diam ipsum clita labore dolor duo clita.</p>
            <h6 className='mt-3 text-black fs-5'>Projects Completed &nbsp;&nbsp; <span  className='fs-2' style={{color:"darkblue"}}>  <CountUp end={1234} duration={3} /> </span></h6>
            <p  className='fs-5'>Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam amet diam ipsum clita labore dolor duo clita.</p>
        </div>
     </div>
    </>
  )
}

export default Aboutme
