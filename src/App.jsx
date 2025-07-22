import React, { useRef } from 'react';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import NavbarComponent from './Components/NavbarComponent/NavbarComponent';
import Portfolio from './Components/Portfolio/Portfolio';

function App() {
  const homeRef = useRef(null);
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const handleLinkClick = (section) => {
    if (section === 'home') homeRef.current.scrollIntoView({ behavior: 'smooth' });
    if (section === 'portfolio') portfolioRef.current.scrollIntoView({ behavior: 'smooth' });
    if (section === 'about') aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    if (section === 'contact') contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <NavbarComponent onLinkClick={handleLinkClick} />
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;




// import React from 'react';
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import './App.css'; // Import your styles if needed
// import About from './Components/About/About';
// import Contact from './Components/Contact/Contact';
// import Footer from './Components/Footer/Footer';
// import Home from './Components/Home/Home'; // Assuming you have these components
// import NavbarComponent from './Components/NavbarComponent/NavbarComponent';
// import Portfolio from './Components/Portfolio/Portfolio';

// function App() {
//   return (
//     <Router>
//       <NavbarComponent />
//       <Home />
//       <Portfolio />
//       <About />
//       <Contact />
//       <Footer />
//       <Routes>
//         {/* <Route path="/home" element={<Home />} /> */}
//         <Route path="/portfolio" element={<Portfolio />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/" element={<Home />} /> {/* Default route */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

