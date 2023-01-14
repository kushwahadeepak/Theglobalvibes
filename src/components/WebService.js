import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './share/Navbar'
import Footer from "./share/Footer"


const WebService = () => {

  const navigate = useNavigate();
  const goToAppDevelopment = () => {
    navigate("/appdevelopment");
  }
  const goToWebdevelopment = () => {
    navigate("/webdevelopment");
  }
  const goToDigital = () => {
    navigate("/digital");
  }
  const goToEcommerce = () => {
    navigate("/ecommerce");
  }
  const goToGraphic = () => {
    navigate("/graphic");
  }
  const goToTechnicalsup = () => {
    navigate("/technicalsupport");
  }

  return (
    <>
      <Navbar />
      <div className='container my-5'>
        <div className='row'>
          <h2 className="mb-5 text-center">Service</h2>
          <div className='col-sm-12 col-md-6 col-lg-4'>
            <div className='card services-card-style'>
              <div className="icon-service-style" ><img src="./images/appdev.png" alt="img" style={{ width: "80px" }} /></div>
              <h3 className='my-4'>App Development</h3>
              <p className='mx-3'>We offer costom web and web applications Development Services for Business &amp; startups to Engage users
                effectively.</p>
                <div className='read-more-btn'>
               <button onClick={() => goToAppDevelopment()} className="read-more-btn my-4">Read More</button>
            </div>
            </div>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4'>
            <div className='card services-card-style'>
              <div className="icon-service-style" ><img src="./images/react.png" alt="img" style={{ width: "80px" }} /></div>
              <h3 className='my-4'>Web Development</h3>
              <p className='mx-3'>We offer costom web and web applications Development Services for Business &amp; startups to Engage users
                effectively.</p>
                <div className='read-more-btn'>
                <button onClick={() => goToWebdevelopment()} className="read-more-btn my-4">Read More</button>
             </div>
            </div>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4'>
            <div className='card services-card-style'>
              <div className="icon-service-style" ><img src="./images/design.jpg" alt="img" style={{ width: "100px" }} /></div>
              <h3 className='my-4'>Ecommerce Development</h3>
              <p className='mx-3'>We offer costom web and web applications Development Services for Business &amp; startups to Engage users
                effectively.</p>
                <div className='read-more-btn'>
                <button onClick={() => goToEcommerce()} className="read-more-btn my-4">Read More</button>
             </div>
            </div>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4'>
            <div className='card services-card-style'>
              <div className="icon-service-style" ><img src="./images/support.png" alt="img" style={{ width: "120px" }} /></div>
              <h3 className='my-4'>Digital Markating</h3>
              <p className='mx-3'>We offer costom web and web applications Development Services for Business &amp; startups to Engage users
                effectively.</p>
                <div className='read-more-btn'>
                <button onClick={() => goToDigital()} className="read-more-btn my-4">Read More</button>
             </div>
            </div>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4'>
            <div className='card services-card-style'>
              <div className="icon-service-style" ><img src="./images/testing.jpg" alt="img" style={{ width: "80px" }} /></div>
              <h3 className='my-4'>Graphic Designing</h3>
              <p className='mx-3'>We offer costom web and web applications Development Services for Business &amp; startups to Engage users
                effectively.</p>
                <div className='read-more-btn'>
                <button onClick={() => goToGraphic()} className="read-more-btn my-4">Read More</button>
             </div>
            </div>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4'>
            <div className='card services-card-style'>
              <div className="icon-service-style" ><img src="./images/networking.png" alt="img" style={{ width: "80px" }} /></div>
              <h3 className='my-4'>Technical Support</h3>
              <p className='mx-3'>We offer costom web and web applications Development Services for Business &amp; startups to Engage users
                effectively.</p>
                <div className='read-more-btn'>
                <button onClick={() => goToTechnicalsup()} className="read-more-btn my-4">Read More</button>
             </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default WebService;
