import React from 'react'
import Navbar from '../share/Navbar'
import Footer from '../share/Footer'
import "./service.css"
import ScrollAnimation from 'react-animate-on-scroll'
const Digital = () => {
  return (
    <>
      <Navbar/>
      <div className='container my-5'>
      <div className='row mxs'>
        <div className='col-md-4'>
        <ScrollAnimation animateIn="fadeInLeft">
        <div className='img'>
          <img src='./images/digital3.png' alt='img' style={{ width: "100%", height: "100%", borderRadius: "15px" }} />
        </div>
        </ScrollAnimation>
        </div>
        <div className='col-md-8'>
        <ScrollAnimation animateIn='fadeInRight'>
          <div className='card card-style'>
            <h3>We offer advertising solutions for every level of expertise.</h3>
            <p>You don't have to be an expert to start advertising on Facebook. Create and run campaigns using simple self-serve tools, and track their performance with easy-to-read reports. More than two billion people use Facebook every month – so no matter what kind of audience you want to reach, you'll find them here.</p>            
          </div>
          </ScrollAnimation>
        </div>
      </div>
      <div className='row mxs'>
        <div className='col-md-4'>
        <ScrollAnimation animateIn="fadeInLeft">
        <div className='img'>
          <img src='./images/digital.png' alt='img' style={{ width: "100%", height: "100%", borderRadius: "15px" }} />
        </div>
        </ScrollAnimation>
        </div>
        <div className='col-md-8'>
        <ScrollAnimation animateIn='fadeInRight'>
          <div className='card card-style'>
            <h3> Choose your objective.</h3>
            <p>To choose the right ad objective, answer the question "what's the most important outcome I want from this ad?" It could be sales on your website, downloads of your app or increased brand awareness.</p>
          </div>
          </ScrollAnimation>
        </div>
      </div>
      <div className='row mxs'>
        <div className='col-md-4'>
        <ScrollAnimation animateIn="fadeInLeft">
        <div className='img'>
          <img src='./images/digital1.png' alt='img' style={{ width: "100%", height: "100%", borderRadius: "15px" }} />
        </div>
        </ScrollAnimation>
        </div>
        <div className='col-md-8'>
        <ScrollAnimation animateIn='fadeInRight'>
          <div className='card card-style'>
            <h3>Measure and manage your ad.</h3>
            <p>When your ad is running, you can track performance and edit your campaign in Ads Manager. See if one version of your ad is working better than another, or if your ad is being delivered efficiently, and make tweaks and adjustments as needed.</p>
          </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
      <Footer/>
    </>
  )
}

export default Digital;
