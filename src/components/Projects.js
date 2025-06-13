import React, { useEffect, useRef, useState, forwardRef } from "react";
import Globe from "react-globe.gl";
import "./Projects.css";
import ScrollFloat from "./ScrollFloat";

const Projects = forwardRef((props, ref) => {
  const globeRef = useRef();
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "KidBank",
      coordinates: [28.6139, 77.209],
      url: "https://kidbank-28e97.web.app/",
      isDeployed: true, // Deployed
    },
    {
      id: 2,
      name: "Tippyfy",
      coordinates: [14.2350, 51.9253],
      name: "BRRRGRRR",
      coordinates: [-11.235, -53.9253],
      url: "https://github.com/RahulSomangoudar/brrrgrrr",
      isDeployed: false, // Not Deployed
    },
    {
      id: 3,
      name: "Tippyfy",
      coordinates: [8.7832, 20.5085],
      url: "https://tippy-fy.web.app/",
      isDeployed: true, // Deployed
    },
    {
      id: 4,
      name: "TicTacToeTitans",
      coordinates: [25.9078, 140.7669],
      url: "https://github.com/RahulSomangoudar/TicTacToeTitans",
      isDeployed: false, // Deployed
    },
    {
      id: 5,
      name: "Amazon Clone",
      coordinates: [38.7946, -106.5348],
      url: "https://amazon-roan-nu.vercel.app/",
      isDeployed: true, // Deployed
    },
    {
      id: 6,
      name: "GrowWidMe",
      coordinates: [3.7946, -16.5348],
      url: "https://grow-wid-me.web.app/",
      isDeployed: true, // Deployed
    },
    {
      id: 7,
      name: "ByteBill",
      coordinates: [-8.7946, 106.5348],
      url: "https://github.com/RahulSomangoudar/ByteBill",
      isDeployed: false,
      },
  ]);

  useEffect(() => {
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 1;
      controls.enableZoom = false;
      controls.enablePan = false;
    }
  }, []);

  const getGlobeSize = () => {
    if (windowSize.width <= 480) return 500;
    if (windowSize.width <= 768) return 650;
    if (windowSize.width <= 1024) return 800;
    return 800;
  };

  return (
    <div ref={ref} className="projects-container">
      <ScrollFloat containerClassName="achievements-heading">
        My Projects
      </ScrollFloat>{" "}
      <div className="status-container">
        <div className="status-item" style={{ color: "yellow" }}>
          <span className="dot" style={{ backgroundColor: "yellow" }}></span>
          Deployed
        </div>
        <div className="status-item" style={{ color: "#C5BAFF" }}>
          <span className="dot" style={{ backgroundColor: "#C5BAFF" }}></span>
          Not Deployed
        </div>
      </div>
      <div className="projects-wrapper">
        <div className="globe-container" style={{ width: getGlobeSize(), height: getGlobeSize() }}>
          <Globe
            ref={globeRef}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            backgroundColor="rgba(0, 0, 0, 0)"
            labelsData={projects}
            labelLat={(d) => d.coordinates[0]}
            labelLng={(d) => d.coordinates[1]}
            labelText={(d) => d.name}
            labelSize={3}
            labelColor={(d) => (d.isDeployed ? "yellow" : "#C5BAFF")}
            labelDotRadius={1.3}
            onLabelClick={(d) => window.open(d.url, "_blank")}
            width={getGlobeSize()}
            height={getGlobeSize()}
          />
        </div>
      </div>
    </div>
  );
});

export default Projects;
