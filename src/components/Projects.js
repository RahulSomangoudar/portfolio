import React, { useEffect, useRef, useState, forwardRef } from "react";
import Globe from "react-globe.gl";
import "./Projects.css";
import ScrollFloat from "./ScrollFloat";

const Projects = forwardRef((props, ref) => {
  const globeRef = useRef();
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
      url: "https://tippy-fy.web.app/",
      isDeployed: true, // Deployed
    },
    {
      id: 3,
      name: "Dishara",
      coordinates: [6.6111, 20.9394],
      url: "https://your-project3-live-link.com",
      isDeployed: false, // Not Deployed
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
        <div className="globe-container">
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
          />
        </div>
      </div>
    </div>
  );
});

export default Projects;
