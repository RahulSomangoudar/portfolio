import React from "react";
import "./Skills.css";
import ScrollFloat from "./ScrollFloat"; 

// Import all skill icons
import java from "../assets/skills/java.png";
import python from "../assets/skills/python.png";
import react from "../assets/skills/react.png";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import node from "../assets/skills/nodejs.png";
import express from "../assets/skills/express.png";
import restapi from "../assets/skills/restapi.png";
import firestore from "../assets/skills/firestore.png";
import mysql from "../assets/skills/mysql.png";
import mongodb from "../assets/skills/mongodb.png";
import github from "../assets/skills/github.png";
import postman from "../assets/skills/postman.png";
import openai from "../assets/skills/openai.png";
import gemini from "../assets/skills/geminiai.png";
import opencv from "../assets/skills/OpenCV.png";
import canva from "../assets/skills/canva.png";

const allSkills = [
//   { name: "Java", icon: java },
  { name: "Python", icon: python },
  { name: "React.js", icon: react },
  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },
  { name: "Node.js", icon: node },
  { name: "Express.js", icon: express },
  { name: "REST API", icon: restapi },
  { name: "Firestore", icon: firestore },
  { name: "MySQL", icon: mysql },
  { name: "MongoDB", icon: mongodb },
  { name: "GitHub", icon: github },
  { name: "Postman", icon: postman },
  { name: "OpenAI GPT", icon: openai },
  { name: "Gemini AI", icon: gemini },
  { name: "OpenCV", icon: opencv },
  { name: "Canva", icon: canva },
];

const Skills = () => {
  return (
    <div className="skills">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
      >
        My Skills
      </ScrollFloat>
      <div className="skill-grid">
        {allSkills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.icon} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
