import React from 'react'
import Footer from './share/Footer'
import Navbar from './share/Navbar'
const About = () => {
  return (
    <>
      <Navbar />
      <section className='my-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 col-md-6'>
              <div className=''>
                <img src='./images/Vision.png' alt='img' style={{ width: "75%" }} />
              </div>
            </div>
            <div className='col-sm-12 col-md-6'>
              <div className='mx-3 border-end' style={{ height: "35%" }}>
                <div className='d-flex justify-content-end'>
                  <div className='about-border-top border-top'></div>
                </div>
                <h2 className='mt-3 mx-4'>Our Vision</h2>
                <p className="mx-4 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It</p>
              </div>
            </div>
          </div>
          <div className='row mt-5'>
            <div className='col-sm-12 col-md-6'>
              <div className='mx-4'>
                <h2 className='mx-4'>Our Mission</h2>
                <p className='mx-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It</p>
              </div>
              <div className=' border-start' style={{ height: "30%" }}></div>
              <div className=''>
                <div className='about-border-top border-bottom'></div>
              </div>
            </div>

            <div className='col-sm-12 col-md-6'>
              <div className=''>
                <img src='./images/mission.png' alt="img" style={{ width: "75%" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default About
