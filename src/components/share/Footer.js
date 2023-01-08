import React from 'react'
import { NavLink } from "react-router-dom";
const Footer = () => {
    return (
        <>

            <div>


                <footer
                    className="text-center text-lg-start text-white"
                    style={{ backgroundColor: "#1c2331" }}>
                    <section
                        className="d-flex justify-content-between p-4"
                        style={{ backgroundColor: "#6351ce" }}>
                        <div className="me-5">
                            <span>Get connected with us on social networks:</span>
                        </div>
                        <div>
                            <NavLink to="/" className="text-white me-4">
                                <i className="fab fa-facebook-f"></i>
                            </NavLink>
                            <NavLink to="/" className="text-white me-4">
                                <i className="fab fa-twitter"></i>
                            </NavLink>
                            <NavLink to="/" className="text-white me-4">
                                <i className="fab fa-google"></i>
                            </NavLink>
                            <NavLink to="/" className="text-white me-4">
                                <i className="fab fa-instagram"></i>
                            </NavLink>
                            <NavLink to="/" className="text-white me-4">
                                <i className="fab fa-linkedin"></i>
                            </NavLink>
                            <NavLink to="/" className="text-white me-4">
                                <i className="fab fa-github"></i>
                            </NavLink>
                        </div>

                    </section>
                    <section>
                        <div className="mx-5 text-center text-md-start mt-5">
                            <div className="row mt-3">
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">Company name</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                                    <p>
                                       Theglobalvibes  is a good Company
                                    </p>
                                </div>
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">Products</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                                    <p>
                                        <NavLink to="/" className="text-white">Designing</NavLink>
                                    </p>
                                    <p>
                                        <NavLink to="/" className="text-white">Web development</NavLink>
                                    </p>
                                    <p>
                                        <NavLink to="/" className="text-white">Testing</NavLink>
                                    </p>
                                    <p>
                                        <NavLink to="/" className="text-white">Networking</NavLink>
                                    </p>
                                </div>

                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                    <h6 className="text-uppercase fw-bold">Useful links</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                    />
                                    <p>
                                        <NavLink to="/webService" className="text-white">Service</NavLink>
                                    </p>
                                    <p>
                                        <NavLink to="/blog" className="text-white">Blog</NavLink>
                                    </p>
                                    <p>
                                        <NavLink to="/about" className="text-white">About Us</NavLink>
                                    </p>
                                    <p>
                                        <NavLink to="/contact" className="text-white">Contact Us</NavLink>
                                    </p>
                                </div>

                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    <h6 className="text-uppercase fw-bold">Contact</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}/>
                                    <p><i className="fas fa-home mr-3"></i> India</p>
                                    <p><i className="fas fa-envelope mr-3"></i> sdm123@gmail.com</p>
                                    <p><i className="fas fa-phone mr-3"></i> + 91 9541567888</p>
                                    <p><i className="fas fa-print mr-3"></i> + 91 9823456789</p>
                                </div>

                            </div>

                        </div>
                    </section>

                    <div
                        className="text-center p-3"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                   
                        © 2022 Copyright
                        <NavLink className="text-white" to="/"></NavLink>
                    </div>
                </footer>
            </div>

        </>
    )
}

export default Footer
