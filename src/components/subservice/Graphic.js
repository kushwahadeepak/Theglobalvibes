import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import Footer from '../share/Footer'
import Navbar from '../share/Navbar'
import "./service.css"
const Graphic = () => {
  return (
    <>
      <Navbar/>
      <div className='container my-5'>
      <div className='row mx-5'>
        <div className='col-md-4'>
           <ScrollAnimation animateIn="fadeInLeft">
          <div className='img'>
            <img src='./images/Graphic.jpg' alt='img' style={{ width: "100%", height: "100%", borderRadius: "15px" }} />
          </div>
          </ScrollAnimation>
        </div>
        <div className='col-md-8'>
        <ScrollAnimation animateIn='fadeInRight'>
          <div className='card card-style'>
            <h3>Graphic Design is about Molding the User Experience Visually</h3>
            <p>Graphic design is an ancient craft, dating back past Egyptian hieroglyphs to at least 17,000-year-old cave paintings. It’s a term that originated in the 1920s’ print industry. It continues to cover a range of activities including logo creation. Graphic design in this sense concerns aesthetic appeal and marketing. Graphic designers attract viewers using images, color and typography</p>
          </div>
          </ScrollAnimation>
        </div>
      </div>
      <div className='row mx-5'>
        <div className='col-md-4'>
           <ScrollAnimation animateIn="fadeInLeft">
          <div className='img'>
            <img src='./images/Graphicd.jpg' alt='img' style={{ width: "100%", height: "100%", borderRadius: "15px" }} />
          </div>
          </ScrollAnimation>
        </div>
        <div className='col-md-8'>
        <ScrollAnimation animateIn='fadeInRight'>
          <div className='card card-style'>
            <h3>Graphic Design is Emotional Design</h3>
            <p>Although to work in the digital age means you must design with interactive software, graphic design still revolves around age-old principles. It’s crucial that you strike the right chord with users from their first glance—hence graphic design’s correspondence with emotional design.</p>
          </div>
          </ScrollAnimation>
        </div>
      </div>
      <div className='row mx-5'>
        <div className='col-md-4'>
           <ScrollAnimation animateIn="fadeInLeft">
          <div className='img'>
            <img src='./images/Graphicdg.jpg' alt='img' style={{ width: "100%", height: "100%", borderRadius: "15px" }} />
          </div>
          </ScrollAnimation>
        </div>
        <div className='col-md-8'>
        <ScrollAnimation animateIn='fadeInRight'>
          <div className='card card-style'>
            <h3>How to Change Your Career from Graphic Design to UX Design</h3>
            <p>If there’s an occupation that is 100% linked with the public’s idea of what design is all about, it’s graphic design. From the familiar golden arches of the McDonald’s brand to the typography and colors of movie posters, graphic designers create some of the most iconic and ubiquitous designs around us. So why would a graphic designer like you want to change your career to UX design? Well, for one, much can be said about the sense of satisfaction and fulfillment derived from getting “under the hood”</p>
          </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
      <Footer/>
    </>
  )
}

export default Graphic
