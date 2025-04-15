import React, { useState } from "react";
import "./Achievements.css";
import ScrollFloat from "./ScrollFloat";
import CupboardSVG from "../assets/cupboard.svg"; // SVG for cupboard
import Trophy1 from "../assets/trophy1.png";
import Trophy2 from "../assets/trophy2.png";

const Achievements = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTrophy, setSelectedTrophy] = useState(null);

  const trophies = [
    {
      id: 1,
      title: "1st Prize - Quiz Quest",
      event: "Samveekshana 2025, SGBIT",
      img: Trophy1,
      certificate: "quizquest.jpg",
      shelf: 1,
    },
    {
      id: 2,
      title: "1st Prize - Rang-de-Basanti",
      event: "Painting Competition, SGBIT",
      img: Trophy1,
      certificate: "rangdebasanti.jpg",
      shelf: 1,
    },
    {
      id: 3,
      title: "Runner Up - CodeBattle-2k25",
      event: "24 hrs National Level Hackathon, KLS VDIT, Haliyal",
      img: Trophy2,
      certificate: "vdit.jpg",
      shelf: 2,
    },
    {
      id: 4,
      title: "2nd Prize - Blind Quest",
      event: "Samveekshana 2025, SGBIT",
      img: Trophy2,
      certificate: "blindquest.jpg",
      shelf: 2,
    },
    {
      id: 5,
      title: "2nd Prize - Reel Making",
      event: "Nasha Mukta Bharat Day, 2025",
      img: Trophy2,
      certificate: "/certificates/certificate5.png",
      shelf: 2,
    },
  ];

  return (
    <div className="achievements-container">
      <ScrollFloat containerClassName="achievements-heading">
        My Achievements
      </ScrollFloat>

      {/* Cupboard with Glass Doors */}
      <div className="cupboard-container">
        <img src={CupboardSVG} alt="Cupboard" className="cupboard" />

        {/* Glass Doors */}
        <div
          className={`door left-door ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        ></div>
        <div
          className={`door right-door ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        ></div>

        {/* Trophies on Shelves */}
        <div className="shelves">
          <div className="shelf top-shelf">
            {trophies
              .filter((t) => t.shelf === 1)
              .map((trophy) => (
                <img
                  key={trophy.id}
                  src={trophy.img}
                  alt={trophy.title}
                  className="trophy"
                  onClick={() => setSelectedTrophy(trophy)}
                />
              ))}
          </div>
          <div className="shelf bottom-shelf">
            {trophies
              .filter((t) => t.shelf === 2)
              .map((trophy) => (
                <img
                  key={trophy.id}
                  src={trophy.img}
                  alt={trophy.title}
                  className="trophy"
                  onClick={() => setSelectedTrophy(trophy)}
                />
              ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedTrophy && (
        <div className="modal">
          <div className="modal-content">
            <img
              src={selectedTrophy.certificate}
              alt={`Certificate for ${selectedTrophy.title}`}
              className="modal-img"
            />
            <h3>{selectedTrophy.title}</h3>
            <p>{selectedTrophy.event}</p>
            <button onClick={() => setSelectedTrophy(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Achievements;
