// import React, { useState, useEffect } from 'react';
// import { FaBars } from 'react-icons/fa';
// import Img from '../Assets/logo.jpg'

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   const handleToggleNav = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">
//         <img src={Img} alt='logo'/>
//       </div>
//       <div className="hamburger-menu" onClick={handleToggleNav}>
//         <FaBars />
//       </div>
//       <div className={`navbar-menu ${showMenu ? 'show-menu' : ''}`}>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Education</li>
//           <li>Skills</li>
//           <li>Projects</li>
//           <li>Contact</li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// const ShootingStar = () => {
//   const [stars, setStars] = useState([]);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const star = {
//         x: Math.random() * window.innerWidth,
//         y: Math.random() * window.innerHeight,
//         speed: Math.random() * 5 + 1,
//         size: Math.random() * 5 + 1,
//       };
//       setStars((prevStars) => [...prevStars, star]);
//     }, 500);

//     return () => clearInterval(intervalId);
//   }, []);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setStars((stars) =>
//         stars.map((star) => ({
//           ...star,
//           y: star.y - star.speed,
//         })).filter((star) => star.y > 0)
//       );
//     }, 16);

//     return () => clearInterval(intervalId);
//   }, [stars]);

//   return (
//     <div>
//       <Navbar />
//       <div className="stars-container">
//         {stars.map((star, index) => (
//           <div
//             key={index}
//             className="star"
//             style={{
//               left: star.x,
//               top: star.y,
//               width: star.size,
//               height: star.size,
//               backgroundColor: 'white',
//               borderRadius: '50%',
//               position: 'absolute',
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ShootingStar;




// import React, { useState, useEffect } from 'react';
// import { FaBars } from 'react-icons/fa';
// import Img from '../Assets/logo.jpg'




// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   const handleToggleNav = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">
//         <img src={Img} alt='logo'/>
//       </div>
//       <div className="hamburger-menu" onClick={handleToggleNav}>
//         <FaBars />
//       </div>
//       <div className={`navbar-menu ${showMenu ? 'show-menu' : ''}`}>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Education</li>
//           <li>Skills</li>
//           <li>Projects</li>
//           <li>Contact</li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// const ShootingStar = () => {
//   const [stars, setStars] = useState([]);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const star = {
//         x: Math.random() * window.innerWidth,
//         y: Math.random() * window.innerHeight,
//         speed: Math.random() * 5 + 1,
//         size: Math.random() * 5 + 1,
//       };
//       setStars((prevStars) => [...prevStars, star]);
//     }, 500);

//     return () => clearInterval(intervalId);
//   }, []);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setStars((stars) =>
//         stars.map((star) => ({
//           ...star,
//           y: star.y - star.speed,
//         })).filter((star) => star.y > 0)
//       );
//     }, 16);

//     return () => clearInterval(intervalId);
//   }, [stars]);

//   return (
//     <div>
//       <Navbar />
//       <div className="stars-container">
//         {stars.map((star, index) => (
//           <div
//             key={index}
//             className="star"
//             style={{
//               left: star.x,
//               top: star.y,
//               width: star.size,
//               height: star.size,
//               backgroundColor: 'white',
//               borderRadius: '50%',
//               position: 'absolute',
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ShootingStar;


import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const ShootingStar = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const star = {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        speed: Math.random() * 5 + 1,
        size: Math.random() * 5 + 1,
      };
      setStars((prevStars) => [...prevStars, star]);
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStars((stars) =>
        stars.map((star) => ({
          ...star,
          y: star.y - star.speed,
        })).filter((star) => star.y > 0)
      );
    }, 16);

    return () => clearInterval(intervalId);
  }, [stars]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div className="stars-container">
        {stars.map((star, index) => (
          <div
            key={index}
            className="star"
            style={{
              left: star.x,
              top: star.y,
              width: star.size,
              height: star.size,
              backgroundColor: 'white',
              borderRadius: '50%',
              position: 'absolute',
            }}
          />
        ))}
      </div>
    </BrowserRouter>
  );
};

export default ShootingStar;