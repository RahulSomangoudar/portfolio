import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png"; // Replace with your actual filename

const Navbar = ({ refs }) => {
  const scrollTo = (ref, event) => {
    event?.preventDefault(); // Stop browser from adding `#home` to the URL
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>
      <ul className="nav-links">
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
