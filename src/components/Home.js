import React from "react";
import profilePic from "../assets/rahul.png";
import profilePicBack from "../assets/rahul-animated.png";
import GradientText from "./GradientText";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import "./Home.css";

const Home = ({ projectsRef }) => {
  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home">
      <div className="home-content">
        <div className="text">
          <h1>
            Hello, I'm{" "}
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={10}
              showBorder={false}
              className="gradient-name"
            >
              Rahul Somangoudar
            </GradientText>
          </h1>
          <p>Aspiring Fullstack Developer</p>
          <div className="social-icons">
            <a
              href="https://github.com/RahulSomangoudar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-somangoudar/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/rahul.somangoudar?igsh=MTNxem1mbXg1MmttNQ=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/917204235830" // replace with your actual number
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=rahulsomangoudar@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gmail"
            >
              <FaEnvelope />
            </a>
          </div>

          <div className="button-group">
            <button onClick={scrollToProjects} className="btn">
              View My Work
            </button>
            <a
              href="https://drive.google.com/file/d/14vgk_Qd5C3Ma3MBad1xrzKuGHUBO_PUa/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn resume-btn"
            >
              My Resume
            </a>
          </div>
        </div>
        <div className="flip-container">
          <div className="flipper">
            <div className="front">
              <img
                src={profilePic}
                alt="Rahul Somangoudar"
                className="profile-pic"
              />
            </div>
            <div className="back">
              <img
                src={profilePicBack}
                alt="Rahul Back"
                className="profile-pic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
