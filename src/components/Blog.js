import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import Footer from './share/Footer'
import Navbar from './share/Navbar'

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='row my-5'>
          <div className='col-sm-12 col-md-6'>
          <ScrollAnimation animateIn="fadeInLeft">
            <div className='img'>
              <img src='./images/img3.jpg' alt='img' style={{ width: "100%", height: "100%", borderRadius: "15px" }} />
            </div>
            </ScrollAnimation>
          </div>
          <div className='col-sm-12 col-md-6'>
            <ScrollAnimation animateIn='fadeInRight'>
              <h2>The Important things</h2>
              <p>On the other hand, we denounce with  so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."</p>
            </ScrollAnimation>
          </div>
          <div className='d-flex justify-content-center mt-4'>
            <button type="button" className="btn btn-outline-primary rounded-pill">Read More </button>
          </div>
        </div>.
        <div className='row mb-5'>
          <div className='col-sm-12 col-md-6'>
            <ScrollAnimation animateIn="fadeInLeft">
              <h2>Our Vision</h2>
              <p>On the other hand, we denounce with  so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."</p>
            </ScrollAnimation>
          </div>
          <div className='col-sm-12 col-md-6'>
          <ScrollAnimation animateIn="fadeInRight">
            <div className='img'>
              <img src='./images/img2.jpg' alt='img' style={{ width: "100%", height: "100%", borderRadius: "15px" }} />
            </div>
            </ScrollAnimation>
          </div>

          <div className='d-flex justify-content-center mt-4'>
            <button type="button" className="btn btn-outline-primary rounded-pill">Read More </button>
          </div>
        </div>
        <div className='row mb-5 pt-3'>
          <div className='col-sm-12 col-md-6'>
          <ScrollAnimation animateIn="fadeInLeft">
            <div className='img'>
              <img src='./images/img4.jpg' alt='img' style={{ width: "100%", height: "100%", borderRadius: "15px" }} />
            </div>
            </ScrollAnimation>
          </div>
          <div className='col-sm-12 col-md-6'>
            <ScrollAnimation animateIn='fadeInRight'>
              <h2>Our Mission</h2>
              <p>On the other hand, we denounce with  so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."</p>
            </ScrollAnimation>
          </div>
          <div className='d-flex justify-content-center mt-4'>
            <button type="button" className="btn btn-outline-primary rounded-pill">Read More</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Blog
