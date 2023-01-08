import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import Footer from '../share/Footer'
import Navbar from '../share/Navbar'
import "./service.css"
const Technicalsup = () => {
  return (
    <>
     <Navbar/>
     <div className='container my-5'>
        <div className='row mx-5'>
          <div className='col-md-4'>
            <ScrollAnimation animateIn="fadeInLeft">
          <div className='img'>
            <img src='./images/tech.png' alt='img' style={{ width: "100%", height: "100%", borderRadius: "15px" }} />
          </div>
          </ScrollAnimation>
          </div>
          <div className='col-md-8'>
          <ScrollAnimation animateIn="fadeInRight">
            <div className='card card-style'>
              <h3>Customer Service vs Technical Support:</h3>
              <p>The primary focus of technical support is to resolve a technical incident or problem. These incidents are either perceived or actual deficiencies with the service or product the customer is seeking support for. That’s why it behooves the technical support engineer/representative—and the company—to:</p>
              </div>
              </ScrollAnimation>
          </div>
        </div>
        <div className='row mx-5'>
          <div className='col-md-4'>
            <ScrollAnimation animateIn="fadeInLeft">
          <div className='img'>
            <img src='./images/techn.jpg' alt='img' style={{ width: "100%", height: "100%", borderRadius: "15px" }} />
          </div>
          </ScrollAnimation>
          </div>
          <div className='col-md-8'>
          <ScrollAnimation animateIn="fadeInRight">
            <div className='card card-style'>
              <h3>Different customer approaches</h3>
             <p>Good technical support means listening in order to fix. A technical support representative is focused on resolving your issue as quickly as possible. Technical support reps listen to symptoms, try to reproduce the issue, and quickly provide a solution to the issue.</p>
              </div>
              </ScrollAnimation>
          </div>
        </div>
        <div className='row mx-5'>
          <div className='col-md-4'>
            <ScrollAnimation animateIn="fadeInLeft">
          <div className='img'>
            <img src='./images/techni.jpg' alt='img' style={{ width: "100%", height: "100%", borderRadius: "15px" }} />
          </div>
          </ScrollAnimation>
          </div>
          <div className='col-md-8'>
          <ScrollAnimation animateIn="fadeInRight">
            <div className='card card-style'>
              <h3>Customer service best practices</h3>
             <p>At this point you are probably wondering just what customer experience is. Simply put, customer experience (CX) is customer comfort. Comfort is a general feeling that the money and time you have invested in a product or service is worth the value received.</p>
              </div>
              </ScrollAnimation>
          </div>
        </div>
      </div>
     <Footer/> 
    </>
  )
}

export default Technicalsup
