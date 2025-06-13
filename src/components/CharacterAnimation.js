import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import characterImage from "../assets/character.png"; // Update path as needed

const CharacterAnimation = () => {
  const [action, setAction] = useState("idle");

  useEffect(() => {
    let timer;
    const handleMouseMove = (e) => {
      const { clientY, movementX } = e;

      if (movementX > 30) {
        setAction("run");
      } else if (clientY > window.innerHeight - 100) {
        setAction("sit");
      } else {
        setAction("idle");
      }

      clearTimeout(timer);
      timer = setTimeout(() => {
        setAction("dance");
      }, 3000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleClick = () => {
    setAction("jump");
    setTimeout(() => setAction("idle"), 500);
  };

  const variants = {
    idle: { y: 0, rotate: 0 },
    wave: { rotate: [0, -10, 10, -10, 0], transition: { duration: 0.8 } },
    sit: { y: 30, transition: { duration: 0.3 } },
    jump: { y: -50, transition: { duration: 0.3 } },
    run: { x: [0, 50, -50, 50, -50], transition: { duration: 1, repeat: Infinity } },
    dance: { rotate: [0, 10, -10, 10, -10, 0], transition: { duration: 1, repeat: Infinity } },
  };

  return (
    <div className="character-container">
      <motion.img
        src={characterImage}
        alt="Cartoon Character"
        className="character"
        variants={variants}
        animate={action}
        onMouseEnter={() => setAction("wave")}
        onClick={handleClick}
      />
    </div>
  );
};

export default CharacterAnimation;
