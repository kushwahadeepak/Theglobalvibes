import React from 'react'
import Navbar from '../share/Navbar'
import Footer from '../share/Footer'
import "./service.css"
import ScrollAnimation from 'react-animate-on-scroll'
const AppDevelopment = () => {
  return (
    <>
      <Navbar />
      <div className='container my-5'>
        <div className='row mxs'>
          <div className='col-md-4'>
          <ScrollAnimation animateIn="fadeInLeft">
          <div className='img'>
            <img src='./images/appdev.png' alt='img' style={{ width: "90%", height: "90%", borderRadius: "15px" }} />
          </div>
          </ScrollAnimation>
          </div>
          <div className='col-md-8'>
          <ScrollAnimation animateIn='fadeInRight'>
            <div className='card card-style'>
              <h3>Develop for both Android and iOS: Native apps or hybrid apps</h3>
              <p>Let’s say you need to do mobile application development for both the Android operating system and iOS. What is the best software development approach</p>
              <p>Mobile application development is the process to making software for smartphones and digital assistants, most commonly for Android and iOS. The software can be preinstalled on the device, downloaded from a mobile app store or accessed through a mobile web browser. The programming and markup languages used for this kind of software development include Java, Swift, C# and HTML5.</p>
            </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className='row mxs'>
          <div className='col-md-4'>
          <ScrollAnimation animateIn="fadeInLeft">
          <div className='img'>
            <img src='./images/appde.png' alt='img' style={{ width: "100%", height: "100%", borderRadius: "15px" }} />
          </div>
          </ScrollAnimation>
          </div>
          <div className='col-md-8'>
          <ScrollAnimation animateIn='fadeInRight'>
            <div className='card card-style'>
              <h3>Develop for both Android and iOS: Native apps or hybrid apps</h3>
              <p>Let’s say you need to do mobile application development for both the Android operating system and iOS. What is the best software development approach</p>
              <p>Mobile application development is the process to making software for smartphones and digital assistants, most commonly for Android and iOS. The software can be preinstalled on the device, downloaded from a mobile app store or accessed through a mobile web browser. The programming and markup languages used for this kind of software development include Java, Swift, C# and HTML5.</p>
            </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className='row mxs'>
          <div className='col-md-4'>
          <ScrollAnimation animateIn="fadeInLeft">
          <div className='img'>
            <img src='./images/appdevl.png' alt='img' style={{ width: "85%", height: "80%", borderRadius: "15px" }} />
          </div>
          </ScrollAnimation>
          </div>
          <div className='col-md-8'>
          <ScrollAnimation animateIn='fadeInRight'>
            <div className='card card-style'>
              <h3>Develop for both Android and iOS: Native apps or hybrid apps</h3>
              <p>Let’s say you need to do mobile application development for both the Android operating system and iOS. What is the best software development approach</p>
              <p>Mobile application development is the process to making software for smartphones and digital assistants, most commonly for Android and iOS. The software can be preinstalled on the device, downloaded from a mobile app store or accessed through a mobile web browser. The programming and markup languages used for this kind of software development include Java, Swift, C# and HTML5.</p>
            </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AppDevelopment
