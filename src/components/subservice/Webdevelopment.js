import React from 'react'
import Footer from '../share/Footer'
import Navbar from '../share/Navbar'
import ScrollAnimation from 'react-animate-on-scroll'
import "./service.css"
const Webdevelopment = () => {
  return (
    <>
      <Navbar />
      <div className='container my-5'>
        <div className='row mxs'>
          <div className='col-md-4'>
             <ScrollAnimation animateIn="fadeInLeft">
          <div className='img'>
            <img src='./images/webd.jpg' alt='img' style={{ width: "100%", height: "100%", borderRadius: "15px" }} />
          </div>
          </ScrollAnimation>
          </div>
          <div className='col-md-8'>
          <ScrollAnimation animateIn="fadeInRight">
            <div className='card card-style'>
              <h3>Web developer tasks and responsibilities</h3>
              <p>As a web developer, you could work for a company or agency, or as a freelancer taking on projects for individual clients. Your tasks will vary depending on your work situation, but day-to-day responsibilities might generally include:</p>
              Designing user interfaces and navigation menus

              Writing and reviewing code for sites, typically HTML, XML, or JavaScript

              Integrating multimedia content onto a site

              Testing web applications

              Troubleshooting problems with performance or user experience

              Collaborating with designers, developers, and stakeholders
            </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className='row mxs'>
          <div className='col-md-4'>
             <ScrollAnimation animateIn="fadeInLeft">
          <div className='img'>
            <img src='./images/webpag.jpg' alt='img' style={{ width: "100%", height: "100%", borderRadius: "15px" }} />
          </div>
          </ScrollAnimation>
          </div>
          <div className='col-md-8'>
          <ScrollAnimation animateIn="fadeInRight">
            <div className='card card-style'>
              <h3>Web developer career path</h3>
              <p>Many web developers start their careers with a single focus, usually front-end or back-end development. They may move on to be full-stack developers or explore careers in related fields, including project management, computer programming, or graphic design. </p>
             </div>
             </ScrollAnimation>
          </div>
        </div>
        <div className='row mxs'>
          <div className='col-md-4'>
             <ScrollAnimation animateIn="fadeInLeft">
          <div className='img'>
            <img src='./images/webpage.jpg' alt='img' style={{ width: "100%", height: "100%", borderRadius: "15px" }} />
          </div>
          </ScrollAnimation>
          </div>
          <div className='col-md-8'>
          <ScrollAnimation animateIn="fadeInRight">
            <div className='card card-style'>
              <h3>Take a course in web development.</h3>
              <p>You don’t necessarily need formal training to work as a web developer. It’s possible to acquire the skills you need on your own. For example, you can take a course to learn programming languages like HTML, JavaScript, or CSS, and then put what you learn into practice on your own website.</p>
              </div>
              </ScrollAnimation>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Webdevelopment
