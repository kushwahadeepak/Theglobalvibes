
import Navbar from './share/Navbar'
import Footer from './share/Footer'
import { Carousel } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';


const Home = () => {

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
      <section>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 img-height"
              src="./images/img3.jpg" style={{ height: "500px" }}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className=' animate__animated animate__backInLeft animate__slow'>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100 img-height"
              src="./images/img1.jpg"
              alt="Second slide" style={{ height: "500px" }}
            />
            <Carousel.Caption>
              <h3 className=' animate__animated animate__backInLeft animate__slow'>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-height"
              src="./images/img2.jpg" style={{ height: "500px" }}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3 className=' animate__animated animate__backInLeft animate__slow'>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <section >
        <div className='container mt-5'>
          <ScrollAnimation animateIn='slideInDown'>
            <h3 className='text-center my-4'>Services</h3>
          </ScrollAnimation>
          <div className='row '>
            <div className='col-sm-12 col-md-4'>
              <div className="maincontainer">
                <div className="back">
                  <h2 className='text-center'>App Development</h2>
                  <p>Introduction to Copywriting’ workshop focuses on the theory and processes of professional copywriting as applied to persuasion, reasoning, and rhetoric. This workshop is best-suited to learning how to write and think about consumer-driven functions.</p>
                  <div className='d-flex justify-content-center'>
                    <button className="service-home-button-style" onClick={() => goToAppDevelopment()}>Read More</button>
                  </div>
                </div>
                <div className="front">
                  <div className="image">
                    <img src="./images/img6.jpg" alt='img' className='w-100 h-50 rounded-3' />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-12 col-md-4'>
              <div className="maincontainer">
                <div className="back">
                  <h2 className='text-center'>Web Development</h2>
                  <p>Introduction to Copywriting’ workshop focuses on the theory and processes of professional copywriting as applied to persuasion, reasoning, and rhetoric. This workshop is best-suited to learning how to write and think about consumer-driven functions.</p>
                  <div className='d-flex justify-content-center'>
                    <button className="service-home-button-style" onClick={() => goToWebdevelopment()}>Read More</button>
                  </div>
                </div>
                <div className="front">
                  <div className="image">
                    <img src="./images/img6.jpg" alt='img' className='w-100 h-50 rounded-3' />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-12 col-md-4'>
              <div className="maincontainer">
                <div className="back">
                  <h2 className='text-center'>Ecommerce Development</h2>
                  <p>Introduction to Copywriting’ workshop focuses on the theory and processes of professional copywriting as applied to persuasion, reasoning, and rhetoric. This workshop is best-suited to learning how to write and think about consumer-driven functions.</p>
                  <div className='d-flex justify-content-center'>
                    <button className="service-home-button-style" onClick={() => goToEcommerce()}>Read More</button>
                  </div>
                </div>
                <div className="front">
                  <div className="image">
                    <img src="./images/img6.jpg" alt='img' className='w-100 h-50 rounded-3' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-12 col-md-4'>
              <div className="maincontainer">
                <div className="back">
                  <h2 className='text-center'>Digital Markating</h2>
                  <p>Introduction to Copywriting’ workshop focuses on the theory and processes of professional copywriting as applied to persuasion, reasoning, and rhetoric. This workshop is best-suited to learning how to write and think about consumer-driven functions.</p>
                  <div className='d-flex justify-content-center'>
                    <button className="service-home-button-style" onClick={() => goToDigital()}>Read More</button>
                  </div>
                </div>
                <div className="front">
                  <div className="image">
                    <img src="./images/img6.jpg" alt='img' className='w-100 h-50 rounded-3' />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-12 col-md-4'>
              <div className="maincontainer">
                <div className="back">
                  <h2 className='text-center'>Graphic Designing</h2>
                  <p>Introduction to Copywriting’ workshop focuses on the theory and processes of professional copywriting as applied to persuasion, reasoning, and rhetoric. This workshop is best-suited to learning how to write and think about consumer-driven functions.</p>
                  <div className='d-flex justify-content-center'>
                    <button className="service-home-button-style" onClick={() => goToGraphic()}>Read More</button>
                  </div>
                </div>
                <div className="front">
                  <div className="image">
                    <img src="./images/img6.jpg" alt='img' className='w-100 h-50 rounded-3' />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-12 col-md-4'>
              <div className="maincontainer">
                <div className="back">
                  <h2 className='text-center'>Technical Support</h2>
                  <p>Introduction to Copywriting’ workshop focuses on the theory and processes of professional copywriting as applied to persuasion, reasoning, and rhetoric. This workshop is best-suited to learning how to write and think about consumer-driven functions.</p>
                  <div className='d-flex justify-content-center'>
                    <button className="service-home-button-style" onClick={() => goToTechnicalsup()}>Read More</button>
                  </div>
                </div>
                <div className="front">
                  <div className="image">
                    <img src="./images/img6.jpg" alt='img' className='w-100 h-50 rounded-3' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-4'>
        <div className='container'>
          <ScrollAnimation animateIn="slideInDown">
            <h3 className='text-center my-3'>Blog</h3>
          </ScrollAnimation>
          <div className='row'>
            <div className='col-sm-12 col-md-4 p-0'>
              <div className='wrapper style-wrapper'>
                <div className='card card-wrapper'>
                  <img src="./images/img2.jpg" alt='img' />
                  <div className='info'>
                    <h1 className='text-center1'>BLOG</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-12 col-md-8 '>
              <div className='row'>
                <div className='col-sm-12 col-md-6 p-0'>
                  <div className='wrapper'>
                    <div className='card card-wrapper'>
                      <img src="./images/img3.jpg" alt='img' />
                      <div className='info'>
                        <h1>heading</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pretium tellus at malesuada tempus.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-sm-12 col-md-6 p-0'>
                  <div className='wrapper'>
                    <div className='card card-wrapper'>
                      <img src="./images/img4.jpg" alt='img' />
                      <div className='info'>
                        <h1>heading</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pretium tellus at malesuada tempus.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-12 col-md-6 p-0'>
                  <div className='wrapper'>
                    <div className='card card-wrapper'>
                      <img src="./images/img1.jpg" alt='img' />
                      <div className='info'>
                        <h1>heading</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pretium tellus at malesuada tempus.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-sm-12 col-md-6 p-0'>
                  <div className='wrapper'>
                    <div className='card card-wrapper'>
                      <img src="./images/img1.jpg" alt='img' />
                      <div className='info'>
                        <h1>heading</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pretium tellus at malesuada tempus.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
      <section className=' bg-dark my-3'>
        <div className='container '>
          <ScrollAnimation animateIn='bounceInRight'>
            <h3 className='text-center text-white  py-5'>
              Our Experties
            </h3>
          </ScrollAnimation>

          <div className='image1-side-main pb-5'>
            <div className='row'>
              <div className='col-sm-4'>
                <div className='row'>
                  <div className='col-sm-1'>
                    <div className='image-side-text1'>
                      <h1 className='image-side-heading'>Designing</h1>
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <img src='./images/line 2.png' alt='img' className='image-side-line1' />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-sm-1'>
                    <div className='image-side-text2'>
                      <h1 className='image-side-heading'>Web Development</h1>
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <img src='./images/line 1.png' alt='img' className='image-side-line2' />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-sm-1'>
                    <div className='image-side-text3'>
                      <h1 className='image-side-heading'>App Development</h1>
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <img src='./images/line 3.png' alt='img' className='image-side-line3' />
                  </div>
                </div>
              </div>
              <div className='col-sm-4'>
                <ScrollAnimation animateIn="zoomInDown">
                  <div className='d-flex justify-content-center'>
                    <img src='./images/super.png' alt='img' className="img-experties" />
                  </div>
                </ScrollAnimation>
              </div>
              <div className='col-sm-4'>
                <div className='row'>
                  <div className='col-sm-3'>
                    <img src='./images/line 5.png' alt='img' className='image-side-line4' />
                  </div>
                  <div className='col-sm-1'>
                    <div className='image-side-text4'>
                      <h1 className='image-side-heading'>Testing</h1>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-sm-3'>
                    <img src='./images/line 6.png' alt='img' className='image-side-line5' />
                  </div>
                  <div className='col-sm-1'>
                    <div className='image-side-text5'>
                      <h1 className='image-side-heading'>Networking</h1>
                    </div>
                  </div>

                </div>
                <div className='row'>
                  <div className='col-sm-3'>
                    <img src='./images/line 4.png' alt='img' className='image-side-line6' />
                  </div>
                  <div className='col-sm-1'>
                    <div className='image-side-text6'>
                      <h1 className='image-side-heading'>Support</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     {/*<section className="my-3 cbp-so-section cbp-so-init cbp-so-animate">
        <div className='container-fluidn cbp-so-side cbp-so-side-left'>
          slider
        </div>
  </section>*/}
      <Footer />
    </>
  )
}
export default Home;
