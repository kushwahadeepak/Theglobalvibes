import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import Footer from '../share/Footer'
import Navbar from '../share/Navbar'
import "./service.css"
const Ecommerce = () => {
  return (
    <>
      <Navbar />
      <div className='container my-5'>
        <div className='row mxs'>
          <div className='col-md-4'>
            <ScrollAnimation animateIn="fadeInLeft">
              <div className='img'>
                <img src='./images/e-commerc.jpg' alt='img' style={{ width: "100%", height: "100%", borderRadius: "15px" }} />
              </div>
            </ScrollAnimation>
          </div>
          <div className='col-md-8'>
            <ScrollAnimation animateIn='fadeInRight'>
              <div className='card card-style'>
                <h3>E-commerce Website Starting</h3>
                <p>Creating an eCommerce website for your business is now easy and affordable with AmazingWeb.Design. We are a specialists online store development company, Being a Renowned eCommerce Web & App Development Company in India, we create eCommerce websites and Mobile Apps with the latest technology.</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className='row mxs'>
          <div className='col-md-4'>
            <ScrollAnimation animateIn="fadeInLeft">
              <div className='img'>
                <img src='./images/e-commerce.png' alt='img' style={{ width: "88%", height: "100%", borderRadius: "15px", marginBottom: "15px" }} />
              </div>
            </ScrollAnimation>
          </div>
          <div className='col-md-8'>
            <ScrollAnimation animateIn='fadeInRight'>
              <div className='card card-style'>
                <h3>Express Functionality</h3>
                <p>Get magnetised by our premium features that may avail you in your growth.
                  Our eCommerce solutions render the best features and functionality and tailor a perfect solution that matches your online brand and eCommerce goals
                  Our eCommerce solutions render the best features and functionality and tailor a perfect solution that matches your online brand and eCommerce goals
                  .</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className='row mxs'>
          <div className='col-md-4'>
            <ScrollAnimation animateIn="fadeInLeft">
              <div className='img'>
                <img src='./images/ecommerce.png' alt='img' style={{ width: "100%", height: "100%", borderRadius: "15px" }} />
              </div>
            </ScrollAnimation>
          </div>
          <div className='col-md-8'>
            <ScrollAnimation animateIn='fadeInRight'>
              <div className='card card-style'>
                <h3>Start Selling Online!</h3>
                <p>Make money through your e-Commerce website online with our enhanced performance. Opting for e-Commerce is a huge profit in itself as your revenue doesn’t necessarily rely on great salespeople or opening hours. When you and your customers are no longer restricted.</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Ecommerce
