import React, { useRef } from 'react';
import img1 from '../../assets/img2.svg';
import '../Home/Home.css';

export default function Home() {
    const portfolioRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div className='Home-body'>
                <img src={img1} alt="" />
                <h1>START REACT</h1>
            </div>
            <section ref={portfolioRef}>
                {/* Include your Portfolio content here */}
            </section>
            <section ref={aboutRef}>
                {/* Include your About content here */}
            </section>
            <section ref={contactRef}>
                {/* Include your Contact content here */}
            </section>
        </>
    );
}














// import React from 'react'
// import img1 from '../../assets/img2.svg'
// import "../Home/Home.css"
// export default function Home() {
//     return (
//         <>
//             <div className='Home-body'>
//                 <h1>START REACT</h1>
//                 <img src={img1} alt="" />
//             </div>
//         </>
//     )
// }
