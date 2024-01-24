import {
  DarkModeFutureIcons,
  LightModeFutureIcons,
} from "../../Data/DarkModeIconData.tsx";
import "./Technologies.css";

import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useEffect } from "react";

interface TechnologiesProps {
  darkMode: boolean;
}

function Technologies({ darkMode }: TechnologiesProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const FutureIcons = darkMode ? DarkModeFutureIcons : LightModeFutureIcons;

  const currentTechnologies = Object.keys(FutureIcons).map((key) => {
    const icon = FutureIcons[key];
    return (
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip>{icon.tooltip}</Tooltip>}
      >
        <div className="col border techIcons" key={key}>
          {icon.icon}
        </div>
      </OverlayTrigger>
    );
  });

  return (
    <div
      className="container text-center mb-5"
      style={{ color: darkMode ? "white" : "black" }}
    >
      <h1 className="mb-5">Technologies I am learning in 2024</h1>
      <div
        className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 text-white"
        style={{ fontSize: "5rem" }}
      >
        {currentTechnologies}
      </div>
    </div>
  );
}

export default Technologies;
