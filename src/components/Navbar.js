import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png"; // Replace with your actual filename

const Navbar = ({ refs }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const scrollTo = (ref, event) => {
    event?.preventDefault(); // Stop browser from adding `#home` to the URL
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      closeNavbar(); // Close the navbar after clicking a link
    }
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={(e) => scrollTo(refs.homeRef, e)}>
        <img src={logo} alt="Logo" className="logo-img" />
      </div>
      <label className="hamburger">
        <input type="checkbox" checked={isOpen} onChange={toggleNavbar} />
        <svg viewBox="0 0 32 32">
          <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
          <path className="line" d="M7 16 27 16"></path>
        </svg>
      </label>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li onClick={(e) => scrollTo(refs.homeRef, e)}>Home</li>
        <li onClick={(e) => scrollTo(refs.aboutRef, e)}>About</li>
        <li onClick={(e) => scrollTo(refs.projectsRef, e)}>Projects</li>
        <li onClick={(e) => scrollTo(refs.achievementsRef, e)}>Achievements</li>
        <li onClick={(e) => scrollTo(refs.contactRef, e)}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
