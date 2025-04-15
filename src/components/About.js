import React from "react";
import "./About.css";
import profileImage from "../assets/rahul3.jpg";
import ScrollFloat from "./ScrollFloat";
import Skills from "./Skills";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-image">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="about-content">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            About Me
          </ScrollFloat>
          <p>
            A Computer Science undergraduate with a solid foundation in
            full-stack development, artificial intelligence, and cloud
            computing. Skilled in Python, React.js, Node.js, Firebase, and REST
            APIs, with practical experience in AI technologies such as OpenAI
            GPT, Gemini AI, and OpenCV. Strong problem-solving skills, teamwork,
            and leadership abilities, with a focus on building scalable,
            real-time applications. Continuously learning and committed to
            developing efficient, innovative software solutions.
          </p>
        </div>
        <div>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
