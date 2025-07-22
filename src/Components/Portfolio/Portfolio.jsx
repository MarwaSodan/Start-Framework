import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';
import img5 from '../../assets/img5.png';
import img6 from '../../assets/img6.png';
import img7 from '../../assets/img7.png';
import '../Portfolio/Portfolio.css';

export default function Portfolio() {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [img2, img3, img4, img5, img6, img7];

    const handleCardClick = (imgSrc) => {
        setSelectedImage(imgSrc);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className='portfolio-body text-center container'>
            <h2 className='m-5 fw-bolder text-uppercase'>Portfolio</h2>
            <div className="icon mx-auto mb-4">
                <FaStar style={{ color: '#2C3E50', fontSize: '45px' }} />
            </div>
            <div className="row justify-content-center">
                {images.map((img, index) => (
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
                        <div
                            className="card shadow"
                            style={{ width: '100%' }}
                            onClick={() => handleCardClick(img)}
                        >
                            <img src={img} className="card-img-top" alt="Project Image" />
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <>
                    <div
                        className="modal-backdrop custom-backdrop fade show"
                        onClick={handleCloseModal} // Close modal on backdrop click
                        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1040 }} // Make sure it covers the entire screen
                    ></div>
                    <div className="modal fade show d-block" tabIndex="-1" style={{ display: 'block', zIndex: 1050 }}>
                        <div className="modal-dialog rounded">
                            <div className="modal-content py-5 vh-100">
                                <h3 className="display-5 fw-bolder text-center mb-4">LOG CABIN</h3>
                                <div className="divider mt-2">
                                    <i className="fa-solid fa-star fa-2xl"></i>
                                </div>
                                <button
                                    type="button"
                                    className="position-absolute end-0 top-0 m-3 border-0 bg-white"
                                    onClick={handleCloseModal}
                                >
                                    <i className="fa-solid fa-xmark main-color h1"></i>
                                </button>
                                <div className="modal-body">
                                    <div className="container">
                                        <figure className="my-5">
                                            <img className="img-fluid" src={selectedImage} alt="Project Detail" />
                                        </figure>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    </div>
                                </div>
                                <div className="modal-footer justify-content-center align-items-center border-top-0">
                                    <button type="button" className="btn btn-secondary main-background border-0 fw-bolder py-2 px-3" onClick={handleCloseModal}>
                                        <span className="fw-bolder">X</span> Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}




        </div>
    );
}






// {selectedImage && (
//     <div className="modal fade show d-block" tabIndex="-1" style={{ display: 'block' }}>
//         <div className="modal-dialog rounded">
//             <div className="modal-content py-5 vh-100">
//                 <h3 className="display-5 fw-bolder text-center mb-4">LOG CABIN</h3>
//                 <div className="divider mt-2">
//                     <i className="fa-solid fa-star fa-2xl"></i>
//                 </div>
//                 <button
//                     type="button"
//                     className="position-absolute end-0 top-0 m-3 border-0 bg-white"
//                     onClick={handleCloseModal}
//                 >
//                     <i className="fa-solid fa-xmark main-color h1"></i>
//                 </button>
//                 <div className="modal-body">
//                     <div className="container">
//                         <figure className="my-5">
//                             <img className="img-fluid" src={selectedImage} alt="Project Detail" />
//                         </figure>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
//                     </div>
//                 </div>
//                 <div className="modal-footer justify-content-center align-items-center border-top-0">
//                     <button type="button" className="btn btn-secondary main-background border-0 fw-bolder py-2 px-3" onClick={handleCloseModal}>
//                         <span className="fw-bolder">X</span> Close Window
//                     </button>
//                 </div>
//             </div>
//         </div>
//     </div>
// )}



















// import React, { useState } from 'react';
// import { FaStar } from 'react-icons/fa';
// import img2 from '../../assets/img2.png';
// import img3 from '../../assets/img3.png';
// import img4 from '../../assets/img4.png';
// import img5 from '../../assets/img5.png';
// import img6 from '../../assets/img6.png';
// import img7 from '../../assets/img7.png';
// import '../Portfolio/Portfolio.css';


// export default function Portfolio() {

//     const [selectedCard, setSelectedCard] = useState(null);

//     const handleCardClick = (index) => {
//         setSelectedCard(index);
//     };

//     const handleCloseModal = () => {
//         setSelectedCard(null);
//     };

//     return (
//         <div className='portfolio-body text-center  container'>
//             <h2 className='m-5 fw-bolder text-uppercase'>Portfolio</h2>
//             <div className="icon mx-auto mb-4">
//                 <FaStar style={{ color: '#2C3E50', fontSize: '45px' }} />
//             </div>
//             <div className="row justify-content-center">
//                 <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
//                     <div className="card shadow" data-bs-toggle="modal" data-bs-target="#index0" style={{ width: '100%' }}>
//                         <img src={img2} className="card-img-top" alt="Project Image" />
//                     </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
//                     <div className="card shadow" style={{ width: '100%' }}>
//                         <img src={img3} className="card-img-top" alt="Project Image" />
//                     </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
//                     <div className="card shadow" style={{ width: '100%' }}>
//                         <img src={img4} className="card-img-top" alt="Project Image" />
//                     </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
//                     <div className="card shadow" style={{ width: '100%' }}>
//                         <img src={img5} className="card-img-top" alt="Project Image" />
//                     </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
//                     <div className="card shadow" style={{ width: '100%' }}>
//                         <img src={img6} className="card-img-top" alt="Project Image" />
//                     </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
//                     <div className="card shadow" style={{ width: '100%' }}>
//                         <img src={img7} className="card-img-top" alt="Project Image" />
//                     </div>
//                 </div>
//             </div>
//             {selectedCard !== null && (
//                 <div className="modal fade show d-block" tabIndex="-1">
//                     <div className="modal-dialog rounded">
//                         <div className="modal-content py-5 vh-100">
//                             <h3 className="display-5 fw-bolder text-center mb-4">LOG CABIN</h3>
//                             <div className="divider mt-2">
//                                 <i className="fa-solid fa-star fa-2xl"></i>
//                             </div>
//                             <button
//                                 type="button"
//                                 className="position-absolute end-0 top-0 m-3 border-0 bg-white"
//                                 onClick={handleCloseModal}
//                             >
//                                 <i className="fa-solid fa-xmark main-color h1"></i>
//                             </button>
//                             <div className="modal-body">
//                                 <div className="container">
//                                     <figure className="my-5">
//                                         <img className="img-fluid" src={img2} alt="Project Detail" />
//                                     </figure>
//                                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
//                                 </div>
//                             </div>
//                             <div className="modal-footer justify-content-center align-items-center border-top-0">
//                                 <button type="button" className="btn btn-secondary main-background border-0 fw-bolder py-2 px-3" onClick={handleCloseModal}>
//                                     <span className="fw-bolder">X</span> Close Window
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

