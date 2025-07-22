import React from 'react';
import '../Footer/Footer.css';

export default function Footer() {
    return (
        <>
            <div className=' mt-5'>
                <footer
                    className="text-center  text-white"
                    style={{ backgroundColor: '#2C3E50' }}
                >
                    <div className="container p-4 pb-0">
                        <section>
                            <div className="row">
                                <div className="col-lg-4 col-md-12 text-center my-5">
                                    <h3 className="text-uppercase fw-bolder fs-1 mb-3">LOCATION</h3>

                                    <span className= 'fs-5'>
                                        2215 John Daniel Drive <br />
                                        Clark, MO 65243
                                    </span>
                                </div>

                                <div className="col-lg-4 col-md-12 text-center my-5 ">
                                    <h3 className="text-uppercase fw-bolder fs-1 mb-3">AROUND THE WEB</h3>

                                    <section className="mb-4 text-center">
                                        <a
                                            className="btn btn-outline-light btn-floating m-2 border rounded-5 fs-3"
                                            href="#!"
                                            role="button" 
                                        ><i className="fab fa-facebook-f"></i
                                        ></a>

                                        <a
                                            className="btn btn-outline-light btn-floating m-2 border rounded-5 fs-3"
                                            href="#!"
                                            role="button"
                                        ><i className="fab fa-twitter"></i
                                        ></a>


                                        <a
                                            className="btn btn-outline-light btn-floating m-2 border rounded-5 fs-3"
                                            href="#!"
                                            role="button"
                                        ><i className="fab fa-linkedin-in"></i
                                        ></a>

                                        <a
                                            className="btn btn-outline-light btn-floating m-2 border rounded-5 fs-3"
                                            href="#!"
                                            role="button"
                                        ><i className="fab fa-youtube"></i
                                        ></a>
                                    </section>
                                </div>
                                <div className="col-lg-4 col-md-12 text-center my-5">
                                    <h3 className="text-uppercase fw-bolder fs-1 mb-3">about freelancer</h3>
                                    <span className= 'fs-5'>Freelance is a free to use, MIT licensed Bootstrap theme created by Hamza Nouh</span>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div
                        className="text-center py-3 fs-4"
                        style={{ backgroundColor: '#1A252F' }}
                    >
                        Copyright © Hamza Nouh 2022
                    </div>

                </footer>
            </div>
        </>
    );
}
