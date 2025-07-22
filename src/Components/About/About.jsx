import React from 'react';
import { FaStar } from 'react-icons/fa';
import '../About/About.css';

export default function About() {
    return (
        <div className='about-body'>
            <h2 className=' m-5 fw-bolder text-white text-uppercase'>About</h2>
            <div className="icon">
                <FaStar style={{ color: 'white', fontSize: '45px' }} />
            </div><div className="row d-flex justify-content-center ">
                <div className="col-md-12 col-lg-4">
                    <p className=' text-white px-3'>
                        Freelancer is a free bootstrap theme created by Route. The download includes the complete
                        source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets
                        for easy customization.
                    </p>
                </div>
                <div className="col-md-12 col-lg-4">
                    <p className=' text-white px-3'>
                        You can create your own custom avatar for the masthead, change the icon in the dividers, and
                        add your email address to the contact form to make it fully functional!
                    </p>
                </div>
            </div>

        </div>
    )
}
