import React, {useState} from 'react'
import "./Allpage.css";
import Footer from './share/Footer'
import Navbar from './share/Navbar'
const Contact = () => {
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

// const submitValue = () => {
    const submitValue = {
        'First Name' : fName,
        'Last Name' : lName,
        'Phone' : phone,
        'Email' : email,
        'Subject' : subject,
        'Message' : message
    }
// }
    console.log(submitValue);
    return (
        <>
            <Navbar />
            <div className='container-fluid'>
                <div className='row mxf my-5'>
                    <div className='col-sm-12 col-md-6'>
                        <div className='style-img'>
                            <img src='./images/contact-us.png' alt='' style={{
                                width: " 100%",
                                height: "100%", borderRadius: "8px"
                            }} />
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <div className='card style-card py-3'>
                            <div className='mx-3'>
                                <form action=''>
                                    <div className="form-floating mb-3 ">
                                        <input type="text" className="form-control input-style" id="floatingInput" placeholder="firstname" onChange={e => setfName(e.target.value)} />
                                        <label for="floatingInput">First Name</label>
                                    </div>
                                    <div className="form-floating mb-3 ">
                                        <input type="text" className="form-control input-style" id="floatingInput" placeholder="lastname" onChange={e => setlName(e.target.value)} />
                                        <label for="floatingInput">Last Name</label>
                                    </div>
                                    <div className="form-floating mb-3 ">
                                        <input type="email" className="form-control input-style" id="floatingInput" placeholder="email@example.com" onChange={e => setEmail(e.target.value)} />
                                        <label for="floatingInput">Email address</label>
                                    </div>
                                    <div className="form-floating mb-3 ">
                                        <input type="tel" className="form-control input-style" id="floatingInput" placeholder="1234567891" onChange={e => setPhone(e.target.value)} />
                                        <label for="floatingInput">phone</label>
                                    </div>
                                    <div className="form-floating mb-3 ">
                                        <input type="text" className="form-control input-style" id="floatingPassword" placeholder="subject" onChange={e => setSubject(e.target.value)} />
                                        <label for="floatingPassword">Subject</label>
                                    </div>
                                    <div className="form-floating mb-3 ">
                                        <textarea className="form-control input-style" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }} onChange={e => setMessage(e.target.value)} ></textarea>
                                        <label for="floatingTextarea2">Comments</label>
                                    </div>
                                    <div className="d-grid gap-2 col-6 mx-auto ">
                                        <button className="btn btn-primary rounded-pill py-2" type="button" onClick={submitValue}>Submit</button>

                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Contact
